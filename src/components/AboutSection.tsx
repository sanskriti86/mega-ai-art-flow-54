import { Sparkles, Brain, Cpu, Lock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in text-purple-300">
          About Mega AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-purple-200">Transforming Businesses with AI</h3>
            <p className="text-gray-300 leading-relaxed">
              Mega AI is at the forefront of artificial intelligence innovation, delivering cutting-edge solutions that empower businesses to achieve unprecedented efficiency and growth.
            </p>
            <div className="flex items-center gap-3 text-purple-400">
              <Brain className="w-6 h-6" />
              <span>Advanced Machine Learning</span>
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <Cpu className="w-6 h-6" />
              <span>State-of-the-art Infrastructure</span>
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <Lock className="w-6 h-6" />
              <span>Enterprise-grade Security</span>
            </div>
          </div>
          <div className="relative animate-fade-in delay-200">
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/50 to-black/50 p-8 rounded-lg border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-4 text-purple-200">Our Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                We're committed to democratizing AI technology, making powerful automation tools accessible to businesses of all sizes. Our solutions are designed to enhance productivity, improve customer experiences, and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
