import React from 'react';
import { Link } from 'react-router-dom';
import { Search, UserPlus, AlertCircle, CalendarDays, Heart, Users, Map, Award, MapPin } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import StatisticsSection from '../components/home/StatisticsSection';
import TestimonialSection from '../components/home/TestimonialSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Actions Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/search" 
              className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Blood Donors</h3>
              <p className="text-gray-600 text-center">Quickly search for compatible blood donors in your area</p>
            </Link>
            
            <Link 
              to="/register" 
              className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="rounded-full bg-red-100 p-3 mb-4">
                <UserPlus className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Register as Donor</h3>
              <p className="text-gray-600 text-center">Join our community of lifesavers and help those in need</p>
            </Link>
            
            <Link 
              to="/emergency-request" 
              className="flex flex-col items-center p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="rounded-full bg-yellow-100 p-3 mb-4">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Request</h3>
              <p className="text-gray-600 text-center">In urgent need of blood? Make an emergency request</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How Aspira Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects blood donors with those in need through a simple process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-red-100 p-4 mb-4">
                <UserPlus className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 1: Register</h3>
              <p className="text-gray-600 text-center">Create your profile as a donor with your blood type and location</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-4 mb-4">
                <Map className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 2: Location Services</h3>
              <p className="text-gray-600 text-center">Enable location services for accurate donor matching</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-green-100 p-4 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 3: Donate</h3>
              <p className="text-gray-600 text-center">Receive notifications when someone needs your blood type</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-100 p-4 mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 4: Save Lives</h3>
              <p className="text-gray-600 text-center">Help save lives and earn recognition in our donor community</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join thousands of donors who are saving lives every day through Aspira's blood donation network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="inline-block bg-white text-red-600 hover:bg-red-50 px-6 py-3 rounded-md font-semibold text-lg transition duration-150"
            >
              Register as a Donor
            </Link>
            <Link 
              to="/search" 
              className="inline-block bg-transparent text-white border border-white hover:bg-red-500 px-6 py-3 rounded-md font-semibold text-lg transition duration-150"
            >
              Find Blood Donors
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Donation Events</h2>
            <Link 
              to="/events" 
              className="text-red-600 hover:text-red-800 font-medium flex items-center"
            >
              View All Events <span className="ml-1">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-red-500 text-white px-4 py-2 font-semibold">
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  June 14, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">World Blood Donor Day Special Drive</h3>
                <p className="text-gray-600 mb-4">Join us for a special blood donation drive to commemorate World Blood Donor Day.</p>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Central City Hospital, Downtown</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  <span>145 people are attending</span>
                </div>
                <Link 
                  to="/events/world-blood-donor-day" 
                  className="block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-150"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-red-500 text-white px-4 py-2 font-semibold">
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  June 20, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">University Campus Drive</h3>
                <p className="text-gray-600 mb-4">Special blood donation campaign for university students and faculty.</p>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>State University, East Campus</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  <span>98 people are attending</span>
                </div>
                <Link 
                  to="/events/university-campus-drive" 
                  className="block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-150"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Event 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-red-500 text-white px-4 py-2 font-semibold">
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  July 5, 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Wellness Drive</h3>
                <p className="text-gray-600 mb-4">Blood donation as part of the corporate wellness program for local businesses.</p>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Business District, Tech Park</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  <span>76 people are attending</span>
                </div>
                <Link 
                  to="/events/corporate-wellness-drive" 
                  className="block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-150"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;