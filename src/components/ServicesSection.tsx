import { motion } from "framer-motion";
import { 
  Bot, 
  MessageSquare, 
  Users, 
  Workflow, 
  Cpu, 
  Link2,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    description: "End-to-end automation that handles complex workflows, from data processing to decision-making.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI & CRM",
    description: "Intelligent conversational AI that engages customers 24/7 and syncs with your CRM.",
  },
  {
    icon: Users,
    title: "Lead Capture & Follow-ups",
    description: "Automated lead qualification and nurturing sequences that convert prospects to customers.",
  },
  {
    icon: Workflow,
    title: "Internal Ops Automation",
    description: "Streamline internal processes, reduce manual work, and eliminate human error.",
  },
  {
    icon: Cpu,
    title: "Custom AI Agents",
    description: "Purpose-built AI agents that handle specific tasks and learn from your business context.",
  },
  {
    icon: Link2,
    title: "API & Tool Integrations",
    description: "Seamlessly connect your existing tools and create unified automation ecosystems.",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 px-4 bg-background-secondary section-glow">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">What We Do</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            Automation That <span className="gradient-text">Actually Works</span>
          </h2>
          <p className="text-foreground-secondary mt-4 max-w-2xl mx-auto text-lg">
            We don't sell templates. We build custom AI systems tailored to your specific business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group glass-card-hover p-8 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-xl border border-primary/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
