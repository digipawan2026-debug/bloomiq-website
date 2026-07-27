import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background glow */}

      <div className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-[#7a1830]/25 blur-[170px]" />

      <div className="absolute right-[-150px] top-24 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/15 blur-[190px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_58%)]" />

      {/* Decorative lines */}

      <div className="absolute left-0 top-[42%] hidden h-px w-40 bg-gradient-to-r from-[#D4AF37]/40 to-transparent lg:block" />

      <div className="absolute right-0 top-[42%] hidden h-px w-40 bg-gradient-to-l from-[#D4AF37]/40 to-transparent lg:block" />

      {/* Golden particles */}

      <div className="absolute left-[8%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

      <div className="absolute left-[22%] top-[72%] h-1 w-1 rounded-full bg-[#D4AF37]/60 shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

      <div className="absolute right-[13%] top-[18%] h-1 w-1 rounded-full bg-[#D4AF37]/60 shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

      <div className="absolute right-[7%] top-[66%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-20 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left content */}

          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-[3px] text-[#D4AF37] sm:text-xs sm:tracking-[4px]">
                ✦ Affordable Luxury Perfume
              </span>
            </div>

            <p className="text-xs uppercase tracking-[5px] text-[#D4AF37] sm:text-sm sm:tracking-[7px]">
              Premium Fragrance Collection
            </p>

            <h1 className="mt-7 bg-gradient-to-r from-[#FFF4C4] via-[#D4AF37] to-[#FFF1B2] bg-clip-text text-5xl font-light tracking-[6px] text-transparent sm:text-6xl sm:tracking-[8px] lg:text-8xl lg:tracking-[10px]">
              BLOOMIQ
            </h1>

            <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent lg:mx-0" />

            <p className="mt-8 text-xs uppercase tracking-[5px] text-gray-500 sm:text-sm">
              Introducing
            </p>

            <h2 className="mt-4 font-heading text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              Velvet Oud Royal
            </h2>

            <h3 className="mt-5 text-lg font-light text-gray-300 sm:text-2xl">
              Luxury Unisex Eau De Parfum
            </h3>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg sm:leading-9 lg:mx-0">
              A rich and elegant fragrance created for confidence, daily wear,
              office days, parties and unforgettable date nights. Premium
              luxury designed to make every entrance memorable.
            </p>

            {/* Pricing */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3 backdrop-blur-md">
                <span className="text-sm text-gray-500 line-through">₹999</span>

                <span className="ml-3 text-2xl font-semibold text-white">
                  ₹599
                </span>
              </div>

              <p className="text-xs uppercase tracking-[3px] text-[#D4AF37] sm:text-sm">
                50 ml Best Value
              </p>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5 lg:justify-start">
              <a
                href="#collection"
                className="rounded-full bg-[#D4AF37] px-10 py-4 text-center font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E8C866] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
              >
                Shop Now
              </a>

              <a
                href="#collection"
                className="rounded-full border border-[#D4AF37] px-10 py-4 text-center text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                Explore Collection
              </a>
            </div>

            {/* Trust cards */}

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.04] px-4 py-4 backdrop-blur-md">
                <p className="text-sm text-[#D4AF37]">★★★★★</p>

                <p className="mt-2 text-sm font-medium text-white">
                  Premium Appeal
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Crafted for an elegant fragrance experience
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.04] px-4 py-4 backdrop-blur-md">
                <p className="text-sm font-medium text-white">Long Lasting</p>

                <p className="mt-2 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                  Eau De Parfum
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Designed for day and evening wear
                </p>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.04] px-4 py-4 backdrop-blur-md">
                <p className="text-sm font-medium text-white">Perfect Gift</p>

                <p className="mt-2 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                  Luxury Presentation
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  A refined choice for special occasions
                </p>
              </div>
            </div>
          </div>

          {/* Right product display */}

          <div className="relative flex min-h-[500px] items-end justify-center sm:min-h-[570px]">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15 sm:h-[400px] sm:w-[400px]" />

            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/10 sm:h-[310px] sm:w-[310px]" />

            <div className="gold-glow absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/20 blur-[100px] sm:h-[350px] sm:w-[350px]" />

            <div className="absolute bottom-14 left-1/2 h-10 w-[280px] -translate-x-1/2 rounded-full bg-black/90 blur-2xl sm:w-[380px]" />

            <div className="absolute top-12 rounded-full border border-[#D4AF37]/30 bg-black/60 px-5 py-2 text-[10px] uppercase tracking-[3px] text-[#D4AF37] backdrop-blur-md">
              Signature Fragrance
            </div>

            <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-8">
              {/* 30 ml */}

              <div className="text-center">
                <Image
                  src="/perfume30.jpeg"
                  alt="BLOOMIQ Velvet Oud Royal perfume bottle, 30 ml"
                  width={320}
                  height={430}
                  sizes="(max-width: 640px) 42vw, 280px"
                  className="float-bottle relative z-10 h-auto max-h-[270px] w-auto object-contain drop-shadow-[0_35px_70px_rgba(212,175,55,0.22)] transition-all duration-700 hover:scale-105 sm:max-h-[390px]"
                />

                <div className="mt-5 rounded-2xl border border-[#D4AF37]/15 bg-black/40 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
                    30 ml
                  </p>

                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-600 line-through">
                      ₹749
                    </span>

                    <span className="text-lg font-semibold text-white">
                      ₹459
                    </span>
                  </div>
                </div>
              </div>

              {/* 50 ml */}

              <div className="text-center">
                <div className="mb-3 inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-[10px] uppercase tracking-[3px] text-[#D4AF37] backdrop-blur-md">
                  Best Value
                </div>

                <Image
                  src="/perfume50.jpeg"
                  alt="BLOOMIQ Velvet Oud Royal perfume bottle, 50 ml"
                  width={380}
                  height={520}
                  sizes="(max-width: 640px) 48vw, 340px"
                  priority
                  className="float-bottle relative z-10 h-auto max-h-[340px] w-auto object-contain drop-shadow-[0_45px_90px_rgba(212,175,55,0.3)] transition-all duration-700 hover:scale-105 sm:max-h-[500px]"
                />

                <div className="mt-5 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
                    50 ml
                  </p>

                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-600 line-through">
                      ₹999
                    </span>

                    <span className="text-xl font-semibold text-white">
                      ₹599
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlights */}

        <div className="mt-14 grid gap-4 border-t border-[#D4AF37]/15 pt-8 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-xl font-light text-[#D4AF37]">Unisex</p>

            <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-600">
              Made For Everyone
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-light text-[#D4AF37]">Premium</p>

            <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-600">
              Luxury Eau De Parfum
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-light text-[#D4AF37]">From ₹459</p>

            <p className="mt-2 text-xs uppercase tracking-[3px] text-gray-600">
              Affordable Luxury
            </p>
          </div>
        </div>

        {/* Scroll indicator */}

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-[10px] uppercase tracking-[5px] text-gray-600">
            Scroll To Discover
          </p>

          <div className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </div>
    </section>
  );
}