
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Share2, 
  MessageSquare, 
  Star, 
  Gift, 
  Check, 
  MapPin, 
  Calendar, 
  ThumbsUp, 
  ThumbsDown, 
  AlertTriangle 
} from 'lucide-react';

// Mock data for toy details
const toysData = {
  '1': {
    id: '1',
    name: 'Wooden Building Blocks Set',
    images: [
      '/images/toy-blocks.jpg',
      '/images/toy-blocks-2.jpg',
      '/images/toy-blocks-3.jpg'
    ],
    ageGroup: '1-3',
    category: 'Educational',
    rating: 4.8,
    reviews: 126,
    description: 'This premium wooden block set includes 100 solid wood blocks in 4 colors and 9 shapes. Ideal for toddlers to develop fine motor skills, hand-eye coordination, and creative thinking. Made from sustainable wood with non-toxic, child-safe paints.',
    features: [
      '100 wooden blocks in various shapes and colors',
      'Develops spatial awareness and problem-solving skills',
      'Made from sustainable, child-safe materials',
      'Comes with a canvas storage bag',
      'Recommended by child development experts'
    ],
    specifications: {
      Brand: 'EduPlay',
      Material: 'Natural wood with non-toxic finishes',
      Dimensions: '10" x 8" x 7" (storage bag)',
      Weight: '2.5 lbs',
      Age: 'Ages 18 months to 5 years',
      Safety: 'Meets or exceeds all safety standards'
    },
    developmentSkills: ['Fine Motor', 'Cognitive', 'Creativity', 'Problem Solving'],
    owner: {
      id: 'user123',
      name: 'Sarah Parker',
      avatar: '/avatars/sarah.jpg',
      location: 'Brooklyn, NY',
      rating: 4.9,
      exchanges: 24
    },
    condition: 'Like New',
    originalPrice: '$45.99',
    reviews: [
      {
        id: 'r1',
        user: 'Michael T.',
        avatar: '/avatars/michael.jpg',
        rating: 5,
        date: '2025-02-15',
        comment: 'My 2-year-old loves these blocks! The quality is excellent and they\'ve held up to daily play for months.'
      },
      {
        id: 'r2',
        user: 'Priya K.',
        avatar: '/avatars/priya.jpg',
        rating: 4,
        date: '2025-01-28',
        comment: 'Great blocks, very sturdy. Wish they came in more colors but otherwise perfect for developing motor skills.'
      }
    ]
  }
};

// Component to display star ratings
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map(star => (
        <Star 
          key={star} 
          size={18} 
          className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
      <span className="ml-2 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const ToyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // In a real app, you would fetch the toy data based on the ID
  const toy = toysData[id as keyof typeof toysData] || null;
  
  if (!toy) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Toy Not Found</h2>
            <p className="mb-6">The toy you're looking for doesn't exist or has been removed.</p>
            <Link to="/guide">
              <Button>Return to Toy Guide</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {toy.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl bg-white border">
                        <img 
                          src={image} 
                          alt={`${toy.name} - image ${index + 1}`} 
                          className="w-full h-[400px] object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/600x400';
                          }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 custom-scrollbar">
              {toy.images.map((image, index) => (
                <div 
                  key={index}
                  className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 border-gray-200 cursor-pointer hover:border-toy-blue"
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/100';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Toy Details */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <Badge className={`age-badge-${toy.ageGroup} mb-2`}>
                  Age {toy.ageGroup} years
                </Badge>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{toy.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={toy.rating} />
                  <span className="text-gray-500">({toy.reviews} reviews)</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={isWishlisted ? "text-toy-pink bg-toy-pink/10" : "text-gray-500"}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart size={20} className={isWishlisted ? "fill-toy-pink" : ""} />
                </Button>
                <Button variant="outline" size="icon" className="text-gray-500">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>
            
            {/* Owner Info for Exchange Toy */}
            {toy.owner && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={toy.owner.avatar} alt={toy.owner.name} />
                      <AvatarFallback className="bg-toy-blue text-white">
                        {toy.owner.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{toy.owner.name}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-1" />
                        {toy.owner.location}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare size={18} />
                    Contact
                  </Button>
                </div>
                
                <div className="flex justify-between mt-4">
                  <div className="text-sm">
                    <span className="text-gray-500">Condition:</span> 
                    <span className="font-medium ml-1">{toy.condition}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Original Price:</span> 
                    <span className="font-medium ml-1">{toy.originalPrice}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Exchanges:</span> 
                    <span className="font-medium ml-1">{toy.owner.exchanges}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Action Button */}
            <Button size="lg" className="w-full mb-6">
              <Gift size={18} className="mr-2" />
              Request Exchange
            </Button>
            
            {/* Tabs for Details */}
            <Tabs defaultValue="description">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specs</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="text-gray-700 space-y-4">
                <p>{toy.description}</p>
                
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Development Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {toy.developmentSkills.map(skill => (
                      <Badge key={skill} variant="outline" className="bg-toy-blue/5">
                        <Check size={14} className="mr-1 text-toy-blue" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="text-gray-700">
                <ul className="space-y-2">
                  {toy.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={18} className="text-toy-green mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="specifications" className="text-gray-700">
                <div className="divide-y">
                  {Object.entries(toy.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3">
                      <span className="font-medium">{key}</span>
                      <span>{value as string}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="text-gray-700">
                <div className="space-y-6">
                  {toy.reviews.map(review => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={review.avatar} alt={review.user} />
                            <AvatarFallback className="bg-toy-purple text-white">
                              {review.user[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{review.user}</span>
                        </div>
                        <div className="flex items-center">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        <Calendar size={14} className="inline mr-1" />
                        {review.date}
                      </div>
                      <p>{review.comment}</p>
                      <div className="flex gap-4 mt-2">
                        <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <ThumbsUp size={14} /> Helpful
                        </button>
                        <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <ThumbsDown size={14} /> Not Helpful
                        </button>
                        <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <AlertTriangle size={14} /> Report
                        </button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">View All Reviews</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Similar Toys Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Toys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* In a real app, you would map through similar toys here */}
            <div className="bg-gray-100 rounded-xl p-4 text-center h-64 flex items-center justify-center">
              <p className="text-gray-500">Similar toy suggestions would appear here</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center h-64 flex items-center justify-center">
              <p className="text-gray-500">Similar toy suggestions would appear here</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center h-64 flex items-center justify-center">
              <p className="text-gray-500">Similar toy suggestions would appear here</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 text-center h-64 flex items-center justify-center">
              <p className="text-gray-500">Similar toy suggestions would appear here</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ToyDetail;
