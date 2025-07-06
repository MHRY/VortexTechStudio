import { Link } from "wouter";
import { Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section-padding pt-20 bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-orbitron">
              LEVEL UP YOUR{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent neon-text">
                DIGITAL GAME
              </span>
            </h1>
            <p className="text-lg text-neutral mb-8 leading-relaxed">
              Elite game development, mobile app creation, web solutions, and publishing services. 
              We transform your concepts into legendary digital experiences with next-gen technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="btn-primary text-white px-8 py-4 rounded-lg font-semibold font-orbitron flex items-center justify-center space-x-2 uppercase tracking-wider">
                  <Calendar className="h-5 w-5" />
                  <span>BOOK MISSION</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-secondary text-black px-8 py-4 rounded-lg font-semibold font-orbitron uppercase tracking-wider">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  START QUEST
                </Button>
              </Link>
            </div>
          </div>
          <div className="fade-in relative">
            <div className="gaming-card glow-effect rounded-2xl p-8 float-animation">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Background Grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B05FF"/>
                    <stop offset="50%" stopColor="#00FFFF"/>
                    <stop offset="100%" stopColor="#FFFF00"/>
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#grid)"/>
                
                {/* Gaming Setup */}
                <rect x="50" y="180" width="120" height="80" rx="8" fill="rgba(139,5,255,0.3)" stroke="#8B05FF" strokeWidth="2"/>
                <rect x="60" y="140" width="100" height="60" rx="4" fill="rgba(0,255,255,0.1)" stroke="#00FFFF" strokeWidth="1"/>
                
                {/* Code Screens */}
                <rect x="190" y="120" width="80" height="60" rx="4" fill="rgba(139,5,255,0.2)" stroke="#8B05FF" strokeWidth="1"/>
                <rect x="280" y="100" width="70" height="50" rx="4" fill="rgba(0,255,255,0.2)" stroke="#00FFFF" strokeWidth="1"/>
                
                {/* Gaming Controller */}
                <ellipse cx="100" cy="240" rx="25" ry="15" fill="rgba(255,255,0,0.3)" stroke="#FFFF00" strokeWidth="2"/>
                <circle cx="90" cy="235" r="3" fill="#00FFFF"/>
                <circle cx="110" cy="235" r="3" fill="#FF0099"/>
                
                {/* Mobile Devices */}
                <rect x="300" y="180" width="40" height="70" rx="8" fill="rgba(0,255,255,0.2)" stroke="#00FFFF" strokeWidth="2"/>
                <rect x="350" y="190" width="35" height="60" rx="6" fill="rgba(255,255,0,0.2)" stroke="#FFFF00" strokeWidth="2"/>
                
                {/* Floating Elements */}
                <circle cx="150" cy="80" r="8" fill="#8B05FF" opacity="0.6"/>
                <circle cx="250" cy="70" r="6" fill="#00FFFF" opacity="0.8"/>
                <circle cx="350" cy="60" r="10" fill="#FFFF00" opacity="0.5"/>
                <circle cx="80" cy="90" r="5" fill="#FF0099" opacity="0.7"/>
                
                {/* Connection Lines */}
                <path d="M 150 80 Q 200 50 250 70" stroke="url(#heroGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M 250 70 Q 300 40 350 60" stroke="url(#heroGrad)" strokeWidth="2" fill="none" opacity="0.6"/>
                
                {/* Central Logo */}
                <g transform="translate(200,150)">
                  <polygon points="-20,-10 20,-10 25,0 20,10 -20,10 -25,0" fill="url(#heroGrad)" opacity="0.8"/>
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontFamily="Orbitron">V</text>
                </g>
                
                {/* Particles */}
                <circle cx="120" cy="50" r="2" fill="#8B05FF" className="pulse-animation"/>
                <circle cx="280" cy="45" r="2" fill="#00FFFF" className="pulse-animation" style={{animationDelay: '0.5s'}}/>
                <circle cx="320" cy="80" r="2" fill="#FFFF00" className="pulse-animation" style={{animationDelay: '1s'}}/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
