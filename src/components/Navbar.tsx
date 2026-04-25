import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const langs = ["en", "fr", "ar"] as const;

export function Navbar() {
  const { i18n } = useTranslation();
  const current = i18n.language?.split("-")[0] || "en";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-wider text-gold">
          Zoomify
        </a>
        <nav className="flex items-center gap-2">
          {langs.map((l) => {
            const active = current === l;
            return (
              <button
                key={l}
                onClick={() => i18n.changeLanguage(l)}
                className="relative px-3 py-1.5 text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold"
                style={{ color: active ? "var(--gold)" : "var(--muted-foreground)" }}
              >
                {l}
                {active && (
                  <motion.span
                    layoutId="lang-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-gold rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}