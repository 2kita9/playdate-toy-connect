
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users } from 'lucide-react';

const ParentConnectSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-toy-purple/10 to-toy-blue/10 rounded-3xl my-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src="/images/parents-connecting.jpg" 
              alt="Parents connecting" 
              className="rounded-2xl shadow-lg w-full h-80 lg:h-96 object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Parents+Connecting';
              }}
            />
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-toy-purple/20 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-toy-purple" />
                </div>
                <div>
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-xs text-gray-600">Active Parents</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-6 -left-6 p-4 bg-white rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-toy-blue/20 rounded-full flex items-center justify-center">
                  <MessageSquare size={20} className="text-toy-blue" />
                </div>
                <div>
                  <div className="font-bold text-lg">1.2k+</div>
                  <div className="text-xs text-gray-600">Daily Messages</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Connect With Other Parents Who Share Your Interests
            </h2>
            <p className="text-lg text-gray-600">
              Join our community of parents who are passionate about finding the right toys for their children. 
              Exchange ideas, arrange toy swaps, and build lasting connections with families who share your values.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-toy-green/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-toy-green font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Create Your Parent Profile</h3>
                  <p className="text-gray-600">Share your children's ages and toy interests</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-toy-blue/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-toy-blue font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Find Parent Matches</h3>
                  <p className="text-gray-600">Connect with parents who have similar interests</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-toy-purple/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-toy-purple font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Exchange Toys & Ideas</h3>
                  <p className="text-gray-600">Chat, meet, and exchange toys with your new parent network</p>
                </div>
              </div>
            </div>
            
            <Link to="/profile/create">
              <Button size="lg" className="toy-button-secondary mt-4">
                <Users size={18} /> Create Parent Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentConnectSection;
