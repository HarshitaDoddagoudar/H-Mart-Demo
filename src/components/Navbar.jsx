import { assets } from "./../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    // toast.success("Logout successful");
    setCartItems({});
  };

  const handleCategoryNav = (category) => {
    setVisible(false);
    navigate('/collection', { state: { category } });
  };

  return (
    <>
      <div className="flex items-center justify-between py-6 font-medium border-b border-gray-50 mb-6 relative">
        
        {/* LEFT: Hamburger Menu (Always visible now) */}
        <div className="flex-1 flex items-center">
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="menu_icon"
            className="w-5 lg:w-6 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* CENTER: Logo */}
        <div className="flex-1 flex justify-center">
          <Link to={"/"} className="translate-y-2 lg:translate-y-3">
            <img src={assets.logo} className="w-80 lg:w-[400px] max-w-full" alt="logoImage" />
          </Link>
        </div>

        {/* RIGHT: Utility Icons */}
        <div className="flex-1 flex justify-end items-center gap-5 sm:gap-6">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            alt="searchIcon"
          />

          {/* cart icon */}
          <Link to="/cart" className="relative group">
            <img src={assets.cart_icon} className="w-6 sm:w-7 min-w-[24px] opacity-70 group-hover:opacity-100 transition-opacity" alt="cartIco" />
            <p className="absolute right-[-6px] bottom-[-4px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[9px] font-bold shadow-sm">
              {getCartCount()}
            </p>
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {visible && (
        <div 
          onClick={() => setVisible(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity"
        ></div>
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 left-0 bottom-0 bg-white z-50 transition-transform duration-300 transform shadow-2xl overflow-y-auto flex flex-col w-[85vw] max-w-[320px] ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col flex-grow">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8">
            <img src={assets.logo} className="w-56" alt="logoImage" />
            <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* MENU SECTION */}
          <div className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Menu</div>
          
          <div className="flex flex-col gap-1 mb-8">
            <NavLink onClick={() => setVisible(false)} to="/" className={({isActive}) => `py-2.5 px-4 rounded-xl font-bold transition-colors ${isActive ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'}`}>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} to="/collection" className={({isActive}) => `py-2.5 px-4 rounded-xl font-bold transition-colors ${isActive ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'}`}>Collection</NavLink>
            
            <button onClick={() => handleCategoryNav('K-Food')} className="text-left py-2.5 px-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">K-Food</button>
            <button onClick={() => handleCategoryNav('Fresh Produce')} className="text-left py-2.5 px-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">Fresh Produce</button>
            
            <NavLink onClick={() => setVisible(false)} to="/about" className={({isActive}) => `py-2.5 px-4 rounded-xl font-bold transition-colors ${isActive ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'}`}>About</NavLink>
            <NavLink onClick={() => setVisible(false)} to="/contact" className={({isActive}) => `py-2.5 px-4 rounded-xl font-bold transition-colors ${isActive ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'}`}>Contact</NavLink>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* ADMINISTRATION SECTION */}
          <div className="mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Administration</div>
          
          <div className="flex flex-col gap-1">
            <a onClick={() => setVisible(false)} href="http://localhost:5174" target="_blank" rel="noreferrer" className="text-left py-2.5 px-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">Admin Panel</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
