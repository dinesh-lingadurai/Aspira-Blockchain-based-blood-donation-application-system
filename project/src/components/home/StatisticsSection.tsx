import React from 'react';
import { Crop as Drop, Users, Calendar, Award } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact in Numbers</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join thousands of donors who are making a difference every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-red-50 rounded-xl p-6 text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <Drop className="h-10 w-10 text-red-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">10,782</div>
            <div className="text-lg font-medium text-gray-600">Blood Units Donated</div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">5,340</div>
            <div className="text-lg font-medium text-gray-600">Registered Donors</div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <Calendar className="h-10 w-10 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">324</div>
            <div className="text-lg font-medium text-gray-600">Donation Events</div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 text-center transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <Award className="h-10 w-10 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">3,672</div>
            <div className="text-lg font-medium text-gray-600">Lives Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;