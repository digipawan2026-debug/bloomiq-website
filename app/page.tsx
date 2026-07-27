import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import FragranceExperience from "../components/FragranceExperience";
import ProductHighlights from "../components/ProductHighlights";
import WhyBloomiq from "../components/WhyBloomiq";
import BrandStory from "../components/BrandStory";
import GiftSection from "../components/GiftSection";
import BrandPromise from "../components/BrandPromise";
import FAQ from "../components/FAQ";
import LuxuryCTA from "../components/LuxuryCTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#050505] text-white"
    >
      <Navbar />

      <Hero />

      <ScrollReveal>
        <ProductShowcase />
      </ScrollReveal>

      <ScrollReveal>
        <FragranceExperience />
      </ScrollReveal>

      <ScrollReveal>
        <ProductHighlights />
      </ScrollReveal>

      <ScrollReveal>
        <WhyBloomiq />
      </ScrollReveal>

      <ScrollReveal>
        <BrandStory />
      </ScrollReveal>

      <ScrollReveal>
        <GiftSection />
      </ScrollReveal>

      <ScrollReveal>
        <BrandPromise />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <LuxuryCTA />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}