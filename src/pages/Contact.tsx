import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "24/7 Hotline",
      details: ["+1 (800) 555-0123", "+1 (800) 555-0124"],
      color: "accent",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@globalsecure.com", "support@globalsecure.com"],
      color: "primary",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Corporate Plaza", "New York, NY 10001, USA"],
      color: "charcoal",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Emergency Support", "Mon-Fri: 9AM - 6PM EST"],
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl w-96 h-96 top-10 -left-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-primary-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-primary-foreground/80 font-inter">
                We're here to help with all your logistics, security, and export needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-12 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-2 hover:border-accent transition-all duration-300 shadow-premium hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <info.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-cinzel font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground font-inter">
                      {detail}
                    </p>
                  ))}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Form */}
                <Card className="p-8 border-2 shadow-premium animate-fade-in">
                  <h2 className="text-3xl font-cinzel font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-inter font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-inter font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-inter font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-inter font-medium text-foreground mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => handleChange(e as any)}
                        className="w-full h-10 px-3 rounded-md border-2 border-input bg-background focus:border-accent focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="logistics">Logistics & Freight</option>
                        <option value="security">Security & Escort</option>
                        <option value="minerals">Minerals Export</option>
                        <option value="all">All Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-inter font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="border-2 focus:border-accent resize-none"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>

                {/* Map & Additional Info */}
                <div className="space-y-6 animate-fade-in">
                  <Card className="p-8 border-2 bg-gradient-navy text-primary-foreground">
                    <h3 className="text-2xl font-cinzel font-bold mb-4 text-accent">
                      Visit Our Office
                    </h3>
                    <p className="font-inter mb-6 text-primary-foreground/80">
                      Our team is available for in-person consultations at our headquarters. Schedule an appointment for personalized service.
                    </p>
                    <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-6">
                      <MapPin className="h-12 w-12 text-accent" />
                    </div>
                    <Button variant="gold" asChild className="w-full">
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        Get Directions
                      </a>
                    </Button>
                  </Card>

                  <Card className="p-8 border-2">
                    <h3 className="text-2xl font-cinzel font-bold text-foreground mb-4">
                      Quick Response
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      For urgent inquiries:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-accent font-inter font-semibold">
                        <Phone className="h-5 w-5" />
                        <span>Emergency: +1 (800) 555-0911</span>
                      </div>
                      <div className="flex items-center space-x-3 text-accent font-inter font-semibold">
                        <Mail className="h-5 w-5" />
                        <span>urgent@globalsecure.com</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
