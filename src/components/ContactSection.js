// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className="w-full md:w-1/2 px-4">
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-6 border-b-2 border-gray-200 pb-4">
      Free Consultation
    </h2>
    <form action="#" method="POST">
      <div className="mb-4">
        <input
          type="text"
          name="full_name"
          placeholder="Please Enter Your Full Name *"
          required=""
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="contact_number"
          placeholder="Please Enter Your Contact Number *"
          required=""
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="contact_email"
          placeholder="Please Enter Contact Email *"
          required=""
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Enter Your Message *"
          required=""
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded hover:bg-black"
      >
        Submit
      </button>
    </form>
  </div>
</div>

  );
};

export default ContactSection;
