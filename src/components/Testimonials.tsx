import { Quote, Star } from "lucide-react";
import { Card } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Supply Chain Director",
      company: "Global Trade Corp",
      content: "Outstanding service across all divisions. Their integrated approach to logistics, security, and compliance has streamlined our entire international operations.",
      rating: 5,
    },
    {
      name: "James Richardson",
      role: "Operations Manager",
      company: "Precious Metals International",
      content: "The minerals export service is second to none. Complete transparency, full compliance, and exceptional handling of our high-value shipments.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "CEO",
      company: "TransGlobal Logistics",
      content: "Their security escort service gave us the confidence to expand into challenging markets. Professional team with cutting-edge technology and protocols.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-2 hover:border-accent transition-all duration-500 hover:shadow-premium animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-accent/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Quote className="h-12 w-12 text-accent/20" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground font-inter leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-cinzel font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground font-inter">
                  {testimonial.role}
                </p>
                <p className="text-sm text-accent font-inter font-medium">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
