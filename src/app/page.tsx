import Hero from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { MainFeatures } from "@/components/sections/main-features";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Features />
      <MainFeatures />
      <ContactSection />
      <Footer />
    </main>
  );
}
