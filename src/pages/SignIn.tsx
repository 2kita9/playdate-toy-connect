
import React from 'react';
import { Link } from 'react-router-dom';
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
import { LogIn, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  remember: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // In a real app, this would make an API call to authenticate the user
    toast({
      title: "Sign-in successful",
      description: "Welcome back to ToyGuider!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-2 shadow-md">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Sign in to ToyGuider</CardTitle>
              <CardDescription>
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="remember"
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="remember" 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                          />
                          <label 
                            htmlFor="remember"
                            className="text-sm text-gray-600 cursor-pointer"
                          >
                            Remember me
                          </label>
                        </div>
                      )}
                    />
                    <Link to="/forgot-password" className="text-sm text-toy-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="border-t p-6 flex flex-col gap-4">
              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-toy-blue hover:underline">
                  Create an account
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
