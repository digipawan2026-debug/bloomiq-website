import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BLOOMIQ Fragrance Journal | Perfume Guides for India",
  description:
    "Explore BLOOMIQ fragrance guides on long-lasting perfume, oud, perfume concentration, office fragrances and choosing scents for Indian weather.",
  alternates: {
    canonical: "https://www.bloomiq.in/blog",
  },
  openGraph: {
    title: "BLOOMIQ Fragrance Journal",
    description:
      "Practical fragrance guides on perfume longevity, oud, concentration and choosing the right scent for everyday life in India.",
    url: "https://www.bloomiq.in/blog",
    siteName: "BLOOMIQ",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            BLOOMIQ Fragrance Journal
          </p>

          <h1 className="mt-4 font-heading text-4xl font-light sm:text-5xl lg:text-6xl">
            Fragrance Guides for Real Life
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Practical, research-led guides on perfume longevity, oud, office wear,
            fragrance concentration, affordable luxury and choosing the right scent
            for everyday life in India.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
  href="/blog/how-to-choose-office-perfume-indian-weather"
  className="block rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
>
            <p className="text-[10px] uppercase tracking-[3px] text-[#D4AF37]">
              Office Fragrance Guide
            </p>

            <h2 className="mt-4 font-heading text-2xl font-light">
              How to Choose an Office Perfume for Indian Weather
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              A practical guide to choosing a fragrance that works across commutes,
              warm weather, air-conditioned offices and professional settings.
            </p>
          </Link>

          <Link
  href="/blog/edt-vs-edp-parfum-extrait-indian-weather"
  className="block rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
>
  <p className="text-[10px] uppercase tracking-[3px] text-[#D4AF37]">
    Fragrance Concentration Guide
  </p>

  <h2 className="mt-4 font-heading text-2xl font-light">
    EDT vs EDP vs Parfum vs Extrait: Which Is Better for Indian Weather?
  </h2>

  <p className="mt-4 text-sm leading-7 text-gray-400">
    Understand what fragrance concentration labels really mean, how they differ
    in wearing experience, and how to choose the right format for Indian weather.
  </p>
</Link>

          <Link
  href="/blog/how-to-choose-long-lasting-perfume"
  className="block rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/40"
>
  <p className="text-[10px] uppercase tracking-[3px] text-[#D4AF37]">
    Perfume Longevity Guide
  </p>

  <h2 className="mt-4 font-heading text-2xl font-light">
    How to Choose a Long-Lasting Perfume
  </h2>

  <p className="mt-4 text-sm leading-7 text-gray-400">
    Learn what really affects perfume longevity, how projection differs from
    wear time, and how to evaluate performance without relying only on
    marketing-hour claims.
  </p>
</Link>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#D4AF37]/40 px-7 py-3 text-xs font-semibold uppercase tracking-[2px] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Back to BLOOMIQ
          </Link>
        </div>
      </section>
    </main>
  );
}