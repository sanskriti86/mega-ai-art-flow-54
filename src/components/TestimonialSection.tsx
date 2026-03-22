<<<<<<< HEAD
const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">
          Client Experience
        </h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Video 1 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg bg-black">
            <video
              src="public\videos\WhatsApp Video 2026-03-20 at 5.31.35 PM.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-auto max-h-[400px] bg-black"
            />
          </div>

          {/* Video 2 */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-lg bg-black">
            <video
              src="public\videos\WhatsApp Video 2026-03-22 at 1.45.26 PM.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-auto max-h-[400px] bg-black"
            />
          </div>

        </div>

=======

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Mega AI transformed our customer service with their intelligent AI Voice Bots. Response times improved by 80%!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GlobalCom",
    content: "The email automation tools have revolutionized our marketing campaigns. Engagement rates are through the roof!",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Davis",
    role: "Operations Manager, InnovateCo",
    content: "Workflow automation from Mega AI helped us save countless hours on repetitive tasks. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Alex Thompson",
    role: "Social Media Manager, BrandX",
    content: "Their X automation tools have made managing our social media presence so much easier and more effective.",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Jennifer Lopez",
    role: "Customer Support Lead, TechGiant",
    content: "The chatbots provide 24/7 customer support that feels genuinely human. Our customers love the instant responses!",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Robert Kim",
    role: "Strategy Director, FutureTech",
    content: "Strategic AI solutions from Mega AI have been instrumental in our business growth over the past year.",
    image: "https://i.pravatar.cc/150?img=6"
  }
];

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400 animate-fade-in">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 scroll-smooth px-4 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[350px] p-6 bg-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/50"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-purple-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile-friendly navigation buttons */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/50"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5 text-purple-300" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/50"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5 text-purple-300" />
            </Button>
          </div>
          
          {/* Desktop navigation buttons */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/50"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6 text-purple-300" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-900/30 border border-purple-500/30 hover:bg-purple-800/50"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6 text-purple-300" />
            </Button>
          </div>
        </div>
>>>>>>> afe98714836dd8b5e19b416605c5288f884cc4b7
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default TestimonialSection;
=======
export default TestimonialSection;
>>>>>>> afe98714836dd8b5e19b416605c5288f884cc4b7
