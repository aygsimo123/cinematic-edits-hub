import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/212638923356";

export function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 10px 30px rgba(37,211,102,0.4)",
      }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />
      <WhatsAppIcon className="w-7 h-7 relative" />
    </motion.a>
  );
}