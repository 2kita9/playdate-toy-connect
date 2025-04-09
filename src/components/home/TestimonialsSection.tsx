
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Mother of 2',
    avatar: '/avatars/sarah.jpg',
    content: 'ToyGuider has been a game-changer for our family! I\'ve exchanged over 10 toys that my kids outgrew and found perfect age-appropriate replacements. The parent matching feature introduced me to local moms with similar parenting styles.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Father of 1',
    avatar: '/avatars/michael.jpg',
    content: 'As a first-time dad, I had no idea what toys would help my daughter\'s development. The age-based recommendations are spot on, and I love connecting with other parents who share tips on which toys actually last!',
    rating: 5
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Mother of 3',
    avatar: '/avatars/priya.jpg',
    content: 'We\'ve saved so much money using the toy exchange feature! My kids get excited every time a "new" toy arrives. The platform made it easy to find other parents interested in sustainable consumption.',
    rating: 4
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Father of twins',
    avatar: '/avatars/james.jpg',
    content: 'The age-specific toy recommendations have been invaluable for my twins. I appreciate how ToyGuider breaks down which toys develop which skills. The exchange system works flawlessly too!',
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Parents Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how ToyGuider has helped parents find the perfect toys and build meaningful connections.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="border-0 shadow-md rounded-2xl h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-toy-blue text-white">
                            {testimonial.name.split(' ').map(name => name[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                          <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 flex-grow">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
