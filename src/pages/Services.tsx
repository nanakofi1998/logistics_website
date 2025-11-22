import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Shield, Gem, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceDetails = [
    {
      icon: Truck,
      title: "Logistics & Freight Services",
      description: "End-to-end logistics solutions for businesses of all sizes",
      features: [
        "Air Freight - Express and standard international air cargo",
        "Sea Freight - Container and bulk shipments worldwide",
        "Road Transportation - Domestic and cross-border trucking",
        "Custom Clearing - Expert handling of import/export documentation",
        "Warehousing - Secure storage facilities globally",
        "Last-Mile Delivery - Direct to customer doorstep",
      ],
      color: "primary",
    },
    {
      icon: Shield,
      title: "Security & Escort Services",
      description: "Comprehensive security solutions for high-value assets",
      features: [
        "Armed Escort - Trained personnel for asset protection in transit",
        "Facility Surveillance - 24/7 monitoring with advanced systems",
        "Risk Assessment - Threat analysis and mitigation planning",
        "Executive Protection - Personal security for VIPs",
        "Cybersecurity - Digital asset protection and monitoring",
        "Compliance Training - Security protocol education",
      ],
      color: "charcoal",
    },
    {
      icon: Gem,
      title: "Minerals Export Services",
      description: "Specialized handling of precious minerals and gemstones",
      features: [
        "Gold & Diamond Export - Certified and compliant precious metal handling",
        "Gemstone Trading - Secure international gemstone transactions",
        "Compliance Documentation - Full regulatory paperwork and certification",
        "Valuation Services - Expert appraisal and authentication",
        "Secure Transportation - Armored vehicles and bonded facilities",
        "Market Access - Direct connections to international buyers",
      ],
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl w-96 h-96 top-10 -right-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-primary-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/80 font-inter">
                Comprehensive solutions across logistics, security, and minerals export
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="space-y-20">
              {serviceDetails.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 md:p-12 border-2 hover:border-accent transition-all duration-500 shadow-premium animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon and Title */}
                    <div className="md:w-1/3">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h2 className="text-3xl font-cinzel font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground font-inter mb-6">
                        {service.description}
                      </p>
                      <Button variant="gold" asChild>
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </div>

                    {/* Features */}
                    <div className="md:w-2/3">
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <p className="text-foreground font-inter">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-cinzel font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground font-inter mb-8">
                Contact us today for a customized solution tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/tracking">Track Shipment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
