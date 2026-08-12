import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus, FiTruck, FiLock, FiShield, FiHeadphones } from "react-icons/fi";
import { assets } from "../assets/assets";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, getCartCount, getCartAmount, setCartItems } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const subtotal = getCartAmount();
  const deliveryFee = subtotal > 2000 ? 0 : 60; // Standardize to 60 as per typical ph delivery or use context if provided, but context had 10. The image says P60.00. I'll use 60.
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="pb-24 pt-6 font-sans text-gray-800 fade-in px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
      
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-red-600 font-medium">Your Cart</span>
      </div>

      {/* HEADER ROW */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Your Cart ({getCartCount()})
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">Review your items and proceed to checkout.</p>
        </div>
        
        {cartData.length > 0 && (
          <button 
            onClick={() => setCartItems({})}
            className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 hover:text-red-600 transition-colors font-medium w-fit"
          >
            <FiTrash2 /> Clear Cart
          </button>
        )}
      </div>

      {cartData.length === 0 ? (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border border-gray-100">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FiTrash2 className="text-3xl text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Explore our top categories to find something you'll love.</p>
          <Link to="/collection" className="inline-block bg-red-600 text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-colors shadow-sm">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: CART ITEMS */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6">
            
            {/* ITEMS CONTAINER */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
              {cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);
                if (!productData) return null;

                return (
                  <div key={index} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative">
                    
                    {/* Delete Icon (Mobile top right, Desktop far right) */}
                    <button 
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="absolute top-5 right-5 sm:static sm:order-last p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors ml-auto"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>

                    <img className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-gray-50 bg-gray-50" src={productData.image[0]} alt={productData.name} />
                    
                    <div className="flex-1 min-w-0 pr-8 sm:pr-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate mb-1">{productData.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.size}</p>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-red-600 text-base">{currency}{(productData.price).toFixed(2)}</span>
                      </div>
                      <p className="text-xs font-medium text-green-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        In stock
                      </p>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-6 sm:gap-10">
                      {/* Quantity Control */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <button 
                          onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          <FiMinus />
                        </button>
                        <input 
                          type="number" 
                          className="w-12 text-center text-sm font-medium border-x border-gray-200 py-2 outline-none appearance-none bg-transparent"
                          value={item.quantity}
                          min={1}
                          onChange={(e) => updateQuantity(item._id, item.size, Number(e.target.value) || 1)}
                        />
                        <button 
                          onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          <FiPlus />
                        </button>
                      </div>

                      {/* Total Price */}
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold text-gray-900 text-lg">
                          {currency}{(productData.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>

            {/* PROMO CODE */}
            <div className="bg-[#fff9f9] border border-red-50 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Have a promo code?</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Enter your code at checkout</p>
                </div>
              </div>
              <button className="w-full sm:w-auto bg-white border border-red-200 text-red-600 font-bold px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors text-sm">
                Apply Code
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <p>Subtotal ({getCartCount()} items)</p>
                  <p className="font-bold text-gray-900">{currency}{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-gray-600 items-center">
                  <p className="flex items-center gap-1">Delivery Fee <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></p>
                  <p className="font-bold text-gray-900">{deliveryFee === 0 ? "Free" : `${currency}${deliveryFee.toFixed(2)}`}</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-gray-900 text-lg">Total</p>
                  <p className="font-bold text-red-600 text-2xl">{currency}{total.toFixed(2)}</p>
                </div>
              </div>

              <div className="bg-[#f8fcf9] border border-green-50 rounded-xl p-4 flex items-center gap-3 mb-6">
                <FiTruck className="text-green-600 text-xl flex-shrink-0" />
                <p className="text-xs text-green-800 font-medium leading-relaxed">
                  {subtotal > 2000 ? "You have qualified for Free Delivery!" : "Free delivery for orders over ₱2,000"}
                </p>
              </div>

              <button 
                onClick={() => navigate("/place-order")}
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors shadow-sm mb-3 flex items-center justify-center gap-2"
              >
                <FiLock /> Proceed to Checkout
              </button>
              
              <button 
                onClick={() => navigate("/collection")}
                className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-sm"
              >
                Continue Shopping
              </button>
            </div>

            {/* WE ACCEPT */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-4">We Accept</h3>
              <div className="flex flex-wrap gap-2 items-center">
                <img src={assets.visa} alt="Visa" className="h-8 object-contain rounded border border-gray-100 bg-white" />
                <img src={assets.mastercard} alt="Mastercard" className="h-8 object-contain rounded border border-gray-100 bg-white" />
                <div className="px-3 py-1 border border-gray-200 rounded text-xs font-bold text-blue-500 bg-white h-8 flex items-center justify-center">GCash</div>
                <div className="px-3 py-1 border border-gray-200 rounded text-xs font-bold text-green-500 bg-white h-8 flex items-center justify-center">Maya</div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TRUST SECTION */}
      <div className="mt-20 pt-10 border-t border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          
          <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:px-6">
            <FiShield className="text-red-600 text-3xl flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">100% Authentic</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Genuine Korean products you can trust.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-6 sm:pt-0 lg:px-6">
            <FiTruck className="text-gray-700 text-3xl flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Fast Delivery</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Quick and reliable delivery across the Philippines.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-6 sm:pt-0 lg:px-6">
            <FiLock className="text-gray-700 text-3xl flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Secure Payments</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Your payments are safe and protected.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 pt-6 sm:pt-0 lg:px-6">
            <FiHeadphones className="text-gray-700 text-3xl flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Customer Support</h4>
              <p className="text-xs text-gray-500 leading-relaxed">We're here to help you anytime.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Cart;
