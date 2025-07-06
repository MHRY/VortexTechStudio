import { Gamepad2, Smartphone, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesOverview = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Unity & Unreal Engine expertise for engaging gaming experiences",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native Android & iOS applications with seamless performance",
      gradient: "from-accent to-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Rocket,
      title: "Publishing",
      description: "App store optimization and publishing services",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Our Services</h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <CardContent className="p-0 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                <p className="text-neutral">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
