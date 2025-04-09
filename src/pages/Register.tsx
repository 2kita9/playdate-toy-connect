
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User, Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  confirmPassword: z.string(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // In a real app, this would make an API call to register the user
    
    // Create a user profile in localStorage
    const userProfile = {
      id: 'user' + Math.floor(Math.random() * 1000),
      name: values.name,
      email: values.email,
      avatar: '/avatars/default.jpg',
      phone: '',
      location: 'New Delhi, India', // Default to India as requested
      bio: 'New ToyGuider member excited to connect with other parents!',
      joinDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
      rating: 5.0,
      reviews: 0,
      exchanges: 0,
      interests: ['Educational'],
      childrenAges: [],
      trustScore: 90,
      coverPhoto: '/images/profile-cover.jpg',
    };
    
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    localStorage.setItem('isLoggedIn', 'true');
    
    toast({
      title: "Registration successful",
      description: "Welcome to ToyGuider! Your profile has been created.",
    });

    // Redirect to profile page after successful registration
    navigate('/profile');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-2 shadow-md">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
              <CardDescription>
                Join ToyGuider to start exchanging toys with parents near you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <FormControl>
                            <Input 
                              type={isPasswordVisible ? "text" : "password"} 
                              placeholder="••••••••" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                          <button 
                            type="button"
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                          >
                            {isPasswordVisible ? 
                              <EyeOff className="h-4 w-4" /> : 
                              <Eye className="h-4 w-4" />
                            }
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <FormControl>
                            <Input 
                              type={isConfirmPasswordVisible ? "text" : "password"} 
                              placeholder="••••••••" 
                              className="pl-10" 
                              {...field} 
                            />
                          </FormControl>
                          <button 
                            type="button"
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                          >
                            {isConfirmPasswordVisible ? 
                              <EyeOff className="h-4 w-4" /> : 
                              <Eye className="h-4 w-4" />
                            }
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600">
                            I agree to the{' '}
                            <Link to="/terms" className="text-toy-blue hover:underline">
                              terms and conditions
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-toy-blue hover:underline">
                              privacy policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    Create Account
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="border-t p-6 flex flex-col gap-4">
              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/signin" className="font-medium text-toy-blue hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
