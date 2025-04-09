
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ToyCard from '../components/toys/ToyCard';
import AgeGroupSelector from '../components/toys/AgeGroupSelector';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Search, SlidersHorizontal, Filter, X } from 'lucide-react';

// Mock data for toys
const toys = [
  {
    id: '1',
    name: 'Wooden Building Blocks Set',
    image: '/images/toy-blocks.jpg',
    ageGroup: '1-3',
    category: 'Educational',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Interactive Learning Tablet',
    image: '/images/toy-tablet.jpg',
    ageGroup: '3-5',
    category: 'Electronic',
    rating: 4.5
  },
  {
    id: '3',
    name: 'STEM Robot Building Kit',
    image: '/images/toy-robot.jpg',
    ageGroup: '8-12',
    category: 'STEM',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Soft Plush Teddy Bear',
    image: '/images/toy-teddy.jpg',
    ageGroup: '0-1',
    category: 'Plush',
    rating: 4.7
  },
  {
    id: '5',
    name: 'Finger Painting Set',
    image: '/images/toy-paint.jpg',
    ageGroup: '3-5',
    category: 'Arts & Crafts',
    rating: 4.6
  },
  {
    id: '6',
    name: 'Junior Science Experiment Kit',
    image: '/images/toy-science.jpg',
    ageGroup: '5-8',
    category: 'Science',
    rating: 4.8
  },
  {
    id: '7',
    name: 'Puzzle Collection',
    image: '/images/toy-puzzle.jpg',
    ageGroup: '3-5',
    category: 'Puzzles',
    rating: 4.3
  },
  {
    id: '8',
    name: 'Music Maker Set',
    image: '/images/toy-music.jpg',
    ageGroup: '1-3',
    category: 'Musical',
    rating: 4.2
  }
];

const categories = [
  'All Categories',
  'Educational',
  'STEM',
  'Arts & Crafts',
  'Plush',
  'Puzzles',
  'Musical',
  'Science',
  'Electronic',
  'Outdoor'
];

const developmentTags = [
  { id: 'cognitive', label: 'Cognitive Development' },
  { id: 'motor', label: 'Motor Skills' },
  { id: 'language', label: 'Language Development' },
  { id: 'social', label: 'Social Skills' },
  { id: 'emotional', label: 'Emotional Intelligence' },
  { id: 'creativity', label: 'Creativity' },
];

const ToyGuide = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedAge, setSelectedAge] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };
  
  // Filter toys by search query, category, and age group
  const filteredToys = toys.filter(toy => {
    // Filter by search query
    if (searchQuery && !toy.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (selectedCategory !== 'All Categories' && toy.category !== selectedCategory) {
      return false;
    }
    
    // Filter by age group
    if (selectedAge && toy.ageGroup !== selectedAge) {
      return false;
    }
    
    // Filter by tab
    if (activeTab === 'recommended') {
      // In a real app, this would filter by recommended toys based on user profile
      return toy.rating > 4.5;
    }
    
    return true;
  });

  return (
    <Layout>
      <div className="bg-white pt-8 pb-6 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Toy Guide</h1>
          
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search for toys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border-gray-200 focus:border-toy-blue focus:ring-toy-blue/20"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                className="border-gray-200 text-gray-600"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={18} className="mr-2" /> Filters
              </Button>
            </div>
          </div>
          
          {/* Filter drawer */}
          {showFilters && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Filter size={18} className="text-gray-500 mr-2" />
                  <span className="font-medium">Filter Toys</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowFilters(false)}
                >
                  <X size={18} />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Age Group Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                  <Select value={selectedAge} onValueChange={setSelectedAge}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Age Group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Ages</SelectItem>
                      <SelectItem value="0-1">0-1 Years (Infants)</SelectItem>
                      <SelectItem value="1-3">1-3 Years (Toddlers)</SelectItem>
                      <SelectItem value="3-5">3-5 Years (Preschoolers)</SelectItem>
                      <SelectItem value="5-8">5-8 Years (Early School)</SelectItem>
                      <SelectItem value="8-12">8-12 Years (Tweens)</SelectItem>
                      <SelectItem value="12+">12+ Years (Teens)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                </div>
                
                {/* Development Skills Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Development Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {developmentTags.map(tag => (
                      <button
                        key={tag.id}
                        onClick={() => toggleTag(tag.id)}
                        className={`px-3 py-1 text-xs rounded-full transition-colors ${
                          selectedTags.includes(tag.id)
                            ? 'bg-toy-blue text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {tag.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => {
                  setSelectedAge('');
                  setPriceRange([0, 100]);
                  setSelectedTags([]);
                }}>
                  Reset
                </Button>
                <Button>Apply Filters</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Age group selector */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Browse by Age Group</h2>
          <AgeGroupSelector />
        </div>
      </section>
      
      {/* Toy listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Toys</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="new">Newly Added</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {filteredToys.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-800 mb-2">No toys found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedAge('');
                setSelectedTags([]);
              }}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredToys.map(toy => (
                <ToyCard key={toy.id} {...toy} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ToyGuide;
