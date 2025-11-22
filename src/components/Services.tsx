import { Truck, Shield, Gem, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logisticsImg from "@/assets/logistics-service.jpg";
import securityImg from "@/assets/security-service.jpg";
import mineralsImg from "@/assets/minerals-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Logistics & Freight Services",
      description: "Comprehensive air, sea, and road freight solutions with custom clearing. Reliable delivery networks spanning continents with real-time tracking and compliance.",
      image: logisticsImg,
      features: ["Air & Sea Freight", "Road Transportation", "Custom Clearing", "Warehousing"],
      link: "/services",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Security & Escort Services",
      description: "Professional armed escort, asset protection, and facility surveillance. Licensed security teams with advanced monitoring systems for complete peace of mind.",
      image: securityImg,
      features: ["Armed Escort", "Asset Protection", "Facility Surveillance", "Risk Assessment"],
      link: "/services",
      color: "charcoal",
    },
    {
      icon: Gem,
      title: "Minerals Export Services",
      description: "Compliant export of gold, diamonds, and precious minerals. Fully documented, certified, and secure handling from source to international markets.",
      image: mineralsImg,
      features: ["Gold & Diamond Export", "Compliance Documentation", "Secure Transport", "Market Access"],
      link: "/services",
      color: "accent",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Three specialized divisions working seamlessly to deliver integrated solutions for your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-accent transition-all duration-500 hover:shadow-premium bg-card animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-accent p-3 rounded-full shadow-gold">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-cinzel font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground font-inter">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Explore Link */}
                <Button variant="ghost" size="sm" asChild className="group/btn text-accent hover:text-accent">
                  <Link to={service.link}>
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
