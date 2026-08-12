import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { FiTruck, FiCheckCircle } from "react-icons/fi";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    cartItems,
    setCartItems,
    getCartAmount,
    getCartCount,
    currency,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (method === "cod") {
        setCartItems({});
        navigate("/");
        toast.success("Order placed successfully (Demo Mode)!");
      } else {
        toast.warn("Invalid payment method.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const subtotal = getCartAmount();
  const deliveryFee = subtotal > 2000 ? 0 : 60;
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="pb-24 pt-6 font-sans text-gray-800 fade-in px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
        <span>›</span>
        <Link to="/cart" className="hover:text-red-600 transition-colors">Your Cart</Link>
        <span>›</span>
        <span className="text-red-600 font-medium">Checkout</span>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          Checkout
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">Provide your details to complete the order.</p>
      </div>

      <form onSubmit={onSubmitHandler} className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        
        {/* LEFT COLUMN: DELIVERY INFO */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">1</span>
              Delivery Information
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  onChange={onChangeHandler}
                  name="firstName"
                  value={formData.firstName}
                  className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                  type="text"
                  placeholder="First name"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  name="lastName"
                  value={formData.lastName}
                  className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                  type="text"
                  placeholder="Last name"
                />
              </div>

              <input
                required
                onChange={onChangeHandler}
                name="email"
                value={formData.email}
                className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                type="email"
                placeholder="Email Address"
              />
              <input
                required
                onChange={onChangeHandler}
                name="street"
                value={formData.street}
                className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                type="text"
                placeholder="Street Address"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  onChange={onChangeHandler}
                  name="city"
                  value={formData.city}
                  className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                  type="text"
                  placeholder="City"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  name="state"
                  value={formData.state}
                  className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                  type="text"
                  placeholder="State/Province"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  onChange={onChangeHandler}
                  name="zipcode"
                  value={formData.zipcode}
                  className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                  type="number"
                  placeholder="Zip / Postal Code"
                />
                <input
                  required
                  onChange={onChangeHandler}
                  name="country"
                  value={formData.country}
                  className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                  type="text"
                  placeholder="Country"
                />
              </div>

              <input
                required
                onChange={onChangeHandler}
                name="phone"
                value={formData.phone}
                className="rounded-xl w-full px-4 py-3 border border-gray-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-shadow bg-gray-50 focus:bg-white text-sm"
                type="number"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY & PAYMENT */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">
          
          {/* PAYMENT METHOD */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">2</span>
              Payment Method
            </h2>
            
            <div 
              onClick={() => setMethod("cod")}
              className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${method === "cod" ? "border-red-500 bg-red-50" : "border-gray-200 bg-gray-50 hover:bg-gray-100"}`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 ${method === "cod" ? "border-red-600" : "border-gray-400"}`}>
                {method === "cod" && <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-sm">Cash on Delivery (COD)</span>
                <span className="text-xs text-gray-500">Pay when you receive your order.</span>
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6">
              <div className="flex justify-between text-gray-600">
                <p>Subtotal ({getCartCount()} items)</p>
                <p className="font-bold text-gray-900">{currency}{subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-600 items-center">
                <p className="flex items-center gap-1">Delivery Fee</p>
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
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <FiCheckCircle className="text-lg" /> Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
