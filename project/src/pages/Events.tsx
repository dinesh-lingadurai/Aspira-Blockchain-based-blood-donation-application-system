import React from 'react';

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blood Donation Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for events - will be populated with real data later */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Community Blood Drive</h2>
          <p className="text-gray-600 mb-4">Join us for our monthly community blood drive event.</p>
          <div className="text-sm text-gray-500">
            <p>📅 Date: Coming Soon</p>
            <p>📍 Location: To be announced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;