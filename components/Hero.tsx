"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-6 pb-16 pt-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(202,160,54,0.14),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-yellow-500">
            Premium Fragrance Collection
          </p>

          <h1 className="text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">
            Velvet Oud Royal
          </h1>

          <p className="mt-5 text-sm uppercase tracking-[0.28em] text-yellow-500 sm:text-base">
            Affordable Luxury. Unforgettable Presence.
          </p>

          <p className="mt-6 max-w-xl text-lg text-zinc-300">
            Luxury Eau De Parfum • Long Lasting
          </p>

          <p className="mt-5 max-w-xl leading-8 text-zinc-400">
            A rich and elegant fragrance crafted for confidence, office days,
            evenings, celebrations and unforgettable moments.
          </p>
          
<p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">
  Introductory Launch Price
</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-lg text-zinc-500 line-through">₹999</span>

            <span className="text-3xl font-semibold text-white">₹599</span>

            <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-widest text-yellow-500">
              Save ₹400
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#collection"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-yellow-400"
            >
              Shop Now
            </a>

            <a
              href="#story"
              className="rounded-full border border-yellow-500/60 px-8 py-4 text-center text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
            >
              Discover Velvet Oud Royal
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-zinc-300 sm:grid-cols-4">
            <div>✓ Long Lasting</div>
            <div>✓ Luxury Packaging</div>
            <div>✓ Unisex</div>
            <div>✓ Premium EDP</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

          <img
            src="/perfume50.jpeg"
            alt="BLOOMIQ Velvet Oud Royal 50 ml perfume"
            className="relative z-10 max-h-[590px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(202,160,54,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}