
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Check, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
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
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Farming Landscape"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
              <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="w-16 h-16 bg-agri-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-agri-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">Smart Contracts</h3>
                <p className="text-gray-600">
                  Digitally generated and legally binding contracts with e-signature capabilities for quick and secure agreements.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-agri-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">AI Price Intelligence</h3>
                <p className="text-gray-600">
                  Advanced price recommendations based on market trends, helping farmers maximize profits and buyers optimize costs.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-agri-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">Secure Payments</h3>
                <p className="text-gray-600">
                  Protected payment system with escrow functionality ensures farmers get paid on time and buyers receive quality produce.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
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
                  {/* Step 1 */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-agri-primary text-white flex items-center justify-center">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-agri-dark">Register & Create Profile</h3>
                      <p className="text-gray-600">
                        Sign up as a farmer or buyer and complete your profile with all 
                        relevant details about your farm or business.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-agri-primary text-white flex items-center justify-center">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-agri-dark">Browse or Create Contracts</h3>
                      <p className="text-gray-600">
                        Farmers can browse available contracts, while buyers can post 
                        their crop requirements with detailed terms and conditions.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-agri-primary text-white flex items-center justify-center">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-agri-dark">Negotiate & Sign</h3>
                      <p className="text-gray-600">
                        Review terms, negotiate if needed, and digitally sign contracts 
                        using our secure e-signature system.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-agri-primary text-white flex items-center justify-center">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-agri-dark">Fulfill & Get Paid</h3>
                      <p className="text-gray-600">
                        Track contract progress, manage deliveries, and receive secure
                        payments through our escrow system.
                      </p>
                    </div>
                  </div>
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
        
        {/* Testimonials */}
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
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {/* Rating */}
                  <div className="flex text-agri-secondary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">
                    "Before AgriConnect, I struggled to find buyers for my wheat crop. Now I have
                    secure contracts with fair prices locked in before the season starts."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-agri-primary text-white rounded-full flex items-center justify-center mr-3">
                      RS
                    </div>
                    <div>
                      <p className="font-semibold">Rajesh Singh</p>
                      <p className="text-sm text-gray-600">Wheat Farmer, Punjab</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {/* Rating */}
                  <div className="flex text-agri-secondary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">
                    "As a food processing company, we need consistent quality and quantity. 
                    AgriConnect helps us source directly from verified farmers with clear contracts."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-agri-secondary text-white rounded-full flex items-center justify-center mr-3">
                      AP
                    </div>
                    <div>
                      <p className="font-semibold">Anika Patel</p>
                      <p className="text-sm text-gray-600">Procurement Manager, FreshFoods Ltd</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  {/* Rating */}
                  <div className="flex text-agri-secondary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">
                    "The AI price recommendations are spot on! I was able to negotiate better 
                    terms based on the platform's market insights."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-agri-accent text-white rounded-full flex items-center justify-center mr-3">
                      KR
                    </div>
                    <div>
                      <p className="font-semibold">K. Ramesh</p>
                      <p className="text-sm text-gray-600">Cotton Farmer, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
