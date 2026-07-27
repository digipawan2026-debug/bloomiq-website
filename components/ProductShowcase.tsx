"use client";

import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const sizes = [
  {
    size: "30 ml",
    image: "/perfume30.jpeg",
    mrp: "₹749",
    price: "₹459",
    label: "Perfect Introduction",
  },
  {
    size: "50 ml",
    image: "/perfume50.jpeg",
    mrp: "₹999",
    price: "₹599",
    label: "Best Seller",
  },
];

export default function ProductShowcase() {
  const amazonLink = "#contact";

  const whatsappLink =
    "https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20am%20interested%20in%20Velvet%20Oud%20Royal.";

  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-20 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[32%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

        <div className="absolute left-[8%] top-[20%] h-52 w-52 rounded-full bg-[#7A151E]/10 blur-[100px]" />

        <div className="absolute bottom-[10%] right-[5%] h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />

            <p className="text-[10px] font-medium uppercase tracking-[5px] text-[#D4AF37] sm:text-xs sm:tracking-[7px]">
              The Signature Collection
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-7xl">
            Meet the Essence of
            <span className="mt-2 block bg-gradient-to-r from-[#9D7012] via-[#F5E5A7] to-[#C99D2A] bg-clip-text text-transparent">
              Modern Royalty
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A rich and sophisticated fragrance created for people who want
            luxury, confidence and a memorable presence.
          </p>
        </motion.div>

        {/* Main hero product */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Large bottle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative mx-auto flex min-h-[520px] max-w-[600px] items-center justify-center overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#19140b]/90 via-[#0c0a06] to-black sm:min-h-[650px]">
              <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              <div className="absolute left-6 top-6 z-20 rounded-full border border-[#D4AF37]/40 bg-black/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#E7C75A] backdrop-blur-xl sm:left-8 sm:top-8 sm:text-xs">
                Best Seller
              </div>

              <div className="absolute h-[340px] w-[340px] rounded-full border border-[#D4AF37]/10 sm:h-[460px] sm:w-[460px]" />

              <div className="absolute h-[280px] w-[280px] rounded-full bg-[#D4AF37]/15 blur-[75px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />

              <div className="absolute bottom-14 h-12 w-[65%] rounded-full bg-[#D4AF37]/15 blur-2xl" />

              <motion.img
                src="/perfume50.jpeg"
                alt="BLOOMIQ Velvet Oud Royal 50 ml perfume bottle"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 max-h-[470px] w-auto max-w-[90%] object-contain drop-shadow-[0_45px_55px_rgba(0,0,0,0.95)] sm:max-h-[600px]"
              />

              <div className="absolute bottom-8 left-1/2 h-[2px] w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            </div>
          </motion.div>

          {/* Product information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[6px] text-[#D4AF37]">
              BLOOMIQ
            </p>

            <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Velvet Oud
              <span className="block text-[#E6C75B]">Royal</span>
            </h3>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <span className="text-sm text-gray-400">
                Premium fragrance experience
              </span>
            </div>

            <p className="mt-7 max-w-xl leading-8 text-gray-400">
              Velvet Oud Royal blends deep oud character with smooth,
              sophisticated warmth. Designed for evening elegance, special
              occasions and unforgettable everyday confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-end gap-4">
              <span className="text-4xl font-semibold text-[#E6C75B] sm:text-5xl">
                ₹599
              </span>

              <span className="pb-1 text-lg text-gray-500 line-through">
                ₹999
              </span>

              <span className="mb-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-[#D4AF37]">
                Launch Price
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              50 ml Eau de Parfum
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Sparkles size={19} className="shrink-0 text-[#D4AF37]" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Long-lasting aroma
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Crafted for a memorable trail
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <ShieldCheck size={19} className="shrink-0 text-[#D4AF37]" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Premium presentation
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Ideal for personal use and gifting
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Truck size={19} className="shrink-0 text-[#D4AF37]" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Delivery across India
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Launch availability coming soon
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Check size={19} className="shrink-0 text-[#D4AF37]" />

                <div>
                  <p className="text-sm font-medium text-white">
                    Affordable luxury
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Premium character without excess cost
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={amazonLink}
                className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#A87916] via-[#E6C75B] to-[#A87916] px-7 py-4 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
              >
                <ShoppingBag
                  size={19}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                Buy on Amazon
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-3 rounded-full border border-[#D4AF37]/50 bg-black px-7 py-4 font-semibold text-[#E6C75B] transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                <MessageCircle size={19} />
                Enquire on WhatsApp
              </a>
            </div>

            <p className="mt-4 text-center text-xs text-gray-600 sm:text-left">
              Amazon purchase link will be activated at launch.
            </p>
          </motion.div>
        </div>

        {/* Size options */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[5px] text-[#D4AF37]">
              Select Your Size
            </p>

            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              One Signature. Two Experiences.
            </h3>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {sizes.map((item, index) => (
              <motion.article
                key={item.size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 transition duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_25px_70px_rgba(212,175,55,0.12)] sm:p-7"
              >
                <div className="absolute right-5 top-5 z-20 rounded-full border border-[#D4AF37]/30 bg-black/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#D4AF37]">
                  {item.label}
                </div>

                <div className="grid items-center gap-7 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#17130c] to-black">
                    <div className="absolute h-48 w-48 rounded-full bg-[#D4AF37]/15 blur-[60px]" />

                    <img
                      src={item.image}
                      alt={`BLOOMIQ Velvet Oud Royal ${item.size}`}
                      className="relative z-10 max-h-[285px] w-auto max-w-[95%] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-[#D4AF37]">
                      Velvet Oud Royal
                    </p>

                    <h4 className="mt-3 font-serif text-3xl">
                      {item.size}
                    </h4>

                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      Premium oud fragrance created for confidence, elegance and
                      memorable moments.
                    </p>

                    <div className="mt-6 flex items-end gap-3">
                      <span className="text-3xl font-semibold text-[#E6C75B]">
                        {item.price}
                      </span>

                      <span className="pb-1 text-sm text-gray-500 line-through">
                        {item.mrp}
                      </span>
                    </div>

                    <a
                      href={amazonLink}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37]/40 px-5 py-3 text-sm font-semibold text-[#E6C75B] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
                    >
                      <ShoppingBag size={17} />
                      Choose {item.size}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}