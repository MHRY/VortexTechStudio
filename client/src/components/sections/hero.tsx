import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const Hero = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Gaming character illustration */}
          <div className="mb-8 animate-float">
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-neon-cyan shadow-lg animate-pulse-neon relative overflow-hidden"
                 style={{ backgroundColor: 'var(--card-bg)' }}>
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Gaming Avatar */}
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--neon-cyan)" />
                    <stop offset="100%" stopColor="var(--neon-purple)" />
                  </linearGradient>
                </defs>
                
                {/* Head */}
                <circle cx="100" cy="80" r="35" fill="url(#avatarGrad)" opacity="0.8" />
                
                {/* Gaming Headset */}
                <path d="M65 70 Q60 60 70 55 Q100 45 130 55 Q140 60 135 70" 
                      fill="none" stroke="var(--neon-cyan)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="65" cy="70" r="8" fill="var(--neon-pink)" opacity="0.9" />
                <circle cx="135" cy="70" r="8" fill="var(--neon-pink)" opacity="0.9" />
                
                {/* Body */}
                <ellipse cx="100" cy="140" rx="25" ry="35" fill="url(#avatarGrad)" opacity="0.7" />
                
                {/* Gaming Controller */}
                <rect x="90" y="150" width="20" height="12" rx="3" fill="var(--neon-green)" opacity="0.9" />
                <circle cx="95" cy="156" r="2" fill="var(--neon-yellow)" />
                <circle cx="105" cy="156" r="2" fill="var(--neon-yellow)" />
                
                {/* Digital effects */}
                <g opacity="0.6">
                  <circle cx="60" cy="100" r="2" fill="var(--neon-cyan)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="120" r="2" fill="var(--neon-pink)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="70" cy="160" r="2" fill="var(--neon-green)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-orbitron font-black mb-6 glow-text">
            <span className="text-gradient">
              LEVEL UP
            </span>
            <br />
            <span className="text-foreground">YOUR DIGITAL GAME</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-neutral mb-8 max-w-3xl mx-auto font-space">
            Elite gaming experiences, legendary mobile apps, and next-gen web solutions. 
            We don't just build software—we craft digital legends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setLocation('/contact')}
              className="btn-primary px-8 py-4 text-lg font-orbitron font-bold"
            >
              START YOUR QUEST
            </Button>
            <Button 
              variant="outline"
              onClick={() => setLocation('/services')}
              className="border-2 border-neon-cyan px-8 py-4 text-lg font-orbitron font-bold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all"
            >
              VIEW ACHIEVEMENTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
