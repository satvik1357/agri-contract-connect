
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-agri-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Agricultural Business?</h2>
          <p className="text-xl mb-8">
            Join thousands of farmers and buyers already using AgriConnect 
            to secure their agricultural future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="bg-agri-primary hover:bg-green-700 text-white px-8 py-6 text-lg">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/contracts">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-dark px-8 py-6 text-lg">
                Browse Contracts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
