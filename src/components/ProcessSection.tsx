import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description: "We analyze your current workflows and identify high-impact automation opportunities.",
  },
  {
    number: "02",
    title: "System Design",
    description: "Custom architecture designed around your specific needs, tools, and growth trajectory.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "Rapid development with seamless integration into your existing tech stack.",
  },
  {
    number: "04",
    title: "Test & Optimize",
    description: "Rigorous testing and fine-tuning to ensure maximum performance and reliability.",
  },
  {
    number: "05",
    title: "Deploy & Scale",
    description: "Launch with confidence and scale as your business grows.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            How We <span className="gradient-text">Build & Deploy</span>
          </h2>
          <p className="text-foreground-secondary mt-4 max-w-2xl mx-auto text-lg">
            A proven methodology that delivers results fast.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Indicator */}
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                  {/* Number Circle */}
                  <motion.div
                    className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="font-mono text-lg font-bold text-primary">{step.number}</span>
                    {/* Active Glow */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                  </motion.div>

                  {/* Content */}
                  <div className="lg:text-center lg:mt-6">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-foreground">Average deployment time: 2-4 weeks</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
