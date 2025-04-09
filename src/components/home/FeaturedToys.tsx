
import React from 'react';
import ToyCard from '../toys/ToyCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for featured toys
const featuredToys = [
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
  }
];

interface FeaturedToysProps {
  title: string;
  subtitle?: string;
  viewAllLink: string;
}

const FeaturedToys: React.FC<FeaturedToysProps> = ({ title, subtitle, viewAllLink }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
          </div>
          <Link to={viewAllLink}>
            <Button variant="ghost" className="text-toy-blue hover:text-toy-blue/80 hover:bg-toy-blue/5">
              View All <ChevronRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredToys.map(toy => (
            <ToyCard key={toy.id} {...toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedToys;
