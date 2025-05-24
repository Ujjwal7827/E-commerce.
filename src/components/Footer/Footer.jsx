import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-7 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
  
        <div className="text-lg font-bold mb-4 md:mb-0">U-Kart</div>

      
        <div className="flex gap-6 text-sm   mb-4 md:mb-0">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

      
        <div className="flex gap-5 text-2xl top-10 md:mt-0">
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            <FaInstagram />
          </a>
        
        </div>
      </div>

      
      <div className="text-center text-sm mt-4 text-gray-400">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
