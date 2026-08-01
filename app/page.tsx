import CustomerReviews from "@/components/CustomerReviews";
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

import {
  productSchema,
  faqSchema,
} from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

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

        <CustomerReviews />

        <FadeIn delay={0.5}>
          <FAQ />
        </FadeIn>

        <FadeIn delay={0.6}>
          <ContactSection />
        </FadeIn>

        <Footer />
      </main>
    </>
  );
}