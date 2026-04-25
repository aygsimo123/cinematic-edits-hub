import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/212638923356";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-6xl tracking-wide mb-10"
        >
          {t("contact_headline")}
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-5 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]"
          style={{ backgroundColor: "#25D366" }}
        >
          <WhatsAppIcon className="w-6 h-6" />
          {t("whatsapp_btn")}
        </motion.a>
      </div>
    </section>
  );
}