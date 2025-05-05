
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Calendar, Filter } from 'lucide-react';

// Mock contract data
const mockContracts = [
  {
    id: '1',
    title: 'Premium Quality Wheat Supply',
    cropType: 'Wheat',
    quantity: '500 quintals',
    price: 2200,
    priceUnit: 'per quintal',
    location: 'Punjab',
    deadline: 'May 25, 2025',
    description: 'Looking for high-quality wheat supply with protein content above 11.5%. Must be properly cleaned and sorted.',
    buyerName: 'GrainTech Industries',
    rating: 4.8,
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Organic Cotton Contract',
    cropType: 'Cotton',
    quantity: '200 quintals',
    price: 7500,
    priceUnit: 'per quintal',
    location: 'Gujarat',
    deadline: 'June 10, 2025',
    description: 'Seeking certified organic cotton. Long staple variety preferred. Must be free from chemical residues.',
    buyerName: 'EcoTextiles Ltd',
    rating: 4.5,
    postedDate: '5 days ago'
  },
  {
    id: '3',
    title: 'Rice Procurement for Export',
    cropType: 'Rice',
    quantity: '1000 quintals',
    price: 2800,
    priceUnit: 'per quintal',
    location: 'Haryana',
    deadline: 'May 30, 2025',
    description: 'Basmati rice procurement for export market. High-quality grains with minimum breakage percentage required.',
    buyerName: 'Global Rice Exporters',
    rating: 4.9,
    postedDate: '1 week ago'
  },
  {
    id: '4',
    title: 'Sugarcane for Processing',
    cropType: 'Sugarcane',
    quantity: '2000 quintals',
    price: 350,
    priceUnit: 'per quintal',
    location: 'Maharashtra',
    deadline: 'June 15, 2025',
    description: 'Fresh sugarcane required for sugar production. High sucrose content preferred. Must be harvested within 24 hours of delivery.',
    buyerName: 'SweetCrystal Sugar Mills',
    rating: 4.2,
    postedDate: '3 days ago'
  },
  {
    id: '5',
    title: 'Pulses Procurement',
    cropType: 'Pulses',
    quantity: '300 quintals',
    price: 6500,
    priceUnit: 'per quintal',
    location: 'Madhya Pradesh',
    deadline: 'June 5, 2025',
    description: 'Various pulses including moong, urad, and tur. Must be well dried and free from foreign matter.',
    buyerName: 'NutritionFoods',
    rating: 4.6,
    postedDate: '4 days ago'
  },
  {
    id: '6',
    title: 'Fresh Vegetables Supply',
    cropType: 'Vegetables',
    quantity: '100 quintals',
    price: 1800,
    priceUnit: 'per quintal',
    location: 'Karnataka',
    deadline: 'May 20, 2025',
    description: 'Assorted fresh vegetables for retail chain. Must be freshly harvested and properly sorted by variety.',
    buyerName: 'FreshMart Stores',
    rating: 4.7,
    postedDate: '1 day ago'
  }
];

const cropOptions = [
  'All Crops', 
  'Wheat', 
  'Rice', 
  'Cotton', 
  'Sugarcane', 
  'Pulses', 
  'Vegetables', 
  'Fruits'
];

const locationOptions = [
  'All Locations',
  'Punjab', 
  'Haryana', 
  'Gujarat', 
  'Maharashtra', 
  'Madhya Pradesh', 
  'Karnataka', 
  'Tamil Nadu'
];

const Contracts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('All Crops');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [organicOnly, setOrganicOnly] = useState(false);

  // Filter contracts based on search and filters
  const filteredContracts = mockContracts.filter(contract => {
    const matchesSearch = contract.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          contract.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contract.cropType.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesCrop = selectedCrop === 'All Crops' || contract.cropType === selectedCrop;
    const matchesLocation = selectedLocation === 'All Locations' || contract.location === selectedLocation;
    const matchesPrice = contract.price >= priceRange[0] && contract.price <= priceRange[1];
    const matchesOrganic = !organicOnly || contract.title.toLowerCase().includes('organic');
    
    return matchesSearch && matchesCrop && matchesLocation && matchesPrice && matchesOrganic;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-agri-dark mb-2">
              Browse Contracts
            </h1>
            <p className="text-gray-600">
              Find and apply to farming contracts that match your profile and interests
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input 
                  type="search"
                  placeholder="Search contracts, crops, or buyers..." 
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <Button 
                  variant="outline" 
                  className="md:hidden w-full"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <Button 
                  className="bg-agri-primary hover:bg-agri-dark text-white w-full md:w-auto"
                >
                  Search
                </Button>
              </div>
            </div>
            
            {/* Filter Options - always visible on desktop, toggleable on mobile */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${filterOpen ? 'block' : 'hidden md:grid'}`}>
              <div>
                <label className="text-sm font-medium mb-2 block">Crop Type</label>
                <Select 
                  value={selectedCrop} 
                  onValueChange={setSelectedCrop}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropOptions.map((crop) => (
                      <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Select 
                  value={selectedLocation} 
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locationOptions.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <Slider
                  defaultValue={[0, 8000]}
                  max={10000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-4"
                />
              </div>
              
              <div className="flex items-center space-x-2 mt-6">
                <Checkbox
                  id="organic"
                  checked={organicOnly}
                  onCheckedChange={(checked) => setOrganicOnly(!!checked)}
                />
                <label
                  htmlFor="organic"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Organic produce only
                </label>
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-medium">{filteredContracts.length}</span> available contracts
            </p>
          </div>
          
          {/* Contract Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredContracts.length > 0 ? (
              filteredContracts.map((contract) => (
                <Card key={contract.id} className="overflow-hidden card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-agri-dark">{contract.title}</h3>
                        <p className="text-sm text-gray-500">{contract.buyerName}</p>
                      </div>
                      <Badge className="bg-agri-light text-agri-primary">
                        {contract.cropType}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {contract.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div>
                        <p className="text-gray-500">Quantity</p>
                        <p className="font-medium">{contract.quantity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Price</p>
                        <p className="font-medium text-agri-primary">
                          ₹{contract.price} {contract.priceUnit}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-3.5 w-3.5 text-gray-500 mr-1" />
                        <span>{contract.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 text-gray-500 mr-1" />
                        <span>Due: {contract.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 border-t">
                    <div className="w-full flex items-center justify-between">
                      <p className="text-xs text-gray-500">Posted {contract.postedDate}</p>
                      <Link to={`/contracts/${contract.id}`}>
                        <Button className="bg-agri-primary hover:bg-agri-dark text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500 mb-4">No contracts found matching your criteria</p>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
          
          {/* Pagination - simplified for demo */}
          {filteredContracts.length > 0 && (
            <div className="flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-agri-primary text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contracts;
