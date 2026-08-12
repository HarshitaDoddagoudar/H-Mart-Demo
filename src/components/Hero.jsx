import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import basket from '../assets/basket.png';

const Hero = () => {
  const { search, setSearch, setShowSearch, navigate } = useContext(ShopContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setShowSearch(true);
      navigate('/collection');
    }
  };

  return (
    <div className="bg-[#fcfaf7] rounded-[2rem] overflow-hidden flex flex-col-reverse lg:flex-row border border-gray-100 shadow-sm mb-12">
      
      {/* Hero left side: Content */}
      <div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
        
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 uppercase tracking-widest font-bold">
          <span className="w-8 h-[2px] bg-red-600 rounded-full"></span>
          <span className="text-red-600">KOREAN GROCERIES & MORE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
          Bringing Korea <br />
          <span className="text-red-600">Closer to You</span>
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mb-10 max-w-md leading-relaxed font-medium">
          Your one-stop shop for authentic Korean groceries, fresh produce, K-beauty and daily essentials.
        </p>

        {/* Integrated Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex w-full max-w-lg shadow-sm rounded-xl overflow-hidden border border-gray-200 bg-white h-14 lg:h-16 transition-shadow focus-within:ring-2 focus-within:ring-red-100 focus-within:border-red-400">
          <input 
            type="text" 
            placeholder="Search for products, brands and more..." 
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!showSearch) setShowSearch(true);
            }}
            className="flex-1 px-5 h-full text-sm outline-none text-gray-700 bg-transparent placeholder-gray-400"
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 transition-colors w-16 lg:w-20 h-full flex-shrink-0 flex items-center justify-center group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>

      </div>

      {/* Hero right side: Image */}
      <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-auto relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fcfaf7] to-transparent z-10 hidden lg:block"></div>
        <img src={basket} alt="Korean Groceries" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default Hero;
