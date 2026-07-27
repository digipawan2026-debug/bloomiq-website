"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
    id="home"
    className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background glow */}
      <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-[#7a1830]/20 blur-[150px]" />
      <div className="absolute right-[-150px] top-16 h-[460px] w-[460px] rounded-full bg-[#D4AF37]/12 blur-[170px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_58%)]" />

      {/* Decorative particles */}
      <div className="absolute left-[8%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
      <div className="absolute right-[12%] top-[20%] h-1 w-1 rounded-full bg-[#D4AF37]/60 shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8 lg:px-16 lg:pb-16 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 backdrop-blur-md">
              <span className="text-[9px] uppercase tracking-[3px] text-[#D4AF37] sm:text-[10px]">
                ✦ Premium Fragrance Launch
              </span>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[4px] text-[#D4AF37] sm:text-xs sm:tracking-[5px]">
              Premium Fragrance Collection
            </p>

            <h1 className="mt-4 flex items-start justify-center lg:justify-start">
  <span className="bg-gradient-to-r from-[#FFF4C4] via-[#D4AF37] to-[#FFF1B2] bg-clip-text text-4xl font-light tracking-[5px] text-transparent sm:text-5xl sm:tracking-[7px] lg:text-6xl">
    BLOOMIQ
  </span>

  <sup className="ml-1 mt-1 text-[9px] font-normal tracking-normal text-[#D4AF37] sm:mt-2 sm:text-[10px] lg:mt-2 lg:text-xs">
    ™
  </sup>
</h1>

            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent lg:mx-0" />

            <p className="mt-5 text-[10px] uppercase tracking-[4px] text-gray-500">
              NOW AVAILABLE
            </p>

            <h2 className="mt-2 font-heading text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
  Velvet Oud Royal
</h2>

<p className="mt-3 text-sm uppercase tracking-[4px] text-[#D4AF37]">
  Affordable Luxury. Unforgettable Presence.
</p>
            <p className="mt-3 text-base font-light text-gray-300 sm:text-lg">
              Luxury Eau De Parfum • Long Lasting
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
              A rich, elegant fragrance designed for confidence, office days,
              evenings, celebrations and unforgettable moments.
            </p>

            {/* Compact pricing */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2.5">
                <span className="text-xs text-gray-500 line-through">₹999</span>

                <span className="ml-3 text-xl font-semibold text-white">
                  ₹599
                </span>
              </div>

              <span className="text-[10px] uppercase tracking-[2px] text-[#D4AF37]">
                50 ml · Best Value
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#collection"
                className="rounded-full bg-[#D4AF37] px-10 py-4 text-center text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-[#E8C866] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Discover Collection
              </a>

              <a
                href="#collection"
                className="rounded-full border border-[#D4AF37] px-10 py-4 text-center text-sm text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 hover:bg-[#D4AF37] hover:text-black"
              >
                Explore Collection
              </a>
            </div>

            {/* Compact trust line */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[2px] text-gray-500 lg:justify-start">
              <span>Premium Oils</span>
<span className="text-[#D4AF37]">◆</span>
<span>Luxury Packaging</span>
<span className="text-[#D4AF37]">◆</span>
<span>Everyday Luxury</span>
            </div>
          </div>

          {/* Right product display */}
          <div className="relative flex min-h-[390px] items-end justify-center sm:min-h-[440px] lg:min-h-[480px]">
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/15 sm:h-[330px] sm:w-[330px]" />

            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/10 sm:h-[260px] sm:w-[260px]" />

            <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/25 blur-[120px] sm:h-[310px] sm:w-[310px]" />

            <div className="absolute bottom-9 left-1/2 h-8 w-[250px] -translate-x-1/2 rounded-full bg-black/90 blur-2xl sm:w-[330px]" />

           

            <div className="relative z-10 flex items-end justify-center gap-8 sm:gap-10 lg:gap-12">
              {/* 30 ml */}
<div className="text-center">
  <div className="mb-2 inline-block rounded-full border border-[#D4AF37]/30 bg-black/70 px-3 py-1.5 text-[8px] uppercase tracking-[2px] text-[#D4AF37]">
    Signature Fragrance
  </div>
                <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/perfume30.jpeg"
    alt="BLOOMIQ Velvet Oud Royal perfume bottle, 30 ml"
    width={280}
    height={390}
    sizes="(max-width:640px) 40vw,240px"
    className="h-auto max-h-[285px] w-auto object-contain"
  />
</motion.div>

                <div className="mt-3 rounded-xl border border-[#D4AF37]/15 bg-black/40 px-3 py-2 backdrop-blur-md">
                  <p className="text-[9px] uppercase tracking-[3px] text-[#D4AF37]">
                    30 ml
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    <span className="text-[10px] text-gray-600 line-through">
                      ₹749
                    </span>

                    <span className="text-base font-semibold text-white">
                      ₹459
                    </span>
                  </div>
                </div>
              </div>

              {/* 50 ml */}
              <div className="text-center">
                <div className="mb-2 inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-[8px] uppercase tracking-[2px] text-[#D4AF37]">
                  Best Value
                </div>

                <motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/perfume50.jpeg"
    alt="BLOOMIQ Velvet Oud Royal perfume bottle, 50 ml"
    width={330}
    height={470}
    priority
    sizes="(max-width:640px) 46vw,290px"
    className="h-auto max-h-[285px] w-auto object-contain"
  />
</motion.div>

                <div className="mt-3 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-2 backdrop-blur-md">
                  <p className="text-[9px] uppercase tracking-[3px] text-[#D4AF37]">
                    50 ml
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-2">
                    <span className="text-[10px] text-gray-600 line-through">
                      ₹999
                    </span>

                    <span className="text-lg font-semibold text-white">
                      ₹599
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact bottom highlights */}
        <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#D4AF37]/15 pt-6">
          <div className="text-center">
            <p className="text-sm font-light text-[#D4AF37] sm:text-lg">
              Unisex
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[1px] text-gray-600 sm:text-[10px] sm:tracking-[2px]">
              For Everyone
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-light text-[#D4AF37] sm:text-lg">
              Luxury

            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[1px] text-gray-600 sm:text-[10px] sm:tracking-[2px]">
              Crafted With Care
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-light text-[#D4AF37] sm:text-lg">
              From ₹459
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[1px] text-gray-600 sm:text-[10px] sm:tracking-[2px]">
              Luxury Value
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}