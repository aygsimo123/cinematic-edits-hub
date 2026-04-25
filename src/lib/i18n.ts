import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav_packages: "Packages",
      nav_contact: "Contact",
      hero_title: "Your Content, Elevated.",
      hero_subtitle: "Professional video editing for content creators",
      see_packages: "See Packages",
      basic_title: "Basic Package",
      premium_title: "Premium Package",
      price_from: "Starting at",
      portfolio_btn: "View Portfolio",
      whatsapp_btn: "Contact me on WhatsApp",
      most_popular: "Most Popular",
      contact_headline: "Ready to level up your content?",
      basic_features: [
        "Remove pauses and pronunciation errors",
        "Color correction and light enhancement",
        "Subtitles",
        "Explanatory B-rolls",
        "Transitions",
        "Sound effects",
      ],
      premium_features: [
        "Engaging Intro & Hook (first 5 seconds)",
        "Edit out pauses and errors",
        "Color grading (cinematic quality)",
        "Animated subtitles",
        "Explanatory B-rolls (high quality)",
        "Smooth animations",
        "Sound effects (high quality)",
        "Transitions (high quality)",
        "Copyright-Free Background Music",
        "Strategic CTA Graphics",
      ],
    },
  },
  fr: {
    translation: {
      nav_packages: "Forfaits",
      nav_contact: "Contact",
      hero_title: "Votre Contenu, Sublimé.",
      hero_subtitle: "Montage vidéo professionnel pour créateurs",
      see_packages: "Voir les forfaits",
      basic_title: "Forfait Basique",
      premium_title: "Forfait Premium",
      price_from: "À partir de",
      portfolio_btn: "Voir le portfolio",
      whatsapp_btn: "Me contacter sur WhatsApp",
      most_popular: "Le plus populaire",
      contact_headline: "Prêt à booster votre contenu ?",
      basic_features: [
        "Suppression des pauses et erreurs de prononciation",
        "Correction des couleurs et amélioration de la lumière",
        "Sous-titres",
        "B-rolls explicatifs",
        "Transitions",
        "Effets sonores",
      ],
      premium_features: [
        "Intro & Hook captivant (5 premières secondes)",
        "Suppression des pauses et erreurs",
        "Étalonnage cinématographique",
        "Sous-titres animés",
        "B-rolls explicatifs (haute qualité)",
        "Animations fluides",
        "Effets sonores (haute qualité)",
        "Transitions (haute qualité)",
        "Musique de fond libre de droits",
        "Graphiques CTA stratégiques",
      ],
    },
  },
  ar: {
    translation: {
      nav_packages: "الباقات",
      nav_contact: "تواصل",
      hero_title: "محتواك، في أفضل صورة.",
      hero_subtitle: "مونتاج احترافي لصنّاع المحتوى",
      see_packages: "اطلع على الباقات",
      basic_title: "الباقة الأساسية",
      premium_title: "الباقة المميزة",
      price_from: "ابتداءً من",
      portfolio_btn: "عرض الأعمال",
      whatsapp_btn: "تواصل معي على واتساب",
      most_popular: "الأكثر طلباً",
      contact_headline: "هل أنت مستعد للارتقاء بمحتواك؟",
      basic_features: [
        "إزالة الوقفات وأخطاء النطق",
        "تصحيح الألوان وتحسين الإضاءة",
        "ترجمة نصية",
        "مقاطع توضيحية (B-rolls)",
        "انتقالات سلسة",
        "مؤثرات صوتية",
      ],
      premium_features: [
        "مقدمة جذابة وخطّاف (أول 5 ثوانٍ)",
        "إزالة الوقفات والأخطاء",
        "تدرّج لوني سينمائي",
        "ترجمة متحركة",
        "مقاطع توضيحية عالية الجودة",
        "حركات سلسة",
        "مؤثرات صوتية عالية الجودة",
        "انتقالات عالية الجودة",
        "موسيقى خلفية خالية من حقوق النشر",
        "رسوميات CTA استراتيجية",
      ],
    },
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["en", "fr", "ar"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      returnObjects: true,
    });
}

export default i18n;