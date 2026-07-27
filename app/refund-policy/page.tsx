export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-gray-300">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-[#D4AF37] hover:text-white">
          ← Back to Home
        </a>

        <h1 className="mt-8 text-4xl text-white md:text-5xl">
          Refund and Return Policy
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last updated: July 2026
        </p>

        <div className="mt-12 space-y-8 leading-8">
          <section>
            <h2 className="text-2xl text-[#D4AF37]">Amazon Purchases</h2>
            <p className="mt-3">
              Returns, replacements and refunds for products purchased through
              Amazon are handled according to the return eligibility and policy
              displayed on the relevant Amazon product page and order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Damaged or Incorrect Product
            </h2>
            <p className="mt-3">
              If you receive a damaged, leaking, defective or incorrect
              product, report the issue promptly through the marketplace where
              the order was placed. Keep the original packaging, invoice and
              clear photographs of the product and parcel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Opened Personal-Care Products
            </h2>
            <p className="mt-3">
              Due to hygiene, safety and authenticity considerations, opened or
              used fragrance products may not be eligible for return unless
              they are defective, damaged or incorrectly supplied, subject to
              the applicable marketplace policy and law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Fragrance Preference
            </h2>
            <p className="mt-3">
              Individual fragrance preferences and performance perceptions may
              vary. A return may not be available solely because a customer
              dislikes the fragrance, subject to the applicable seller or
              marketplace policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Refund Processing</h2>
            <p className="mt-3">
              Approved refunds are normally issued through the original payment
              method by the marketplace or payment provider. Processing time
              may vary depending on the provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Contact</h2>
            <p className="mt-3">
              For support, email{" "}
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