
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ToyCardProps {
  id: string;
  name: string;
  image: string;
  ageGroup: string;
  category: string;
  rating: number;
  condition?: string;
  location?: string;
  isExchange?: boolean;
}

const ToyCard: React.FC<ToyCardProps> = ({
  id,
  name,
  image,
  ageGroup,
  category,
  rating,
  condition,
  location,
  isExchange = false,
}) => {
  // Map age group to CSS class
  const getAgeBadgeClass = (age: string) => {
    switch (age) {
      case '0-1': return 'age-badge-0-1';
      case '1-3': return 'age-badge-1-3';
      case '3-5': return 'age-badge-3-5';
      case '5-8': return 'age-badge-5-8';
      case '8-12': return 'age-badge-8-12';
      case '12+': return 'age-badge-12-plus';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="toy-card group">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white">
          <Heart size={18} className="text-gray-500 hover:text-toy-pink" />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex justify-between items-center">
            <Badge className={`${getAgeBadgeClass(ageGroup)} toy-badge`}>
              Age {ageGroup} years
            </Badge>
            <Badge variant="outline" className="bg-white/80 text-gray-700 toy-badge">
              {category}
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <Link to={`/toy/${id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-toy-blue transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-3">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
        
        {isExchange && (
          <>
            <div className="flex justify-between items-center mb-3">
              <Badge variant="outline" className="bg-gray-50">{condition}</Badge>
              {location && (
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {location}
                </div>
              )}
            </div>
            
            <Button className="w-full">Request Exchange</Button>
          </>
        )}
        
        {!isExchange && (
          <Link to={`/toy/${id}`}>
            <Button variant="outline" className="w-full">View Details</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ToyCard;
