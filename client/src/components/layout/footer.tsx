import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-orbitron">
              <span className="text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text">
                VORTEX STRATEGIES
              </span>
            </h3>
            <p className="text-neutral mb-4">
              Elite digital architects crafting legendary experiences through cutting-edge game development, mobile apps, and web solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral hover:text-neon-cyan transition-colors glow-effect p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral hover:text-neon-pink transition-colors glow-effect p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral hover:text-neon-yellow transition-colors glow-effect p-2 rounded-full">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-orbitron text-neon-cyan">POWER-UPS</h4>
            <ul className="space-y-2 text-neutral">
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Game Development</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Publishing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-orbitron text-neon-pink">HEADQUARTERS</h4>
            <ul className="space-y-2 text-neutral">
              <li><Link href="/about" className="hover:text-neon-pink transition-colors">About Squad</Link></li>
              <li><Link href="/process" className="hover:text-neon-pink transition-colors">Battle Plan</Link></li>
              <li><Link href="/contact" className="hover:text-neon-pink transition-colors">Contact Base</Link></li>
              <li><Link href="/privacy" className="hover:text-neon-pink transition-colors">Privacy Protocol</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-orbitron text-neon-yellow">COMM LINKS</h4>
            <div className="space-y-2 text-neutral">
              <p className="hover:text-neon-yellow transition-colors cursor-pointer">vortexgamingstaff@gmail.com</p>
              <p className="hover:text-neon-yellow transition-colors cursor-pointer">www.vortexstratergieslimited.uk</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-neutral">
          <p className="font-orbitron">
            &copy; 2024 <span className="text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text">VORTEX STRATEGIES LIMITED</span>. 
            All rights reserved. Game on!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
