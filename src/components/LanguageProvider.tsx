import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || "en";
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return <>{children}</>;
}