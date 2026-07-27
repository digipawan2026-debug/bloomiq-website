"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Crown,
  Gift,
  Heart,
  Sparkles,
  Sun,
} from "lucide-react";

const highlights = [
  {
    title: "Daily Wear",
    text: "A refined fragrance that complements your everyday confidence.",
    icon: Sun,
  },
  {
    title: "Office Ready",
    text: "Elegant and balanced for professional environments.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Party Nights",
    text: "Warm, rich notes that stand out at celebrations and evening events.",
    icon: Sparkles,
  },
  {
    title: "Date Nights",
    text: "Crafted to leave a memorable impression on special evenings.",
    icon: Heart,
  },
  {
    title: "Perfect Gift",
    text: "An elegant choice for birthdays, anniversaries and festive occasions.",
    icon: Gift,
  },
  {
    title: "Luxury Feel",
    text: "Premium presentation created for a refined fragrance experience.",
    icon: Crown,
  },
];

export default function ProductHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#080706] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-16 h-[430px] w-[430px] rounded-full bg-[#7a1830]/14 blur-[170px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            Made For Every Occasion
          </p>

          <h2 className="mt-4 font-heading text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            One Fragrance.
            <br />
            Endless Moments.
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            From everyday confidence to unforgettable celebrations, Velvet Oud
            Royal is designed to complement every meaningful moment.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:shadow-[0_24px_80px_rgba(212,175,55,0.11)]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.13),transparent_56%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Top highlight */}
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

                <div className="relative">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/55 group-hover:shadow-[0_0_32px_rgba(212,175,55,0.18)]">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-light text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-[#D4AF37]/60 transition-all duration-500 group-hover:w-24" />

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="font-heading text-xl font-light leading-9 text-gray-300 sm:text-2xl">
            Wear it to work. Wear it to celebrate.
            <br />
            Wear it whenever you want to be remembered.
          </p>

          <a
            href="#collection"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#CDA434] via-[#E4C562] to-[#CDA434] px-9 py-4 text-xs font-bold uppercase tracking-[2px] text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_32px_rgba(212,175,55,0.35)]"
          >
            Choose Your Bottle
          </a>
        </motion.div>
      </div>
    </section>
  );
}