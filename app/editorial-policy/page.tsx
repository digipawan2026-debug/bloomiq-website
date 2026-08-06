import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy | BLOOMIQ",
  description:
    "Learn how BLOOMIQ researches, writes, reviews and updates fragrance education content, product claims and editorial recommendations.",
  alternates: {
    canonical: "https://www.bloomiq.in/editorial-policy",
  },
  openGraph: {
    title: "BLOOMIQ Editorial Policy",
    description:
      "How BLOOMIQ researches, reviews and updates fragrance education content and product claims.",
    url: "https://www.bloomiq.in/editorial-policy",
    siteName: "BLOOMIQ",
    type: "website",
    locale: "en_IN",
  },
};

const editorialPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "BLOOMIQ Editorial Policy",
  url: "https://www.bloomiq.in/editorial-policy",
  description:
    "BLOOMIQ's editorial standards for fragrance education, sourcing, product claims, reviews, updates and corrections.",
  isPartOf: {
    "@type": "WebSite",
    name: "BLOOMIQ",
    url: "https://www.bloomiq.in",
  },
  publisher: {
    "@type": "Organization",
    name: "BLOOMIQ",
    url: "https://www.bloomiq.in",
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(editorialPolicySchema),
        }}
      />

      <article className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8">
        <nav className="mb-8 text-xs text-gray-500" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-[#D4AF37]">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-400">Editorial Policy</span>
        </nav>

        <header className="border-b border-white/10 pb-12">
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            BLOOMIQ Editorial Standards
          </p>

          <h1 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Editorial Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            BLOOMIQ creates fragrance education to help readers make more informed,
            practical and confident choices. Our editorial approach prioritizes
            clarity, accuracy, transparency and usefulness over exaggerated claims
            or promotional language.
          </p>
        </header>

        <div className="mt-14 space-y-14">
          <section>
            <h2 className="font-heading text-3xl font-light">
              Who creates BLOOMIQ editorial content?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Articles published under the BLOOMIQ Editorial Team are researched,
              written and reviewed for the BLOOMIQ Fragrance Journal. We do not
              present the editorial team as perfumers, dermatologists, cosmetic
              chemists or other credentialed specialists unless a specific article
              genuinely involves a named expert with relevant qualifications.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Where expert review is used in the future, the reviewer&apos;s real
              name and relevant credential will be identified clearly.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              How we research fragrance guides
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We begin with the question a reader is trying to answer rather than
              starting with a product we want to promote. Research may include
              authoritative reference material, manufacturer information,
              established fragrance terminology, relevant industry sources and
              real consumer questions.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              When a factual claim requires support, we aim to rely on credible
              sources rather than repeating unsupported statements from other
              commercial fragrance websites.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              Our approach to product claims
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              BLOOMIQ does not intentionally invent fragrance-performance claims,
              testing results, awards, certifications, customer experiences or
              scientific conclusions.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Fragrance performance varies with factors such as formulation,
              application, skin, environment and individual perception. We avoid
              presenting a universal longevity figure unless it is supported by a
              clearly explained testing method or another reliable basis.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              Reviews and customer feedback
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Customer reviews or testimonials presented by BLOOMIQ should reflect
              genuine feedback. We do not create fictional customer identities or
              ratings for the purpose of improving marketing or structured data.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Where a review includes an explicit star rating, that rating should
              only be represented as provided by the original reviewer.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              Commercial relationships and recommendations
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              BLOOMIQ is a fragrance brand, and our editorial content may naturally
              reference BLOOMIQ products when relevant. We aim to distinguish
              useful fragrance education from promotional claims and avoid turning
              informational articles into disguised advertisements.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Buying guides, comparisons and recommendation articles should explain
              the reasoning or selection criteria used. BLOOMIQ products will not
              be presented as objectively superior simply because we publish the
              article.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              BLOOMIQ Wear Test
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We are developing a transparent BLOOMIQ Wear Test framework for
              future fragrance-performance content. When original testing data is
              published, the methodology, application conditions, number of
              testers, observation checkpoints and important limitations will be
              disclosed.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              The purpose of this testing is to provide useful real-world
              observations, not to present informal consumer testing as controlled
              laboratory research.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              Corrections and updates
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Fragrance information, product availability and editorial guidance
              can change. We may update articles when better information becomes
              available, when factual errors are identified or when an article
              needs additional context.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Material updates should be reflected in the article&apos;s modified
              date where appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl font-light">
              Our editorial principle
            </h2>

            <div className="mt-6 rounded-[26px] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05] p-8">
              <p className="font-heading text-2xl font-light leading-9 text-white">
                Every BLOOMIQ article should be useful enough to read even if the
                promotional references to BLOOMIQ were removed.
              </p>
            </div>
          </section>

          <section className="border-t border-white/10 pt-10">
            <p className="text-sm leading-7 text-gray-500">
              Last updated: August 2026
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full border border-[#D4AF37]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[2px] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Visit Fragrance Journal
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[2px] text-gray-300 transition hover:border-[#D4AF37]/30 hover:text-[#D4AF37]"
              >
                Back to BLOOMIQ
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}