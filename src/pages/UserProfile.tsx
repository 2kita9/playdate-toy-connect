import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import ToyCard from '../components/toys/ToyCard';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Edit, 
  MessageSquare, 
  Heart, 
  Gift, 
  Clock, 
  Package, 
  ThumbsUp,
  Camera,
  Image
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Background image options
const backgroundOptions = [
  '/images/profile-bg-1.jpg',
  '/images/profile-bg-2.jpg',
  '/images/profile-bg-3.jpg',
  '/images/profile-bg-4.jpg',
  '/images/profile-bg-5.jpg',
];

// Mock toy data
const userToys = [
  {
    id: '201',
    name: 'Wooden Train Set',
    image: '/images/user-toy-train.jpg',
    ageGroup: '3-5',
    category: 'Vehicles',
    rating: 4.7,
    condition: 'Excellent',
    location: 'Brooklyn, NY'
  },
  {
    id: '202',
    name: 'Shape Sorter Toy',
    image: '/images/user-toy-shapes.jpg',
    ageGroup: '1-3',
    category: 'Educational',
    rating: 4.6,
    condition: 'Like New',
    location: 'Brooklyn, NY'
  },
  {
    id: '203',
    name: 'Junior Doctor Kit',
    image: '/images/user-toy-doctor.jpg',
    ageGroup: '3-5',
    category: 'Pretend Play',
    rating: 4.8,
    condition: 'Good',
    location: 'Brooklyn, NY'
  },
  {
    id: '204',
    name: 'Musical Xylophone',
    image: '/images/user-toy-music.jpg',
    ageGroup: '1-3',
    category: 'Musical',
    rating: 4.5,
    condition: 'Very Good',
    location: 'Brooklyn, NY'
  },
];

// Mock exchange history
const exchangeHistory = [
  {
    id: 'e101',
    toyName: 'Building Blocks Set',
    toyImage: '/images/exchange-blocks.jpg',
    date: 'Feb 15, 2025',
    withUser: 'Michael Chen',
    userAvatar: '/avatars/michael.jpg',
    status: 'Completed',
    direction: 'Given',
  },
  {
    id: 'e102',
    toyName: 'Dinosaur Puzzle',
    toyImage: '/images/exchange-puzzle.jpg',
    date: 'Jan 23, 2025',
    withUser: 'Priya Sharma',
    userAvatar: '/avatars/priya.jpg',
    status: 'Completed',
    direction: 'Received',
  },
  {
    id: 'e103',
    toyName: 'Art Easel',
    toyImage: '/images/exchange-art.jpg',
    date: 'Mar 5, 2025',
    withUser: 'James Wilson',
    userAvatar: '/avatars/james.jpg',
    status: 'Pending',
    direction: 'Given',
  },
];

// Mock saved toys
const savedToys = [
  {
    id: '301',
    name: 'LEGO Duplo Set',
    image: '/images/saved-lego.jpg',
    ageGroup: '1-3',
    category: 'Building',
    rating: 4.9,
    condition: 'Like New',
    location: 'Queens, NY'
  },
  {
    id: '302',
    name: 'Magnetic Tiles',
    image: '/images/saved-tiles.jpg',
    ageGroup: '3-5',
    category: 'STEM',
    rating: 4.7,
    condition: 'Excellent',
    location: 'Manhattan, NY'
  },
];

// Mock messages
const messages = [
  {
    id: 'm101',
    user: 'Michael Chen',
    avatar: '/avatars/michael.jpg',
    lastMessage: 'Thanks for the blocks! My son loves them.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 'm102',
    user: 'Priya Sharma',
    avatar: '/avatars/priya.jpg',
    lastMessage: 'Is the puzzle still available for exchange?',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 'm103',
    user: 'James Wilson',
    avatar: '/avatars/james.jpg',
    lastMessage: 'When are you free to meet for the toy exchange?',
    time: '3 days ago',
    unread: false,
  },
];

const UserProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingBackground, setIsChangingBackground] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [bio, setBio] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('');
  
  useEffect(() => {
    // Check if user is logged in
    const loginStatus = localStorage.getItem('isLoggedIn');
    const storedUserProfile = localStorage.getItem('userProfile');
    
    if (loginStatus !== 'true' || !storedUserProfile) {
      // Redirect to sign in page if not logged in
      navigate('/signin');
      return;
    }
    
    const profile = JSON.parse(storedUserProfile);
    setUserData(profile);
    setBio(profile.bio);
    setSelectedBackground(profile.coverPhoto || backgroundOptions[0]);
  }, [navigate]);
  
  const handleSaveBio = () => {
    if (userData) {
      const updatedUserData = { ...userData, bio };
      localStorage.setItem('userProfile', JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
      setIsEditing(false);
      
      toast({
        title: "Profile updated",
        description: "Your bio has been updated successfully.",
      });
    }
  };
  
  const handleSelectBackground = (bg: string) => {
    setSelectedBackground(bg);
    
    if (userData) {
      const updatedUserData = { ...userData, coverPhoto: bg };
      localStorage.setItem('userProfile', JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
      setIsChangingBackground(false);
      
      toast({
        title: "Background updated",
        description: "Your profile background has been updated.",
      });
    }
  };
  
  if (!userData) {
    return <Layout><div className="container mx-auto py-12 text-center">Loading profile...</div></Layout>;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header with Background */}
        <div className="relative mb-8">
          {/* Background Image */}
          <div 
            className="w-full h-64 md:h-80 rounded-2xl bg-cover bg-center mb-20 relative"
            style={{ backgroundImage: `url(${selectedBackground || '/images/profile-cover.jpg'})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-2xl"></div>
            
            {/* Background Change Button */}
            <Button 
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              onClick={() => setIsChangingBackground(!isChangingBackground)}
            >
              <Image size={16} className="mr-2" />
              Change Cover
            </Button>
            
            {/* Background Selector */}
            {isChangingBackground && (
              <div className="absolute top-16 right-4 bg-white p-3 rounded-lg shadow-lg">
                <h4 className="text-sm font-medium mb-2">Select Background</h4>
                <div className="grid grid-cols-3 gap-2">
                  {backgroundOptions.map((bg, index) => (
                    <button
                      key={index}
                      className={`w-16 h-12 rounded-md bg-cover bg-center ${selectedBackground === bg ? 'ring-2 ring-toy-blue' : ''}`}
                      style={{ backgroundImage: `url(${bg})` }}
                      onClick={() => handleSelectBackground(bg)}
                    ></button>
                  ))}
                </div>
              </div>
            )}
            
            {/* User Avatar - Positioned to overlap the background and card */}
            <Avatar className="absolute bottom-0 left-8 transform translate-y-1/2 h-32 w-32 border-4 border-white">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="bg-toy-blue text-white text-4xl">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <Card className="pt-16">
            <CardContent className="p-6">  
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32"></div> {/* Space for avatar */}
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-3xl font-bold mb-1">{userData.name}</h1>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {userData.location}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock size={14} className="mr-1" />
                          Joined {userData.joinDate}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                      <Edit size={16} className="mr-2" /> Edit Profile
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-toy-blue/10 rounded-full flex items-center justify-center">
                        <Star size={18} className="text-toy-blue" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{userData.rating}</div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-toy-green/10 rounded-full flex items-center justify-center">
                        <Gift size={18} className="text-toy-green" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{userData.exchanges}</div>
                        <div className="text-xs text-gray-500">Exchanges</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-toy-purple/10 rounded-full flex items-center justify-center">
                        <ThumbsUp size={18} className="text-toy-purple" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{userData.reviews}</div>
                        <div className="text-xs text-gray-500">Reviews</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-toy-yellow/10 rounded-full flex items-center justify-center">
                        <ThumbsUp size={18} className="text-amber-600" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{userData.trustScore}%</div>
                        <div className="text-xs text-gray-500">Trust Score</div>
                      </div>
                    </div>
                  </div>
                  
                  {isEditing ? (
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-1">About Me / Bio</label>
                      <Input
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="mb-2"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleSaveBio}>Save</Button>
                        <Button size="sm" variant="outline" onClick={() => {
                          setBio(userData.bio);
                          setIsEditing(false);
                        }}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <h3 className="text-sm font-medium mb-1">About Me</h3>
                      <p className="text-gray-600">{bio}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.interests && userData.interests.map((interest: string) => (
                        <Badge key={interest} variant="outline" className="bg-gray-50 text-gray-700">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Children's Ages</h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.childrenAges && userData.childrenAges.map((age: string) => (
                        <Badge key={age} className="bg-toy-blue/10 text-toy-blue">
                          {age}
                        </Badge>
                      ))}
                      {userData.childrenAges?.length === 0 && (
                        <span className="text-gray-500 text-sm">No children ages added yet</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div>{userData.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div>{userData.phone || 'Not provided'}</div>
                    </div>
                  </div>
                  
                  <Button className="flex items-center gap-2">
                    <MessageSquare size={18} />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Profile Tabs */}
        <Tabs defaultValue="my-toys">
          <TabsList className="mb-6 grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="my-toys">My Toys</TabsTrigger>
            <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-toys" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">My Listed Toys</h2>
              <Button>
                <Package size={18} className="mr-2" />
                Add New Toy
              </Button>
            </div>
            
            {userToys.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No Toys Listed Yet</h3>
                <p className="text-gray-600 mb-6">Start sharing toys your child has outgrown</p>
                <Button>Add Your First Toy</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {userToys.map(toy => (
                  <ToyCard key={toy.id} {...toy} isExchange={true} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="exchanges" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Exchange History</h2>
            
            {exchangeHistory.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No Exchanges Yet</h3>
                <p className="text-gray-600 mb-6">Start exchanging toys with other parents</p>
                <Button>Browse Available Toys</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {exchangeHistory.map(exchange => (
                  <Card key={exchange.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                          <img 
                            src={exchange.toyImage} 
                            alt={exchange.toyName} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = 'https://via.placeholder.com/100';
                            }}
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <h3 className="font-semibold">{exchange.toyName}</h3>
                            <Badge 
                              className={exchange.status === 'Completed' 
                                ? "bg-toy-green/20 text-toy-green" 
                                : "bg-amber-100 text-amber-700"
                              }
                            >
                              {exchange.status}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                            <span>{exchange.date}</span>
                            <span>•</span>
                            <Badge variant="outline" className="bg-gray-50">
                              {exchange.direction}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center mt-2">
                            <span className="text-sm mr-2">With:</span>
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarImage src={exchange.userAvatar} alt={exchange.withUser} />
                                <AvatarFallback className="bg-toy-purple text-white text-xs">
                                  {exchange.withUser[0]}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{exchange.withUser}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          {exchange.status === 'Completed' ? (
                            <Button variant="outline" size="sm">Leave Review</Button>
                          ) : (
                            <Button size="sm">Message</Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="wishlist" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Saved Toys</h2>
            
            {savedToys.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No Saved Toys</h3>
                <p className="text-gray-600 mb-6">Save toys you're interested in exchanging</p>
                <Button>Browse Toys</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {savedToys.map(toy => (
                  <ToyCard key={toy.id} {...toy} isExchange={true} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Messages</h2>
            
            {messages.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-medium text-gray-800 mb-2">No Messages</h3>
                <p className="text-gray-600 mb-6">Connect with other parents to start chatting</p>
                <Button>Find Parents</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map(message => (
                  <Card key={message.id} className={message.unread ? "border-toy-blue/30 bg-toy-blue/5" : ""}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={message.avatar} alt={message.user} />
                            <AvatarFallback className="bg-toy-purple text-white">
                              {message.user[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold">{message.user}</h3>
                              {message.unread && (
                                <Badge className="ml-2 bg-toy-blue text-white">New</Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{message.lastMessage}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs text-gray-500">{message.time}</span>
                          <Button size="sm" variant={message.unread ? "default" : "outline"}>
                            Reply
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default UserProfile;
