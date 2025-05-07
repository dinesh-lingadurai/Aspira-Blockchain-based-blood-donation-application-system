import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  bloodGroup: string;
  isVerified: boolean;
  isDonor: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: Partial<User>, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Mock auth functions for demonstration
  const login = async (email: string, password: string) => {
    // This would be replaced with actual API calls
    console.log(`Logging in with ${email} and ${password}`);
    // Mock successful login
    setCurrentUser({
      id: '1',
      name: 'John Doe',
      email: email,
      bloodGroup: 'O+',
      isVerified: true,
      isDonor: true
    });
  };
  
  const signup = async (userData: Partial<User>, password: string) => {
    // This would be replaced with actual API calls
    console.log('Signing up with:', userData, password);
    // Mock successful signup
    setCurrentUser({
      id: '2',
      name: userData.name || 'New User',
      email: userData.email || '',
      bloodGroup: userData.bloodGroup || 'Unknown',
      isVerified: false,
      isDonor: userData.isDonor || false
    });
  };
  
  const logout = () => {
    setCurrentUser(null);
  };
  
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    signup,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};