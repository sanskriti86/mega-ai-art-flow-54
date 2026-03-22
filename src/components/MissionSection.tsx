
import { Brain, Sparkles, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const hoverAnimation = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-purple-900/20 via-black to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="space-y-4 md:space-y-6"
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-purple-300"
              variants={itemAnimation}
            >
              Revolutionizing Tomorrow
            </motion.h3>
            <motion.p 
              className="text-gray-300 leading-relaxed text-sm md:text-base"
              variants={itemAnimation}
            >
              At Mega AI, we're on a mission to transform the way businesses operate through cutting-edge artificial intelligence. Our vision is to democratize AI technology, making powerful tools accessible to organizations of all sizes.
            </motion.p>
            <motion.div 
              className="space-y-3 md:space-y-4"
              variants={containerAnimation}
            >
              {[
                { icon: Brain, text: "Pushing the boundaries of AI innovation" },
                { icon: Globe, text: "Global impact through local solutions" },
                { icon: Rocket, text: "Accelerating business growth" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-purple-400 text-sm md:text-base"
                  variants={itemAnimation}
                  whileHover={hoverAnimation}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative mt-6 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <motion.div 
              className="relative bg-gradient-to-br from-purple-900/50 to-black/50 p-6 md:p-8 rounded-lg border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-purple-400 mb-4" />
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-purple-200">Why Mega AI?</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                We believe in a future where AI enhances human potential rather than replacing it. Our solutions are designed to augment human capabilities, streamline operations, and drive innovation across industries.
              </p>
              <motion.div 
                className="mt-6 p-4 bg-purple-900/30 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-purple-200 font-medium text-sm md:text-base">
                  "Empowering businesses with intelligent automation and strategic AI solutions for a smarter tomorrow."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
