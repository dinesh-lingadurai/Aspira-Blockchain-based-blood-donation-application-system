import React from 'react';

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Resources</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Blood Donation Guidelines</h2>
          <p className="text-gray-600">
            Learn about eligibility requirements and preparation tips for blood donation.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Educational Materials</h2>
          <p className="text-gray-600">
            Access educational resources about blood types, donation process, and impact.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">FAQs</h2>
          <p className="text-gray-600">
            Find answers to commonly asked questions about blood donation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;