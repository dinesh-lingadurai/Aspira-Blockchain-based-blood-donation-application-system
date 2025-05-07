import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Crop as Drop, Heart, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, isAuthenticated, logout } = useAuth();
  
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Aspira Blood Donation App"
            >
              <Drop className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">ASPIRA</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
              Home
            </Link>
            <Link to="/search" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
              Find Donors
            </Link>
            <Link to="/register" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
              Register as Donor
            </Link>
            <Link to="/emergency-request" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
              Emergency Request
            </Link>
            <Link to="/events" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
              Events
            </Link>
            <Link to="/about" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
              About Us
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white hover:text-red-100 px-3 py-2 text-sm font-medium transition duration-150">
                  Login
                </Link>
                <Link to="/signup" className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition duration-150">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-100 hover:bg-red-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-700">
            <Link 
              to="/" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Donors
            </Link>
            <Link 
              to="/register" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Register as Donor
            </Link>
            <Link 
              to="/emergency-request" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Emergency Request
            </Link>
            <Link 
              to="/events" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="pt-4 pb-3 border-t border-red-800">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard"
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;