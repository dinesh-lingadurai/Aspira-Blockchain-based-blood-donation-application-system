import React, { useState } from 'react';
import { MapPin, AlertCircle, Check } from 'lucide-react';

const EmergencyRequest: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: '',
    bloodGroup: '',
    unitsNeeded: '1',
    hospitalName: '',
    hospitalAddress: '',
    city: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    requirementDate: '',
    requirementTime: '',
    patientCondition: '',
    additionalInfo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here - API call
    console.log('Form data:', formData);
    // Move to success step
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };
  
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Blood Requirement Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Name*
                </label>
                <input 
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Group Required*
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
                </select>
              </div>
              
              <div>
                <label htmlFor="unitsNeeded" className="block text-sm font-medium text-gray-700 mb-1">
                  Units Needed*
                </label>
                <select 
                  id="unitsNeeded"
                  name="unitsNeeded"
                  value={formData.unitsNeeded}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  <option value="1">1 Unit</option>
                  <option value="2">2 Units</option>
                  <option value="3">3 Units</option>
                  <option value="4">4 Units</option>
                  <option value="5+">5+ Units</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="patientCondition" className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Condition
                </label>
                <input 
                  type="text"
                  id="patientCondition"
                  name="patientCondition"
                  value={formData.patientCondition}
                  onChange={handleChange}
                  placeholder="e.g., Surgery, Accident, etc."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="requirementDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Date*
                </label>
                <input 
                  type="date"
                  id="requirementDate"
                  name="requirementDate"
                  value={formData.requirementDate}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="requirementTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Time*
                </label>
                <input 
                  type="time"
                  id="requirementTime"
                  name="requirementTime"
                  value={formData.requirementTime}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any additional details about the requirement"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Please ensure you've spoken with the hospital before making an emergency request. 
                    This helps us verify the request and find donors more efficiently.
                  </p>
                </div>
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
            <h2 className="text-2xl font-semibold mb-6">Hospital & Contact Details</h2>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Hospital Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-1">
                    Hospital Name*
                  </label>
                  <input 
                    type="text"
                    id="hospitalName"
                    name="hospitalName"
                    value={formData.hospitalName}
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
              </div>
              
              <div className="mt-4">
                <label htmlFor="hospitalAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Hospital Address*
                </label>
                <textarea
                  id="hospitalAddress"
                  name="hospitalAddress"
                  rows={2}
                  value={formData.hospitalAddress}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Contact Person Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person Name*
                  </label>
                  <input 
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone Number*
                  </label>
                  <input 
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email*
                  </label>
                  <input 
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Please provide accurate contact information. This will be shared with potential 
                    donors who match the blood group requirements.
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
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
              >
                Submit Request
              </button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
              <Check className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
            <div className="max-w-md mx-auto">
              <p className="text-gray-600 mb-6">
                Your emergency blood request has been submitted successfully. We have started notifying potential donors in your area.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Request Summary</h3>
                <div className="text-left space-y-2 text-sm">
                  <p><span className="font-medium">Request ID:</span> ER{Math.floor(100000 + Math.random() * 900000)}</p>
                  <p><span className="font-medium">Blood Group:</span> {formData.bloodGroup}</p>
                  <p><span className="font-medium">Units Required:</span> {formData.unitsNeeded}</p>
                  <p><span className="font-medium">Required By:</span> {formData.requirementDate} at {formData.requirementTime}</p>
                  <p><span className="font-medium">Hospital:</span> {formData.hospitalName}</p>
                  <p><span className="font-medium">Contact Person:</span> {formData.contactName}</p>
                </div>
              </div>
              
              <p className="text-gray-700 font-medium mb-4">
                What happens next?
              </p>
              
              <ul className="text-left pl-6 list-disc space-y-2 mb-8 text-gray-600">
                <li>Our system is now searching for matching donors in your area</li>
                <li>Notifications are being sent to potential donors</li>
                <li>You'll receive email updates as donors respond</li>
                <li>You can check the status of your request anytime by logging in</li>
              </ul>
              
              <div className="space-y-4">
                <a 
                  href="/"
                  className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
                >
                  Return to Home Page
                </a>
                <a 
                  href="/dashboard"
                  className="block border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition duration-150"
                >
                  View Your Dashboard
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
          <h1 className="text-3xl font-bold text-gray-900">Emergency Blood Request</h1>
          <p className="mt-4 text-xl text-gray-600">
            Submit an emergency request to find blood donors quickly.
          </p>
        </div>
        
        {/* Progress Steps */}
        {currentStep < 3 && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <div className={`ml-2 text-sm font-medium ${
                  currentStep >= 1 ? 'text-red-600' : 'text-gray-500'
                }`}>
                  Request Details
                </div>
              </div>
              <div className={`flex-1 border-t ${
                currentStep >= 2 ? 'border-red-600' : 'border-gray-200'
              } mx-4`}></div>
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= 2 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <div className={`ml-2 text-sm font-medium ${
                  currentStep >= 2 ? 'text-red-600' : 'text-gray-500'
                }`}>
                  Hospital & Contact
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit}>
            {renderStep()}
          </form>
        </div>
        
        {/* Information Box */}
        {currentStep < 3 && (
          <div className="mt-8 bg-blue-50 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Information</h3>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-2 flex-shrink-0">1</span>
                <span>Emergency requests are prioritized and sent to donors immediately.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-2 flex-shrink-0">2</span>
                <span>Provide accurate hospital information for donors to locate easily.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-2 flex-shrink-0">3</span>
                <span>Ensure you have a valid prescription or hospital documentation for the blood requirement.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 mr-2 flex-shrink-0">4</span>
                <span>Our team may contact you to verify the details before processing the request.</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyRequest;