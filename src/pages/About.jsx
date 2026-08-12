import React from 'react';
import { Link } from 'react-router-dom';
import mart from '../assets/mart.png';
import store2 from '../assets/store2.jpg';
import product from '../assets/product.png';
import pear_img from '../assets/pear.jpeg';
import toner_img from '../assets/toner.jpeg';
import hero_ramen_img from '../assets/hero_ramen.jpeg';

const About = () => {
  return (
    <div className="pb-16 font-sans fade-in text-gray-800">
      
      {/* 2. HERO SECTION */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mt-6 mb-24 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
        
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-6 uppercase tracking-[0.2em] font-bold">
            <span className="w-10 h-[1px] bg-red-600"></span>
            <span className="text-red-600">ABOUT H MART PHILIPPINES</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight text-gray-900">
            Bringing Korea <br />
            <span className="text-red-600">Closer to You.</span>
          </h1>
          
          <div className="w-16 h-[2px] bg-red-100 mb-8"></div>
          
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-normal mb-10 max-w-md">
            H MART Philippines brings authentic Korean groceries, fresh produce, K-beauty and everyday essentials closer to Filipino shoppers.
          </p>
          
          <div>
            <Link to="/collection" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-red-600 transition-colors uppercase tracking-wider group">
              Explore Our Collection 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[55%] relative">
          <img src={mart} alt="H MART Store Aisle" className="w-full h-auto rounded-3xl object-cover shadow-sm border border-gray-100 aspect-[4/3] lg:aspect-[3/2]" />
        </div>
      </div>

      {/* 3. OUR STORY SECTION */}
      <div className="bg-[#faf9f8] py-24 mb-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center px-4 sm:px-6 lg:px-12 max-w-[1300px] mx-auto">
          <div className="w-full md:w-1/2">
            <img className="w-full rounded-2xl object-cover shadow-sm aspect-[4/5] lg:aspect-square" src={product} alt="Shopping at H MART" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest rounded-sm mb-6 w-max">
              OUR STORY
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              H MART Philippines was founded with a single, clear purpose: to make the rich, vibrant world of authentic Korean food and culture easily accessible to everyone in the Philippines. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We know how important it is to find the exact ingredients for a comforting bowl of jjigae or the perfect snacks for a movie night. By partnering directly with trusted Korean brands and local farmers, we ensure that our shelves are always stocked with genuine, high-quality products that bring the true taste of Korea straight to your home.
            </p>
          </div>
        </div>
      </div>

      {/* 4. WHAT WE BRING TO YOU */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto mb-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 tracking-tight border-b border-gray-100 pb-6">What We Bring To You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
              <img src={hero_ramen_img} alt="Korean Groceries" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Korean Groceries</h3>
            <p className="text-gray-600 leading-relaxed">Authentic Korean food, snacks, noodles and everyday favorites.</p>
          </div>
          
          <div className="group">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
              <img src={pear_img} alt="Fresh Produce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fresh Produce</h3>
            <p className="text-gray-600 leading-relaxed">Fresh fruits and vegetables selected carefully for quality.</p>
          </div>

          <div className="group">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
              <img src={toner_img} alt="K-Beauty" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">K-Beauty</h3>
            <p className="text-gray-600 leading-relaxed">Premium Korean skincare and beauty essentials.</p>
          </div>
        </div>
      </div>

      {/* 5. WHY H MART */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto mb-24 pt-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight text-center">Why Choose H MART?</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          <div className="flex-1 flex flex-col items-center text-center px-6 py-6 md:py-0">
            <svg className="w-8 h-8 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="text-base font-bold text-gray-900 mb-2">100% Authentic</h3>
            <p className="text-sm text-gray-600">Genuine Korean products from trusted sources.</p>
          </div>

          <div className="flex-1 flex flex-col items-center text-center px-6 py-6 md:py-0">
            <svg className="w-8 h-8 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            <h3 className="text-base font-bold text-gray-900 mb-2">Fresh Selection</h3>
            <p className="text-sm text-gray-600">Carefully selected groceries and produce.</p>
          </div>

          <div className="flex-1 flex flex-col items-center text-center px-6 py-6 md:py-0">
            <svg className="w-8 h-8 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            <h3 className="text-base font-bold text-gray-900 mb-2">Easy Shopping</h3>
            <p className="text-sm text-gray-600">Simple online ordering and convenient delivery.</p>
          </div>

          <div className="flex-1 flex flex-col items-center text-center px-6 py-6 md:py-0">
            <svg className="w-8 h-8 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <h3 className="text-base font-bold text-gray-900 mb-2">Customer First</h3>
            <p className="text-sm text-gray-600">Support focused on making shopping easy.</p>
          </div>

        </div>
      </div>

      {/* 6. CLOSING CTA */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden bg-red-600 flex items-center shadow-md">
          {/* Subtle Background Image on right half */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img src={store2} alt="Supermarket Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600 to-transparent z-10"></div>
          
          <div className="relative z-20 w-full lg:w-2/3 p-12 lg:p-20 text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Your Korean favorites, <br/> closer than ever.</h2>
            <p className="text-red-100 text-lg mb-10 max-w-lg">
              Discover authentic Korean groceries, fresh produce and K-beauty essentials.
            </p>
            <Link to="/collection" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Shop Now <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
