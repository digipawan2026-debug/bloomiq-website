"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

const orderBenefits = [
  {
    icon: Truck,
    title: "Pan-India Delivery",
    text: "Delivery support across India.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Assistance",
    text: "Direct support before ordering.",
  },
  {
    icon: Gift,
    title: "Premium Gifting",
    text: "A refined fragrance gift choice.",
  },
  {
    icon: PackageCheck,
    title: "Careful Packaging",
    text: "Presented with premium care.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#070707] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-[#7A1830]/14 blur-[170px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[4px] text-[#D4AF37] sm:text-xs sm:tracking-[5px]">
            Luxury Service, Just a Message Away
          </p>

          <h2 className="mt-4 font-heading text-3xl font-light sm:text-4xl lg:text-5xl">
            Orders & Contact
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Need help choosing a fragrance, placing an order or discussing a
            business opportunity? Connect directly with the BLOOMIQ team.
          </p>
        </motion.div>

        {/* Order panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#15100A] via-[#0B0B0B] to-[#170A0F] p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent" />

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2">
                <ShoppingBag size={15} className="text-[#D4AF37]" />

                <span className="text-[10px] uppercase tracking-[3px] text-[#D4AF37]">
                  Order Your Fragrance
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl font-light sm:text-3xl">
                BLOOMIQ Velvet Oud Royal
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
                Choose your preferred bottle and connect directly with our team
                for availability, delivery and order confirmation.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                <div className="rounded-full border border-[#D4AF37]/20 bg-black/30 px-4 py-2">
                  <span className="text-xs text-gray-400">30 ml</span>
                  <span className="ml-2 font-semibold text-white">₹459</span>
                </div>

                <div className="rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-2">
                  <span className="text-xs text-gray-400">50 ml</span>
                  <span className="ml-2 font-semibold text-white">₹599</span>
                </div>
              </div>

              <a
                href="https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20would%20like%20to%20order%20Velvet%20Oud%20Royal."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#CDA434] via-[#E4C562] to-[#CDA434] px-8 py-3.5 text-xs font-bold uppercase tracking-[1.5px] text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_32px_rgba(212,175,55,0.35)]"
              >
                <MessageCircle size={17} />
                Order on WhatsApp
              </a>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3">
              {orderBenefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="group rounded-2xl border border-[#D4AF37]/15 bg-white/[0.03] p-4 transition duration-300 hover:border-[#D4AF37]/35 hover:bg-[#D4AF37]/[0.04]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] transition duration-300 group-hover:scale-110">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <p className="mt-3 text-sm font-medium">{item.title}</p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "https://wa.me/916232132163",
              title: "WhatsApp",
              text: "Orders and customer assistance",
              label: "Start a conversation",
              icon: MessageCircle,
              external: true,
            },
            {
              href: "tel:+916232132163",
              title: "Call Us",
              text: "Speak directly with our team",
              label: "+91 62321 32163",
              icon: Phone,
            },
            {
              href: "mailto:hello@bloomiq.in",
              title: "Email",
              text: "Product and business enquiries",
              label: "hello@bloomiq.in",
              icon: Mail,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/[0.05]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition duration-300 group-hover:scale-110">
                  <Icon size={21} />
                </div>

                <h3 className="mt-4 text-base font-medium">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {item.text}
                </p>

                <p className="mt-3 break-all text-xs text-[#D4AF37]">
                  {item.label}
                </p>
              </motion.a>
            );
          })}

          <motion.a
            href="https://instagram.com/bloomiqluxury"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.21 }}
            className="group rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/[0.05]"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>

            <h3 className="mt-4 text-base font-medium">Instagram</h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Launches, updates and fragrance stories
            </p>

            <p className="mt-3 text-xs text-[#D4AF37]">@bloomiqluxury</p>
          </motion.a>
        </div>

        {/* Business enquiry */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-white/10 bg-white/[0.025] p-6 text-center backdrop-blur-md sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-[#D4AF37]">
              Retailers · Gifting · Collaborations
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Contact us for bulk orders, retail opportunities and brand
              collaborations.
            </p>
          </div>

          <a
            href="mailto:hello@bloomiq.in?subject=BLOOMIQ Business Enquiry"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-xs font-semibold uppercase tracking-[1.5px] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            <Mail size={16} />
            Business Enquiry
          </a>
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-600">
          <MapPin size={14} className="text-[#D4AF37]" />
          Proudly building BLOOMIQ in India
        </div>
      </div>
    </section>
  );
}