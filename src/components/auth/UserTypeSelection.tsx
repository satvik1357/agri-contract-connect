
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface UserTypeSelectionProps {
  setUserType: (type: 'farmer' | 'buyer') => void;
}

const UserTypeSelection = ({ setUserType }: UserTypeSelectionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-agri-dark">
        Select User Type
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          className="cursor-pointer card-hover border-2 hover:border-agri-primary"
          onClick={() => setUserType('farmer')}
        >
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-agri-light rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-agri-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Farmer</h3>
            <p className="text-gray-600 text-center mb-4">Sell your crops and find buyers through contracts</p>
            <div className="flex items-center text-agri-primary">
              <span>Select</span>
              <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </CardContent>
        </Card>
        
        <Card 
          className="cursor-pointer card-hover border-2 hover:border-agri-secondary"
          onClick={() => setUserType('buyer')}
        >
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-agri-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Buyer</h3>
            <p className="text-gray-600 text-center mb-4">Source quality produce directly from farmers</p>
            <div className="flex items-center text-agri-secondary">
              <span>Select</span>
              <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserTypeSelection;
