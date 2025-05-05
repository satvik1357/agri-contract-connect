
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe, Tractor } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-agri-light to-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-agri-dark mb-4">
                  Learn More About AgriConnect
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Discover how AgriConnect is transforming contract farming in India, 
                  empowering farmers and buyers with innovative technology solutions.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1624774737000-c8440539999d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Learn more about AgriConnect"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">
                Key Benefits of AgriConnect
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Explore the advantages of using our platform for contract farming.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <CheckCircle size={64} className="text-agri-primary" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">Secure Contracts</h3>
                  <p className="text-gray-700">
                    Digitally signed and legally binding contracts ensure clarity and security for all parties.
                  </p>
                </CardContent>
              </Card>
              
              {/* Benefit 2 */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Globe size={64} className="text-agri-secondary" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">Fair Pricing</h3>
                  <p className="text-gray-700">
                    AI-driven price recommendations based on market trends help farmers maximize profits.
                  </p>
                </CardContent>
              </Card>
              
              {/* Benefit 3 */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Tractor size={64} className="text-agri-accent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">Efficient Processes</h3>
                  <p className="text-gray-700">
                    Streamlined contract management and payment processes save time and reduce administrative overhead.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-agri-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">
                How AgriConnect Works
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Learn about the simple steps to get started with AgriConnect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-agri-dark mb-4">
                  For Farmers
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Create a profile with details about your farm and crops.</li>
                  <li>Browse available contracts or create your own terms.</li>
                  <li>Negotiate and sign contracts digitally.</li>
                  <li>Manage deliveries and receive secure payments.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-agri-dark mb-4">
                  For Buyers
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Register and specify your crop requirements.</li>
                  <li>Browse farmer profiles and available contracts.</li>
                  <li>Negotiate terms and sign contracts digitally.</li>
                  <li>Track deliveries and make secure payments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">
                Our Technology
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover the technology that powers AgriConnect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-agri-dark mb-4">
                  AI-Powered Price Recommendations
                </h3>
                <p className="text-gray-700">
                  Our AI algorithms analyze market data to provide fair and accurate price recommendations, 
                  ensuring farmers get the best value for their crops and buyers optimize their costs.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560415735-3c9949f02741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="AI-Powered Price Recommendations"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-agri-dark text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8">
                Join AgriConnect today and transform your agricultural business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="bg-agri-primary hover:bg-green-700 text-white px-8 py-6 text-lg">
                    Register Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-dark px-8 py-6 text-lg">
                    Learn More
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

export default LearnMore;
