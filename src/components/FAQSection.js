// components/FAQSection.js
import React from 'react';

const FAQSection = () => {
  return (
    <div className="w-full md:w-1/2 px-4">
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-6 border-b-2 border-gray-200 pb-4">
      Frequently Asked Questions
    </h2>
    <div className="space-y-4">
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-medium text-gray-900">
            How to connect with us?
          </h3>
          <span className="text-gray-600 group-open:hidden">+</span>
          <span className="text-gray-600 hidden group-open:inline">−</span>
        </summary>
        <p className="text-gray-600 mt-2">
          You can connect with us through our contact page or directly via our
          support email.
        </p>
      </details>
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-medium text-gray-900">
            How to send the documents?
          </h3>
          <span className="text-gray-600 group-open:hidden">+</span>
          <span className="text-gray-600 hidden group-open:inline">−</span>
        </summary>
        <p className="text-gray-600 mt-2">
          Documents can be sent through the secure upload feature on our website
          or mailed to our office address.
        </p>
      </details>
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-medium text-gray-900">
            How to check the status of assignment?
          </h3>
          <span className="text-gray-600 group-open:hidden">+</span>
          <span className="text-gray-600 hidden group-open:inline">−</span>
        </summary>
        <p className="text-gray-600 mt-2">
          The status of your assignment can be tracked by logging into your
          account on our website or contacting your assigned consultant.
        </p>
      </details>
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-medium text-gray-900">
            Why three step process?
          </h3>
          <span className="text-gray-600 group-open:hidden">+</span>
          <span className="text-gray-600 hidden group-open:inline">−</span>
        </summary>
        <p className="text-gray-600 mt-2">
          Our three-step process ensures thorough analysis, clear communication,
          and efficient resolution of your concerns.
        </p>
      </details>
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-medium text-gray-900">
            How to make the payments for services availed?
          </h3>
          <span className="text-gray-600 group-open:hidden">+</span>
          <span className="text-gray-600 hidden group-open:inline">−</span>
        </summary>
        <p className="text-gray-600 mt-2">
          Payments can be made online via our payment portal or through direct
          bank transfer as detailed on the invoice.
        </p>
      </details>
    </div>
  </div>
</div>

  );
};

export default FAQSection;
