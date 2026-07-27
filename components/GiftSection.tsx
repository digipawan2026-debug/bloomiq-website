export default function GiftSection() {
  return (
    <section className="relative overflow-hidden bg-[#080706] py-28 px-6 sm:px-8 lg:px-20">
      {/* Ambient Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#7a1830]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl rounded-[36px] border border-[#D4AF37]/20 bg-white/[0.03] backdrop-blur-xl p-10 lg:p-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[7px] text-[#D4AF37] text-sm">
              Luxury Gift Collection
            </p>

            <h2 className="mt-6 text-5xl lg:text-6xl font-light leading-tight text-white">
              The Gift They'll
              <br />
              Never Forget
            </h2>

            <p className="mt-8 text-gray-400 leading-9 text-lg">
              Whether it's a birthday, anniversary, wedding,
              festive celebration or simply a thoughtful surprise,
              <span className="text-white font-medium">
                {" "}BLOOMIQ Velvet Oud Royal{" "}
              </span>
              is crafted to leave a lasting impression.
            </p>

            <p className="mt-6 text-gray-400 leading-9 text-lg">
              Elegant packaging, premium fragrance and timeless style —
              a gift that speaks without words.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://wa.me/916232132163?text=Hello%20BLOOMIQ,%20I%20want%20to%20gift%20Velvet%20Oud%20Royal."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E8C866]"
              >
                Gift BLOOMIQ
              </a>

              <a
                href="#collection"
                className="rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                View Collection
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-[90px]" />

              <img
                src="/perfume50.jpeg"
                alt="Gift Edition"
                className="relative z-10 max-h-[520px] object-contain transition-all duration-700 hover:scale-105"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}