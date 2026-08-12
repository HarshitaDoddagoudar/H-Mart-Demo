import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "./../context/ShopContext";
import { assets } from "../assets/assets";
import ProducItem from "./../components/ProducItem";

import store3 from '../assets/store3.jpg';
import cosrx from '../assets/cosrx.jpeg';
import jin_mild from '../assets/jin-mild.jpg';
import pear from '../assets/pear.jpeg';

const Collection = () => {
  const { products, search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");
  const [showFilter, setShowFilter] = useState(false);

  const categories = [
    "K-Food",
    "Fresh Produce",
    "K-Beauty",
    "Korean Food Stall",
    "Korean Snacks",
  ];

  const subCategoryMap = {
    "K-Food": ["Noodles", "Instant Meals", "Beverages", "Instant Rice"],
    "Fresh Produce": ["Fruits", "Vegetables"],
    "K-Beauty": ["Skincare", "Cleanser"],
    "Korean Food Stall": ["Street Food", "Meals"],
    "Korean Snacks": ["Biscuits", "Snacks"],
  };

  const toggleCategory = (cat) => {
    if (category.includes(cat)) {
      setCategory((prev) => prev.filter((item) => item !== cat));
    } else {
      setCategory((prev) => [...prev, cat]);
    }
  };

  const toggleSubCategory = (subCat) => {
    if (subCategory.includes(subCat)) {
      setSubCategory((prev) => prev.filter((item) => item !== subCat));
    } else {
      setSubCategory((prev) => [...prev, subCat]);
    }
  };

  const handleAllClick = () => {
    setCategory([]);
    setSubCategory([]);
  };

  const handlePromoCategory = (categoryName) => {
    setCategory([categoryName]);
    setSubCategory([]);
    document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // If no category is selected, show all available subcategories.
  const visibleSubCategories = category.length === 0 
    ? Object.values(subCategoryMap).flat()
    : category.reduce((acc, cat) => {
        if (subCategoryMap[cat]) {
          return [...acc, ...subCategoryMap[cat]];
        }
        return acc;
      }, []);

  // Handle incoming category from routing (e.g. from Home page)
  useEffect(() => {
    if (location.state && location.state.category) {
      setCategory([location.state.category]);
      setSubCategory([]);
      // Clear state so it doesn't get stuck on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state]);

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType, filterProducts]);

  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-12 pt-6 font-sans">
      
      {/* ONE CONSISTENT CENTERED PAGE CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full flex flex-col gap-6 lg:gap-8">
        
        {/* HERO SECTION */}
        <div className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 shadow-sm">
          <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 uppercase tracking-wider font-semibold">
              <span>Home</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="text-gray-800">Collection</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our <span className="text-red-600">Collections</span>
            </h1>
            
            <p className="text-gray-500 text-sm lg:text-base mb-8 max-w-md leading-relaxed">
              Explore Korean groceries, fresh produce, K-beauty and Korean favorites — all in one place.
            </p>
            
            <div className="flex w-full lg:max-w-lg shadow-sm rounded-lg overflow-hidden border border-gray-200 bg-white h-12 lg:h-14">
              <input 
                type="text" 
                placeholder="Search for products, brands and more..." 
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (!showSearch) setShowSearch(true);
                }}
                className="flex-1 px-4 lg:px-5 h-full text-sm outline-none text-gray-700 bg-gray-50"
              />
              <button className="bg-red-600 hover:bg-red-700 transition-colors w-12 lg:w-16 h-full flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-56 sm:h-64 lg:h-auto relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden lg:block"></div>
            <img src={store3} alt="Korean Groceries" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* HORIZONTAL CATEGORY NAVIGATION */}
        <div className="flex flex-col gap-3 lg:mt-2">
          {/* Main Categories Row */}
          <div className="flex flex-wrap items-center gap-2 lg:gap-3">
            <button 
              onClick={handleAllClick}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-colors border ${
                category.length === 0 ? 'bg-red-600 text-white border-red-600 shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-red-600'
              }`}
            >
              All Collections
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-colors border ${
                  category.includes(cat) ? 'bg-red-600 text-white border-red-600 shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-red-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subcategories Row */}
          {visibleSubCategories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 bg-white p-3 lg:p-4 rounded-xl border border-gray-100 shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 ml-2 flex-shrink-0">Filters:</span>
              {visibleSubCategories.map((subCat) => (
                <label key={subCat} className={`flex-shrink-0 flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg border text-sm transition-colors ${
                  subCategory.includes(subCat) ? 'bg-red-50 border-red-200 text-red-700 font-bold' : 'bg-transparent border-transparent text-gray-600 hover:bg-gray-50'
                }`}>
                  <div className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-colors ${
                    subCategory.includes(subCat) ? 'bg-red-600 border-red-600' : 'border-gray-300 bg-white'
                  }`}>
                    {subCategory.includes(subCat) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    )}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={subCategory.includes(subCat)}
                    onChange={() => toggleSubCategory(subCat)} 
                  />
                  {subCat}
                </label>
              ))}
              {subCategory.length > 0 && (
                <button onClick={() => setSubCategory([])} className="ml-4 text-xs text-red-600 font-bold hover:underline flex-shrink-0">Clear All Filters</button>
              )}
            </div>
          )}
        </div>

        {/* SERVICE STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Fresh Selection</p>
              <p className="text-[10px] text-gray-500">Carefully picked</p>
            </div>
          </div>
          <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">100% Authentic</p>
              <p className="text-[10px] text-gray-500">Korean Products</p>
            </div>
          </div>
          <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Secure Payment</p>
              <p className="text-[10px] text-gray-500">100% Protected</p>
            </div>
          </div>
          <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"></path></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Easy Returns</p>
              <p className="text-[10px] text-gray-500">Hassle Free</p>
            </div>
          </div>
        </div>

        {/* PRODUCT SECTION */}
        <div id="product-grid" className="scroll-mt-24 mb-10 mt-6">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-bold text-gray-900">{filterProducts.length}</span> products
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 hidden sm:block">Sort by:</span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border border-gray-200 rounded-lg text-sm px-3 py-2 bg-white text-gray-700 focus:outline-none focus:border-gray-400 cursor-pointer shadow-sm"
              >
                <option value="relevent">Popularity</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 lg:gap-6">
            {filterProducts.map((item, index) => (
              <ProducItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          
          {filterProducts.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm mt-4 w-full">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <button onClick={handleAllClick} className="mt-4 text-red-600 font-medium hover:underline">Clear all filters</button>
            </div>
          )}
        </div>

        {/* PROMOTIONAL BANNERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* K-Beauty Promo */}
          <div className="bg-[#fef4f4] rounded-2xl p-6 flex items-center justify-between min-h-[220px] shadow-sm border border-red-50">
            <div className="w-[55%] pr-2">
              <h3 className="text-lg font-bold text-red-700 mb-2">K-BEAUTY</h3>
              <p className="text-gray-700 text-xs mb-4 leading-relaxed">Discover Korean skincare favorites.</p>
              <button 
                onClick={() => handlePromoCategory('K-Beauty')}
                className="bg-white border border-red-200 text-red-600 text-[10px] lg:text-[11px] whitespace-nowrap font-bold px-3 lg:px-4 py-2 rounded-full hover:bg-red-50 transition-colors inline-flex items-center gap-1 shadow-sm"
              >
                Explore K-Beauty <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center">
               <img src={cosrx} alt="K-Beauty" className="w-28 h-28 object-cover rounded-xl shadow-md rotate-2 bg-white" />
            </div>
          </div>

          {/* Korean Food Promo */}
          <div className="bg-[#fff9f0] rounded-2xl p-6 flex items-center justify-between min-h-[220px] shadow-sm border border-orange-50">
            <div className="w-[55%] pr-2">
              <h3 className="text-lg font-bold text-orange-700 mb-2">KOREAN FOOD FAVORITES</h3>
              <p className="text-gray-700 text-xs mb-4 leading-relaxed">Bring authentic Korean flavors home.</p>
              <button 
                onClick={() => handlePromoCategory('K-Food')}
                className="bg-white border border-orange-200 text-orange-600 text-[10px] lg:text-[11px] whitespace-nowrap font-bold px-3 lg:px-4 py-2 rounded-full hover:bg-orange-50 transition-colors inline-flex items-center gap-1 shadow-sm"
              >
                Shop K-Food <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center">
               <img src={jin_mild} alt="K-Food" className="w-28 h-28 object-cover rounded-xl shadow-md -rotate-2 bg-white" />
            </div>
          </div>

          {/* Fresh Produce Promo */}
          <div className="bg-[#f2f9f1] rounded-2xl p-6 flex items-center justify-between min-h-[220px] shadow-sm border border-green-50">
            <div className="w-[55%] pr-2">
              <h3 className="text-lg font-bold text-green-700 mb-2">FRESH PRODUCE</h3>
              <p className="text-gray-700 text-xs mb-4 leading-relaxed">Fresh fruits and vegetables for everyday meals.</p>
              <button 
                onClick={() => handlePromoCategory('Fresh Produce')}
                className="bg-white border border-green-200 text-green-700 text-[10px] lg:text-[11px] whitespace-nowrap font-bold px-3 lg:px-4 py-2 rounded-full hover:bg-green-50 transition-colors inline-flex items-center gap-1 shadow-sm"
              >
                Explore Produce <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center">
               <img src={pear} alt="Produce" className="w-28 h-28 object-cover rounded-xl shadow-md rotate-2 bg-white" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Collection;
