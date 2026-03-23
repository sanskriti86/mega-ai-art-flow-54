import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import UseCasesSection from "@/components/UseCasesSection";
import WhyMegaAISection from "@/components/WhyMegaAISection";

import TestimonialSection from "@/components/TestimonialSection";

import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div id="services"><ServicesSection /></div>
        <div id="process"><ProcessSection /></div>
        <div id="solutions"><UseCasesSection /></div>
        <div id="about"><WhyMegaAISection /></div>
        <div id="testimonial"><TestimonialSection /></div>
        <div id="contact"><CTASection /></div>
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50 bg-background-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/lovable-uploads/73b16301-5862-4c9a-81e3-5086231b3af6.png" alt="MegaAI" className="w-8 h-8" />
            <span className="font-display font-bold text-foreground">Mega<span className="text-primary">AI</span></span>
          </div>
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} MegaAI. All rights reserved.
          </p>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
