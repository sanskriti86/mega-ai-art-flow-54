import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Zap, 
  Target, 
  Clock, 
  HeadphonesIcon,
  TrendingUp 
} from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Custom-Built Systems",
    description: "No templates. Every automation is engineered specifically for your business processes and goals.",
  },
  {
    icon: Target,
    title: "ROI-Driven Approach",
    description: "We focus on automations that directly impact your bottom line and provide measurable returns.",
  },
  {
    icon: Clock,
    title: "Fast Deployment",
    description: "From strategy to live system in weeks, not months. We move fast without sacrificing quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Your automation partner for the long haul. Continuous optimization and support included.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Businesses Automated" },
  { value: 10, suffix: "M+", label: "Tasks Automated Monthly" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
  { value: 85, suffix: "%", label: "Average Time Saved" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stats-number text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const WhyMegaAISection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Why MegaAI</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 text-foreground leading-tight">
              We Don't Just Automate.
              <br />
              <span className="gradient-text">We Transform.</span>
            </h2>
            <p className="text-foreground-secondary mt-6 text-lg leading-relaxed">
              Most automation agencies sell you a tool and call it a day. We engineer 
              intelligent systems that learn, adapt, and grow with your business.
            </p>

            {/* USP List */}
            <div className="mt-10 space-y-6">
              {usps.map((usp, index) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <usp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {usp.title}
                    </h4>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl blur-3xl" />

            {/* Stats Grid */}
            <div className="relative glass-card p-8 md:p-12 rounded-3xl grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-foreground-secondary text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}

              {/* Decorative Element */}
              <div className="absolute top-4 right-4">
                <TrendingUp className="w-6 h-6 text-primary/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMegaAISection;
