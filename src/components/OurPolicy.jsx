import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 mb-12">
      <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-3">
        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900 mb-0.5">Fresh Selection</p>
          <p className="text-[11px] text-gray-500">Carefully picked items</p>
        </div>
      </div>
      
      <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-3">
        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900 mb-0.5">Korean Favorites</p>
          <p className="text-[11px] text-gray-500">100% Authentic products</p>
        </div>
      </div>

      <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-3">
        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900 mb-0.5">Secure Shopping</p>
          <p className="text-[11px] text-gray-500">Safe & simple checkout</p>
        </div>
      </div>

      <div className="bg-white p-4 lg:p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-3">
        <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <div>
          <p className="text-[13px] font-bold text-gray-900 mb-0.5">Easy Ordering</p>
          <p className="text-[11px] text-gray-500">Shop favorites easily</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
