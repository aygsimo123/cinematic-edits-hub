import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const BASIC_URL =
  "https://drive.google.com/drive/folders/146_PbwskenHouLJaAAed20fKknhS5xF1?usp=sharing";
const PREMIUM_URL =
  "https://drive.google.com/drive/folders/1tPnRKQVNlAAG12nRJKjzN9kpS51VlLFC?usp=sharing";

function PriceCard({
  title,
  price,
  features,
  popular,
  href,
  popularLabel,
  portfolioLabel,
  priceFromLabel,
  delay,
}: {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  href: string;
  popularLabel: string;
  portfolioLabel: string;
  priceFromLabel?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      className={`relative rounded-3xl p-8 md:p-10 bg-card flex flex-col ${
        popular
          ? "border-2 border-gold shadow-[0_0_60px_oklch(0.78_0.16_75/0.15)]"
          : "border border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-lg">
          <Star className="w-3.5 h-3.5 fill-current" />
          {popularLabel}
        </div>
      )}

      <h3 className="font-display text-3xl md:text-4xl tracking-wide mb-2">{title}</h3>

      <div className="mb-8">
        {priceFromLabel && (
          <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
            {priceFromLabel}
          </span>
        )}
        <span className="font-display text-5xl md:text-6xl text-gold tracking-wide">
          {price}
        </span>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
              <Check className="w-3 h-3 text-gold" strokeWidth={3} />
            </span>
            <span className="text-sm text-foreground/90 leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center px-6 py-3.5 rounded-full font-semibold tracking-wide transition-all hover:scale-[1.02] ${
          popular
            ? "bg-gold text-primary-foreground hover:shadow-[0_0_30px_oklch(0.78_0.16_75/0.5)]"
            : "border border-gold text-gold hover:bg-gold hover:text-primary-foreground"
        }`}
      >
        {portfolioLabel}
      </a>
    </motion.div>
  );
}

export function Pricing() {
  const { t } = useTranslation();
  const basicFeatures = t("basic_features", { returnObjects: true }) as string[];
  const premiumFeatures = t("premium_features", { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs uppercase tracking-[0.3em]">
            {t("nav_packages")}
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide mt-3">
            {t("nav_packages")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <PriceCard
            title={t("basic_title")}
            price="$20"
            features={basicFeatures}
            href={BASIC_URL}
            popularLabel={t("most_popular")}
            portfolioLabel={t("portfolio_btn")}
            delay={0}
          />
          <PriceCard
            title={t("premium_title")}
            price="$25–$35"
            features={premiumFeatures}
            popular
            href={PREMIUM_URL}
            popularLabel={t("most_popular")}
            portfolioLabel={t("portfolio_btn")}
            priceFromLabel={t("price_from")}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}