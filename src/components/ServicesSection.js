// components/ServicesSection.js
import React from 'react';

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  <h2 className="text-4xl font-semibold text-center mb-12">Our Services</h2>
  {/* First row of services */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
    {/* Service Block 1 */}
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {/* Icon placeholder */}
        <img
          src="https://placehold.co/50x50"
          alt="Audit Icon"
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Audit and Assurance Services
      </h3>
      <ul className="text-sm text-gray-600 mb-4">
        <li>Statutory Audits</li>
        <li>Tax Audits</li>
        <li>Compliance Audits</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500">
        More Info
      </button>
    </div>
    {/* Service Block 2 */}
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {/* Icon placeholder */}
        <img
          src="https://placehold.co/50x50"
          alt="Management Icon"
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Management Assurance Services
      </h3>
      <ul className="text-sm text-gray-600 mb-4">
        <li>Process Review and Internal Control Audits</li>
        <li>Bank Concurrent Audits</li>
        <li>Quality Control Reviews</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500">
        More Info
      </button>
    </div>
    {/* Service Block 3 */}
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {/* Icon placeholder */}
        <img
          src="https://placehold.co/50x50"
          alt="Advisory Icon"
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Corporate Advisory Services
      </h3>
      <ul className="text-sm text-gray-600 mb-4">
        <li>Company Law Compliance Services</li>
        <li>Representation Before CLB / National Tribunal</li>
        <li>Valuation Services and Advice on Corporate Re-Structuring</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500">
        More Info
      </button>
    </div>
  </div>
  {/* Second row of services */}
  <div className="grid md:grid-cols-3 gap-8">
    {/* Service Block 4 */}
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {/* Icon placeholder */}
        <img
          src="https://placehold.co/50x50"
          alt="Advisory Icon"
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Corporate Advisory Services
      </h3>
      <ul className="text-sm text-gray-600 mb-4">
        <li>Company Law Compliance Services</li>
        <li>Representation Before CLB / National Tribunal</li>
        <li>Valuation Services and Advice on Corporate Re-Structuring</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500">
        More Info
      </button>
    </div>
    {/* Service Block 5 */}
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {/* Icon placeholder */}
        <img
          src="https://placehold.co/50x50"
          alt="Advisory Icon"
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Corporate Advisory Services
      </h3>
      <ul className="text-sm text-gray-600 mb-4">
        <li>Company Law Compliance Services</li>
        <li>Representation Before CLB / National Tribunal</li>
        <li>Valuation Services and Advice on Corporate Re-Structuring</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500">
        More Info
      </button>
    </div>
    {/* Service Block 6 */}
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {/* Icon placeholder */}
        <img
          src="https://placehold.co/50x50"
          alt="Advisory Icon"
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Corporate Advisory Services
      </h3>
      <ul className="text-sm text-gray-600 mb-4">
        <li>Company Law Compliance Services</li>
        <li>Representation Before CLB / National Tribunal</li>
        <li>Valuation Services and Advice on Corporate Re-Structuring</li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500">
        More Info
      </button>
    </div>
  </div>
</div>

  );
};

export default ServicesSection;
