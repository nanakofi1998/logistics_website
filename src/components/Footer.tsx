import { Link } from "react-router-dom";
import { Truck, Shield, Gem, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-6 w-6 text-accent" />
              <Shield className="h-6 w-6 text-accent" />
              <Gem className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-cinzel font-bold mb-4">
              GlobalSecure<span className="text-accent">Logistics</span>
            </h3>
            <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed mb-4">
              Integrated logistics, security, and minerals export services with global reach and local expertise.
            </p>
            
            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-accent/20 rounded text-xs font-inter font-medium text-accent border border-accent/30">
                ISO 9001
              </div>
              <div className="px-3 py-1 bg-accent/20 rounded text-xs font-inter font-medium text-accent border border-accent/30">
                Licensed
              </div>
              <div className="px-3 py-1 bg-accent/20 rounded text-xs font-inter font-medium text-accent border border-accent/30">
                Certified
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cinzel font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "Tracking", href: "/tracking" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent font-inter text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cinzel font-bold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 font-inter text-sm">24/7 Hotline</p>
                  <p className="text-primary-foreground font-inter text-sm font-medium">+1 (800) 555-0123</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 font-inter text-sm">Email</p>
                  <p className="text-primary-foreground font-inter text-sm font-medium">info@globalsecure.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 font-inter text-sm">Headquarters</p>
                  <p className="text-primary-foreground font-inter text-sm font-medium">New York, USA</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-cinzel font-bold mb-4 text-accent">Newsletter</h4>
            <p className="text-primary-foreground/80 font-inter text-sm mb-4">
              Subscribe for industry insights and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="gold" size="sm" type="submit" className="w-full">
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 border border-primary-foreground/20 hover:border-accent"
                  aria-label="Social media link"
                >
                  <social.icon className="h-5 w-5 text-primary-foreground/80 hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 font-inter text-sm">
              © 2024 GlobalSecureLogistics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent font-inter text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent font-inter text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
