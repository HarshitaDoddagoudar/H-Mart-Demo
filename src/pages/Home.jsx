import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import KoreanFavorites from '../components/KoreanFavorites'
import FreshPicks from '../components/FreshPicks'
import KBeautySpotlight from '../components/KBeautySpotlight'
import ReadyInMinutes from '../components/ReadyInMinutes'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

import jin_mild from '../assets/jin-mild.jpg';
import pear from '../assets/pear.jpeg';
import cosrx from '../assets/cosrx.jpeg';
import hotdog from '../assets/hotdog.jpeg';
import lotte from '../assets/lotte.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/collection', { state: { category } });
  };

  return (
    <div className="pb-12 font-sans">
      <Hero />
      <OurPolicy />

      {/* SHOP BY CATEGORY SECTION */}
      <div className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Shop by Category</h2>
          <Link to="/collection" className="text-sm font-bold text-red-600 hover:text-red-700 hover:underline flex items-center gap-1">
            View all categories <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
          <div onClick={() => handleCategoryClick('K-Food')} className="group cursor-pointer bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all text-center flex flex-col items-center gap-4">
            <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gray-50 rounded-full p-2 group-hover:bg-red-50 transition-colors">
              <img src={jin_mild} alt="K-Food" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">K-Food</h3>
          </div>
          
          <div onClick={() => handleCategoryClick('Fresh Produce')} className="group cursor-pointer bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all text-center flex flex-col items-center gap-4">
            <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gray-50 rounded-full p-2 group-hover:bg-red-50 transition-colors">
              <img src={pear} alt="Fresh Produce" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Fresh Produce</h3>
          </div>

          <div onClick={() => handleCategoryClick('K-Beauty')} className="group cursor-pointer bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all text-center flex flex-col items-center gap-4">
            <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gray-50 rounded-full p-2 group-hover:bg-red-50 transition-colors">
              <img src={cosrx} alt="K-Beauty" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">K-Beauty</h3>
          </div>

          <div onClick={() => handleCategoryClick('Korean Snacks')} className="group cursor-pointer bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all text-center flex flex-col items-center gap-4">
            <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gray-50 rounded-full p-2 group-hover:bg-red-50 transition-colors">
              <img src={lotte} alt="Korean Snacks" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Korean Snacks</h3>
          </div>

          <div onClick={() => handleCategoryClick('Everyday Essentials')} className="group cursor-pointer bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all text-center flex flex-col items-center gap-4">
            <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center bg-gray-50 rounded-full p-2 group-hover:bg-red-50 transition-colors">
              <img src={hotdog} alt="Everyday Essentials" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Everyday Essentials</h3>
          </div>
        </div>
      </div>

      <KoreanFavorites />
      
      <FreshPicks />

      <ReadyInMinutes />
      
      <KBeautySpotlight />

      {/* PROMOTIONAL BANNERS SECTION - H MART DEALS */}
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 tracking-tight">H MART Deals</h2>
        <p className="text-sm text-gray-500 mb-8">Great finds and special prices, while they last.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Promo 1 */}
          <div className="bg-red-50/50 rounded-2xl p-6 flex items-center justify-between min-h-[220px] shadow-sm border border-red-100">
            <div className="w-[55%] pr-2">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-3 inline-block">Limited Offer</span>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Buy 1 Get 1</h3>
              <p className="text-gray-700 text-xs mb-4 leading-relaxed font-medium">On selected snacks</p>
              <button 
                onClick={() => handleCategoryClick('Korean Snacks')}
                className="bg-white border border-red-200 text-red-600 text-[11px] whitespace-nowrap font-bold px-4 py-2.5 rounded-full hover:bg-red-600 hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm group"
              >
                Shop Now <svg className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center relative">
               <img src={lotte} alt="Deals" className="w-32 h-32 object-cover rounded-xl shadow-md rotate-3 bg-white border border-gray-100" />
            </div>
          </div>

          {/* Promo 2 */}
          <div className="bg-blue-50/50 rounded-2xl p-6 flex items-center justify-between min-h-[220px] shadow-sm border border-blue-100">
            <div className="w-[55%] pr-2">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-3 inline-block">Special Price</span>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Noodle Fest</h3>
              <p className="text-gray-700 text-xs mb-4 leading-relaxed font-medium">Up to 20% off all ramen</p>
              <button 
                onClick={() => handleCategoryClick('K-Food')}
                className="bg-white border border-blue-200 text-blue-700 text-[11px] whitespace-nowrap font-bold px-4 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm group"
              >
                Stock Up <svg className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center">
               <img src={jin_mild} alt="K-Food" className="w-32 h-32 object-cover rounded-xl shadow-md -rotate-3 bg-white border border-gray-100" />
            </div>
          </div>

          {/* Promo 3 */}
          <div className="bg-orange-50/50 rounded-2xl p-6 flex items-center justify-between min-h-[220px] shadow-sm border border-orange-100">
            <div className="w-[55%] pr-2">
              <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-3 inline-block">New Arrival</span>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Fresh Harvest</h3>
              <p className="text-gray-700 text-xs mb-4 leading-relaxed font-medium">New seasonal fruits arrived</p>
              <button 
                onClick={() => handleCategoryClick('Fresh Produce')}
                className="bg-white border border-orange-200 text-orange-600 text-[11px] whitespace-nowrap font-bold px-4 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm group"
              >
                Shop Fresh <svg className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center">
               <img src={pear} alt="Produce" className="w-32 h-32 object-cover rounded-xl shadow-md rotate-3 bg-white border border-gray-100" />
            </div>
          </div>

        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Home
