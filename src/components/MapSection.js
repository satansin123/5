// components/MapSection.js
import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-20">
        <a href="https://maps.google.com/?q=YourStoreLocation" target="_blank" rel="noopener noreferrer">
          <img
            src="https://placehold.co/1866x725"
            alt="Location Map"
            className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
};

export default MapSection;
