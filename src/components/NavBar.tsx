
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import logo from '../assets/agri-logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="AgriConnect Logo" className="h-10 w-10" />
            <span className="text-xl font-display font-bold text-agri-dark">AgriConnect</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-agri-dark hover:text-agri-primary transition-colors">Home</Link>
            <Link to="/about" className="text-agri-dark hover:text-agri-primary transition-colors">About</Link>
            <Link to="/contracts" className="text-agri-dark hover:text-agri-primary transition-colors">Contracts</Link>
            
            {!isLoggedIn ? (
              <div className="flex space-x-3">
                <Link to="/login">
                  <Button variant="outline" className="border-agri-primary text-agri-primary hover:bg-agri-primary hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-agri-primary text-white hover:bg-agri-dark">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/dashboard">
                <Button className="bg-agri-primary text-white hover:bg-agri-dark flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-agri-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-agri-dark hover:text-agri-primary transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-agri-dark hover:text-agri-primary transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/contracts" className="text-agri-dark hover:text-agri-primary transition-colors" onClick={() => setIsOpen(false)}>
                Contracts
              </Link>
              
              {!isLoggedIn ? (
                <div className="flex flex-col space-y-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-agri-primary text-agri-primary hover:bg-agri-primary hover:text-white">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-agri-primary text-white hover:bg-agri-dark">
                      Register
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-agri-primary text-white hover:bg-agri-dark flex items-center justify-center">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
