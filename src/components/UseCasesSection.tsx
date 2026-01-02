import { motion } from "framer-motion";
import { 
  Building2, 
  Home, 
  ShoppingCart, 
  Stethoscope, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    industry: "Agencies",
    problem: "Manual client onboarding and reporting",
    solution: "Automated workflows and real-time dashboards",
    result: "80% less manual work",
  },
  {
    icon: Home,
    industry: "Real Estate",
    problem: "Slow lead response and follow-up gaps",
    solution: "Instant AI responses and nurturing sequences",
    result: "3x more conversions",
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    problem: "Cart abandonment and support overload",
    solution: "Smart recovery campaigns and 24/7 AI support",
    result: "40% revenue recovery",
  },
  {
    icon: Stethoscope,
    industry: "Clinics",
    problem: "Appointment no-shows and admin burden",
    solution: "Automated reminders and patient intake",
    result: "50% fewer no-shows",
  },
  {
    icon: Wrench,
    industry: "Service Businesses",
    problem: "Scattered operations and lost opportunities",
    solution: "Unified CRM with automated scheduling",
    result: "2x booking capacity",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 px-4 bg-background-secondary section-glow">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Solutions</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-foreground-secondary mt-4 max-w-2xl mx-auto text-lg">
            Real results from real businesses across different sectors.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card-hover p-8"
            >
              {/* Icon & Industry */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {useCase.industry}
                </h3>
              </div>

              {/* Problem → Solution → Result */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-foreground-muted uppercase tracking-wider">Problem</span>
                  <p className="text-foreground-secondary mt-1">{useCase.problem}</p>
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-medium">Our Solution</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-foreground-muted uppercase tracking-wider">Solution</span>
                  <p className="text-foreground-secondary mt-1">{useCase.solution}</p>
                </div>

                {/* Result Badge */}
                <div className="pt-4 border-t border-border/50">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">{useCase.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.a
            href="https://calendly.com/sankalpgour2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group glass-card-hover p-8 flex flex-col items-center justify-center text-center cursor-pointer border-primary/30 hover:border-primary/50"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              Don't See Your Industry?
            </h3>
            <p className="text-foreground-secondary">
              We build custom solutions for any business. Let's talk.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
