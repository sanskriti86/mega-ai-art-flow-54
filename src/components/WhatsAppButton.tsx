import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919977827050"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <div className="absolute -top-10 right-0 bg-background border border-border rounded-lg px-3 py-1.5 text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
