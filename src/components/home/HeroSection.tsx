
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Gift } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-toy-blue/5 to-toy-purple/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Find the <span className="text-toy-blue">Perfect Toys</span> for Your Child's Age & Interests
            </h1>
            <p className="text-lg text-gray-600">
              ToyGuider connects parents and helps you discover age-appropriate toys that 
              support your child's development. Exchange toys with other families in your community!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/guide">
                <Button size="lg" className="toy-button-primary">
                  <Search size={18} /> Explore Toys
                </Button>
              </Link>
              <Link to="/exchange">
                <Button size="lg" variant="outline" className="toy-button-outline">
                  <Gift size={18} /> Exchange Now
                </Button>
              </Link>
            </div>
            
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-toy-blue">1,200+</div>
                <div className="text-sm text-gray-600">Toy Guides</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-toy-green">500+</div>
                <div className="text-sm text-gray-600">Exchanges</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-toy-purple">10K+</div>
                <div className="text-sm text-gray-600">Happy Parents</div>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative">
            <div className="relative h-96">
              {/* Main Image */}
              <img 
                src="/images/hero-kids-playing.jpg" 
                alt="Children playing with toys" 
                className="rounded-2xl shadow-xl w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Children+Playing';
                }}
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 p-4 bg-white rounded-xl shadow-lg animate-float">
                <img 
                  src="/images/toy-blocks.jpg" 
                  alt="Building blocks" 
                  className="w-20 h-20 rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/100?text=Blocks';
                  }}
                />
              </div>
              
              <div className="absolute -bottom-8 left-12 p-4 bg-white rounded-xl shadow-lg animate-bounce">
                <img 
                  src="/images/toy-car.jpg" 
                  alt="Toy car" 
                  className="w-16 h-16 rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/100?text=Car';
                  }}
                />
              </div>
              
              <div className="absolute top-8 -right-6 p-4 bg-white rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <img 
                  src="/images/toy-teddy.jpg" 
                  alt="Teddy bear" 
                  className="w-24 h-24 rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/100?text=Teddy';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-toy-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-toy-purple opacity-5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
