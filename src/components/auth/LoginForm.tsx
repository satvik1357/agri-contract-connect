
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

const emailLoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  rememberMe: z.boolean().optional(),
});

const phoneLoginSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  otp: z.string().min(4, {
    message: "Please enter the OTP.",
  }).optional(),
  rememberMe: z.boolean().optional(),
});

type EmailLoginValues = z.infer<typeof emailLoginSchema>;
type PhoneLoginValues = z.infer<typeof phoneLoginSchema>;

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  
  const emailForm = useForm<EmailLoginValues>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const phoneForm = useForm<PhoneLoginValues>({
    resolver: zodResolver(phoneLoginSchema),
    defaultValues: {
      phoneNumber: "",
      otp: "",
      rememberMe: false,
    },
  });

  function onEmailSubmit(values: EmailLoginValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Email login:", values);
      toast({
        title: "Login successful!",
        description: "Welcome back to AgriConnect!",
      });
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 1500);
  }

  function onPhoneSubmit(values: PhoneLoginValues) {
    setIsSubmitting(true);
    
    if (otpSent) {
      // Simulate OTP verification
      setTimeout(() => {
        console.log("Phone login with OTP:", values);
        toast({
          title: "Login successful!",
          description: "Welcome back to AgriConnect!",
        });
        setIsSubmitting(false);
        navigate('/dashboard');
      }, 1500);
    } else {
      // Simulate sending OTP
      setTimeout(() => {
        console.log("Sending OTP to:", values.phoneNumber);
        toast({
          title: "OTP Sent!",
          description: `OTP has been sent to ${values.phoneNumber}`,
        });
        setIsSubmitting(false);
        setOtpSent(true);
      }, 1500);
    }
  }

  function resendOtp() {
    const phoneNumber = phoneForm.getValues("phoneNumber");
    
    toast({
      title: "OTP Sent!",
      description: `A new OTP has been sent to ${phoneNumber}`,
    });
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-agri-dark">Login to AgriConnect</h2>
      
      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="phone">Phone</TabsTrigger>
        </TabsList>
        
        <TabsContent value="email">
          <Form {...emailForm}>
            <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
              <FormField
                control={emailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={emailForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex items-center justify-between">
                <FormField
                  control={emailForm.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm cursor-pointer">Remember me</FormLabel>
                    </FormItem>
                  )}
                />
                
                <Link to="/forgot-password" className="text-sm text-agri-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-agri-primary hover:bg-agri-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </TabsContent>
        
        <TabsContent value="phone">
          <Form {...phoneForm}>
            <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-6">
              <FormField
                control={phoneForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        {...field} 
                        disabled={otpSent}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {otpSent && (
                <FormField
                  control={phoneForm.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter OTP sent to your phone" 
                          {...field} 
                        />
                      </FormControl>
                      <div className="flex justify-end">
                        <Button 
                          type="button" 
                          variant="link" 
                          className="text-sm px-0 text-agri-primary"
                          onClick={resendOtp}
                        >
                          Resend OTP
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              {otpSent && (
                <FormField
                  control={phoneForm.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm cursor-pointer">Remember me</FormLabel>
                    </FormItem>
                  )}
                />
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-agri-primary hover:bg-agri-dark"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (otpSent ? "Verifying..." : "Sending OTP...") 
                  : (otpSent ? "Verify & Login" : "Send OTP")}
              </Button>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-agri-primary hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
