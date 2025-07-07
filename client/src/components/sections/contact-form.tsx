import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Globe, Clock, Calendar, Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/ui/file-upload";
import { useServiceSelection } from "@/hooks/use-service-selection";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type BookingFormData = z.infer<typeof bookingFormSchema>;

const ContactForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();
  const { selectedService, clearSelection } = useServiceSelection();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const bookingForm = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  // Handle pre-selected service data
  useEffect(() => {
    if (selectedService) {
      form.setValue('projectType', selectedService.projectType);
      form.setValue('message', `I'm interested in your ${selectedService.title} services. Please provide more information about:`);
      clearSelection();
    }
  }, [selectedService, form, clearSelection]);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("projectType", data.projectType);
      formData.append("message", data.message);
      
      files.forEach((file) => {
        formData.append("files", file);
      });

      return await apiRequest("POST", "/api/contact", formData);
    },
    onSuccess: () => {
      toast({
        title: "Mission Accomplished!",
        description: "Message transmitted successfully. We'll respond within 24 hours.",
      });
      form.reset();
      setFiles([]);
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const bookingData = {
        ...data,
        date: data.date.toISOString(),
        type: 'booking',
      };

      return await apiRequest("POST", "/api/booking", JSON.stringify(bookingData));
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "Your appointment request has been sent to info@vortexstratergieslimited.uk",
      });
      bookingForm.reset();
      setSelectedDate(undefined);
      setShowCalendar(false);
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const onBookingSubmit = (data: BookingFormData) => {
    bookingMutation.mutate(data);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
            <span className="text-gradient-purple">
              INITIATE CONTACT
            </span>
          </h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto font-space">
            Ready to level up your digital presence? Let's team up and create legendary experiences together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-orbitron">COMM CHANNELS</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mr-4 glow-effect">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-orbitron">DIRECT LINK</h4>
                  <p className="text-neon-cyan">vortexgamingstaff@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-green rounded-full flex items-center justify-center mr-4 glow-effect">
                  <Globe className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-orbitron">HQ PORTAL</h4>
                  <p className="text-neon-cyan">www.vortexstratergieslimited.uk</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-yellow to-neon-pink rounded-full flex items-center justify-center mr-4 glow-effect">
                  <Clock className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-orbitron">RESPONSE TIME</h4>
                  <p className="text-neon-cyan">Mission Critical: &lt;24hrs</p>
                </div>
              </div>
            </div>

            {/* Calendar Section */}
            <Card className="mt-8 gaming-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-orbitron">
                  <Calendar className="h-5 w-5 mr-2 text-neon-cyan" />
                  SCHEDULE MISSION BRIEFING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral mb-4 font-space">
                  Book a free strategy session to discuss your project and unlock your digital potential.
                </p>

                {!showCalendar ? (
                  <div className="gaming-card p-4 rounded-lg border-2 border-dashed border-neon-cyan text-center">
                    <Calendar className="h-12 w-12 text-neon-cyan mx-auto mb-2" />
                    <p className="text-neutral mb-4 font-space">
                      Ready to level up? Let's connect!
                    </p>
                    <Button
                      className="btn-primary font-orbitron"
                      onClick={() => setShowCalendar(true)}
                    >
                      BOOK APPOINTMENT
                    </Button>
                  </div>
                ) : (
                  <div className="calendar-container p-6 rounded-lg gaming-card">
                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-4">
                      SCHEDULE APPOINTMENT
                    </h3>
                    <Form {...bookingForm}>
                      <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={bookingForm.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-orbitron font-bold text-neutral">NAME</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your name"
                                    className="form-input"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={bookingForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-orbitron font-bold text-neutral">EMAIL</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="form-input"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={bookingForm.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-orbitron font-bold text-neutral">SELECT DATE</FormLabel>
                              <FormControl>
                                <CalendarComponent
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                                  className="rounded-md border gaming-card"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={bookingForm.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-orbitron font-bold text-neutral">SELECT TIME</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="form-input">
                                    <SelectValue placeholder="Choose time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="09:00">09:00 AM</SelectItem>
                                  <SelectItem value="10:00">10:00 AM</SelectItem>
                                  <SelectItem value="11:00">11:00 AM</SelectItem>
                                  <SelectItem value="14:00">02:00 PM</SelectItem>
                                  <SelectItem value="15:00">03:00 PM</SelectItem>
                                  <SelectItem value="16:00">04:00 PM</SelectItem>
                                  <SelectItem value="17:00">05:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={bookingForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-orbitron font-bold text-neutral">MESSAGE (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Brief description of what you'd like to discuss..."
                                  className="form-input"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex gap-3">
                          <Button
                            type="submit"
                            className="btn-primary font-orbitron flex-1"
                            disabled={bookingMutation.isPending}
                          >
                            {bookingMutation.isPending ? (
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            ) : null}
                            BOOK APPOINTMENT
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowCalendar(false)}
                            className="font-orbitron"
                          >
                            CANCEL
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="gaming-card contact-form">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-foreground">SEND MESSAGE</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-orbitron font-bold text-neutral">NAME</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="form-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-orbitron font-bold text-neutral">EMAIL</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            className="form-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-orbitron font-bold text-neutral">PROJECT TYPE</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="form-input">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="game-development">Game Development</SelectItem>
                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="publishing">Publishing</SelectItem>
                            <SelectItem value="optimization">Performance Optimization</SelectItem>
                            <SelectItem value="security">Security Audit</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-orbitron font-bold text-neutral">MESSAGE</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="form-input resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <label className="block text-sm font-orbitron font-bold text-neutral mb-2">
                      ATTACHMENTS
                    </label>
                    <FileUpload
                      files={files}
                      onFilesChange={setFiles}
                      maxFiles={5}
                      maxSize={10 * 1024 * 1024} // 10MB
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="btn-primary w-full px-6 py-4 font-orbitron font-bold text-white"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      "TRANSMIT MESSAGE"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
