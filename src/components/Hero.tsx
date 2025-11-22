import { ArrowRight, Shield, Globe, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Integrated logistics, security and minerals export services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in border border-accent/30">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-inter font-semibold text-accent">
              Certified & Trusted Worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-primary-foreground mb-6 animate-fade-in leading-tight">
            Integrated Logistics,
            <span className="block text-accent">Security & Minerals</span>
            Export Services
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-inter mb-8 max-w-2xl animate-fade-in leading-relaxed">
            Reliable, secure and compliant operations across the globe. 
            Your trusted partner for freight, protection, and precious minerals trade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button variant="gold" size="xl" asChild className="group">
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/services">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-primary-foreground/80 animate-fade-in">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-inter font-medium">24/7 Secure Operations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-accent" />
              <span className="text-sm font-inter font-medium">Global Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-accent" />
              <span className="text-sm font-inter font-medium">Fully Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
