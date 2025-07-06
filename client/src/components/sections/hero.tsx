import { Link } from "wouter";
import { Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section-padding pt-20 bg-gradient-to-br from-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Vision
              </span>
              Into Reality
            </h1>
            <p className="text-lg text-neutral mb-8 leading-relaxed">
              Expert game development, mobile app creation, web solutions, and publishing services. 
              We bring your ideas to life with cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="btn-primary text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book a Meeting</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Submit a Query
                </Button>
              </Link>
            </div>
          </div>
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
