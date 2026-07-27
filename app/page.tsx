import FragranceNotes from "@/components/FragranceNotes";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProductHighlights from "@/components/ProductHighlights";
import WhyBloomiq from "@/components/WhyBloomiq";
import BrandStory from "@/components/BrandStory";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <ScrollProgress />

      <BackToTop />
      <WhatsAppButton />



     <Navbar />

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={0.1}>

        <FragranceNotes />

        <ProductShowcase />
      </FadeIn>

      <FadeIn delay={0.2}>
        <ProductHighlights />
      </FadeIn>

      <FadeIn delay={0.3}>
        <WhyBloomiq />
      </FadeIn>

      <FadeIn delay={0.4}>
        <BrandStory />
      </FadeIn>

      <FadeIn delay={0.5}>
        <FAQ />
      </FadeIn>

      <FadeIn delay={0.6}>
        <ContactSection />
      </FadeIn>

      <Footer />
    </main>
  );
}