// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <nav className="flex flex-col text-sm mb-4 md:mb-0">
            <a href="#" className="mb-2 hover:text-gray-400">
              Home
            </a>
            <a href="#" className="mb-2 hover:text-gray-400">
              Services
            </a>
            <a href="#" className="mb-2 hover:text-gray-400">
              People
            </a>
            <a href="#" className="mb-2 hover:text-gray-400">
              Alumni
            </a>
          </nav>
          <nav className="flex flex-col text-sm mb-4 md:mb-0">
            <a href="#" className="mb-2 hover:text-gray-400">
              History
            </a>
            <a href="#" className="mb-2 hover:text-gray-400">
              Industries We Serve
            </a>
            <a href="#" className="mb-2 hover:text-gray-400">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Disclaimer
            </a>
          </nav>
          <div className="flex items-center mb-4 md:mb-0">
            <a href="mailto:services@vsinghi.com" className="inline-block mr-4">
              <img
                src="https://placehold.co/100x100"
                alt="Placeholder image for V. Singhi & Associates logo"
                className="h-10"
              />
            </a>
            <div className="text-sm">
              <p className="flex items-center mb-2">
                <i className="fas fa-phone-alt mr-2" />
                +913322101125/26
              </p>
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2" />
                V. Singhi &amp; Associates, Four Mangoe Lane, Surendra Mohan Ghosh
                Sarani Kolkata - 700001, West Bengal, India.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-4">
          © 2023 Chartered Accountants. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
