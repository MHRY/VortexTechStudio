import { Gamepad2, Smartphone, Code, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useServiceSelection } from "@/hooks/use-service-selection";
import { useLocation } from "wouter";

const ServicesOverview = () => {
  const { selectService } = useServiceSelection();
  const [, setLocation] = useLocation();

  const handleServiceClick = (projectType: string, title: string) => {
    selectService(projectType, title);
    setLocation('/contact');
  };

  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Unity & Unreal Engine mastery for legendary gaming experiences",
      gradient: "from-neon-purple to-neon-pink",
      projectType: "game-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Elite Android & iOS applications with pro-level performance",
      gradient: "from-neon-cyan to-neon-green",
      projectType: "mobile-app"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Next-gen responsive websites and web applications",
      gradient: "from-neon-yellow to-neon-cyan",
      projectType: "web-development"
    },
    {
      icon: Rocket,
      title: "Publishing",
      description: "Power-up your app store presence and launch strategies",
      gradient: "from-neon-pink to-neon-purple",
      projectType: "publishing"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-orbitron">
            <span className="text-gradient-purple">
              POWER-UPS
            </span>
          </h2>
          <p className="text-lg text-neutral max-w-2xl mx-auto font-space">
            Elite digital solutions crafted for next-level performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="gaming-card service-card card-hover p-8 rounded-xl cursor-pointer transition-all duration-300 group"
              onClick={() => handleServiceClick(service.projectType, service.title)}
            >
              <CardContent className="p-0 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white h-8 w-8" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 font-orbitron group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral group-hover:text-light transition-colors">
                  {service.description}
                </p>

                <div className="mt-4 text-sm text-neon-cyan font-semibold opacity-0 group-hover:opacity-100 transition-opacity font-orbitron">
                  → CLICK TO START QUEST
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
