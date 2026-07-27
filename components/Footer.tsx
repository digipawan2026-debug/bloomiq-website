"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Why BLOOMIQ", href: "#why-bloomiq" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-black px-5 py-16 text-white sm:px-8 lg:px-16">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -bottom-44 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <h2 className="font-heading text-3xl font-light tracking-[7px]">
              BLOOMIQ
              <sup className="ml-1 align-top text-[8px] tracking-normal text-[#D4AF37]">
                ™
              </sup>
            </h2>

            <p className="mt-3 text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Luxury Within Reach
            </p>

            <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Premium unisex fragrance crafted for timeless elegance,
              confidence and unforgettable presence.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/916232132163"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact BLOOMIQ on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-white/[0.025] text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="mailto:hello@bloomiq.in"
                aria-label="Email BLOOMIQ"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-white/[0.025] text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.instagram.com/bloomiqluxury/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BLOOMIQ on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-white/[0.025] text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Customer Care
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[4px] text-[#D4AF37]">
              Order & Contact
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="https://wa.me/916232132163"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-gray-500 transition hover:text-white"
              >
                <MessageCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />
                <span>WhatsApp: +91 62321 32163</span>
              </a>

              <a
                href="mailto:hello@bloomiq.in"
                className="flex items-start gap-3 text-sm leading-6 text-gray-500 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />
                <span className="break-all">hello@bloomiq.in</span>
              </a>

              <a
                href="https://www.instagram.com/bloomiqluxury/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-gray-500 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>

                <span>@bloomiqluxury</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-gray-500">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />
                <span>India</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400">
                30 ml · ₹459
              </span>

              <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1.5 text-xs text-[#D4AF37]">
                50 ml · ₹599
              </span>
            </div>

            <a
              href="https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20would%20like%20to%20order%20Velvet%20Oud%20Royal."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#CDA434] via-[#E4C562] to-[#CDA434] px-6 py-3 text-xs font-bold uppercase tracking-[1.2px] text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_28px_rgba(212,175,55,0.32)]"
            >
              <ShoppingBag size={16} />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-600 sm:flex-row sm:text-left">
            <p>© 2026 BLOOMIQ™. All Rights Reserved.</p>

            <p>Velvet Oud Royal · Premium Unisex Eau De Parfum</p>
          </div>
        </div>
      </div>
    </footer>
  );
}