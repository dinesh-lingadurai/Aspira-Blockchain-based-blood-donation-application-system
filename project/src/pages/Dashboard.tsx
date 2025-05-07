import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Calendar, Bell, Settings, AlertCircle, CheckCircle, XCircle, Clock } from 'lucide-react';

// Mock donation history data
const donationHistory = [
  {
    id: 1,
    date: "2024-02-15",
    location: "Central City Hospital",
    units: 1,
    recipient: "Anonymous",
    status: "completed"
  },
  {
    id: 2,
    date: "2023-10-22",
    location: "Blood Drive Event",
    units: 1,
    recipient: "Emergency Case",
    status: "completed"
  },
  {
    id: 3,
    date: "2023-06-30",
    location: "Community Health Clinic",
    units: 1,
    recipient: "Anonymous",
    status: "completed"
  }
];

// Mock blood requests data
const bloodRequests = [
  {
    id: 101,
    date: "2024-05-25",
    patient: "Sarah Williams",
    bloodGroup: "O+",
    hospital: "Memorial Hospital",
    status: "pending"
  },
  {
    id: 102,
    date: "2024-05-10",
    patient: "Michael Brown",
    bloodGroup: "AB-",
    hospital: "University Medical Center",
    status: "fulfilled"
  }
];

// Mock upcoming donations
const upcomingDonations = [
  {
    id: 201,
    date: "2024-06-20",
    time: "10:00 AM",
    location: "Downtown Blood Center",
    type: "Scheduled Donation"
  }
];

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!currentUser) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">You are not logged in</h2>
          <p className="text-gray-600 mb-6">Please log in to view your dashboard</p>
          <a 
            href="/login" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
          >
            Log In
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-900">Welcome, {currentUser.name}</h1>
              <p className="text-gray-600">
                Blood Type: <span className="font-medium text-red-600">{currentUser.bloodGroup}</span> | 
                Donor Status: <span className="font-medium text-green-600">Active</span>
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-white border border-gray-300 hover:bg-gray-50 rounded-md px-4 py-2 text-gray-600 font-medium text-sm flex items-center">
                <Settings className="h-4 w-4 mr-1" />
                Settings
              </button>
              <button className="bg-red-600 hover:bg-red-700 rounded-md px-4 py-2 text-white font-medium text-sm flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Schedule Donation
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Donations Made</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Lives Saved</p>
                <p className="text-2xl font-bold text-gray-900">9</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Next Eligible Date</p>
                <p className="text-2xl font-bold text-gray-900">June 15</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Dashboard Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'overview' 
                    ? 'border-b-2 border-red-600 text-red-600' 
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('donations')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'donations' 
                    ? 'border-b-2 border-red-600 text-red-600' 
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Donation History
              </button>
              <button 
                onClick={() => setActiveTab('requests')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'requests' 
                    ? 'border-b-2 border-red-600 text-red-600' 
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Blood Requests
              </button>
              <button 
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'upcoming' 
                    ? 'border-b-2 border-red-600 text-red-600' 
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Donations
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Your Dashboard Overview</h2>
                
                {/* Notifications */}
                <div className="mb-8">
                  <h3 className="text-md font-medium mb-4">Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Urgent Blood Request Nearby</p>
                        <p className="text-sm text-gray-600">There's an urgent need for O+ blood at Memorial Hospital (2.3 miles away).</p>
                        <div className="mt-2">
                          <a href="#" className="text-sm font-medium text-red-600 hover:text-red-800">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                      <Bell className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Upcoming Blood Drive</p>
                        <p className="text-sm text-gray-600">A blood donation event is scheduled near you on June 14, 2025.</p>
                        <div className="mt-2">
                          <a href="#" className="text-sm font-medium text-red-600 hover:text-red-800">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div>
                  <h3 className="text-md font-medium mb-4">Recent Activity</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Activity
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 21, 2024
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Profile Updated
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            You updated your contact information
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 15, 2024
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Donation Scheduled
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            You scheduled a donation for June 20, 2024
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 10, 2024
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Blood Request Response
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            You responded to a blood request at University Medical Center
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'donations' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Your Donation History</h2>
                
                {donationHistory.length > 0 ? (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Units
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Recipient
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {donationHistory.map((donation) => (
                          <tr key={donation.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(donation.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {donation.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {donation.units}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {donation.recipient}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Completed
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">You haven't made any donations yet.</p>
                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition duration-150">
                      Schedule Your First Donation
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'requests' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Blood Requests</h2>
                
                {bloodRequests.length > 0 ? (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patient
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Blood Group
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hospital
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bloodRequests.map((request) => (
                          <tr key={request.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(request.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {request.patient}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {request.bloodGroup}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {request.hospital}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                request.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : request.status === 'fulfilled'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <button className="text-blue-600 hover:text-blue-800">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No blood requests available.</p>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'upcoming' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Upcoming Donations</h2>
                
                {upcomingDonations.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingDonations.map((donation) => (
                      <div key={donation.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{donation.type}</h3>
                            <p className="text-gray-600 mt-1">
                              <span className="font-medium">Date:</span> {new Date(donation.date).toLocaleDateString()} at {donation.time}
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Location:</span> {donation.location}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0 flex space-x-3">
                            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                              Reschedule
                            </button>
                            <button className="bg-red-50 border border-red-300 hover:bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm font-medium">
                              Cancel
                            </button>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="font-medium text-gray-900 mb-2">Preparation Tips:</h4>
                          <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                            <li>Ensure you're well-hydrated before donation</li>
                            <li>Get a good night's sleep</li>
                            <li>Eat a healthy meal before donating</li>
                            <li>Bring a photo ID to your appointment</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4 text-center">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition duration-150">
                        Schedule Another Donation
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500 mb-4">You don't have any upcoming donations scheduled.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition duration-150">
                      Schedule a Donation
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;