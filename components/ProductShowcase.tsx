const products = [
  {
    name: "Velvet Oud",
    size: "30 ml",
    image: "/perfume30.jpeg",
    mrp: "₹749",
    price: "₹459",
    saving: "Save ₹290",
    badge: "Perfect For Trial",
    description:
      "A compact luxury fragrance for everyday elegance, travel and effortless sophistication.",
    whatsapp:
      "https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20want%20to%20order%20Velvet%20Oud%2030ml%20for%20₹459.",
  },
  {
    name: "Velvet Oud",
    size: "50 ml",
    image: "/perfume50.jpeg",
    mrp: "₹999",
    price: "₹599",
    saving: "Save ₹400",
    badge: "Best Value",
    description:
      "The complete Velvet Oud experience with more fragrance, greater value and a commanding presence.",
    whatsapp:
      "https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20want%20to%20order%20Velvet%20Oud%2050ml%20for%20₹599.",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-[#080706] px-6 py-24 sm:px-8 lg:px-20 lg:py-32"
    >
      {/* Background glow */}

      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7c1d32]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[7px] text-[#D4AF37] sm:text-sm">
            The Signature Collection
          </p>

          <h2 className="mt-6 text-4xl font-light tracking-wide text-white sm:text-5xl lg:text-7xl">
            Choose Your Presence
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            One unforgettable fragrance. Two elegant sizes. Choose the bottle
            that matches your lifestyle.
          </p>
        </div>

        {/* Product cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {products.map((product, index) => (
            <article
              key={product.size}
              className={`group relative overflow-hidden rounded-[32px] border bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 sm:p-9 ${
                index === 1
                  ? "border-[#D4AF37]/60 shadow-[0_25px_100px_rgba(212,175,55,0.12)]"
                  : "border-white/10 hover:border-[#D4AF37]/40"
              }`}
            >
              {/* Badge */}

              <div className="absolute right-5 top-5 z-20 rounded-full border border-[#D4AF37]/30 bg-black/70 px-4 py-2 text-[10px] uppercase tracking-[3px] text-[#D4AF37] backdrop-blur-md sm:right-8 sm:top-8">
                {product.badge}
              </div>

              {/* Product image */}

              <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-b from-[#15120e] to-[#050505] sm:min-h-[480px]">
                <div className="absolute h-64 w-64 rounded-full bg-[#D4AF37]/15 blur-[90px]" />

                <div className="absolute bottom-10 h-8 w-56 rounded-full bg-black/70 blur-xl" />

                <img
                  src={product.image}
                  alt={`BLOOMIQ Velvet Oud ${product.size}`}
                  className="relative z-10 max-h-[330px] w-auto object-contain transition duration-700 group-hover:scale-105 sm:max-h-[410px]"
                />
              </div>

              {/* Product information */}

              <div className="px-1 pb-2 pt-8 sm:px-2">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[5px] text-[#D4AF37]">
                      BLOOMIQ
                    </p>

                    <h3 className="mt-3 text-3xl font-light text-white sm:text-4xl">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[4px] text-gray-500">
                      {product.size} · Unisex Eau De Parfum
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="flex items-center gap-3 sm:justify-end">
                      <span className="text-sm text-gray-600 line-through">
                        {product.mrp}
                      </span>

                      <span className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                        {product.saving}
                      </span>
                    </div>

                    <p className="mt-2 text-4xl font-semibold text-white">
                      {product.price}
                    </p>
                  </div>
                </div>

                <p className="mt-7 max-w-xl leading-8 text-gray-400">
                  {product.description}
                </p>

                {/* Benefits */}

                <div className="mt-7 grid grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    ✓ Long-lasting character
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    ✓ Premium presentation
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    ✓ Unisex fragrance
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    ✓ Direct order support
                  </div>
                </div>

                {/* CTA */}

                <a
                  href={product.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-[2px] text-black transition duration-300 hover:scale-[1.02] hover:bg-[#E7C963]"
                >
                  Order {product.size} on WhatsApp
                </a>

                <p className="mt-4 text-center text-xs tracking-wide text-gray-600">
                  Confirm availability and delivery details before payment
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Trust bar */}

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3">
          <div className="border-b border-white/10 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="text-2xl">✦</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-white">
              Premium Fragrance
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Crafted for a rich and refined experience
            </p>
          </div>

          <div className="border-b border-white/10 p-6 text-center sm:border-b-0 sm:border-r">
            <p className="text-2xl">♢</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-white">
              Affordable Luxury
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Premium presence without excessive pricing
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-2xl">✓</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[2px] text-white">
              Assisted Ordering
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Speak directly with BLOOMIQ on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}