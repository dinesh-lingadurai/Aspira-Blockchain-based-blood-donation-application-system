import React, { useState } from 'react';
import { MapPin, Filter, Phone, Mail } from 'lucide-react';

// Mock data for donors
const mockDonors = [
  { 
    id: 1, 
    name: 'John Smith', 
    bloodGroup: 'O+', 
    location: 'New York, NY', 
    distance: '2.3 miles',
    lastDonation: '2023-12-15',
    contact: { phone: '+1 (555) 123-4567', email: 'john.smith@email.com' }
  },
  { 
    id: 2, 
    name: 'Maria Garcia', 
    bloodGroup: 'A-', 
    location: 'New York, NY', 
    distance: '3.5 miles',
    lastDonation: '2024-01-20',
    contact: { phone: '+1 (555) 987-6543', email: 'maria.garcia@email.com' }
  },
  { 
    id: 3, 
    name: 'David Lee', 
    bloodGroup: 'B+', 
    location: 'Brooklyn, NY', 
    distance: '4.8 miles',
    lastDonation: '2024-02-05',
    contact: { phone: '+1 (555) 456-7890', email: 'david.lee@email.com' }
  },
  { 
    id: 4, 
    name: 'Emily Johnson', 
    bloodGroup: 'AB+', 
    location: 'Queens, NY', 
    distance: '5.2 miles',
    lastDonation: '2023-11-10',
    contact: { phone: '+1 (555) 789-0123', email: 'emily.johnson@email.com' }
  },
  { 
    id: 5, 
    name: 'Michael Wilson', 
    bloodGroup: 'O-', 
    location: 'Jersey City, NJ', 
    distance: '7.1 miles',
    lastDonation: '2024-03-01',
    contact: { phone: '+1 (555) 234-5678', email: 'michael.wilson@email.com' }
  },
];

const DonorSearch: React.FC = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [filteredDonors, setFilteredDonors] = useState(mockDonors);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showContact, setShowContact] = useState<number | null>(null);
  
  // Blood groups for selection
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with delay
    setTimeout(() => {
      const filtered = mockDonors.filter(donor => {
        const matchesBloodGroup = !bloodGroup || donor.bloodGroup === bloodGroup;
        const matchesLocation = !location || donor.location.toLowerCase().includes(location.toLowerCase());
        return matchesBloodGroup && matchesLocation;
      });
      
      setFilteredDonors(filtered);
      setLoading(false);
    }, 800);
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Blood Donors Near You</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search for compatible blood donors in your area who can help in your time of need.
          </p>
        </div>
        
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Group
                </label>
                <select 
                  id="bloodGroup"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">All Blood Groups</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, state or zip code" 
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="flex items-end">
                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-md font-medium transition duration-150 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Search Donors'}
                </button>
              </div>
            </div>
            
            {/* Advanced Filters Toggle */}
            <div className="mt-4">
              <button 
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                <Filter className="h-4 w-4 mr-1" />
                {showFilters ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
              </button>
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
                    Maximum Distance
                  </label>
                  <select 
                    id="distance"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="5">Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                    <option value="50">Within 50 miles</option>
                    <option value="100">Within 100 miles</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="lastDonation" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Donation
                  </label>
                  <select 
                    id="lastDonation"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Any time</option>
                    <option value="90">Not in last 90 days</option>
                    <option value="60">Not in last 60 days</option>
                    <option value="30">Not in last 30 days</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select 
                    id="availability"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="any">Any availability</option>
                    <option value="emergency">Emergency only</option>
                    <option value="scheduled">Scheduled donations</option>
                  </select>
                </div>
              </div>
            )}
          </form>
        </div>
        
        {/* Search Results */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {filteredDonors.length} Donors Found
            </h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select className="p-2 border border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500">
                <option value="distance">Distance</option>
                <option value="recent">Recently Active</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredDonors.map((donor) => (
                <div 
                  key={donor.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-600 font-bold text-xl rounded-full mr-4">
                        {donor.bloodGroup}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{donor.name}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{donor.location} ({donor.distance})</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                      <button 
                        onClick={() => setShowContact(showContact === donor.id ? null : donor.id)}
                        className={`px-4 py-2 rounded-md font-medium transition duration-150 ${
                          showContact === donor.id 
                            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                      >
                        {showContact === donor.id ? 'Hide Contact' : 'View Contact'}
                      </button>
                    </div>
                  </div>
                  
                  {showContact === donor.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-gray-500 mr-2" />
                          <a href={`tel:${donor.contact.phone}`} className="text-blue-600 hover:underline">
                            {donor.contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-500 mr-2" />
                          <a href={`mailto:${donor.contact.email}`} className="text-blue-600 hover:underline">
                            {donor.contact.email}
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        <p>Please contact the donor directly to coordinate the blood donation. Remember to be courteous and provide clear details about the requirement.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorSearch;