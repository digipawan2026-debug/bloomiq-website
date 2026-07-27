export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-gray-300">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-[#D4AF37] hover:text-white">
          ← Back to Home
        </a>

        <h1 className="mt-8 text-4xl text-white md:text-5xl">
          Shipping Policy
        </h1>

        <p className="mt-4 text-sm text-gray-500">
          Last updated: July 2026
        </p>

        <div className="mt-12 space-y-8 leading-8">
          <section>
            <h2 className="text-2xl text-[#D4AF37]">Amazon Orders</h2>
            <p className="mt-3">
              Products purchased through Amazon are packed, dispatched and
              delivered according to the shipping information displayed on the
              relevant Amazon product page and order confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Delivery Time</h2>
            <p className="mt-3">
              Estimated delivery dates depend on product availability, delivery
              location, courier operations and the fulfilment method selected
              during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Shipping Charges
            </h2>
            <p className="mt-3">
              Any applicable shipping charges will be shown on the marketplace
              or checkout page before the order is confirmed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Incorrect Address
            </h2>
            <p className="mt-3">
              Customers are responsible for entering a complete and accurate
              delivery address. Address changes may not be possible after an
              order has been dispatched.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">
              Delayed or Missing Orders
            </h2>
            <p className="mt-3">
              For an Amazon order, please use the support and tracking options
              available in your Amazon account. You may also contact BLOOMIQ
              with your order details, and we will assist where reasonably
              possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#D4AF37]">Contact</h2>
            <p className="mt-3">
              Email{" "}
              <a
                href="mailto:hello@bloomiq.in"
                className="text-[#D4AF37] hover:text-white"
              >
                hello@bloomiq.in
              </a>{" "}
              or contact us through WhatsApp at +91 62321 32163.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}