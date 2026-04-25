import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zoomify — Cinematic Video Editing for Creators" },
      {
        name: "description",
        content:
          "Zoomify delivers professional, cinematic video editing for content creators. Multilingual service available in English, French, and Arabic.",
      },
      { property: "og:title", content: "Zoomify — Cinematic Video Editing" },
      {
        property: "og:description",
        content: "Professional video editing for content creators.",
      },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
