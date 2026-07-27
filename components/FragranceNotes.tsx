"use client";

import { motion } from "framer-motion";
export default function FragranceNotes() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-[#050505] py-24 text-white"
>
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-16 text-center text-5xl font-light">
          Fragrance Profile
        </h2>

        <div className="grid gap-10 md:grid-cols-3">

          <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900/40 p-8">
            <h3 className="mb-4 text-xl text-yellow-500">Top Notes</h3>
            <p>Bergamot</p>
            <p>Fresh Citrus</p>
          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900/40 p-8">
            <h3 className="mb-4 text-xl text-yellow-500">Heart Notes</h3>
            <p>Rose</p>
            <p>Jasmine</p>
          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-zinc-900/40 p-8">
            <h3 className="mb-4 text-xl text-yellow-500">Base Notes</h3>
            <p>Oud</p>
            <p>Amber</p>
            <p>Musk</p>
          </div>

        </div>

      </div>
</motion.section>  );
}