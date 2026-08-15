import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the BLOOMIQ terms and conditions covering website use, product information, pricing, purchases and intellectual property.",
  alternates: {
    canonical: "https://www.bloomiq.in/terms",
  },
  openGraph: {
    title: "Terms and Conditions | BLOOMIQ",
    description:
      "Read the BLOOMIQ terms and conditions covering website use, product information, pricing, purchases and intellectual property.",
    url: "https://www.bloomiq.in/terms",
    siteName: "BLOOMIQ",
    type: "website",
  },
};
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-gray-300">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-[#D4AF37] hover:text-white">
          ← Back to Home
        </a>

        <h1 className="mt-8 text-4xl text-white md:text-5xl">
          Terms and Conditions
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last updated: July 2026
        </p>

        <div className="mt-12 space-y-8 leading-8">
          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing the BLOOMIQ website, you agree to these terms. Please
              discontinue use of the website if you do not agree with them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Product Information
            </h2>
            <p className="mt-3">
              We aim to provide accurate product descriptions, images, sizes and
              prices. Packaging, colours and appearance may vary slightly due
              to manufacturing updates, lighting and screen settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Pricing and Availability
            </h2>
            <p className="mt-3">
              Prices, offers and availability may change without prior notice.
              The final price and availability are those displayed on the
              marketplace or checkout page when the order is placed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Third-Party Purchases
            </h2>
            <p className="mt-3">
              When you purchase through Amazon or another third-party platform,
              the transaction is also subject to that platform&apos;s terms,
              payment rules, delivery policy and return policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Intellectual Property
            </h2>
            <p className="mt-3">
              BLOOMIQ branding, product names, website text, graphics, images
              and design elements may not be copied, reproduced or commercially
              used without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Responsible Website Use
            </h2>
            <p className="mt-3">
              You must not misuse the website, attempt unauthorised access,
              introduce harmful code or use website content for fraudulent or
              unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the extent permitted by applicable law, BLOOMIQ will not be
              liable for indirect or consequential loss arising from use of the
              website or third-party services linked from it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Changes</h2>
            <p className="mt-3">
              We may revise these terms when our services, policies or legal
              requirements change. Updated terms will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Contact</h2>
            <p className="mt-3">
              Questions may be sent to{" "}
              <a
                href="mailto:hello@bloomiq.in"
                className="text-[#D4AF37] hover:text-white"
              >
                hello@bloomiq.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}