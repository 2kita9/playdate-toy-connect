
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and social links */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-toy-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TG</span>
              </div>
              <span className="font-bold text-xl text-gray-800">ToyGuider</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Connect parents and guide toys according to age groups. Making playtime more meaningful!
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-toy-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-toy-blue">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-toy-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-toy-blue">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/guide" className="text-gray-600 hover:text-toy-blue">Toy Guide</Link></li>
              <li><Link to="/exchange" className="text-gray-600 hover:text-toy-blue">Exchange Toys</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-toy-blue">Events & Campaigns</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-toy-blue">Blog & Articles</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-toy-blue">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Age Groups */}
          <div>
            <h3 className="font-bold text-lg mb-4">Age Groups</h3>
            <ul className="space-y-2">
              <li><Link to="/guide?age=0-1" className="text-gray-600 hover:text-toy-blue">0-1 Years (Infants)</Link></li>
              <li><Link to="/guide?age=1-3" className="text-gray-600 hover:text-toy-blue">1-3 Years (Toddlers)</Link></li>
              <li><Link to="/guide?age=3-5" className="text-gray-600 hover:text-toy-blue">3-5 Years (Preschoolers)</Link></li>
              <li><Link to="/guide?age=5-8" className="text-gray-600 hover:text-toy-blue">5-8 Years (Early School)</Link></li>
              <li><Link to="/guide?age=8-12" className="text-gray-600 hover:text-toy-blue">8-12 Years (Tweens)</Link></li>
              <li><Link to="/guide?age=12-plus" className="text-gray-600 hover:text-toy-blue">12+ Years (Teens)</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for toy guides and event updates.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-toy-blue"
              />
              <button 
                type="submit" 
                className="w-full bg-toy-blue hover:bg-opacity-90 text-white font-medium py-2 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-100 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} ToyGuider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
