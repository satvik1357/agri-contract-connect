
import React from 'react';
import ProcessStep from './ProcessStep';

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-agri-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-agri-dark mb-4">
            How AgriConnect Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform simplifies contract farming with an easy-to-follow process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <ProcessStep 
                number={1}
                title="Register & Create Profile"
                description="Sign up as a farmer or buyer and complete your profile with all relevant details about your farm or business."
              />
              
              <ProcessStep 
                number={2}
                title="Browse or Create Contracts"
                description="Farmers can browse available contracts, while buyers can post their crop requirements with detailed terms and conditions."
              />
              
              <ProcessStep 
                number={3}
                title="Negotiate & Sign"
                description="Review terms, negotiate if needed, and digitally sign contracts using our secure e-signature system."
              />
              
              <ProcessStep 
                number={4}
                title="Fulfill & Get Paid"
                description="Track contract progress, manage deliveries, and receive secure payments through our escrow system."
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Contract Farming Process"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
