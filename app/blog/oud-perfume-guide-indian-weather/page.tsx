import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oud Perfume Guide: How to Choose Oud for Indian Weather",
  description:
    "Learn what oud perfume is, how oud fragrances smell, how to choose oud for Indian weather, office wear, evenings, gifting and unisex use.",
  keywords: [
    "oud perfume",
    "oud perfume guide",
    "oud perfume for men",
    "oud perfume for women",
    "unisex oud perfume",
    "oud perfume for Indian weather",
    "office oud perfume",
    "long lasting oud perfume",
    "luxury oud perfume",
    "BLOOMIQ Velvet Oud Royal",
  ],
  alternates: {
    canonical:
      "https://www.bloomiq.in/blog/oud-perfume-guide-indian-weather",
  },
  openGraph: {
    title: "Oud Perfume Guide: How to Choose Oud for Indian Weather",
    description:
      "A practical guide to oud fragrance, scent character, performance, Indian weather, office wear and choosing a balanced oud perfume.",
    url: "https://www.bloomiq.in/blog/oud-perfume-guide-indian-weather",
    siteName: "BLOOMIQ",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.bloomiq.in/perfume50.jpeg",
        width: 1200,
        height: 1200,
        alt: "BLOOMIQ Velvet Oud Royal unisex Eau de Parfum bottle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oud Perfume Guide: How to Choose Oud for Indian Weather",
    description:
      "Understand oud fragrance, how it smells, how to wear it and how to choose oud for Indian weather.",
    images: ["https://www.bloomiq.in/perfume50.jpeg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Oud Perfume Guide: How to Choose Oud for Indian Weather",
  description:
    "A practical guide to understanding oud fragrance, how oud perfumes smell and how to choose a balanced oud perfume for Indian weather and everyday use.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.bloomiq.in/blog/oud-perfume-guide-indian-weather",
  },
  image: ["https://www.bloomiq.in/perfume50.jpeg"],
  author: {
    "@type": "Organization",
    name: "BLOOMIQ Editorial Team",
    url: "https://www.bloomiq.in/editorial-policy",
  },
  publisher: {
    "@type": "Organization",
    name: "BLOOMIQ",
    url: "https://www.bloomiq.in",
    logo: {
      "@type": "ImageObject",
      url: "https://www.bloomiq.in/icon.png",
    },
  },
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
  inLanguage: "en-IN",
  articleSection: "Fragrance Education",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.bloomiq.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fragrance Journal",
      item: "https://www.bloomiq.in/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Oud Perfume Guide",
      item: "https://www.bloomiq.in/blog/oud-perfume-guide-indian-weather",
    },
  ],
};

const oudStyles = [
  {
    style: "Woody Oud",
    character:
      "Dry, elegant and structured, often paired with woods, amber or musk.",
    goodFor:
      "Office evenings, formal settings and people who prefer a refined rather than sweet profile.",
  },
  {
    style: "Floral Oud",
    character:
      "Oud blended with rose, jasmine or other florals for a softer and more polished character.",
    goodFor:
      "Unisex wear, gifting, celebrations and people who enjoy balanced richness.",
  },
  {
    style: "Amber Oud",
    character:
      "Warm, rounded and enveloping, often combining oud with amber, musk or balsamic notes.",
    goodFor:
      "Evenings, cooler environments, festive occasions and richer fragrance preferences.",
  },
  {
    style: "Fresh Oud",
    character:
      "A lighter interpretation using citrus, aromatic or fresh notes around an oud base.",
    goodFor:
      "Daytime, warmer weather and people who want oud without an overly dense effect.",
  },
];

const faqItems = [
  {
    q: "What does oud perfume smell like?",
    a: "Oud can smell woody, resinous, smoky, warm, earthy or slightly leathery depending on the material and the way it is blended. Modern oud perfumes can also feel floral, fresh, musky, sweet or ambery.",
  },
  {
    q: "Is oud perfume only for men?",
    a: "No. Oud is a fragrance material and scent style, not a gender category. Oud perfumes can be worn by men, women and anyone who enjoys the composition.",
  },
  {
    q: "Is oud perfume suitable for Indian weather?",
    a: "Yes, but the complete composition matters. Heavy oud blends can feel intense in hot outdoor conditions, while balanced oud fragrances with citrus, floral, musk or fresh elements can work comfortably in warmer climates.",
  },
  {
    q: "Can oud perfume be worn to the office?",
    a: "Yes. Choose a balanced oud fragrance with moderate projection and apply it conservatively in shared spaces. A softer woody, floral or musky oud can work well professionally.",
  },
  {
    q: "Does oud perfume last longer?",
    a: "Oud is often used in richer fragrance compositions, but longevity depends on the complete formula, concentration, application, skin, clothing and environment. Oud alone does not guarantee a fixed number of hours.",
  },
  {
    q: "Is oud perfume good for gifting?",
    a: "Yes, especially when the fragrance has a balanced unisex character. For gifting, a smoother oud blend is usually easier to wear than an extremely animalic, smoky or intense interpretation.",
  },
];

export default function OudPerfumeGuideArticle() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <article className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500">
          <Link href="/" className="transition hover:text-[#D4AF37]">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link href="/blog" className="transition hover:text-[#D4AF37]">
            Fragrance Journal
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-400">Oud Perfume Guide</span>
        </nav>

        {/* Header */}
        <header className="border-b border-white/10 pb-12">
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            Oud Fragrance Guide
          </p>

          <h1 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Oud Perfume Guide: How to Choose Oud for Indian Weather
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            Oud is often associated with richness, depth and luxury, but not
            every oud perfume is heavy, smoky or overpowering. Modern oud
            fragrances can be woody, floral, fresh, musky, ambery or completely
            unisex. The best choice depends on the composition, climate,
            occasion and level of projection you enjoy.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <Link
              href="/editorial-policy"
              className="transition hover:text-[#D4AF37]"
            >
              By BLOOMIQ Editorial Team
            </Link>

            <span>•</span>
            <span>Published August 15, 2026</span>
            <span>•</span>
            <span>Fragrance Education</span>
          </div>
        </header>

        {/* Quick Answer */}
        <section className="mt-12 overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17110B] via-[#090909] to-[#170A0F]">
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
                Quick Answer
              </p>

              <h2 className="mt-4 font-heading text-3xl font-light sm:text-4xl">
                What should you look for in an oud perfume?
              </h2>

              <p className="mt-5 leading-8 text-gray-300">
                Look at the complete fragrance rather than choosing only because
                the word “oud” appears on the bottle. Consider whether the oud is
                woody, floral, fresh, smoky, musky or sweet, how strongly the
                fragrance projects, where you plan to wear it and how it feels in
                your normal climate.
              </p>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[380px]">
              <Image
                src="/perfume50.jpeg"
                alt="BLOOMIQ Velvet Oud Royal unisex oud Eau de Parfum"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </section>

        <div className="mt-16 space-y-16">
          {/* What is Oud */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              What is oud in perfume?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Oud refers to the aromatic character traditionally associated with
              agarwood. In perfumery, oud-style fragrances may use natural oud,
              reconstructed oud accords or combinations of woody, resinous,
              leathery, smoky, ambery and musky materials to create an oud
              impression.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              This means two perfumes labelled “oud” can smell completely
              different. One may feel dark and smoky, while another may be smooth,
              floral, fresh or softly sweet.
            </p>
          </section>

          {/* Smell */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              What does oud perfume smell like?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Oud is not one fixed smell. Depending on the fragrance, it can
              appear woody, resinous, warm, smoky, leathery, earthy, musky or
              slightly sweet.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              The notes surrounding the oud often determine whether the perfume
              feels dramatic or easy to wear. Citrus can brighten it, florals can
              soften it, amber can add warmth and musk can make the dry-down feel
              smoother.
            </p>
          </section>

          {/* Styles Table */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Oud Styles
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              Different types of oud fragrance
            </h2>

            <div className="mt-8 overflow-x-auto rounded-[24px] border border-white/10">
              <table className="min-w-[760px] w-full text-left">
                <thead className="bg-white/[0.05]">
                  <tr>
                    <th className="px-5 py-4 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                      Style
                    </th>
                    <th className="px-5 py-4 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                      Character
                    </th>
                    <th className="px-5 py-4 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                      Good For
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {oudStyles.map((row) => (
                    <tr
                      key={row.style}
                      className="border-t border-white/10 align-top"
                    >
                      <td className="px-5 py-5 font-medium text-white">
                        {row.style}
                      </td>

                      <td className="px-5 py-5 text-sm leading-7 text-gray-400">
                        {row.character}
                      </td>

                      <td className="px-5 py-5 text-sm leading-7 text-gray-400">
                        {row.goodFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Indian weather */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Indian Conditions
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              Is oud perfume suitable for Indian weather?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Yes, but balance matters. India includes hot, humid, dry, monsoon
              and air-conditioned environments, so there is no single oud style
              that works everywhere.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">
                  Hot outdoor conditions
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Choose measured projection and consider oud blended with citrus,
                  florals or cleaner woods rather than an extremely dense
                  composition.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">
                  Air-conditioned offices
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  A balanced woody, floral or musky oud can work well when applied
                  conservatively in shared indoor spaces.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">
                  Humid weather
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Pay attention to comfort and projection. Very dense sweet or
                  smoky fragrances can feel more intense when heat and humidity
                  rise.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">
                  Evenings and occasions
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Richer oud compositions can feel especially suitable when you
                  want a more noticeable and dressed-up fragrance presence.
                </p>
              </div>
            </div>
          </section>

          {/* Office */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              Can oud perfume be worn to the office?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Yes. Oud itself is not automatically too strong for professional
              settings. The important factors are the complete composition,
              projection and application.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              For office wear, start with a lighter application and choose an oud
              that stays polished at close range rather than filling the entire
              room.
            </p>

            <Link
              href="/blog/how-to-choose-office-perfume-indian-weather"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Read our Office Perfume Guide →
            </Link>
          </section>

          {/* Gender */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              Is oud perfume for men or women?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Oud is not inherently masculine or feminine. Its overall character
              depends on the blend.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Oud with rose, jasmine, amber, musk, citrus or woods can create
              completely unisex fragrances. Choose according to the scent profile
              you enjoy rather than the gender label on the packaging.
            </p>
          </section>

          {/* Longevity */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              Does oud perfume last longer?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Oud fragrances are often associated with strong performance, but
              oud alone does not guarantee longevity.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Performance depends on the full formulation, concentration,
              application, environment, skin and clothing. A balanced oud Eau de
              Parfum can last differently from another oud fragrance even when
              both carry similar concentration labels.
            </p>

            <Link
              href="/blog/how-to-choose-long-lasting-perfume"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Read our Long-Lasting Perfume Guide →
            </Link>
          </section>

          {/* Concentration */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              Should you choose oud EDT, EDP, Parfum or Extrait?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Concentration can influence the wearing experience, but it does not
              tell you everything about strength, projection or longevity.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              A well-balanced EDP may suit daily wear better than a denser
              concentration, while Parfum or Extrait may appeal when you prefer a
              richer or more intimate fragrance character.
            </p>

            <Link
              href="/blog/edt-vs-edp-parfum-extrait-indian-weather"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Read our EDT vs EDP vs Parfum vs Extrait Guide →
            </Link>
          </section>

          {/* Buying checklist */}
          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Before You Buy
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              Oud perfume buying checklist
            </h2>

            <div className="mt-7 space-y-4 text-gray-300">
              <p>✓ Smell the complete fragrance, not just the oud label.</p>
              <p>✓ Decide whether you prefer woody, floral, fresh or ambery oud.</p>
              <p>✓ Consider projection for your workplace and daily routine.</p>
              <p>✓ Think about heat, humidity and air-conditioned environments.</p>
              <p>✓ Allow the fragrance to reach its dry-down before judging it.</p>
              <p>✓ Choose a scent profile you would genuinely enjoy wearing often.</p>
            </div>
          </section>

          {/* Product bridge */}
          <section className="overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#15110A] via-[#080808] to-[#170A0F]">
            <div className="grid items-center gap-8 p-8 sm:p-10 md:grid-cols-[1fr_0.7fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
                  BLOOMIQ Eau de Parfum
                </p>

                <h2 className="mt-4 font-heading text-3xl font-light">
                  Velvet Oud Royal
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  Velvet Oud Royal is BLOOMIQ&apos;s unisex Eau de Parfum with a
                  rich fragrance character designed for everyday confidence,
                  office wear, evenings, celebrations and gifting. Its composition
                  combines freshness, florals, oud, amber and musk for a balanced
                  interpretation of modern oud.
                </p>

                <Link
                  href="/#collection"
                  className="mt-7 inline-flex rounded-full bg-gradient-to-r from-[#CDA434] via-[#E4C562] to-[#CDA434] px-8 py-3.5 text-xs font-bold uppercase tracking-[1.5px] text-black transition hover:-translate-y-1"
                >
                  Explore Velvet Oud Royal
                </Link>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[260px]">
                <Image
                  src="/perfume50.jpeg"
                  alt="BLOOMIQ Velvet Oud Royal unisex oud Eau de Parfum"
                  fill
                  sizes="260px"
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Common Questions
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              Oud perfume FAQs
            </h2>

            <div className="mt-7 space-y-5">
              {faqItems.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-[20px] border border-white/10 p-6"
                >
                  <h3 className="text-lg font-medium text-white">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Editorial */}
          <section className="border-t border-white/10 pt-10">
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Editorial Notes
            </p>

            <h2 className="mt-4 font-heading text-2xl font-light">
              How this guide was prepared
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              BLOOMIQ treats oud as a fragrance style with many possible
              interpretations rather than assuming every oud perfume is equally
              heavy, strong or long-lasting. Our guidance focuses on the complete
              composition, wearing environment and practical fragrance use.
            </p>

            <Link
              href="/editorial-policy"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              BLOOMIQ Editorial Policy →
            </Link>
          </section>

          {/* Continue reading */}
          <section className="border-t border-white/10 pt-10">
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Continue Reading
            </p>

            <h2 className="mt-4 font-heading text-2xl font-light">
              Build your fragrance knowledge
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/blog/how-to-choose-office-perfume-indian-weather"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Office Perfume Guide
              </Link>

              <Link
                href="/blog/edt-vs-edp-parfum-extrait-indian-weather"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                EDT vs EDP vs Parfum vs Extrait
              </Link>

              <Link
                href="/blog/how-to-choose-long-lasting-perfume"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Long-Lasting Perfume Guide
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}