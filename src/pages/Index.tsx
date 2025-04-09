
import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import AgeGroupSelector from '../components/toys/AgeGroupSelector';
import FeaturedToys from '../components/home/FeaturedToys';
import ParentConnectSection from '../components/home/ParentConnectSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gift, MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Age Group Selector */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Find Toys by Age Group</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
            Discover age-appropriate toys that support your child's development at each stage.
          </p>
          <AgeGroupSelector className="mt-8" />
        </div>
      </section>
      
      {/* Featured Toys */}
      <FeaturedToys 
        title="Featured Toys" 
        subtitle="Handpicked toys loved by children and parents alike"
        viewAllLink="/guide"
      />
      
      {/* Exchange Section */}
      <section className="py-12 bg-white rounded-3xl my-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-toy-blue/10 rounded-full text-toy-blue font-medium">
                Sustainable Parenting
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Exchange Toys Your Child Has Outgrown
              </h2>
              <p className="text-lg text-gray-600">
                Give your gently used toys a second life while finding "new" toys for your child. 
                Our exchange platform makes it easy to connect with other parents nearby.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-toy-green/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-toy-green"></div>
                  </div>
                  <span>Save money on new toys</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-toy-green/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-toy-green"></div>
                  </div>
                  <span>Reduce waste and environmental impact</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-toy-green/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-toy-green"></div>
                  </div>
                  <span>Meet other parents in your community</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link to="/exchange">
                  <Button size="lg" className="toy-button-secondary">
                    <Gift size={18} /> Start Exchanging
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="border-toy-green text-toy-green hover:bg-toy-green/5">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/toy-exchange.jpg" 
                alt="Toy Exchange" 
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x500?text=Toy+Exchange';
                }}
              />
              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-toy-green/20 rounded-full flex items-center justify-center">
                    <Gift size={20} className="text-toy-green" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">500+</div>
                    <div className="text-xs text-gray-600">Monthly Exchanges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parent Connect Section */}
      <ParentConnectSection />
      
      {/* Recent Exchanges */}
      <FeaturedToys 
        title="Recent Exchanges" 
        subtitle="See what toys other parents are exchanging in your community"
        viewAllLink="/exchange"
      />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-toy-blue to-toy-purple text-white rounded-3xl my-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find the Perfect Toys?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of parents who are discovering age-appropriate toys and building connections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/guide">
              <Button size="lg" className="bg-white text-toy-blue hover:bg-gray-100">
                Explore Toy Guide
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle size={18} className="mr-2" /> Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
