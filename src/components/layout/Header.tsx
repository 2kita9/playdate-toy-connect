
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Home, MessageSquare, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-toy-blue rounded-lg flex items-center justify-center">
              <img src={logo} alt="ToyGuider" className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-gray-800">ToyGuider</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-toy-blue transition-colors">
              Home
            </Link>
            <Link to="/guide" className="font-medium text-gray-700 hover:text-toy-blue transition-colors">
              Toy Guide
            </Link>
            <Link to="/exchange" className="font-medium text-gray-700 hover:text-toy-blue transition-colors">
              Exchange
            </Link>
            <Link to="/events" className="font-medium text-gray-700 hover:text-toy-blue transition-colors">
              Events
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-toy-blue transition-colors">
              Blog
            </Link>
          </nav>
          
          {/* Search and User Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Search size={20} />
            </Button>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="text-gray-600 relative">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 relative">
                  <MessageSquare size={20} />
                  <span className="absolute top-1 right-1.5 h-2 w-2 bg-toy-green rounded-full"></span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full h-10 w-10 p-0">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback className="bg-toy-blue text-white">UN</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem>
                      <Link to="/profile" className="flex items-center gap-2 w-full">
                        <User size={16} /> My Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/profile/toys" className="flex items-center gap-2 w-full">
                        <Home size={16} /> My Toys
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setIsLoggedIn(true)}>Sign In</Button>
                <Button onClick={() => setIsLoggedIn(true)}>Register</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
