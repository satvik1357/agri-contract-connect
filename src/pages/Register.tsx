
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UserTypeSelection from '@/components/auth/UserTypeSelection';
import RegisterForm from '@/components/auth/RegisterForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Register = () => {
  const [userType, setUserType] = useState<'farmer' | 'buyer' | null>(null);
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* Back button */}
          {userType && (
            <Button 
              variant="ghost" 
              className="mb-6 text-agri-primary hover:text-agri-dark hover:bg-agri-light"
              onClick={() => setUserType(null)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to User Selection
            </Button>
          )}
          
          {/* Registration form container */}
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            {userType === null ? (
              <UserTypeSelection setUserType={setUserType} />
            ) : (
              <RegisterForm userType={userType} />
            )}
            
            <div className="mt-8 text-center border-t pt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-agri-primary hover:underline">
                  Login Here
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

export default Register;
