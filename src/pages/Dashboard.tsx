
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContractCard from '@/components/dashboard/ContractCard';
import StatCard from '@/components/dashboard/StatCard';
import AIRecommendation from '@/components/dashboard/AIRecommendation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock contracts data for demonstration
const mockContracts = [
  {
    id: '1',
    title: 'High Quality Wheat Supply',
    cropType: 'Wheat',
    quantity: '500 quintals',
    price: '2200/quintal',
    location: 'Punjab',
    deliveryDate: '15 Oct 2025',
    status: 'open' as const
  },
  {
    id: '2',
    title: 'Organic Cotton Contract',
    cropType: 'Cotton',
    quantity: '200 quintals',
    price: '7500/quintal',
    location: 'Gujarat',
    deliveryDate: '20 Nov 2025',
    status: 'pending' as const
  },
  {
    id: '3',
    title: 'Rice Procurement Contract',
    cropType: 'Rice',
    quantity: '600 quintals',
    price: '2400/quintal',
    location: 'Haryana',
    deliveryDate: '05 Dec 2025',
    status: 'active' as const
  },
  {
    id: '4',
    title: 'Sugarcane Processing Deal',
    cropType: 'Sugarcane',
    quantity: '1000 quintals',
    price: '350/quintal',
    location: 'Maharashtra',
    deliveryDate: '10 Jan 2026',
    status: 'completed' as const
  }
];

const Dashboard = () => {
  const [userType, setUserType] = useState<'farmer' | 'buyer'>('farmer');
  const [activeTab, setActiveTab] = useState('all');
  
  const farmerStats = [
    {
      title: 'Active Contracts',
      value: 3,
      change: { value: '20%', positive: true },
      icon: (
        <svg className="h-6 w-6 text-agri-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Total Earnings',
      value: '₹45,600',
      change: { value: '15%', positive: true },
      icon: (
        <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Pending Delivery',
      value: 2,
      change: { value: '10%', positive: false },
      icon: (
        <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Completed Contracts',
      value: 12,
      icon: (
        <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12L9 15M12 12L15 15M12 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];
  
  const buyerStats = [
    {
      title: 'Active Contracts',
      value: 5,
      change: { value: '25%', positive: true },
      icon: (
        <svg className="h-6 w-6 text-agri-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Total Spent',
      value: '₹1,24,800',
      change: { value: '8%', positive: false },
      icon: (
        <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Pending Delivery',
      value: 3,
      change: { value: '15%', positive: true },
      icon: (
        <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: 'Total Farmers Connected',
      value: 28,
      icon: (
        <svg className="h-6 w-6 text-agri-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 16C16 14.3431 14.2091 13 12 13C9.79086 13 8 14.3431 8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];
  
  // Filter contracts based on the active tab
  const filteredContracts = mockContracts.filter(contract => {
    if (activeTab === 'all') return true;
    return contract.status === activeTab;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Dashboard Header */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-agri-dark">
                {userType === 'farmer' ? 'Farmer Dashboard' : 'Buyer Dashboard'}
              </h1>
              <p className="text-gray-600">
                Welcome back! Here's an overview of your contracts and activities.
              </p>
            </div>
            
            {/* User Type Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-600">View as:</span>
              <div className="flex rounded-md overflow-hidden border">
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    userType === 'farmer'
                      ? 'bg-agri-primary text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  onClick={() => setUserType('farmer')}
                >
                  Farmer
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    userType === 'buyer'
                      ? 'bg-agri-primary text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  onClick={() => setUserType('buyer')}
                >
                  Buyer
                </button>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {(userType === 'farmer' ? farmerStats : buyerStats).map((stat, index) => (
              <StatCard 
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                change={stat.change}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Contracts Section */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h2 className="text-xl font-semibold text-agri-dark">Your Contracts</h2>
                  
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input 
                        type="search"
                        placeholder="Search contracts..." 
                        className="pl-9 w-[200px] h-9"
                      />
                    </div>
                    
                    <Button 
                      className={`bg-agri-primary hover:bg-agri-dark text-white`}
                    >
                      {userType === 'farmer' ? 'Create Crop Listing' : 'Post New Contract'}
                    </Button>
                  </div>
                </div>
                
                <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value)}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="open">Open</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value={activeTab} className="mt-0">
                    <div className="grid grid-cols-1 gap-6">
                      {filteredContracts.length > 0 ? (
                        filteredContracts.map((contract) => (
                          <ContractCard
                            key={contract.id}
                            {...contract}
                            userType={userType}
                          />
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500">No contracts found.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* AI Recommendations Panel */}
            <div>
              <AIRecommendation userType={userType} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
