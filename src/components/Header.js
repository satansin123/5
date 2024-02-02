// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="hero-section h-screen flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="hero-text text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-shadow">
            Compassionate Legal Counsel for Difficult Times
          </h1>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-shadow">
            Get the support you need during life's toughest challenges with law.
          </p>
          <a href="#" className="btn-contact bg-white text-blue-500 py-2 px-4 rounded-full">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
