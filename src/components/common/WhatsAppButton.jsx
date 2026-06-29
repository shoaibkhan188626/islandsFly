import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/9609334441"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-[#2f1b12] text-white p-3.5 md:px-5 md:py-3.5 rounded-full  hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:bg-[#20ba5a] transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing ambient effect */}
      {/* <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" /> */}

      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-6 h-6 md:w-5 md:h-5 relative z-10" />

      {/* Label - visible on desktop */}
      <span className="hidden md:inline font-ui font-semibold text-sm ml-2 relative z-10">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
