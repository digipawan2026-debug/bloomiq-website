import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#070707] py-24 text-white"
    >
      {/* Background effects */}

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#7A1830]/15 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-20">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[6px] text-[#D4AF37]">
            We Would Love To Hear From You
          </p>

          <h2 className="font-heading mt-5 text-4xl font-light sm:text-5xl lg:text-6xl">
            Contact BLOOMIQ
          </h2>

          <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mt-7 text-base leading-8 text-gray-400 sm:text-lg">
            Have a product question, bulk-order enquiry or collaboration idea?
            Connect with our team and we will assist you.
          </p>
        </div>

        {/* Contact cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://wa.me/916232132163"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/[0.06]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
              <MessageCircle size={24} />
            </div>

            <h3 className="mt-5 text-lg font-medium">WhatsApp</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Chat with our customer-support team.
            </p>

            <p className="mt-4 text-sm text-[#D4AF37]">Start a conversation</p>
          </a>

          <a
            href="mailto:hello@bloomiq.in"
            className="group rounded-3xl border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/[0.06]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
              <Mail size={24} />
            </div>

            <h3 className="mt-5 text-lg font-medium">Email</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Send us your product or business enquiry.
            </p>

            <p className="mt-4 break-all text-sm text-[#D4AF37]">
              hello@bloomiq.in
            </p>
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/[0.06]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
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

            <h3 className="mt-5 text-lg font-medium">Instagram</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Follow our fragrance launches and updates.
            </p>

            <p className="mt-4 text-sm text-[#D4AF37]">Follow BLOOMIQLUXURY</p>
          </a>

          <div className="rounded-3xl border border-[#D4AF37]/15 bg-white/[0.03] p-7 text-center backdrop-blur-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
              <MapPin size={24} />
            </div>

            <h3 className="mt-5 text-lg font-medium">Location</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Proudly building our fragrance brand in India.
            </p>

            <p className="mt-4 text-sm text-[#D4AF37]">India</p>
          </div>
        </div>

        {/* Business enquiry panel */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#15100A] via-[#0B0B0B] to-[#170A0F] p-8 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs uppercase tracking-[4px] text-[#D4AF37]">
                Retailers · Gifting · Collaborations
              </p>

              <h3 className="font-heading mt-3 text-3xl font-light">
                Interested in working with BLOOMIQ?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Contact us for bulk gifting, retail opportunities, influencer
                partnerships and brand collaborations.
              </p>
            </div>

            <a
              href="mailto:hello@bloomiq.in?subject=BLOOMIQ Business Enquiry"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8C866] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <Phone size={18} />
              Business Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}