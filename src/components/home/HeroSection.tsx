
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-agri-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-agri-dark mb-4">
              Connect, Contract, Cultivate with Confidence
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              AgriConnect brings farmers and buyers together through AI-powered 
              contract farming - ensuring fair prices, transparent agreements, 
              and reliable partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-agri-primary hover:bg-agri-dark text-white px-8 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-agri-primary text-agri-primary hover:bg-agri-light px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Farmers working in a field"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
