import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Home, MessageSquare, Search, User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import logo from '@/assets/logo.svg';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    const storedUserProfile = localStorage.getItem('userProfile');
    
    if (loginStatus === 'true' && storedUserProfile) {
      setIsLoggedIn(true);
      setUserProfile(JSON.parse(storedUserProfile));
    }
  }, []);
  
  const toyResults = [
    { id: '1', name: 'Wooden Building Blocks Set', category: 'Educational', age: '1-3' },
    { id: '2', name: 'Interactive Learning Tablet', category: 'Electronics', age: '3-6' },
    { id: '3', name: 'Magnetic Tile Building Set', category: 'Construction', age: '4-8' },
    { id: '4', name: 'Plush Elephant Toy', category: 'Plush Toys', age: '0-2' },
    { id: '5', name: 'Science Experiment Kit', category: 'STEM', age: '6-10' },
  ];
  
  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleRegister = () => {
    navigate('/register');
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userProfile');
    setIsLoggedIn(false);
    setUserProfile(null);
    navigate('/');
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelectToy = (toyId: string) => {
    setSearchOpen(false);
    navigate(`/toy/${toyId}`);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-toy-blue rounded-lg flex items-center justify-center">
              <img src={logo} alt="ToyGuider" className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-gray-800">ToyGuider</span>
          </Link>
          
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
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} />
            </Button>
            
            {isLoggedIn && userProfile ? (
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
                        <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                        <AvatarFallback className="bg-toy-blue text-white">
                          {userProfile.name.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
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
                      <Link to="/profile" className="flex items-center gap-2 w-full">
                        <Home size={16} /> My Toys
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2">
                      <LogOut size={16} /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={handleSignIn}>Sign In</Button>
                <Button onClick={handleRegister} className="flex items-center gap-2">
                  <LogIn size={16} />
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search for toys..." />
        <CommandList>
          <CommandEmpty>No toys found.</CommandEmpty>
          <CommandGroup heading="Toys">
            {toyResults.map((toy) => (
              <CommandItem 
                key={toy.id}
                onSelect={() => handleSelectToy(toy.id)}
                className="flex justify-between"
              >
                <span>{toy.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Age: {toy.age}</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">{toy.category}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
