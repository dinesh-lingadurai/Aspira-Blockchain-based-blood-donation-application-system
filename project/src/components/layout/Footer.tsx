import React from 'react';
import { Link } from 'react-router-dom';
import { Crop as Drop, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Drop className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold">ASPIRA</span>
            </div>
            <p className="text-gray-300 mb-6">
              Aspira connects blood donors with those in need, saving lives through our network of committed volunteers and modern technology.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/search" className="text-gray-300 hover:text-white transition">
                  Find Blood Donors
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition">
                  Register as Donor
                </Link>
              </li>
              <li>
                <Link to="/emergency-request" className="text-gray-300 hover:text-white transition">
                  Emergency Blood Request
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition">
                  Upcoming Donation Drives
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition">
                  Blood Donation Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  About Aspira
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Main Street, City Center, Country - 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@aspira.org" className="text-gray-300 hover:text-white transition">
                  info@aspira.org
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on upcoming blood donation drives and awareness programs.
            </p>
            <form className="space-y-2">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-white font-medium transition duration-150"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aspira Blood Donation. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-400 hover:text-white transition">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;