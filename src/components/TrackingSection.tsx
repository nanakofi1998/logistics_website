import { useState } from "react";
import { Search, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      window.location.href = `/tracking?id=${trackingId}`;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Package className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-foreground mb-4">
              Track Your Shipment
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Real-time tracking for complete transparency and peace of mind
            </p>
          </div>

          {/* Tracking Card */}
          <Card className="p-8 shadow-premium border-2 hover:border-accent transition-all duration-300 animate-fade-in bg-card">
            <form onSubmit={handleTrack} className="space-y-6">
              <div className="relative">
                <label htmlFor="tracking-id" className="block text-sm font-inter font-medium text-foreground mb-2">
                  Enter Tracking ID
                </label>
                <div className="relative">
                  <Input
                    id="tracking-id"
                    type="text"
                    placeholder="e.g., GSL-2024-001234"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-14 pl-12 pr-4 text-base border-2 focus:border-accent transition-colors"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                Track Shipment
              </Button>
            </form>

            {/* Info Text */}
            <p className="mt-6 text-sm text-muted-foreground text-center font-inter">
              Your tracking ID can be found in your confirmation email or shipment documentation
            </p>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Real-Time Updates", desc: "Live tracking information" },
              { title: "Multi-Platform", desc: "Track on web or mobile" },
              { title: "Notifications", desc: "Automated status alerts" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-muted/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-inter font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
