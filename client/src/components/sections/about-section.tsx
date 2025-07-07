import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "UNITY", level: "EXPERT", color: "text-neon-cyan" },
    { name: "REACT", level: "MASTER", color: "text-neon-green" },
    { name: "NATIVE", level: "ELITE", color: "text-neon-pink" }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-orbitron">
              <span className="text-gradient">
                ABOUT THE GUILD
              </span>
            </h2>
            <p className="text-lg text-neutral mb-6 font-space">
              We're not just developers—we're digital architects of the future. 
              VortexTechStudio combines cutting-edge technology with creative vision 
              to deliver experiences that don't just meet expectations, they shatter them.
            </p>
            <p className="text-lg text-neutral mb-8 font-space">
              From indie game studios to enterprise solutions, we've powered digital 
              transformations across the gaming, mobile, and web ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="gaming-card p-4 rounded-lg text-center">
                  <CardContent className="p-0">
                    <div className={`text-2xl font-orbitron font-bold ${skill.color} mb-2`}>
                      {skill.name}
                    </div>
                    <p className="text-neutral text-sm">{skill.level}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="w-full max-w-md mx-auto rounded-xl shadow-2xl animate-float p-8"
                 style={{ backgroundColor: 'var(--card-bg)' }}>
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--neon-cyan)" />
                    <stop offset="50%" stopColor="var(--neon-purple)" />
                    <stop offset="100%" stopColor="var(--neon-pink)" />
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--neon-green)" />
                    <stop offset="100%" stopColor="var(--neon-yellow)" />
                  </linearGradient>
                </defs>
                
                {/* Background workspace */}
                <rect x="20" y="20" width="360" height="360" rx="20" fill="none" stroke="url(#teamGrad)" strokeWidth="2" opacity="0.3" />
                
                {/* Developer workstations */}
                <g>
                  {/* Computer screens */}
                  <rect x="60" y="150" width="80" height="60" rx="5" fill="url(#screenGrad)" opacity="0.8" />
                  <rect x="260" y="150" width="80" height="60" rx="5" fill="url(#screenGrad)" opacity="0.8" />
                  
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
                  <circle cx="200" cy="200" r="60" fill="none" stroke="url(#teamGrad)" strokeWidth="3" opacity="0.5" />
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
      </div>
    </section>
  );
};

export default AboutSection;
