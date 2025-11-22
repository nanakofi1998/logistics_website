import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrackingSection from "@/components/TrackingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <TrackingSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
