import { Shield, Globe, FileCheck, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "24/7 Secure Operations",
      description: "Round-the-clock monitoring and security protocols ensuring your assets are protected at all times.",
    },
    {
      icon: Globe,
      title: "Global Delivery Network",
      description: "Extensive international partnerships and infrastructure for seamless worldwide operations.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Fully licensed and compliant with international trade and security regulations.",
    },
    {
      icon: Award,
      title: "Trusted by Enterprises",
      description: "Proven track record serving Fortune 500 companies and government agencies globally.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-primary-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary-foreground/80 font-inter">
            Industry-leading standards and unwavering commitment to excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm mb-6 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110 shadow-gold">
                <feature.icon className="h-10 w-10 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-cinzel font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 font-inter leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
