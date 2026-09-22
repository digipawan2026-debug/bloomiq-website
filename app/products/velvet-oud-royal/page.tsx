import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BLOOMIQ Velvet Oud Royal | Unisex Oud Eau de Parfum",
  description:
    "Discover BLOOMIQ Velvet Oud Royal, a unisex Eau de Parfum with oud, amber and musk character. Available in 30 ml and 50 ml in India.",
  alternates: {
    canonical: "https://www.bloomiq.in/products/velvet-oud-royal",
  },
  openGraph: {
    title: "BLOOMIQ Velvet Oud Royal | Unisex Oud Eau de Parfum",
    description:
      "Discover Velvet Oud Royal by BLOOMIQ — a rich unisex Eau de Parfum with oud, amber and musk character.",
    url: "https://www.bloomiq.in/products/velvet-oud-royal",
    siteName: "BLOOMIQ",
    images: [
      {
        url: "/perfume50.jpeg",
        alt: "BLOOMIQ Velvet Oud Royal 50 ml Eau de Parfum",
      },
    ],
    type: "website",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BLOOMIQ Velvet Oud Royal Eau de Parfum",
  image: [
    "https://www.bloomiq.in/perfume30.jpeg",
    "https://www.bloomiq.in/perfume50.jpeg",
  ],
  description:
    "BLOOMIQ Velvet Oud Royal is a unisex Eau de Parfum with a rich fragrance character built around oud, amber and musk. Available in 30 ml and 50 ml sizes in India.",
  brand: {
    "@type": "Brand",
    name: "BLOOMIQ",
  },
  category: "Eau de Parfum",
  offers: [
    {
      "@type": "Offer",
      url: "https://www.bloomiq.in/products/velvet-oud-royal",
      priceCurrency: "INR",
      price: "459",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      name: "BLOOMIQ Velvet Oud Royal 30 ml",
    },
    {
      "@type": "Offer",
      url: "https://www.bloomiq.in/products/velvet-oud-royal",
      priceCurrency: "INR",
      price: "599",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      name: "BLOOMIQ Velvet Oud Royal 50 ml",
    },
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
      item: "https://www.bloomiq.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Velvet Oud Royal",
      item: "https://www.bloomiq.in/products/velvet-oud-royal",
    },
  ],
};

export default function VelvetOudRoyalPage() {
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
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden border-b border-yellow-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,160,54,0.12),transparent_50%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <Link
                href="/"
                className="text-sm text-zinc-400 transition hover:text-yellow-500"
              >
                ← BLOOMIQ
              </Link>

              <p className="mt-10 text-xs uppercase tracking-[0.4em] text-yellow-500">
                Affordable Luxury Eau de Parfum
              </p>

              <h1 className="mt-5 max-w-2xl text-4xl font-light leading-tight sm:text-5xl lg:text-5xl xl:text-6xl">
  BLOOMIQ Velvet Oud Royal
</h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                A unisex Eau de Parfum with a rich, warm fragrance character
                built around oud, amber and musk. Designed for people who enjoy
                an elegant fragrance for everyday wear, office, evenings and
                special occasions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {["Unisex", "Eau de Parfum", "Oud", "Amber", "Musk"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-yellow-500/30 px-4 py-2 text-zinc-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-10">
                <p className="text-sm text-zinc-400">Available in</p>
                <p className="mt-2 text-xl">
                  30 ml — <strong>₹459</strong>
                  <span className="ml-2 text-sm text-zinc-500 line-through">
                    ₹749
                  </span>
                </p>
                <p className="mt-2 text-xl">
                  50 ml — <strong>₹599</strong>
                  <span className="ml-2 text-sm text-zinc-500 line-through">
                    ₹999
                  </span>
                </p>
              </div>

              <a
                href="https://wa.me/916232132163"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Order on WhatsApp
              </a>
            </div>

            <div className="relative flex min-h-[520px] items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

              <Image
                src="/perfume50.jpeg"
                alt="BLOOMIQ Velvet Oud Royal 50 ml unisex Eau de Parfum"
                width={700}
                height={700}
                priority
                className="relative z-10 max-h-[520px] w-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-500">
            Fragrance Profile
          </p>

          <h2 className="mt-4 text-3xl font-light sm:text-4xl">
            What does Velvet Oud Royal smell like?
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-300">
            Velvet Oud Royal combines the depth of oud with warm amber and a
            smooth musky base. The result is a rich and sophisticated fragrance
            profile designed to feel premium while remaining versatile enough
            for different occasions.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              ["Oud", "Rich, woody depth"],
              ["Amber", "Warm fragrance character"],
              ["Musk", "Smooth, elegant base"],
            ].map(([note, description]) => (
              <div
                key={note}
                className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-6"
              >
                <h3 className="text-xl text-yellow-500">{note}</h3>
                <p className="mt-3 text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-yellow-500/20 bg-zinc-950">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-light sm:text-4xl">
              Who is Velvet Oud Royal for?
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-300">
              Velvet Oud Royal is a unisex fragrance for people who enjoy warm,
              woody and musky perfume profiles. It can be considered for office
              wear, evenings, special occasions and gifting, depending on your
              fragrance preference and application.
            </p>

            <h2 className="mt-16 text-3xl font-light sm:text-4xl">
              Is oud suitable for Indian weather?
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-300">
              Oud can work in Indian weather, but application and environment
              matter. Rich oud fragrances may feel stronger in heat, while
              controlled application can make them more comfortable in
              air-conditioned offices and evening settings.
            </p>

            <Link
              href="/blog/oud-perfume-guide-indian-weather"
              className="mt-6 inline-block text-yellow-500 underline underline-offset-4"
            >
              Read our complete Oud Perfume Guide for Indian Weather →
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-500">
              Choose Your Size
            </p>

            <h2 className="mt-4 text-3xl font-light sm:text-4xl">
              Velvet Oud Royal
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                size: "30 ML",
                image: "/perfume30.jpeg",
                oldPrice: "₹749",
                price: "₹459",
                text: "Perfect for travel, gifting and everyday luxury.",
              },
              {
                size: "50 ML",
                image: "/perfume50.jpeg",
                oldPrice: "₹999",
                price: "₹599",
                text: "The complete Velvet Oud Royal fragrance experience.",
              },
            ].map((product) => (
              <article
                key={product.size}
                className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 text-center"
              >
                <div className="flex h-[350px] items-center justify-center">
                  <Image
                    src={product.image}
                    alt={`BLOOMIQ Velvet Oud Royal ${product.size} Eau de Parfum`}
                    width={500}
                    height={500}
                    className="max-h-[330px] w-auto object-contain"
                  />
                </div>

                <h3 className="mt-6 text-3xl font-light">{product.size}</h3>

                <p className="mt-3 text-zinc-400">{product.text}</p>

                <div className="mt-6">
                  <span className="mr-3 text-zinc-500 line-through">
                    {product.oldPrice}
                  </span>
                  <span className="text-3xl font-semibold">
                    {product.price}
                  </span>
                </div>

                <a
                  href="https://wa.me/916232132163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-block rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Order on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-yellow-500/20 bg-zinc-950">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-light sm:text-4xl">
              About BLOOMIQ Velvet Oud Royal
            </h2>

            <div className="mt-8 space-y-6 leading-8 text-zinc-300">
              <p>
                <strong className="text-white">Is Velvet Oud Royal unisex?</strong>
                <br />
                Yes. Velvet Oud Royal is designed as a unisex Eau de Parfum for
                men and women who enjoy warm, woody and musky fragrances.
              </p>

              <p>
                <strong className="text-white">
                  What concentration is Velvet Oud Royal?
                </strong>
                <br />
                Velvet Oud Royal is an Eau de Parfum (EDP).
              </p>

              <p>
                <strong className="text-white">
                  Is Velvet Oud Royal a long-lasting perfume?
                </strong>
                <br />
                It is designed as a long-lasting Eau de Parfum, but actual
                longevity can vary with skin, clothing, weather, application
                and environment.
              </p>

              <p>
                <strong className="text-white">
                  What sizes are available?
                </strong>
                <br />
                Velvet Oud Royal is available in 30 ml and 50 ml sizes.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/blog/how-to-choose-long-lasting-perfume"
                className="text-yellow-500 underline underline-offset-4"
              >
                Long-Lasting Perfume Guide
              </Link>

              <Link
                href="/blog/edt-vs-edp-parfum-extrait-indian-weather"
                className="text-yellow-500 underline underline-offset-4"
              >
                EDT vs EDP vs Parfum Guide
              </Link>

              <Link
                href="/blog/how-to-choose-office-perfume-indian-weather"
                className="text-yellow-500 underline underline-offset-4"
              >
                Office Perfume Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}