
import React from 'react';
import { Link } from 'react-router-dom';

const ageGroups = [
  {
    id: '0-1',
    name: 'Infants',
    range: '0-1 Years',
    image: '/images/infant-toys.jpg',
    color: 'bg-toy-blue/20 border-toy-blue/30',
    hoverColor: 'hover:bg-toy-blue/30',
    textColor: 'text-toy-blue'
  },
  {
    id: '1-3',
    name: 'Toddlers',
    range: '1-3 Years',
    image: '/images/toddler-toys.jpg',
    color: 'bg-toy-green/20 border-toy-green/30',
    hoverColor: 'hover:bg-toy-green/30',
    textColor: 'text-toy-green'
  },
  {
    id: '3-5',
    name: 'Preschoolers',
    range: '3-5 Years',
    image: '/images/preschooler-toys.jpg',
    color: 'bg-toy-yellow/20 border-toy-yellow/30',
    hoverColor: 'hover:bg-toy-yellow/30',
    textColor: 'text-amber-600'
  },
  {
    id: '5-8',
    name: 'Early School',
    range: '5-8 Years',
    image: '/images/early-school-toys.jpg',
    color: 'bg-toy-pink/20 border-toy-pink/30',
    hoverColor: 'hover:bg-toy-pink/30',
    textColor: 'text-toy-pink'
  },
  {
    id: '8-12',
    name: 'Tweens',
    range: '8-12 Years',
    image: '/images/tween-toys.jpg',
    color: 'bg-toy-purple/20 border-toy-purple/30',
    hoverColor: 'hover:bg-toy-purple/30',
    textColor: 'text-toy-purple'
  },
  {
    id: '12+',
    name: 'Teens',
    range: '12+ Years',
    image: '/images/teen-toys.jpg',
    color: 'bg-gray-200 border-gray-300',
    hoverColor: 'hover:bg-gray-300',
    textColor: 'text-gray-700'
  },
];

interface AgeGroupSelectorProps {
  className?: string;
}

const AgeGroupSelector: React.FC<AgeGroupSelectorProps> = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ${className}`}>
      {ageGroups.map((group) => (
        <Link
          key={group.id}
          to={`/guide?age=${group.id}`}
          className={`block rounded-2xl p-4 border-2 transition-all ${group.color} ${group.hoverColor} group`}
        >
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-16 h-16 mb-2 rounded-full overflow-hidden bg-white shadow-sm">
              <img 
                src={group.image} 
                alt={group.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/150';
                }} 
              />
            </div>
            <h3 className={`font-semibold ${group.textColor}`}>{group.name}</h3>
            <p className="text-sm text-gray-600">{group.range}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AgeGroupSelector;
