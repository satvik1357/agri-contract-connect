
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarCheck, MapPin } from 'lucide-react';

interface ContractCardProps {
  id: string;
  title: string;
  cropType: string;
  quantity: string;
  price: string;
  location: string;
  deliveryDate: string;
  status: 'open' | 'pending' | 'active' | 'completed';
  userType: 'farmer' | 'buyer';
}

const statusColors = {
  open: 'bg-blue-100 text-blue-800',
  pending: 'bg-amber-100 text-amber-800',
  active: 'bg-green-100 text-green-800',
  completed: 'bg-purple-100 text-purple-800',
};

const ContractCard = ({
  id,
  title,
  cropType,
  quantity,
  price,
  location,
  deliveryDate,
  status,
  userType,
}: ContractCardProps) => {
  return (
    <Card className="card-hover border overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg text-agri-dark">{title}</CardTitle>
            <CardDescription className="text-gray-500">{cropType}</CardDescription>
          </div>
          <Badge className={statusColors[status]} variant="outline">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="text-xs text-gray-500">Quantity</p>
            <p className="font-medium">{quantity}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="font-medium text-agri-primary">₹{price}</p>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3 text-gray-500" />
            <p className="text-sm">{location}</p>
          </div>
          <div className="flex items-center space-x-1">
            <CalendarCheck className="h-3 w-3 text-gray-500" />
            <p className="text-sm">{deliveryDate}</p>
          </div>
        </div>
        
        {userType === 'farmer' && status === 'open' && (
          <p className="text-sm text-amber-600 font-medium">AI Price Recommendation: ₹{parseFloat(price) + 2}/kg</p>
        )}
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="w-full flex justify-between gap-2">
          {userType === 'farmer' ? (
            <>
              {status === 'open' && (
                <Button className="w-full bg-agri-primary hover:bg-agri-dark text-white">
                  Apply
                </Button>
              )}
              {status === 'pending' && (
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              )}
              {status === 'active' && (
                <>
                  <Button className="w-1/2" variant="outline">
                    View Details
                  </Button>
                  <Button className="w-1/2 bg-agri-secondary hover:bg-amber-600 text-white">
                    Update Status
                  </Button>
                </>
              )}
              {status === 'completed' && (
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              )}
            </>
          ) : (
            <>
              {status === 'open' && (
                <Button className="w-full" variant="outline">
                  View Applicants
                </Button>
              )}
              {status === 'pending' && (
                <>
                  <Button className="w-1/2" variant="outline">
                    Details
                  </Button>
                  <Button className="w-1/2 bg-agri-primary hover:bg-agri-dark text-white">
                    Approve
                  </Button>
                </>
              )}
              {status === 'active' && (
                <>
                  <Button className="w-1/2" variant="outline">
                    Track
                  </Button>
                  <Button className="w-1/2 bg-agri-secondary hover:bg-amber-600 text-white">
                    Payment
                  </Button>
                </>
              )}
              {status === 'completed' && (
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              )}
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContractCard;
