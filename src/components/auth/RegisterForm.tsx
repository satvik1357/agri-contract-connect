
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface RegisterFormProps {
  userType: 'farmer' | 'buyer';
}

const cropOptions = [
  'Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Pulses', 'Vegetables', 'Fruits', 'Other'
];

const RegisterForm = ({ userType }: RegisterFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form schemas based on user type
  const farmerFormSchema = z.object({
    fullName: z.string().min(2, {
      message: "Full name must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(10, {
      message: "Please enter a valid phone number.",
    }),
    aadhaarNumber: z.string().min(12, {
      message: "Please enter a valid 12-digit Aadhaar number.",
    }),
    landLocation: z.string().min(5, {
      message: "Please enter land location details.",
    }),
    landArea: z.string().min(1, {
      message: "Please enter land area.",
    }),
    soilType: z.string().min(2, {
      message: "Please specify soil type.",
    }),
    cropsGrown: z.string().min(1, {
      message: "Please select at least one crop.",
    }),
    experience: z.string().min(1, {
      message: "Please enter years of experience.",
    }),
    bankDetails: z.string().min(5, {
      message: "Please enter bank account details.",
    }),
    email: z.string().email({
      message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const buyerFormSchema = z.object({
    organizationName: z.string().min(2, {
      message: "Organization name must be at least 2 characters.",
    }),
    contactName: z.string().min(2, {
      message: "Contact name must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(10, {
      message: "Please enter a valid phone number.",
    }),
    businessLicense: z.string().min(5, {
      message: "Please enter business license number.",
    }),
    requiredCrops: z.string().min(1, {
      message: "Please select required crops.",
    }),
    preferredLocation: z.string().min(2, {
      message: "Please enter preferred location.",
    }),
    email: z.string().email({
      message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  // Use different schemas based on user type
  const formSchema = userType === 'farmer' ? farmerFormSchema : buyerFormSchema;

  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: userType === 'farmer' 
      ? {
          fullName: "",
          phoneNumber: "",
          aadhaarNumber: "",
          landLocation: "",
          landArea: "",
          soilType: "",
          cropsGrown: "",
          experience: "",
          bankDetails: "",
          email: "",
          password: "",
        }
      : {
          organizationName: "",
          contactName: "",
          phoneNumber: "",
          businessLicense: "",
          requiredCrops: "",
          preferredLocation: "",
          email: "",
          password: "",
        }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Registration successful!",
        description: "Please check your email for verification.",
      });
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {userType === 'farmer' ? 'Farmer Registration' : 'Buyer Registration'}
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {userType === 'farmer' ? (
            // Farmer registration form
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="aadhaarNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aadhaar Number</FormLabel>
                      <FormControl>
                        <Input placeholder="12-digit Aadhaar Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Farming Experience</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Years of experience" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="landLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Village, District, State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="landArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Land Area (in acres)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Land area in acres" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="soilType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Soil Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select soil type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="alluvial">Alluvial Soil</SelectItem>
                        <SelectItem value="black">Black Soil</SelectItem>
                        <SelectItem value="red">Red Soil</SelectItem>
                        <SelectItem value="laterite">Laterite Soil</SelectItem>
                        <SelectItem value="arid">Arid Soil</SelectItem>
                        <SelectItem value="forest">Forest Soil</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cropsGrown"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Crops Grown</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select crops" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cropOptions.map((crop) => (
                          <SelectItem key={crop} value={crop.toLowerCase()}>{crop}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="bankDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Account Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Account number, IFSC, Bank name" 
                        className="resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
            </>
          ) : (
            // Buyer registration form
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="organizationName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter organization name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter contact person name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="businessLicense"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business License Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter license number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="requiredCrops"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Required Crops</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select required crops" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cropOptions.map((crop) => (
                          <SelectItem key={crop} value={crop.toLowerCase()}>{crop}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="preferredLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter preferred location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
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
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Create a password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-agri-primary hover:bg-agri-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
