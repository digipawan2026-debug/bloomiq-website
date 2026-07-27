"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "916232132163";
  const message =
    "Hi, I’m interested in BLOOMIQ Velvet Oud Royal. Please share more details.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BLOOMIQ on WhatsApp"
      className="group fixed bottom-8 left-8 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-[#D4AF37]/30 bg-black/90 px-4 py-2 text-sm text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37] sm:block">
        Chat with us
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#E8C866]">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#D4AF37]/30" />

        <MessageCircle className="relative z-10" size={26} />
      </span>
    </a>
  );
}