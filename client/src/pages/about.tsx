import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Critical Focus",
      description: "Every project is treated as a legendary quest with precision execution"
    },
    {
      icon: Zap,
      title: "Next-Gen Innovation",
      description: "Cutting-edge technology combined with creative vision for breakthrough results"
    },
    {
      icon: Users,
      title: "Elite Team",
      description: "Master-level developers with specialized expertise in gaming and mobile tech"
    },
    {
      icon: Award,
      title: "Legendary Results",
      description: "Proven track record of delivering experiences that exceed expectations"
    }
  ];

  return (
    <div className="pt-16">
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-orbitron">
              <span className="text-gradient-green">
                ABOUT THE GUILD
              </span>
            </h1>
            <p className="text-lg text-neutral max-w-3xl mx-auto font-space">
              We're not just developers—we're digital architects of the future
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6 font-orbitron">
                <span className="text-gradient">OUR STORY</span>
              </h2>
              <p className="text-lg text-neutral mb-6 font-space">
                VortexTechStudio combines cutting-edge technology with creative vision 
                to deliver experiences that don't just meet expectations, they shatter them.
              </p>
              <p className="text-lg text-neutral mb-6 font-space">
                From indie game studios to enterprise solutions, we've powered digital 
                transformations across the gaming, mobile, and web ecosystems.
              </p>
              <p className="text-lg text-neutral font-space">
                Our team of elite developers brings years of experience in Unity, Unreal Engine, 
                React Native, and modern web technologies to every project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-full max-w-md mx-auto rounded-xl shadow-2xl animate-float p-8"
                   style={{ backgroundColor: 'var(--card-bg)' }}>
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="aboutTeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--neon-cyan)" />
                      <stop offset="50%" stopColor="var(--neon-purple)" />
                      <stop offset="100%" stopColor="var(--neon-pink)" />
                    </linearGradient>
                    <linearGradient id="aboutScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--neon-green)" />
                      <stop offset="100%" stopColor="var(--neon-yellow)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background workspace */}
                  <rect x="20" y="20" width="360" height="360" rx="20" fill="none" stroke="url(#aboutTeamGrad)" strokeWidth="2" opacity="0.3" />
                  
                  {/* Developer workstations */}
                  <g>
                    {/* Computer screens */}
                    <rect x="60" y="150" width="80" height="60" rx="5" fill="url(#aboutScreenGrad)" opacity="0.8" />
                    <rect x="260" y="150" width="80" height="60" rx="5" fill="url(#aboutScreenGrad)" opacity="0.8" />
                    
                    {/* Screen content - code lines */}
                    <g stroke="var(--dark-bg)" strokeWidth="2" opacity="0.6">
                      <line x1="70" y1="160" x2="120" y2="160" />
                      <line x1="70" y1="170" x2="110" y2="170" />
                      <line x1="70" y1="180" x2="130" y2="180" />
                      <line x1="270" y1="160" x2="320" y2="160" />
                      <line x1="270" y1="170" x2="310" y2="170" />
                      <line x1="270" y1="180" x2="330" y2="180" />
                    </g>
                    
                    {/* Developer avatars */}
                    <circle cx="100" cy="130" r="20" fill="var(--neon-cyan)" opacity="0.7" />
                    <circle cx="300" cy="130" r="20" fill="var(--neon-pink)" opacity="0.7" />
                    
                    {/* Gaming elements */}
                    <circle cx="90" cy="125" r="3" fill="var(--neon-yellow)" />
                    <circle cx="110" cy="125" r="3" fill="var(--neon-yellow)" />
                    <circle cx="290" cy="125" r="3" fill="var(--neon-yellow)" />
                    <circle cx="310" cy="125" r="3" fill="var(--neon-yellow)" />
                  </g>
                  
                  {/* Central collaboration area */}
                  <g>
                    <circle cx="200" cy="200" r="60" fill="none" stroke="url(#aboutTeamGrad)" strokeWidth="3" opacity="0.5" />
                    <circle cx="200" cy="200" r="15" fill="var(--neon-purple)" opacity="0.8" />
                    
                    {/* Connection lines */}
                    <line x1="140" y1="170" x2="160" y2="180" stroke="var(--neon-cyan)" strokeWidth="2" opacity="0.6" />
                    <line x1="260" y1="170" x2="240" y2="180" stroke="var(--neon-pink)" strokeWidth="2" opacity="0.6" />
                  </g>
                  
                  {/* Floating gaming icons */}
                  <g opacity="0.6">
                    <rect x="320" y="80" width="20" height="15" rx="3" fill="var(--neon-green)">
                      <animate attributeName="y" values="80;70;80" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <circle cx="80" cy="80" r="8" fill="var(--neon-cyan)">
                      <animate attributeName="cy" values="80;90;80" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <polygon points="350,300 360,320 340,320" fill="var(--neon-yellow)">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                    </polygon>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gaming-card p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-orbitron">
                    {value.title}
                  </h3>
                  <p className="text-neutral font-space">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
