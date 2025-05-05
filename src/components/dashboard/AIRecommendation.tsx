
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface AIRecommendationProps {
  userType: 'farmer' | 'buyer';
}

// Mock price forecast data
const priceForecastData = [
  { month: 'Jan', price: 3200 },
  { month: 'Feb', price: 3400 },
  { month: 'Mar', price: 3800 },
  { month: 'Apr', price: 4200 },
  { month: 'May', price: 3900 },
  { month: 'Jun', price: 3600 },
];

const AIRecommendation = ({ userType }: AIRecommendationProps) => {
  return (
    <Card className="border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-agri-dark">AI Insights</CardTitle>
        <CardDescription>
          {userType === 'farmer' 
            ? 'Crop recommendations based on market demand and your farm profile'
            : 'Procurement recommendations based on market trends'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {userType === 'farmer' ? (
          <div className="space-y-4">
            <div>
              <p className="font-medium text-sm mb-2">Recommended Crops for this season:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="border rounded-md p-3 bg-agri-light text-center">
                  <p className="font-medium">Cotton</p>
                  <p className="text-xs text-gray-600">High demand</p>
                </div>
                <div className="border rounded-md p-3 bg-agri-light text-center">
                  <p className="font-medium">Wheat</p>
                  <p className="text-xs text-gray-600">Price trending up</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="font-medium text-sm mb-2">Price Forecast (Cotton):</p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={priceForecastData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2E7D32" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      hide={true}
                      domain={['dataMin - 500', 'dataMax + 500']}
                    />
                    <Tooltip 
                      formatter={(value) => [`₹${value}`, 'Price per quintal']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#2E7D32" 
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="font-medium text-sm mb-2">Recommended Procurements:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="border rounded-md p-3 bg-agri-light text-center">
                  <p className="font-medium">Rice</p>
                  <p className="text-xs text-gray-600">Low current prices</p>
                </div>
                <div className="border rounded-md p-3 bg-agri-light text-center">
                  <p className="font-medium">Pulses</p>
                  <p className="text-xs text-gray-600">High availability</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="font-medium text-sm mb-2">Best Sourcing Regions:</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md p-2 text-center">
                  <p className="text-sm">Haryana</p>
                  <p className="text-xs text-agri-primary">For Wheat</p>
                </div>
                <div className="border rounded-md p-2 text-center">
                  <p className="text-sm">Maharashtra</p>
                  <p className="text-xs text-agri-primary">For Cotton</p>
                </div>
                <div className="border rounded-md p-2 text-center">
                  <p className="text-sm">Karnataka</p>
                  <p className="text-xs text-agri-primary">For Pulses</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="font-medium text-sm mb-2">Price Forecast (Rice):</p>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={priceForecastData.map(d => ({...d, price: d.price * 0.8}))}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFB300" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FFB300" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="month" 
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      hide={true}
                      domain={['dataMin - 500', 'dataMax + 500']}
                    />
                    <Tooltip 
                      formatter={(value) => [`₹${value}`, 'Price per quintal']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#FFB300" 
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Detailed Analysis
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AIRecommendation;
