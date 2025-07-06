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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import FileUpload from "@/components/ui/file-upload";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  // Handle pre-selected service data
  useEffect(() => {
    const selectedService = sessionStorage.getItem('selectedService');
    if (selectedService) {
      const serviceData = JSON.parse(selectedService);
      form.setValue('projectType', serviceData.projectType);
      form.setValue('message', `I'm interested in your ${serviceData.title} services. Please provide more information about:`);
      sessionStorage.removeItem('selectedService');
    }
  }, [form]);

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

      return await fetch("/api/contact", {
        method: "POST",
        body: formData,
      }).then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Failed to send message");
        }
        return res.json();
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
      setFiles([]);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
            <span className="text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text">
              INITIATE CONTACT
            </span>
          </h2>
          <p className="text-lg text-neutral max-w-3xl mx-auto">
            Ready to level up your digital presence? Let's team up and create legendary experiences together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
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
            
            <Card className="mt-8 gaming-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground font-orbitron">
                  <Calendar className="h-5 w-5 mr-2 text-neon-cyan" />
                  SCHEDULE MISSION BRIEFING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral mb-4">
                  Book a free strategy session to discuss your project and unlock your digital potential.
                </p>
                {!showCalendar ? (
                  <div className="gaming-card p-4 rounded-lg border-2 border-dashed border-neon-cyan text-center">
                    <Calendar className="h-12 w-12 text-neon-cyan mx-auto mb-2" />
                    <p className="text-neutral mb-4">
                      Ready to level up? Let's connect!
                    </p>
                    <Button 
                      className="btn-primary font-orbitron"
                      onClick={() => setShowCalendar(true)}
                    >
                      ACTIVATE CALENDAR
                    </Button>
                  </div>
                ) : (
                  <div className="gaming-card p-4 rounded-lg">
                    <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden">
                      <iframe
                        src="https://calendly.com/embed_placeholder"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Schedule Meeting"
                        className="rounded-lg"
                        onError={() => {
                          // Fallback display
                          const iframe = document.querySelector('iframe[title="Schedule Meeting"]');
                          if (iframe && iframe.parentElement) {
                            iframe.parentElement.innerHTML = `
                              <div class="flex items-center justify-center h-full text-center p-8">
                                <div>
                                  <Calendar class="h-16 w-16 text-neon-cyan mx-auto mb-4" />
                                  <h3 class="text-lg font-semibold text-foreground mb-2">Calendar Integration</h3>
                                  <p class="text-neutral mb-4">Connect with us via email to schedule your meeting:</p>
                                  <a href="mailto:vortexgamingstaff@gmail.com?subject=Meeting Request" 
                                     class="text-neon-cyan hover:text-neon-pink transition-colors font-semibold">
                                    vortexgamingstaff@gmail.com
                                  </a>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black"
                      onClick={() => setShowCalendar(false)}
                    >
                      Hide Calendar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
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
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="game-development">Game Development</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="publishing">Publishing Services</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
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
                      <FormLabel>Project Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your project requirements, timeline, and budget..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Project Documents (Optional)
                  </label>
                  <FileUpload files={files} onFilesChange={setFiles} />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full font-orbitron uppercase tracking-wider"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    "DEPLOY MESSAGE"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
