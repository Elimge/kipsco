import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
