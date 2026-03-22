
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Mega AI work?",
    answer: "Mega AI uses advanced artificial intelligence algorithms to automate and enhance various business processes. Our solutions learn from your data to provide personalized experiences across voice bots, chatbots, social media, and email automation."
  },
  {
    question: "What kind of businesses can benefit from your services?",
    answer: "Our AI solutions are versatile and can benefit businesses of all sizes across various industries. Whether you're a startup looking to automate customer support or an enterprise seeking comprehensive workflow automation, we have solutions tailored to your needs."
  },
  {
    question: "How long does it take to implement your solutions?",
    answer: "Implementation timelines vary depending on the complexity of your needs. Typically, basic chatbots and automation workflows can be set up within a few days, while more complex solutions might take 2-4 weeks for full integration."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, we offer comprehensive customer support to ensure smooth implementation and operation of our AI solutions. Our team is available 24/7 to address any concerns or technical issues."
  },
  {
    question: "Can I customize the AI solutions for my specific needs?",
    answer: "Absolutely! All our AI solutions are highly customizable to match your specific business requirements, brand voice, and workflow preferences."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
