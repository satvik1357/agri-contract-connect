
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-md">
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <LoginForm />
            
            <div className="mt-8 text-center border-t pt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-agri-primary hover:underline">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
