import React from 'react';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import store2 from '../assets/store2.jpg';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="pb-16 font-sans fade-in text-gray-800">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col items-center justify-center pt-6 pb-6 text-center px-4">
        <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-4 uppercase tracking-[0.2em] font-bold">
          <span className="w-8 h-[1px] bg-red-600"></span>
          <span className="text-red-600">GET IN TOUCH</span>
          <span className="w-8 h-[1px] bg-red-600"></span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Contact Us</h1>
      </div>

      {/* CONTACT INFO SECTION */}
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center mb-24 px-4 sm:px-6 lg:px-12 max-w-[1200px] mx-auto">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-red-50 rounded-3xl transform -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
          <img className="w-full rounded-3xl object-cover shadow-sm border border-gray-50 aspect-[4/5] lg:aspect-square" src={store2} alt="H MART Philippines Store" />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight border-b border-gray-100 pb-4">Our Store</h2>
            <div className="flex flex-col gap-5 text-gray-600">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="leading-relaxed">Lapu-Lapu, LGJT HUU-INN BLDG,<br />IBAPU, MACTAN, Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="leading-relaxed">+63 32 495 0698</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="leading-relaxed">cebuhmartmktng@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Careers at H MART</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Passionate about Korean culture and retail? Learn more about our teams and current job openings.
            </p>
            <button className="bg-white border-2 border-gray-900 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors tracking-wide text-sm">
              Explore Jobs
            </button>
          </div>

        </div>
      </div>

      <NewsletterBox />

    </div>
  );
};

export default Contact;
