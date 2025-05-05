
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-agri-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from farmers and buyers who have transformed their business with AgriConnect
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Before AgriConnect, I struggled to find buyers for my wheat crop. Now I have secure contracts with fair prices locked in before the season starts."
            name="Rajesh Singh"
            role="Wheat Farmer, Punjab"
            initials="RS"
            bgColor="bg-agri-primary"
          />
          
          <TestimonialCard 
            quote="As a food processing company, we need consistent quality and quantity. AgriConnect helps us source directly from verified farmers with clear contracts."
            name="Anika Patel"
            role="Procurement Manager, FreshFoods Ltd"
            initials="AP"
            bgColor="bg-agri-secondary"
          />
          
          <TestimonialCard 
            quote="The AI price recommendations are spot on! I was able to negotiate better terms based on the platform's market insights."
            name="K. Ramesh"
            role="Cotton Farmer, Maharashtra"
            initials="KR"
            bgColor="bg-agri-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
