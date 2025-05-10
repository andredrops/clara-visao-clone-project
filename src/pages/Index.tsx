
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives"; 
import ImpactSection from "@/components/ImpactSection";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Objectives />
      <ImpactSection />
      <Benefits />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
