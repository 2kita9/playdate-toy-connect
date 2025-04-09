
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ToyCard from '../components/toys/ToyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Upload, Gift } from 'lucide-react';

// Mock data for exchange toys
const exchangeToys = [
  {
    id: '101',
    name: 'LEGO Classic Building Set',
    image: '/images/exchange-lego.jpg',
    ageGroup: '5-8',
    category: 'Building',
    rating: 4.8,
    condition: 'Like New',
    location: 'New York'
  },
  {
    id: '102',
    name: 'Baby Einstein Activity Gym',
    image: '/images/exchange-gym.jpg',
    ageGroup: '0-1',
    category: 'Baby',
    rating: 4.6,
    condition: 'Excellent',
    location: 'Los Angeles'
  },
  {
    id: '103',
    name: 'Melissa & Doug Wooden Puzzle',
    image: '/images/exchange-puzzle.jpg',
    ageGroup: '3-5',
    category: 'Puzzles',
    rating: 4.7,
    condition: 'Good',
    location: 'Chicago'
  },
  {
    id: '104',
    name: 'VTech Smart Shots Sports Center',
    image: '/images/exchange-sports.jpg',
    ageGroup: '1-3',
    category: 'Sports',
    rating: 4.5,
    condition: 'Very Good',
    location: 'Seattle'
  },
  {
    id: '105',
    name: 'Science Experiment Kit',
    image: '/images/exchange-science.jpg',
    ageGroup: '8-12',
    category: 'STEM',
    rating: 4.9,
    condition: 'Like New',
    location: 'Boston'
  },
  {
    id: '106',
    name: 'Play-Doh Kitchen Creations',
    image: '/images/exchange-playdoh.jpg',
    ageGroup: '3-5',
    category: 'Creative',
    rating: 4.4,
    condition: 'Good',
    location: 'Miami'
  },
  {
    id: '107',
    name: 'Fisher-Price Baby Grand Piano',
    image: '/images/exchange-piano.jpg',
    ageGroup: '1-3',
    category: 'Musical',
    rating: 4.3,
    condition: 'Excellent',
    location: 'Denver'
  },
  {
    id: '108',
    name: 'Nerf Elite Blaster Set',
    image: '/images/exchange-nerf.jpg',
    ageGroup: '8-12',
    category: 'Action',
    rating: 4.2,
    condition: 'Very Good',
    location: 'Atlanta'
  }
];

const locations = [
  'All Locations',
  'New York',
  'Los Angeles',
  'Chicago',
  'Seattle',
  'Boston',
  'Miami',
  'Denver',
  'Atlanta'
];

const conditions = [
  'All Conditions',
  'Like New',
  'Excellent',
  'Very Good',
  'Good',
  'Fair'
];

const ToyExchange = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCondition, setSelectedCondition] = useState('All Conditions');
  const [selectedAge, setSelectedAge] = useState('All Ages');
  
  // Filter toys based on search and filters
  const filteredToys = exchangeToys.filter(toy => {
    // Filter by search query
    if (searchQuery && !toy.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by location
    if (selectedLocation !== 'All Locations' && toy.location !== selectedLocation) {
      return false;
    }
    
    // Filter by condition
    if (selectedCondition !== 'All Conditions' && toy.condition !== selectedCondition) {
      return false;
    }
    
    // Filter by age group
    if (selectedAge !== 'All Ages' && toy.ageGroup !== selectedAge) {
      return false;
    }
    
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-toy-green/20 to-toy-blue/20 pt-10 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Toy Exchange</h1>
            <p className="text-lg text-gray-600 mb-6">
              Exchange toys your child has outgrown with other families. Give toys a second life and discover new favorites!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="toy-button-primary">
                <Upload size={18} /> Upload A Toy
              </Button>
              <Button size="lg" variant="outline" className="toy-button-outline">
                <Gift size={18} /> Gift A Toy
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search for toys to exchange..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border-gray-200"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedAge} onValueChange={setSelectedAge}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Ages">All Ages</SelectItem>
                  <SelectItem value="0-1">0-1 Years</SelectItem>
                  <SelectItem value="1-3">1-3 Years</SelectItem>
                  <SelectItem value="3-5">3-5 Years</SelectItem>
                  <SelectItem value="5-8">5-8 Years</SelectItem>
                  <SelectItem value="8-12">8-12 Years</SelectItem>
                  <SelectItem value="12+">12+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Nearby Location Note */}
          <div className="mt-4 flex items-center text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">Showing toys available for exchange within 25 miles of your location</span>
          </div>
        </div>
      </section>
      
      {/* Toy Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="available" className="mb-8">
            <TabsList>
              <TabsTrigger value="available">Available Now</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
              <TabsTrigger value="free">Free Toys</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {filteredToys.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-800 mb-2">No toys found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedLocation('All Locations');
                setSelectedCondition('All Conditions');
                setSelectedAge('All Ages');
              }}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredToys.map(toy => (
                <ToyCard key={toy.id} {...toy} isExchange={true} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* How It Works */}
      <section className="bg-white py-12 my-8 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">How Toy Exchange Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-toy-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Upload size={28} className="text-toy-blue" />
              </div>
              <h3 className="text-xl font-semibold">Upload Your Toy</h3>
              <p className="text-gray-600">
                Take photos of your gently used toys and create a listing with details about condition and age recommendations.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-toy-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Search size={28} className="text-toy-green" />
              </div>
              <h3 className="text-xl font-semibold">Find Matches</h3>
              <p className="text-gray-600">
                Browse toys in your area or get matched with parents who have toys suitable for your child's age and interests.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-toy-purple/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Gift size={28} className="text-toy-purple" />
              </div>
              <h3 className="text-xl font-semibold">Exchange Safely</h3>
              <p className="text-gray-600">
                Chat with the toy owner, arrange a safe meetup location, and exchange toys that will bring joy to both families.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" className="toy-button-primary">
              Learn More About Safety Guidelines
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToyExchange;
