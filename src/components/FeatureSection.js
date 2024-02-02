// components/FeatureSection.js
import React from 'react';

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  <div className="flex flex-wrap -mx-2">
    {/* Ensure Security Section */}
    <div className="w-full lg:w-1/3 px-2 mb-4">
      <div className="bg-gray-800 text-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">ENSURE SECURITY</h2>
        <p className="text-gray-400 mb-8">
          Perspiciatis unde omnis ist natus error sit voluptatem accusantium
          loremque lium totam rem aperiam eaque.
        </p>
      </div>
    </div>
    {/* Expert Team Section */}
    <div className="w-full lg:w-1/3 px-2 mb-4">
      <div className="bg-gray-700 text-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">EXPERT TEAM</h2>
        <p className="text-gray-400 mb-8">
          Perspiciatis unde omnis ist natus error sit voluptatem accusantium
          loremque lium totam rem aperiam eaque.
        </p>
      </div>
    </div>
    {/* 24/7 Support Section */}
    <div className="w-full lg:w-1/3 px-2 mb-4">
      <div className="bg-black text-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">24/7 SUPPORT</h2>
        <p className="text-gray-400 mb-8">
          Perspiciatis unde omnis ist natus error sit voluptatem accusantium
          loremque lium totam rem aperiam eaque.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default FeatureSection;
