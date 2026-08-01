"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Gem,
  Gift,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Long Lasting",
    text: "Designed to leave a refined impression from day to night.",
    icon: Sparkles,
  },
  {
    title: "Affordable Luxury",
    text: "Premium fragrance character without premium pricing.",
    icon: Gem,
  },
  {
    title: "Everyday Signature",
    text: "An elegant scent created for work, travel and special occasions.",
    icon: CheckCircle2,
  },
  {
    title: "Gift Ready",
    text: "Thoughtfully presented for memorable gifting moments.",
    icon: Gift,
  },
];

const highlights = [
  "Premium Fragrance Oils",
  "Elegant Packaging",
  "Unisex Eau De Parfum",
  "Direct WhatsApp Support",
  "Luxury Presentation",
  "Made For Daily Wear",
];

export default function WhyBloomiq() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[430px] w-[430px] rounded-full bg-[#D4AF37]/8 blur-[170px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-[#7a1830]/12 blur-[170px]" />

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
            Why BLOOMIQ
          </p>

          <h2 className="mt-4 font-heading text-3xl font-light text-white sm:text-4xl lg:text-5xl">
            Luxury Without Compromise
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Premium fragrance character, elegant presentation and everyday wearability — without the premium price barrier.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.09,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:shadow-[0_24px_75px_rgba(212,175,55,0.10)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.13),transparent_58%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

                <div className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/55 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.18)]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-light text-white">
                    {item.title}
                  </h3>

                  <div className="mx-auto mt-4 h-px w-10 bg-[#D4AF37]/55 transition-all duration-500 group-hover:w-20" />

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Highlights panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-xl sm:p-7"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4 transition duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                </span>

                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}