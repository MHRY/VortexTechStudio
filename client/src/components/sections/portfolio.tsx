import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "NEON RUNNER",
      description: "Unity-powered endless runner with cyberpunk aesthetics",
      category: "GAME DEV",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      color: "text-neon-purple"
    },
    {
      title: "HYPER CHAT",
      description: "Real-time messaging app with gaming-inspired UI",
      category: "MOBILE APP",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      color: "text-neon-green"
    },
    {
      title: "QUANTUM DASH",
      description: "Analytics dashboard with real-time data visualization",
      category: "WEB APP",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      color: "text-neon-yellow"
    },
    {
      title: "PIXEL FORGE",
      description: "Game development toolkit with visual scripting",
      category: "GAME DEV",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      color: "text-neon-cyan"
    },
    {
      title: "STORM TRACKER",
      description: "Mobile weather app with gaming achievements",
      category: "MOBILE APP",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      color: "text-neon-pink"
    },
    {
      title: "NEXUS PORTAL",
      description: "E-commerce platform with VR product previews",
      category: "WEB APP",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      color: "text-neon-purple"
    }
  ];

  return (
    <section className="section-padding relative" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-orbitron">
            <span className="text-gradient-green">
              LEGENDARY BUILDS
            </span>
          </h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto font-space">
            Showcase of our most epic digital achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="gaming-card portfolio-item rounded-xl overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.description}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white h-6 w-6" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral mb-4 font-space group-hover:text-light transition-colors">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`font-orbitron font-bold ${project.color}`}>
                    {project.category}
                  </span>
                  <ExternalLink className="text-neon-cyan hover:text-neon-pink cursor-pointer transition-colors h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
