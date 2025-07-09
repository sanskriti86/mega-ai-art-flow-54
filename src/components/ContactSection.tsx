import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Here you would typically send this to your backend/email service
    // For demo, we'll just show a success message
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in text-purple-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions about our AI solutions? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sankalpgour2@gmail.com" className="text-gray-700 hover:text-purple-600">
                  support@megaai.co.in
                </a>
              </div>
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-black mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.1 2H20.5L13.9 10.2L22 22H15.6L10.6 15.4L4.9 22H1.5L8.6 13.2L1 2H7.6L12.2 8.1L17.1 2Z" />
                </svg>
                <a href="https://x.com/MegaAi_" className="text-gray-700 hover:text-purple-600">
                  Twitter for Mega Ai
                </a>
              </div>
              <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.75a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Zm4.88-.38a.88.88 0 1 1 0 1.75a.88.88 0 0 1 0-1.75Z" />
                </svg>
                <a href="https://www.instagram.com/megaai_.?igsh=MTVzMDUzcDF6N2MxdQ==" className="text-gray-700 hover:text-purple-600">
                  Instagram for Mega Ai
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in delay-200">
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="w-full border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full border-purple-200 focus:border-purple-400"
              />
            </div>
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full min-h-[150px] border-purple-200 focus:border-purple-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
