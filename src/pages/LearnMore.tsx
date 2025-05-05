
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Farm, Tractor, Image } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-agri-light to-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agri-dark mb-4">
                How AgriConnect Works
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Discover how our platform is transforming contract farming in India 
                through technology, transparency, and trust.
              </p>
            </div>
          </div>
        </section>
        
        {/* What is Contract Farming */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-agri-dark mb-4">What is Contract Farming?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Contract farming is an agreement between farmers and buyers established before production begins.
                  Farmers commit to producing a specific agricultural product in a specified quantity and quality,
                  while buyers commit to purchasing the product at a predetermined price.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  This arrangement provides farmers with income security and access to markets,
                  while giving buyers a reliable source of quality produce.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-agri-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Guaranteed market for farmers' produce</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-agri-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Predetermined prices protect farmers from market fluctuations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-agri-primary mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Buyers secure their supply chain with quality assurance</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1629465387350-8303ad821dab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Farmers in a field discussing contracts"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why AgriConnect */}
        <section className="py-16 bg-agri-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">Why Choose AgriConnect?</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our platform solves the traditional challenges of contract farming through 
                innovative technology and user-centered design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-agri-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Farm className="w-8 h-8 text-agri-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark text-center">AI-Powered Pricing</h3>
                  <p className="text-gray-700 text-center">
                    Our intelligent price recommendation system analyzes market data to suggest 
                    fair prices for both farmers and buyers.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tractor className="w-8 h-8 text-agri-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark text-center">Digital Contracts</h3>
                  <p className="text-gray-700 text-center">
                    Legally binding contracts with e-signature capability make the agreement process 
                    simple, transparent, and secure.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image className="w-8 h-8 text-agri-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-agri-dark text-center">Secure Payments</h3>
                  <p className="text-gray-700 text-center">
                    Our escrow payment system ensures farmers get paid on time and buyers 
                    receive quality produce as agreed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works - Detailed */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">The AgriConnect Process</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A detailed look at how our platform connects farmers with buyers through a seamless process.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agri-primary text-white flex items-center justify-center mr-6 mb-4 md:mb-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-agri-dark">Registration & Profile Creation</h3>
                  <p className="text-gray-700 mb-4">
                    Both farmers and buyers complete a verification process to join AgriConnect. Farmers provide details 
                    about their land, crops, and farming experience. Buyers share information about their business and purchasing needs.
                  </p>
                  <Card className="bg-agri-light bg-opacity-30 border-0">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-700 italic">
                        "The registration process was simple, even for someone like me who isn't very tech-savvy. 
                        The field representatives helped me set up my profile in just 15 minutes."
                        <br />
                        <span className="font-medium mt-2 block">— Rajendra Kumar, Farmer from Bihar</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agri-primary text-white flex items-center justify-center mr-6 mb-4 md:mb-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-agri-dark">Contract Creation & Matching</h3>
                  <p className="text-gray-700 mb-4">
                    Buyers post their requirements for specific crops, including quantity, quality standards, and delivery timeline. 
                    Farmers can browse available contracts or receive AI-powered recommendations for contracts that match their 
                    production capabilities and location.
                  </p>
                  <Card className="bg-agri-light bg-opacity-30 border-0">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-700 italic">
                        "As a food processing company, we need consistent supply of quality tomatoes. 
                        AgriConnect helped us find reliable farmers within 50km of our facility, reducing our logistics costs by 30%."
                        <br />
                        <span className="font-medium mt-2 block">— Meera Desai, Procurement Manager at FreshFoods Ltd</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agri-primary text-white flex items-center justify-center mr-6 mb-4 md:mb-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-agri-dark">Negotiation & Agreement</h3>
                  <p className="text-gray-700 mb-4">
                    Our platform enables transparent negotiation on price, quantity, and terms. The AI price recommendation 
                    tool provides both parties with fair market-based suggestions. Once terms are finalized, 
                    a digital contract is generated and signed electronically.
                  </p>
                  <Card className="bg-agri-light bg-opacity-30 border-0">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-700 italic">
                        "The AI price recommendation helped me negotiate a better rate for my organic rice. 
                        I'm now getting 15% more than what local traders were offering."
                        <br />
                        <span className="font-medium mt-2 block">— Lakshmi Prasad, Farmer from Andhra Pradesh</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agri-primary text-white flex items-center justify-center mr-6 mb-4 md:mb-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-agri-dark">Fulfillment & Payment</h3>
                  <p className="text-gray-700 mb-4">
                    The platform tracks the progress of each contract. Upon delivery and quality verification, 
                    the buyer releases payment through our secure payment system. Both parties can rate and review 
                    each other, building a reputation system within the platform.
                  </p>
                  <Card className="bg-agri-light bg-opacity-30 border-0">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-700 italic">
                        "The escrow payment system gives me peace of mind. I know I'll get paid as soon as I deliver my produce. 
                        No more waiting for months to receive my money."
                        <br />
                        <span className="font-medium mt-2 block">— Harpreet Singh, Farmer from Punjab</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-agri-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-agri-dark mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about AgriConnect and contract farming.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* FAQ Item 1 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">Is AgriConnect available in all states of India?</h3>
                <p className="text-gray-700">
                  Currently, AgriConnect is operational in Maharashtra, Punjab, Haryana, Karnataka, Andhra Pradesh, and Tamil Nadu. 
                  We are rapidly expanding to other states and expect nationwide coverage by the end of 2025.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">What types of crops are supported on the platform?</h3>
                <p className="text-gray-700">
                  AgriConnect supports a wide range of crops including cereals, pulses, vegetables, fruits, spices, and cash crops. 
                  If you have specific crop requirements that you don't see listed, please contact our support team.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">What fees does AgriConnect charge?</h3>
                <p className="text-gray-700">
                  For farmers, basic registration and browsing available contracts is completely free. We charge a small success fee 
                  (2%) only when a contract is successfully fulfilled and payment is received. For buyers, there's a subscription 
                  model with different tiers based on volume and features required.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">How does AgriConnect ensure quality standards?</h3>
                <p className="text-gray-700">
                  Quality standards are clearly defined in each contract. We provide tools for documenting and verifying product quality 
                  at delivery. In case of disputes, our quality assessment team can facilitate third-party testing and resolution.
                </p>
              </div>
              
              {/* FAQ Item 5 */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-agri-dark">What if a farmer is unable to fulfill the contract due to natural calamities?</h3>
                <p className="text-gray-700">
                  Our contracts include force majeure clauses to protect farmers in case of natural disasters. Additionally, 
                  we offer an optional crop insurance integration to provide further security for both farmers and buyers.
                </p>
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
                Join thousands of farmers and buyers already benefiting from AgriConnect's innovative platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button className="bg-agri-primary hover:bg-green-700 text-white px-8 py-6 text-lg">
                    Register Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-agri-dark px-8 py-6 text-lg">
                    Contact Support
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
