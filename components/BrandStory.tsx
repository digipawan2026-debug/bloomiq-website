"use client";

import { motion } from "framer-motion";
import { Sparkles, Gem, ArrowRight } from "lucide-react";

const journey = [
  {
    icon: Sparkles,
    title: "Inspired",
    text: "Every BLOOMIQ fragrance begins with carefully selected notes inspired by elegance and confidence.",
  },
  {
    icon: Gem,
    title: "Crafted",
    text: "Premium fragrance oils are blended to deliver a luxurious scent that leaves a lasting impression.",
  },
  {
    icon: ArrowRight,
    title: "Presented",
    text: "Minimal, sophisticated packaging reflects the luxury experience inside every bottle.",
  },
  {
    icon: Sparkles,
    title: "Remembered",
    text: "A fragrance should be more than a scent—it should become part of your identity wherever you go.",
  },
];

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#7a1830]/12 blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            Our Story
          </p>

          <h2 className="mt-4 font-heading text-3xl font-light text-white sm:text-4xl lg:text-5xl">
            Crafted For Modern Luxury
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-gray-400 sm:text-base">
            BLOOMIQ was created with one belief: luxury should be experienced,
            not admired from a distance. Every bottle combines premium
            craftsmanship, elegant design and unforgettable fragrance so you can
            enjoy everyday luxury without compromise.
          </p>
        </motion.div>

        {/* Journey */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:shadow-[0_24px_80px_rgba(212,175,55,0.10)]"
              >
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition duration-500 group-hover:scale-110">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-light text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-10 bg-[#D4AF37]/60 transition-all duration-500 group-hover:w-20" />

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#15110A] via-[#0B0B0B] to-[#170A0F] px-8 py-12 text-center"
        >
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent" />

          <p className="font-heading text-2xl font-light italic leading-10 text-white sm:text-3xl">
            “Luxury isn't about paying more.
            <br />
            It's about leaving a lasting impression.”
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-[#D4AF37]" />

          <p className="mt-5 text-xs uppercase tracking-[5px] text-[#D4AF37]">
            BLOOMIQ • Velvet Oud Royal
          </p>
        </motion.div>
      </div>
    </section>
  );
}