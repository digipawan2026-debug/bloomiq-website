import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how BLOOMIQ collects, uses, stores and protects your personal information.",
  alternates: {
    canonical: "https://www.bloomiq.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | BLOOMIQ",
    description:
      "Learn how BLOOMIQ collects, uses, stores and protects your personal information.",
    url: "https://www.bloomiq.in/privacy-policy",
    siteName: "BLOOMIQ",
    type: "website",
  },
};
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-gray-300">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-[#D4AF37] hover:text-white">
          ← Back to Home
        </a>

        <h1 className="mt-8 text-4xl text-white md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last updated: July 2026
        </p>

        <div className="mt-12 space-y-8 leading-8">
          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Information We Collect
            </h2>
            <p className="mt-3">
              BLOOMIQ may collect information that you voluntarily provide,
              including your name, email address, telephone number and any
              message sent through WhatsApp, email, Instagram or our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              How We Use Your Information
            </h2>
            <p className="mt-3">
              We may use your information to answer enquiries, provide customer
              support, process or assist with orders, communicate product
              updates and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Third-Party Platforms
            </h2>
            <p className="mt-3">
              Our website may link to Amazon, WhatsApp, Instagram and other
              third-party services. Information submitted on those platforms is
              governed by their respective privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Cookies and Analytics
            </h2>
            <p className="mt-3">
              We may use essential cookies and analytics tools to understand
              website performance, traffic and customer experience. You may
              control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Data Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect personal information.
              However, no internet transmission or electronic storage system is
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Your Choices</h2>
            <p className="mt-3">
              You may contact us to request correction or deletion of personal
              information held by us, subject to applicable legal and business
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Contact Us</h2>
            <p className="mt-3">
              For privacy-related questions, email{" "}
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