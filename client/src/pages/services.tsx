import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Smartphone, Code, Rocket, Zap, Shield } from "lucide-react";
import { useServiceSelection } from "@/hooks/use-service-selection";
import { useLocation } from "wouter";

const Services = () => {
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
      features: ["3D Game Development", "Mobile Game Optimization", "Multiplayer Integration", "VR/AR Experiences"],
      gradient: "from-neon-purple to-neon-pink",
      projectType: "game-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Elite Android & iOS applications with pro-level performance",
      features: ["Native iOS/Android", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
      gradient: "from-neon-cyan to-neon-green",
      projectType: "mobile-app"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Next-gen responsive websites and web applications",
      features: ["React/Vue.js Apps", "E-commerce Solutions", "API Integration", "Progressive Web Apps"],
      gradient: "from-neon-yellow to-neon-cyan",
      projectType: "web-development"
    },
    {
      icon: Rocket,
      title: "Publishing",
      description: "Power-up your app store presence and launch strategies",
      features: ["App Store Submission", "Marketing Strategy", "User Acquisition", "Analytics Setup"],
      gradient: "from-neon-pink to-neon-purple",
      projectType: "publishing"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Supercharge your applications with elite optimization techniques",
      features: ["Code Optimization", "Database Tuning", "CDN Integration", "Load Testing"],
      gradient: "from-neon-green to-neon-yellow",
      projectType: "optimization"
    },
    {
      icon: Shield,
      title: "Security Audit",
      description: "Fortress-level security analysis and vulnerability assessment",
      features: ["Security Testing", "Penetration Testing", "Code Review", "Compliance Audit"],
      gradient: "from-neon-cyan to-neon-purple",
      projectType: "security"
    }
  ];

  return (
    <div className="pt-16">
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-orbitron">
              <span className="text-gradient-purple">
                ELITE SERVICES
              </span>
            </h1>
            <p className="text-lg text-neutral max-w-3xl mx-auto font-space">
              Comprehensive digital solutions crafted with gaming precision and next-level performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="gaming-card service-card p-8 rounded-xl cursor-pointer transition-all duration-300 group"
                onClick={() => handleServiceClick(service.projectType, service.title)}
              >
                <CardContent className="p-0 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 font-orbitron group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral group-hover:text-light transition-colors mb-4">
                    {service.description}
                  </p>

                  <ul className="text-sm text-neutral space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-sm text-neon-cyan font-semibold opacity-0 group-hover:opacity-100 transition-opacity font-orbitron">
                    → CLICK TO START QUEST
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
