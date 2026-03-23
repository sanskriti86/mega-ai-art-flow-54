import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Services", "Process", "Solutions", "About","Testimonial", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/73b16301-5862-4c9a-81e3-5086231b3af6.png" 
            alt="MegaAI Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-display font-bold text-foreground">
            Mega<span className="text-primary">AI</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          {isMobile ? (
            <>
              <button 
                className="text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 py-4"
                  >
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="w-full text-left text-foreground-secondary hover:text-primary px-6 py-3 transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground-secondary hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/50 transition-all text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
          
          <a href="https://calendly.com/sankalpgour2" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl">
              Book a Call
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
