
import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-agri-dark mb-4">
            Why Choose AgriConnect?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform is designed to empower both farmers and buyers with technology 
            that makes contract farming more accessible, transparent, and profitable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard 
            icon={
              <svg className="w-8 h-8 text-agri-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Smart Contracts"
            description="Digitally generated and legally binding contracts with e-signature capabilities for quick and secure agreements."
            bgColor="bg-agri-light"
            iconColor="text-agri-primary"
          />
          
          {/* Feature 2 */}
          <FeatureCard 
            icon={
              <svg className="w-8 h-8 text-agri-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="AI Price Intelligence"
            description="Advanced price recommendations based on market trends, helping farmers maximize profits and buyers optimize costs."
            bgColor="bg-amber-50"
            iconColor="text-agri-secondary"
          />
          
          {/* Feature 3 */}
          <FeatureCard 
            icon={
              <svg className="w-8 h-8 text-agri-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Secure Payments"
            description="Protected payment system with escrow functionality ensures farmers get paid on time and buyers receive quality produce."
            bgColor="bg-blue-50"
            iconColor="text-agri-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
