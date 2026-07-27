export default function LuxuryCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080706] px-8 py-28 text-center lg:px-20">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[8px] text-[#D4AF37]">
          Luxury Within Reach
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight text-white lg:text-7xl">
          Leave an Impression
          <br />
          They Remember
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400">
          Discover BLOOMIQ Velvet Oud — a refined unisex fragrance created for
          confidence, elegance and unforgettable moments.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/916232132163"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#E6C766]"
          >
            Order on WhatsApp
          </a>

          <a
            href="#collection"
            className="rounded-full border border-[#D4AF37] px-10 py-4 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}