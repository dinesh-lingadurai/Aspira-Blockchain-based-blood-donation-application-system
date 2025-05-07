import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const DonorRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    
    // Blood & Health Information
    bloodGroup: '',
    weight: '',
    hasRecentIllness: false,
    hasTattoo: false,
    recentSurgery: false,
    
    // Location & Availability
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyOnly: false,
    availabilityWeekdays: false,
    availabilityWeekends: false,
    
    // Consent & Privacy
    agreeToTerms: false,
    allowContactSharing: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form submission (API call would go here)
    console.log("Form submitted:", formData);
    // Move to success step
    setCurrentStep(4);
    window.scrollTo(0, 0);
  };
  
  // Steps renderer
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input 
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input 
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input 
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender*
                </label>
                <select 
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth*
                </label>
                <input 
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Blood & Health Information</h2>
            
            <div className="mb-6">
              <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1">
                Blood Group*
              </label>
              <select 
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="unknown">I don't know</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Weight (in kg)*
              </label>
              <input 
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                min="45"
                placeholder="Must be at least 45 kg to donate"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              />
              <p className="mt-1 text-sm text-gray-500">You must weigh at least 45kg to be eligible to donate blood.</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="font-medium text-gray-700">Health Screening Questions</p>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="hasRecentIllness"
                    name="hasRecentIllness"
                    type="checkbox"
                    checked={formData.hasRecentIllness}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="hasRecentIllness" className="font-medium text-gray-700">
                    Have you had any illness in the past 6 months?
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="hasTattoo"
                    name="hasTattoo"
                    type="checkbox"
                    checked={formData.hasTattoo}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="hasTattoo" className="font-medium text-gray-700">
                    Have you gotten a tattoo within the last 6 months?
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="recentSurgery"
                    name="recentSurgery"
                    type="checkbox"
                    checked={formData.recentSurgery}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="recentSurgery" className="font-medium text-gray-700">
                    Have you undergone any surgery in the last 12 months?
                  </label>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    The health information you provide helps us determine your eligibility as a donor. 
                    This information is kept confidential and is only used for screening purposes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition duration-150"
              >
                Previous Step
              </button>
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
              >
                Next Step
              </button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Location & Preferences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address*
                </label>
                <input 
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <input 
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province*
                </label>
                <input 
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip/Postal Code*
                </label>
                <input 
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <p className="font-medium text-gray-700 mb-3">Donation Preferences</p>
              
              <div className="flex items-start mb-3">
                <div className="flex items-center h-5">
                  <input
                    id="emergencyOnly"
                    name="emergencyOnly"
                    type="checkbox"
                    checked={formData.emergencyOnly}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="emergencyOnly" className="font-medium text-gray-700">
                    I only want to be contacted for emergency donations
                  </label>
                </div>
              </div>
              
              <p className="font-medium text-gray-700 mt-4 mb-2">Availability</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="availabilityWeekdays"
                      name="availabilityWeekdays"
                      type="checkbox"
                      checked={formData.availabilityWeekdays}
                      onChange={handleChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="availabilityWeekdays" className="font-medium text-gray-700">
                      Available on weekdays
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="availabilityWeekends"
                      name="availabilityWeekends"
                      type="checkbox"
                      checked={formData.availabilityWeekends}
                      onChange={handleChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="availabilityWeekends" className="font-medium text-gray-700">
                      Available on weekends
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the Terms of Service and Privacy Policy*
                  </label>
                  <p className="text-gray-500">
                    By registering, you agree to be contacted for blood donation requests.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="allowContactSharing"
                    name="allowContactSharing"
                    type="checkbox"
                    checked={formData.allowContactSharing}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="allowContactSharing" className="font-medium text-gray-700">
                    Allow my contact information to be shared with verified requester
                  </label>
                  <p className="text-gray-500">
                    If disabled, we will contact you first before sharing your details.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                type="button" 
                onClick={prevStep}
                className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition duration-150"
              >
                Previous Step
              </button>
              <button 
                type="submit" 
                onClick={handleSubmit}
                disabled={!formData.agreeToTerms}
                className={`${
                  formData.agreeToTerms 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-gray-300 cursor-not-allowed'
                } text-white px-6 py-3 rounded-md font-medium transition duration-150`}
              >
                Complete Registration
              </button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Complete!</h2>
            <div className="max-w-md mx-auto">
              <p className="text-gray-600 mb-8">
                Thank you for registering as a blood donor with Aspira. Your contribution can help save lives in your community.
              </p>
              <p className="text-gray-600 mb-6">
                We have sent a verification email to <span className="font-semibold">{formData.email}</span>. 
                Please verify your email to complete the registration process.
              </p>
              <div className="space-y-4">
                <a 
                  href="/"
                  className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
                >
                  Return to Home Page
                </a>
                <a 
                  href="/login"
                  className="block border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition duration-150"
                >
                  Login to Your Account
                </a>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Register as a Blood Donor</h1>
          <p className="mt-4 text-xl text-gray-600">
            Join our community of lifesavers and help those in need.
          </p>
        </div>
        
        {/* Progress Bar */}
        {currentStep < 4 && (
          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <div 
                className={`text-sm font-medium ${currentStep >= 1 ? 'text-red-600' : 'text-gray-500'}`}
              >
                Personal Info
              </div>
              <div 
                className={`text-sm font-medium ${currentStep >= 2 ? 'text-red-600' : 'text-gray-500'}`}
              >
                Health Details
              </div>
              <div 
                className={`text-sm font-medium ${currentStep >= 3 ? 'text-red-600' : 'text-gray-500'}`}
              >
                Location & Preferences
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div 
                style={{ width: `${(currentStep / 3) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600 transition-all duration-500"
              ></div>
            </div>
          </div>
        )}
        
        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <form>
            {renderStep()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;