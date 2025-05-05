
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Farm, Tractor } from 'lucide-react';

const About = () => {
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
                  About AgriConnect
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Our mission is to revolutionize contract farming in India by connecting farmers directly 
                  with buyers, ensuring fair prices and transparent agreements through technology.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Farmers in a field"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">Our Story</h2>
              <p className="text-lg text-gray-700">
                AgriConnect was born from witnessing the challenges faced by small-scale farmers across India. 
                In 2023, our team of agricultural experts and technology innovators came together with a shared vision: 
                to create a platform that would empower farmers through secure contract farming opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold text-agri-dark mb-4">The Problem We Solve</h3>
                <p className="text-gray-700 mb-4">
                  For decades, farmers have faced uncertainty in pricing, delayed payments, and exploitation by middlemen. 
                  Meanwhile, buyers struggle with inconsistent quality, unreliable supply chains, and limited access to 
                  produce traceable to its source.
                </p>
                <p className="text-gray-700">
                  Contract farming offers a solution, but traditional paper-based contracts lack transparency, are difficult to enforce, 
                  and often favor larger entities with more resources and legal expertise.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-agri-dark mb-4">Our Solution</h3>
                <p className="text-gray-700 mb-4">
                  AgriConnect bridges this gap with a digital platform that makes contract farming accessible, transparent, and 
                  beneficial for all parties involved. Our AI-powered system recommends fair prices based on real-time market data, 
                  generates legally binding digital contracts, and ensures secure payments.
                </p>
                <p className="text-gray-700">
                  By leveraging technology, we're creating a more equitable agricultural ecosystem where farmers can secure their 
                  income before planting, and buyers can guarantee their supply chain with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16 bg-agri-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our diverse team brings together expertise in agriculture, technology, and business 
                to create innovative solutions for India's farming community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-agri-primary" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">Ankit Sharma</h3>
                  <p className="text-gray-500 mb-3">CEO & Co-Founder</p>
                  <p className="text-gray-700">
                    Agricultural economist with 15 years of experience working with farming communities across India.
                  </p>
                </CardContent>
              </Card>
              
              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-agri-secondary" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">Priya Patel</h3>
                  <p className="text-gray-500 mb-3">CTO & Co-Founder</p>
                  <p className="text-gray-700">
                    AI specialist with a background in developing technology solutions for rural sectors.
                  </p>
                </CardContent>
              </Card>
              
              {/* Team Member 3 */}
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Users size={64} className="text-agri-accent" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">Rahul Verma</h3>
                  <p className="text-gray-500 mb-3">Head of Operations</p>
                  <p className="text-gray-700">
                    Former supply chain manager with extensive experience in agricultural procurement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">Our Values</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The principles that guide everything we do at AgriConnect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Value 1 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="h-10 w-10 text-agri-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark">Farmer First</h3>
                  <p className="text-gray-700">
                    We design every feature with the farmer in mind, ensuring that our platform 
                    is accessible, beneficial, and empowering for agricultural producers of all sizes.
                  </p>
                </div>
              </div>
              
              {/* Value 2 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="h-10 w-10 text-agri-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark">Transparency</h3>
                  <p className="text-gray-700">
                    We believe in complete visibility throughout the contract farming process, 
                    from price determination to payment schedules and quality expectations.
                  </p>
                </div>
              </div>
              
              {/* Value 3 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="h-10 w-10 text-agri-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously evolve our technology to address the changing needs of 
                    the agricultural sector and create meaningful impact.
                  </p>
                </div>
              </div>
              
              {/* Value 4 */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="h-10 w-10 text-agri-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark">Integrity</h3>
                  <p className="text-gray-700">
                    We maintain the highest standards of honesty, fairness, and ethical conduct 
                    in all our operations and interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-agri-dark text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join the AgriConnect Community</h2>
              <p className="text-xl mb-8">
                Whether you're a farmer looking for secure contracts or a buyer seeking reliable produce, 
                we invite you to become part of the AgriConnect story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="bg-agri-primary hover:bg-green-700 text-white px-8 py-6 text-lg">
                    Register Now
                  </Button>
                </Link>
                <Link to="/learn-more">
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

export default About;
