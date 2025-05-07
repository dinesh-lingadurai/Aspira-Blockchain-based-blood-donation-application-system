import React from 'react';
import { Heart, Users, Target, Calendar, Globe, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-90"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6823563/pexels-photo-6823563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30"
          aria-hidden="true"
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Aspira</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Connecting donors with those in need to save lives through the gift of blood donation.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Aspira was founded in 2020 with a simple mission: to bridge the gap between blood donors and those in need. 
                What began as a small community initiative has grown into a nationwide network of compassionate individuals 
                united by the goal of saving lives through blood donation.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Dr. Elena Rodriguez, witnessed firsthand the critical shortage of blood in hospitals 
                during her medical career. She recognized that while many people were willing to donate, they often 
                didn't know where or when their donation was most needed. This insight led to the creation of Aspira—a 
                platform that connects donors directly with recipients in real-time.
              </p>
              <p className="text-gray-600">
                Today, Aspira has facilitated over 10,000 successful donations, helping save countless lives across the country. 
                Our network continues to grow, driven by the generosity of our donors and the dedication of our team.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Medical professionals working together" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-red-100 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create a responsive and efficient blood donation ecosystem that ensures every patient in need 
                has timely access to life-saving blood. We strive to remove barriers to donation and make the process 
                simple, safe, and accessible for all willing donors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a future where no life is lost due to blood shortage. Aspira aims to create a global 
                community of committed donors, connected through technology, ready to respond to the needs of their 
                communities. We believe in a world where blood donation is a regular part of healthy living.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="rounded-full bg-red-100 w-16 h-16 mx-auto flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We believe in the power of empathy and kindness. Every action we take is driven by genuine 
                concern for patients and their families facing medical challenges.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="rounded-full bg-green-100 w-16 h-16 mx-auto flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a supportive network where donors and recipients come together as one community, 
                united by the shared goal of saving lives through blood donation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="rounded-full bg-purple-100 w-16 h-16 mx-auto flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all aspects of our service. From the technology we develop to 
                the support we provide, quality and safety are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated individuals working behind the scenes to make our mission a reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dr. Elena Rodriguez" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Dr. Elena Rodriguez</h3>
                <p className="text-gray-500 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With over 15 years of experience in hematology, Dr. Rodriguez leads Aspira's mission to 
                  revolutionize blood donation accessibility.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="David Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">David Chen</h3>
                <p className="text-gray-500 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  David leads our technology team, developing innovative solutions to connect donors 
                  with patients more effectively.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah Johnson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                <p className="text-gray-500 mb-4">Director of Operations</p>
                <p className="text-gray-600">
                  Sarah ensures the smooth functioning of our daily operations and manages partnerships 
                  with hospitals nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Every donation makes a difference. Here's how Aspira is changing lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="h-full bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">By The Numbers</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
                    <div className="text-gray-600">Donations Facilitated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">5K+</div>
                    <div className="text-gray-600">Registered Donors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">250+</div>
                    <div className="text-gray-600">Hospital Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">30K+</div>
                    <div className="text-gray-600">Lives Impacted</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-4">Geographical Reach</h4>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive map showing coverage area</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-full bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Success Stories</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900">Emergency Response</h4>
                    <p className="text-gray-600 mt-2">
                      During the 2023 highway accident, Aspira mobilized 47 donors in under 2 hours, 
                      meeting the critical blood needs for all injured victims.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">Rare Blood Type Network</h4>
                    <p className="text-gray-600 mt-2">
                      Our specialized database helped locate three donors with the rare Bombay blood 
                      phenotype for a critical surgery, saving a young patient's life.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">Rural Outreach</h4>
                    <p className="text-gray-600 mt-2">
                      Our mobile donation drives in underserved communities have increased blood donation 
                      rates by 35% in rural areas previously facing chronic shortages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Every 2 seconds, someone needs blood. By becoming a donor, you can directly impact 
            lives in your community. Join Aspira today and be part of our lifesaving mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/register" 
              className="inline-block bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-md font-semibold text-lg transition duration-150"
            >
              Register as a Donor
            </a>
            <a 
              href="/contact" 
              className="inline-block bg-transparent text-white border border-white hover:bg-red-500 px-8 py-4 rounded-md font-semibold text-lg transition duration-150"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with healthcare organizations to ensure blood availability for all.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="p-4 flex justify-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="font-semibold text-gray-600">Hospital A</span>
              </div>
            </div>
            <div className="p-4 flex justify-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="font-semibold text-gray-600">Medical Center</span>
              </div>
            </div>
            <div className="p-4 flex justify-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="font-semibold text-gray-600">Health Organization</span>
              </div>
            </div>
            <div className="p-4 flex justify-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="font-semibold text-gray-600">Research Institute</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;