import { motion } from "motion/react";
import whatsappIcon from "../assets/images/whatsapp-icon.png";

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/554733002250";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25d366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors focus-visible:outline-[#25d366]"
      aria-label="Fale Conosco no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Outer pulsing ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25d366]/40 animate-ping opacity-75"></span>
      <img src={whatsappIcon} alt="WhatsApp" className="relative z-10 w-8 h-8 object-contain" />
    </motion.a>
  );
}
