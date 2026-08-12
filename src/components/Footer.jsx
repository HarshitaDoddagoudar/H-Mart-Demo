import { assets } from "../assets/assets";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-4 border-t border-gray-100 pt-10 pb-6">
      <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1.5fr] gap-10 text-sm mb-10">
        
        {/* COLUMN 1 */}
        <div className="flex flex-col items-start">
          <img src={assets.logo} alt="logo" className="mb-4 w-64 max-w-full" />
          <p className="w-full sm:w-4/5 text-gray-500 leading-relaxed">
            Your trusted destination for authentic Korean groceries, fresh produce, K-beauty and everyday essentials in the Philippines.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <p className="text-sm font-bold tracking-widest text-gray-900 mb-5">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-500 font-medium">
            <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
            <li><Link to="/collection" className="hover:text-red-600 transition-colors">Collection</Link></li>
            <li><Link to="/about" className="hover:text-red-600 transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            <li><span className="hover:text-red-600 transition-colors cursor-pointer">Privacy Policy</span></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <p className="text-sm font-bold tracking-widest text-gray-900 mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-500 font-medium">
            <li className="flex items-center gap-3">
              <FiPhone className="text-red-500 flex-shrink-0 text-lg" />
              <span>+63 32 495 0698</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-red-500 flex-shrink-0 text-lg" />
              <span>cebuhmartmktng@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-100">
        <p className="text-xs text-center text-gray-400 font-medium">
          © 2026 H MART Philippines. All rights reserved.
          <span className="ml-1">
            Designed & Developed by{" "}
            <a
              href="https://drnitz.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-500 hover:text-red-600 hover:underline transition-colors"
            >
              Harshita
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
