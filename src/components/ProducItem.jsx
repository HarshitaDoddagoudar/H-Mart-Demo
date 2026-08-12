import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProducItem = ({ id, image, name, price }) => {
  const { currency, products, addToCart } = useContext(ShopContext);
  const product = products.find(p => p._id === id);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product) {
      addToCart(id, product.sizes?.[0] || 'Default');
    }
  };

  return (
    <Link
      className="text-gray-700 cursor-pointer group flex flex-col bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 relative overflow-hidden"
      to={`/product/${id}`}
      onClick={handleClick}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product?.bestseller && (
          <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-red-100">Best Seller</span>
        )}
        {product?.category === "Fresh Produce" && (
          <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-green-100">Fresh</span>
        )}
      </div>

      <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm border border-gray-100 hover:text-red-600 hover:border-red-600 transition-colors" onClick={(e) => { e.preventDefault(); }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      <div className="overflow-hidden bg-white aspect-square flex items-center justify-center p-6 border-b border-gray-50">
        <img
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
          src={image[0]}
          alt={name}
        />
      </div>

      <div className="p-4 flex flex-col flex-1 bg-white">
        {product && (
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
        )}
        <p className="text-sm text-gray-900 font-medium line-clamp-2 leading-snug h-10 mb-1 group-hover:text-red-600 transition-colors">{name}</p>
        
        <div className="flex items-center gap-1 mb-3">
           <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
           <span className="text-[11px] font-bold text-gray-700">4.8</span>
           <span className="text-[11px] text-gray-400">(120)</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2">
           <p className="text-base font-bold text-red-600">
             {currency}{price.toFixed(2)}
           </p>
           <button 
             onClick={handleAddToCart}
             className="bg-white border border-gray-200 text-gray-900 hover:bg-red-600 hover:text-white hover:border-red-600 p-2 rounded-lg transition-all shadow-sm flex items-center justify-center group/btn"
             aria-label="Add to cart"
           >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
           </button>
        </div>
      </div>
    </Link>
  );
};

ProducItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProducItem;
