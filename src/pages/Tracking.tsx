import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Package, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setShowResults(true);
    }
  };

  // Mock tracking data (would come from API in production)
  const trackingData = {
    id: "GSL-2024-001234",
    status: "In Transit",
    origin: "New York, USA",
    destination: "London, UK",
    estimatedDelivery: "Dec 25, 2024",
    timeline: [
      { status: "Order Received", location: "New York, USA", date: "Dec 20, 2024 - 09:00 AM", completed: true },
      { status: "Package Picked Up", location: "New York Hub", date: "Dec 20, 2024 - 02:30 PM", completed: true },
      { status: "In Transit", location: "International Flight", date: "Dec 21, 2024 - 08:00 AM", completed: true },
      { status: "Customs Clearance", location: "London Gateway", date: "Dec 22, 2024 - 11:00 AM", completed: false },
      { status: "Out for Delivery", location: "London, UK", date: "Pending", completed: false },
      { status: "Delivered", location: "Destination", date: "Pending", completed: false },
    ],
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl w-96 h-96 -top-20 right-20" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm mb-6">
                <Package className="h-10 w-10 text-accent" />
              </div>
              <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-primary-foreground mb-6">
                Track Your Shipment
              </h1>
              <p className="text-xl text-primary-foreground/80 font-inter">
                Real-time updates on your logistics, security, or minerals export operations
              </p>
            </div>
          </div>
        </section>

        {/* Tracking Form */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 shadow-premium border-2 hover:border-accent transition-all duration-300 animate-fade-in">
                <form onSubmit={handleTrack} className="space-y-6">
                  <div>
                    <label htmlFor="tracking-id" className="block text-sm font-inter font-medium text-foreground mb-2">
                      Enter Your Tracking ID
                    </label>
                    <div className="relative">
                      <Input
                        id="tracking-id"
                        type="text"
                        placeholder="e.g., GSL-2024-001234"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="h-14 pl-12 pr-4 text-base border-2 focus:border-accent"
                      />
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Track Now
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Tracking Results */}
        {showResults && (
          <section className="py-16 animate-fade-in">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Status Overview */}
                <Card className="p-8 border-2 border-accent shadow-premium">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Package className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-inter">Tracking ID</p>
                        <p className="font-cinzel font-bold text-foreground">{trackingData.id}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-inter">Current Status</p>
                        <p className="font-cinzel font-bold text-primary">{trackingData.status}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-inter">Est. Delivery</p>
                        <p className="font-cinzel font-bold text-foreground">{trackingData.estimatedDelivery}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Timeline */}
                <Card className="p-8 border-2 shadow-premium">
                  <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8">Shipment Timeline</h2>
                  <div className="space-y-6">
                    {trackingData.timeline.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        {/* Timeline Indicator */}
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            event.completed ? "bg-accent" : "bg-muted"
                          } transition-colors duration-300`}>
                            {event.completed ? (
                              <CheckCircle className="h-6 w-6 text-primary" />
                            ) : (
                              <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                            )}
                          </div>
                          {index < trackingData.timeline.length - 1 && (
                            <div className={`w-0.5 h-16 ${
                              event.completed ? "bg-accent" : "bg-border"
                            }`} />
                          )}
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 pb-8">
                          <h3 className={`font-inter font-semibold mb-1 ${
                            event.completed ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {event.status}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            <MapPin className="inline h-4 w-4 mr-1" />
                            {event.location}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <Clock className="inline h-4 w-4 mr-1" />
                            {event.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Route Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-2">
                    <h3 className="font-cinzel font-bold text-foreground mb-4">Origin</h3>
                    <p className="text-lg text-muted-foreground font-inter">{trackingData.origin}</p>
                  </Card>
                  <Card className="p-6 border-2">
                    <h3 className="font-cinzel font-bold text-foreground mb-4">Destination</h3>
                    <p className="text-lg text-muted-foreground font-inter">{trackingData.destination}</p>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Tracking;
