import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "./../assets/assets";
import RelatedProducts from "./../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchProductData = async () => {
      products.map((item) => {
        if (item._id == productId) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
    };
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="pt-6 transition-opacity ease-in duration-500 opacity-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      {/* ---------- BREADCRUMB ---------- */}
      <div className="flex items-center text-sm text-gray-500 mb-8 gap-2">
        <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
        <span>&gt;</span>
        <span className="hover:text-red-600 cursor-pointer transition-colors">{productData.category || "Beverages"}</span>
        <span>&gt;</span>
        <span className="hover:text-red-600 cursor-pointer transition-colors">{productData.subCategory || "Coffee & Tea"}</span>
        <span>&gt;</span>
        <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">{productData.name}</span>
      </div>

      <div className="flex gap-10 lg:gap-14 flex-col lg:flex-row">
        {/*---------- LEFT SIDE: PRODUCT GALLERY ----------*/}
        <div className="flex-1 flex flex-col-reverse gap-4 sm:flex-row max-h-[600px]">
          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-start sm:w-[80px] w-full gap-3 custom-scrollbar pr-1">
            {productData.image.map((item, index) => (
              <div 
                key={index}
                onClick={() => setImage(item)}
                className={`border-2 rounded-lg p-1 cursor-pointer flex-shrink-0 transition-all ${image === item ? 'border-red-600' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <img
                  src={item}
                  className="w-16 h-16 sm:w-full sm:h-auto object-contain rounded-md"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 bg-white flex items-center justify-center p-8 relative group">
            <img src={image} className="w-full h-full max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-105" alt="product_img" />
          </div>
        </div>

        {/*---------- RIGHT SIDE: PRODUCT INFO ----------*/}
        <div className="flex-1 flex flex-col">
          {/* Badge */}
          {productData.bestseller && (
            <div className="mb-3">
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-md">Best Seller</span>
            </div>
          )}

          <h1 className="font-bold text-2xl sm:text-3xl text-gray-900 leading-tight">
            {productData.name}
          </h1>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <p>Brand: <span className="font-semibold text-red-600 cursor-pointer">Maxim</span></p>
            <p>SKU: 8801037070017</p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-1">
              <img src={assets.star_icon} alt="star" className="w-4 h-4" />
              <img src={assets.star_icon} alt="star" className="w-4 h-4" />
              <img src={assets.star_icon} alt="star" className="w-4 h-4" />
              <img src={assets.star_icon} alt="star" className="w-4 h-4" />
              <img src={assets.star_dull_icon} alt="star" className="w-4 h-4" />
            </div>
            <p className="text-sm font-bold ml-1">4.8</p>
            <p className="text-sm text-gray-500 underline cursor-pointer hover:text-gray-900">(120 reviews)</p>
            <span className="text-gray-300">|</span>
            <p className="text-sm text-gray-500">2K+ sold</p>
          </div>

          <p className="mt-6 text-4xl font-bold text-red-600">
            {currency}{productData.price.toFixed(2)}
          </p>

          <div className="mt-8 flex items-center gap-4">
             <p className="text-gray-700 font-medium">Quantity:</p>
             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                <button onClick={decrementQuantity} className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-300">−</button>
                <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                <button onClick={incrementQuantity} className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors border-l border-gray-300">+</button>
             </div>
          </div>

          <div className="flex gap-4 mt-8 flex-col sm:flex-row">
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                   addToCart(productData._id, productData.sizes?.[0] || 'Default');
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-md font-bold text-base flex-1 flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
            <button
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-3.5 rounded-md font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add to Wishlist
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-4">
             {/* Delivery Info */}
             <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex gap-4">
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 text-sm">Delivery Information</h3>
                   <p className="text-sm text-gray-600 mt-1">Get it by Friday, Aug 16 - Friday, Aug 18</p>
                   <p className="text-sm text-gray-500 mt-0.5">Free shipping on orders over ₱2,500</p>
                </div>
             </div>

             {/* Store Pickup */}
             <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex gap-4">
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 text-sm">Available for Store Pickup</h3>
                   <p className="text-sm text-gray-600 mt-1">Check availability at your nearest H-Mart store</p>
                   <p className="text-sm text-red-600 font-medium cursor-pointer hover:underline mt-1">Check Stores</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/*---------- TABBED INFO & WHY SHOP ----------*/}
      <div className="mt-24 flex flex-col lg:flex-row gap-12">
         {/* Tabs Section */}
         <div className="flex-1 lg:w-3/4">
            <div className="flex border-b border-gray-200 gap-8">
               {['Description', 'Nutrition Facts', 'Reviews (120)', 'Q&A'].map(tab => (
                  <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`pb-4 text-base font-bold transition-colors ${activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-800'}`}
                  >
                     {tab}
                  </button>
               ))}
            </div>

            <div className="mt-8 text-sm text-gray-600 leading-relaxed">
               {activeTab === 'Description' && (
                  <div className="flex flex-col md:flex-row gap-12">
                     <div className="flex-1 space-y-6">
                        <p className="text-base text-gray-700">
                           Enjoy the rich and smooth taste of {productData.name}. A perfect blend of coffee, sugar, and creamer that gives you a mild and creamy coffee experience anytime, anywhere.
                        </p>
                        <ul className="space-y-3 mt-4">
                           <li className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Smooth & mild flavor</span>
                           </li>
                           <li className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Easy to enjoy – just mix with hot water</span>
                           </li>
                           <li className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>Perfect for home, office, or travel</span>
                           </li>
                           <li className="flex items-center gap-3">
                              <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span>100 sticks per box</span>
                           </li>
                        </ul>
                     </div>

                  </div>
               )}
               {activeTab === 'Nutrition Facts' && <p>Nutrition information will be available soon.</p>}
               {activeTab === 'Reviews (120)' && <p>Customer reviews will be displayed here.</p>}
               {activeTab === 'Q&A' && <p>Frequently asked questions about this product.</p>}
            </div>
         </div>

         {/* Why Shop at H-Mart */}
         <div className="lg:w-1/4">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
               <h3 className="font-bold text-gray-900 text-lg mb-6">Why Shop at H-Mart?</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-gray-900">100% Authentic Products</h4>
                        <p className="text-xs text-gray-500 mt-1">Direct from trusted brands</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-gray-900">Wide Selection</h4>
                        <p className="text-xs text-gray-500 mt-1">All your favorite Korean & Asian products in one place</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-gray-900">Fast & Reliable Delivery</h4>
                        <p className="text-xs text-gray-500 mt-1">Quick delivery across the Philippines</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                     </div>
                     <div>
                        <h4 className="font-bold text-sm text-gray-900">Rewards & Savings</h4>
                        <p className="text-xs text-gray-500 mt-1">Earn points and enjoy exclusive deals</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* ---------- Display related products ---------- */}
      <div className="mt-24">
         <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-gray-900">You May Also Like</h2>
            <Link to="/collection" className="text-sm font-bold text-red-600 hover:underline">View All</Link>
         </div>
         <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
         />
      </div>
    </div>
  );
};

export default Product;
