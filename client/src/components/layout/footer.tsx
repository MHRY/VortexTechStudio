import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-orbitron font-bold mb-4">
              <span className="text-neon-cyan">VORTEX</span>
              <span className="text-neon-pink">STRATEGIES</span>
            </div>
            <p className="text-neutral font-space">
              Crafting legendary digital experiences for the next generation.
            </p>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">SERVICES</h4>
            <ul className="space-y-2 text-neutral">
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Game Development</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Publishing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">COMPANY</h4>
            <ul className="space-y-2 text-neutral">
              <li><Link href="/about" className="hover:text-neon-cyan transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-neon-cyan transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-4">CONTACT</h4>
            <div className="space-y-2 text-neutral font-space">
              <p>General inquiries:</p>
              <p className="text-neon-cyan">info@vortexstratergieslimited.uk</p>
              <p>Support:</p>
              <p className="text-neon-cyan">support@vortexstratergieslimited.uk</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-neutral font-space">
            © 2025 Vortex Strategies Ltd. All rights reserved. Built for the gaming community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
