import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageUrl =
  "https://www.bloomiq.in/blog/oud-perfume-daily-wear-men-women-unisex-india";

export const metadata: Metadata = {
  title: "Is Oud Perfume Good for Daily Wear? Unisex Oud Guide India",
  description:
    "Can you wear oud perfume every day in India? Learn how men and women can choose unisex oud for daily wear, office use, heat, humidity and evenings.",
  keywords: [
    "oud perfume for daily wear",
    "unisex oud perfume",
    "oud perfume for men",
    "oud perfume for women",
    "oud perfume India",
    "oud perfume for daily use",
    "oud perfume for office",
    "oud perfume in summer",
    "oud perfume Indian weather",
    "BLOOMIQ Velvet Oud Royal",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Is Oud Perfume Good for Daily Wear? A Unisex Oud Guide for India",
    description:
      "A practical guide to wearing oud every day: men, women, office use, Indian heat, humidity, application and choosing a balanced unisex oud.",
    url: pageUrl,
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
    title: "Is Oud Perfume Good for Daily Wear? Unisex Oud Guide India",
    description:
      "Learn how to choose and wear a unisex oud perfume for everyday use, office wear and Indian weather.",
    images: ["https://www.bloomiq.in/perfume50.jpeg"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Is Oud Perfume Good for Daily Wear? A Unisex Oud Guide for Men & Women in India",
  description:
    "A practical guide to choosing and wearing oud perfume for daily use, including unisex wear, office settings and Indian weather.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
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
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  inLanguage: "en-IN",
  articleSection: "Fragrance Education",
  keywords: [
    "oud perfume for daily wear",
    "unisex oud perfume",
    "oud perfume for men",
    "oud perfume for women",
    "oud perfume India",
    "oud perfume for office",
  ],
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
      name: "Oud Perfume for Daily Wear",
      item: pageUrl,
    },
  ],
};

const dailyWearSituations = [
  {
    situation: "Hot daytime",
    approach: "Use a lighter application and avoid making a dense oud overwhelming.",
    style: "Fresh, woody or softly musky oud",
  },
  {
    situation: "Office",
    approach:
      "Keep projection controlled because colleagues experience the fragrance at close range.",
    style: "Polished woody, floral or musky oud",
  },
  {
    situation: "Humid weather",
    approach:
      "Start conservatively; warmth and humidity can make a rich fragrance feel more noticeable.",
    style: "Balanced oud with fresher supporting notes",
  },
  {
    situation: "Evening",
    approach:
      "A richer profile may feel more comfortable when temperatures fall or the setting is dressier.",
    style: "Amber, woody or deeper oud",
  },
];

const faqItems = [
  {
    q: "Can oud perfume be worn every day?",
    a: "Yes. Oud can be worn every day when the composition and application suit your routine. Balanced woody, floral, fresh, amber or musky oud styles can be easier to use regularly than extremely dense or smoky compositions.",
  },
  {
    q: "Is oud perfume for men or women?",
    a: "Oud is not limited to one gender. Men and women can wear oud, and many modern oud fragrances are intentionally unisex. The supporting notes and overall composition matter more than a gender label.",
  },
  {
    q: "Can women wear oud perfume?",
    a: "Yes. Women can wear oud fragrances ranging from floral and musky styles to woody, amber or smoky compositions. Personal scent preference is more useful than treating oud as a men's-only fragrance style.",
  },
  {
    q: "Can men wear sweet or floral oud perfume?",
    a: "Yes. Rose, amber, vanilla, floral and sweet notes can be combined with oud in fragrances worn by men, women or both. Choose according to the complete scent profile rather than individual note stereotypes.",
  },
  {
    q: "Can you wear oud perfume to the office?",
    a: "Yes, provided the fragrance is comfortable in a shared indoor environment. A balanced oud with controlled application is generally more office-friendly than an extremely strong, smoky or room-filling composition.",
  },
  {
    q: "Is oud perfume suitable for hot Indian weather?",
    a: "It can be. In hotter or humid conditions, lighter application and balanced woody, floral, fresh or musky oud styles may feel more comfortable than very dense sweet or smoky fragrances.",
  },
  {
    q: "How many sprays of oud perfume should you use?",
    a: "There is no universal number because fragrance strength, atomizer output, weather, skin and environment vary. Start conservatively, especially in offices or hot weather, and increase only if the fragrance remains comfortable for you and people nearby.",
  },
  {
    q: "Does oud perfume last all day?",
    a: "Not necessarily. Oud is often associated with rich fragrances, but longevity depends on the complete formula, concentration, application, skin, clothing and environment. The word oud alone does not guarantee all-day performance.",
  },
];

export default function OudDailyWearGuide() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-gray-500">
          <Link href="/" className="transition hover:text-[#D4AF37]">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link href="/blog" className="transition hover:text-[#D4AF37]">
            Fragrance Journal
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-400">Oud Perfume for Daily Wear</span>
        </nav>

        <header className="border-b border-white/10 pb-12">
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            Everyday Oud Guide
          </p>

          <h1 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Is Oud Perfume Good for Daily Wear? A Unisex Oud Guide for Men &amp;
            Women in India
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300">
            Yes, oud perfume can work for daily wear for men and women. The key
            is choosing a balanced fragrance and adjusting how you wear it for
            the office, daytime heat, humidity and evenings. Oud itself is not a
            gender category: woody, floral, amber, fresh and musky oud
            compositions can all be worn as unisex fragrances.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <Link
              href="/editorial-policy"
              className="transition hover:text-[#D4AF37]"
            >
              By BLOOMIQ Editorial Team
            </Link>

            <span>•</span>
            <span>Published September 30, 2026</span>
            <span>•</span>
            <span>Fragrance Education</span>
          </div>
        </header>

        {/* Quick answer */}
        <section className="mt-12 overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#17110B] via-[#090909] to-[#170A0F]">
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
                Quick Answer
              </p>

              <h2 className="mt-4 font-heading text-3xl font-light sm:text-4xl">
                Can you wear oud perfume every day?
              </h2>

              <p className="mt-5 leading-8 text-gray-300">
                Yes. For everyday wear, look beyond the word &quot;oud&quot; and
                judge the complete fragrance. A smoother woody, floral, fresh,
                amber or musky oud can be practical for regular use. Very dense,
                sweet or smoky oud styles may be better suited to lighter
                application, evenings or cooler environments.
              </p>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-[380px]">
              <Image
                src="/perfume50.jpeg"
                alt="BLOOMIQ Velvet Oud Royal unisex Eau de Parfum for everyday wear"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </section>

        <div className="mt-16 space-y-16">
          {/* Distinction from existing broad oud guide */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              What makes an oud perfume suitable for daily wear?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              A daily-wear oud should fit the places where you actually spend
              your time. For many people in India, that can mean commuting in
              heat, working in an air-conditioned office, moving through humid
              weather and then wearing the same fragrance into the evening.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Instead of assuming that every oud perfume is heavy, focus on
              balance, projection and the notes surrounding the oud character.
              Citrus or aromatic notes can add brightness, florals can soften
              the profile, woods can add structure, amber can add warmth and
              musk can create a smoother dry-down.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              If you want a broader introduction to oud itself, including the
              different styles and how oud behaves across Indian conditions,
              read our dedicated{" "}
              <Link
                href="/blog/oud-perfume-guide-indian-weather"
                className="font-medium text-[#D4AF37] transition hover:text-[#F0D37A]"
              >
                Oud Perfume Guide for Indian Weather
              </Link>
              .
            </p>
          </section>

          {/* Gender / unisex intent */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Unisex Fragrance
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              Is oud perfume for men, women or unisex wear?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Oud can be worn by men, women and anyone who enjoys the fragrance.
              Oud describes a material or scent character; it does not require
              the finished perfume to belong to one gender.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">
                  Oud perfume for men
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Men may enjoy dry woods, leather, spice, amber, musk, florals
                  or sweeter oud styles. There is no need to restrict the choice
                  to dark or smoky fragrances.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-medium text-white">
                  Oud perfume for women
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Women may enjoy rose-oud, floral, amber, musky, woody, sweet or
                  fresh interpretations. Oud does not automatically make a
                  perfume masculine.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] p-6">
                <h3 className="text-lg font-medium text-[#D4AF37]">
                  Unisex oud perfume
                </h3>
                <p className="mt-3 leading-7 text-gray-400">
                  A balanced composition can sit comfortably outside traditional
                  gender labels. Choose according to the scent profile you enjoy
                  and where you intend to wear it.
                </p>
              </div>
            </div>
          </section>

          {/* Daily environment table */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Everyday Use
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              How to wear oud perfume through an Indian day
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              India does not have one fragrance environment. Heat, humidity,
              dry weather, monsoon conditions and air-conditioned interiors can
              all affect how noticeable a fragrance feels. Adjust the
              application to the setting rather than following a fixed rule.
            </p>

            <div className="mt-8 overflow-x-auto rounded-[24px] border border-white/10">
              <table className="w-full min-w-[760px] text-left">
                <thead className="bg-white/[0.05]">
                  <tr>
                    <th className="px-5 py-4 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                      Situation
                    </th>
                    <th className="px-5 py-4 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                      How to approach it
                    </th>
                    <th className="px-5 py-4 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                      Oud style to consider
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {dailyWearSituations.map((row) => (
                    <tr
                      key={row.situation}
                      className="border-t border-white/10 align-top"
                    >
                      <td className="px-5 py-5 font-medium text-white">
                        {row.situation}
                      </td>
                      <td className="px-5 py-5 text-sm leading-7 text-gray-400">
                        {row.approach}
                      </td>
                      <td className="px-5 py-5 text-sm leading-7 text-gray-400">
                        {row.style}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Office */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              Is oud perfume good for office wear?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Oud can work at the office when the fragrance is balanced and the
              application respects a shared indoor environment. The goal is not
              to make the fragrance disappear, but to avoid creating a scent
              cloud that dominates the room.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Woody, floral or musky oud styles with controlled projection can
              be easier to wear at close range than extremely dense smoky
              compositions. Start conservatively and judge the fragrance after
              it has settled.
            </p>

            <Link
              href="/blog/how-to-choose-office-perfume-indian-weather"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Read the Office Perfume Guide for Indian Weather →
            </Link>
          </section>

          {/* Application */}
          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Practical Application
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              How much oud perfume should you wear?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              There is no reliable universal spray count for every oud perfume.
              Atomizers release different amounts, formulas project
              differently, and heat, skin, clothing and indoor conditions can
              change the experience.
            </p>

            <div className="mt-7 space-y-4 text-gray-300">
              <p>✓ Start conservatively when trying a fragrance for daily wear.</p>
              <p>✓ Use less in close, shared or air-conditioned spaces.</p>
              <p>✓ Judge projection after the opening has settled.</p>
              <p>✓ Avoid overspraying simply because you stop noticing the scent yourself.</p>
              <p>✓ Adjust for weather and setting rather than following a fixed spray rule.</p>
            </div>
          </section>

          {/* Daily buying decision */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Choosing Your Fragrance
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              How to choose an oud perfume for everyday use
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 p-6">
                <h3 className="text-lg font-medium">1. Smell the full composition</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Two perfumes labelled oud can smell completely different.
                  Consider the opening, heart and dry-down rather than buying
                  only because oud appears in the name.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 p-6">
                <h3 className="text-lg font-medium">2. Think about your routine</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  A fragrance for commuting and office wear may need a different
                  balance from one chosen mainly for evenings or celebrations.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 p-6">
                <h3 className="text-lg font-medium">3. Choose your intensity</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  Do not assume stronger is automatically better. For daily use,
                  comfort and versatility can matter as much as projection.
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 p-6">
                <h3 className="text-lg font-medium">4. Check concentration in context</h3>
                <p className="mt-3 leading-7 text-gray-400">
                  EDT, EDP, Parfum and Extrait labels can help describe a
                  fragrance, but the complete formula still determines how it
                  actually wears.
                </p>
              </div>
            </div>

            <Link
              href="/blog/edt-vs-edp-parfum-extrait-indian-weather"
              className="mt-7 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Compare EDT vs EDP vs Parfum vs Extrait →
            </Link>
          </section>

          {/* Longevity */}
          <section>
            <h2 className="font-heading text-3xl font-light">
              Is oud automatically a long-lasting perfume?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              No. Oud is often used in rich fragrance styles, but the presence
              of oud does not by itself guarantee long wear. Longevity depends
              on the complete formula, concentration, application, skin,
              clothing and environment.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              When comparing fragrances for everyday use, judge actual
              performance rather than assuming that an oud label or a higher
              concentration automatically means better longevity.
            </p>

            <Link
              href="/blog/how-to-choose-long-lasting-perfume"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Read the Long-Lasting Perfume Guide →
            </Link>
          </section>

          {/* Product bridge */}
          <section className="overflow-hidden rounded-[30px] border border-[#D4AF37]/25 bg-gradient-to-br from-[#17110B] via-[#080808] to-[#170A0F]">
            <div className="grid items-center gap-8 p-8 sm:p-10 md:grid-cols-[1fr_0.72fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
                  Discover BLOOMIQ
                </p>

                <h2 className="mt-4 font-heading text-3xl font-light sm:text-4xl">
                  Looking for a unisex oud Eau de Parfum?
                </h2>

                <p className="mt-5 leading-8 text-gray-300">
                  BLOOMIQ Velvet Oud Royal is a unisex Eau de Parfum positioned
                  for people who enjoy a rich, warm fragrance character with
                  oud, amber and musk. It is designed for everyday wear, office,
                  evenings, special occasions and gifting.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-gray-300">
                    Unisex
                  </span>
                  <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-gray-300">
                    Eau de Parfum
                  </span>
                  <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-gray-300">
                    30 ml ₹459
                  </span>
                  <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-gray-300">
                    50 ml ₹599
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/products/velvet-oud-royal"
                    className="inline-flex rounded-full bg-gradient-to-r from-[#CDA434] via-[#E4C562] to-[#CDA434] px-8 py-3.5 text-xs font-bold uppercase tracking-[1.5px] text-black transition hover:-translate-y-1"
                  >
                    View Velvet Oud Royal
                  </Link>

                  <a
                    href="https://wa.me/916232132163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#D4AF37]/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[1.5px] text-[#D4AF37] transition hover:border-[#D4AF37]"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[300px]">
                <Image
                  src="/perfume50.jpeg"
                  alt="BLOOMIQ Velvet Oud Royal unisex oud Eau de Parfum 50 ml"
                  fill
                  sizes="300px"
                  className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Common Questions
            </p>

            <h2 className="mt-4 font-heading text-3xl font-light">
              Daily-wear oud perfume FAQs
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
              BLOOMIQ treats fragrance gender labels as guidance rather than
              rules and evaluates oud in the context of the complete
              composition, wearing environment and personal preference. This
              guide focuses specifically on everyday oud use in Indian
              conditions rather than assuming every oud fragrance behaves the
              same way.
            </p>

            <Link
              href="/editorial-policy"
              className="mt-6 inline-flex text-sm font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              BLOOMIQ Editorial Policy →
            </Link>
          </section>

          {/* Related */}
          <section className="border-t border-white/10 pt-10">
            <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Continue Reading
            </p>

            <h2 className="mt-4 font-heading text-2xl font-light">
              More BLOOMIQ fragrance guides
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/blog/oud-perfume-guide-indian-weather"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Oud Perfume Guide
              </Link>

              <Link
                href="/blog/how-to-choose-office-perfume-indian-weather"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Office Perfume Guide
              </Link>

              <Link
                href="/blog/how-to-choose-long-lasting-perfume"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                Long-Lasting Perfume Guide
              </Link>

              <Link
                href="/blog/edt-vs-edp-parfum-extrait-indian-weather"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                EDT vs EDP vs Parfum vs Extrait
              </Link>

              <Link
                href="/products/velvet-oud-royal"
                className="rounded-full border border-[#D4AF37]/30 px-5 py-3 text-sm text-[#D4AF37] transition hover:border-[#D4AF37]"
              >
                Velvet Oud Royal
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}