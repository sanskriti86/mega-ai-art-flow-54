import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] opacity-30" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
            Stop Hiring More People.
            <br />
            <span className="gradient-text">Start Building Smarter Systems.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto">
            Book a free automation audit and discover how AI can transform your 
            operations, reduce costs, and accelerate growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://calendly.com/sankalpgour2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 py-7 rounded-xl group"
              >
                Schedule a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://wa.me/919977827050"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted hover:border-primary/50 text-foreground font-semibold text-base px-10 py-7 rounded-xl"
              >
                Message on WhatsApp
              </Button>
            </a>
          </div>

          {/* WhatsApp Contact Info */}
          <p className="text-foreground-secondary text-sm">
            Or directly message us on WhatsApp:{" "}
            <a
              href="https://wa.me/919977827050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              +91 9977827050
            </a>
          </p>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <div className="inline-flex items-center gap-2 text-foreground-muted text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="ml-2">Join 50+ businesses already automating with MegaAI</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
