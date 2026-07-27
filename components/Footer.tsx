export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-black px-8 py-14 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-3xl font-light tracking-[8px] text-white">
            BLOOMIQ
          </h2>

          <p className="mt-4 text-sm uppercase tracking-[4px] text-[#D4AF37]">
            Luxury Within Reach
          </p>

          <p className="mt-6 max-w-sm leading-8 text-gray-500">
            Premium fragrance created for men and women who value timeless
            elegance and unforgettable presence.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
            Explore
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>

            <a href="#collection" className="transition hover:text-white">
              Collection
            </a>

            <a href="#story" className="transition hover:text-white">
              Our Story
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

            <a
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/shipping-policy"
              className="transition hover:text-white"
            >
              Shipping Policy
            </a>

            <a
              href="/refund-policy"
              className="transition hover:text-white"
            >
              Refund Policy
            </a>

            <a href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
            Order & Contact
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">
            <a
  href="https://wa.me/916232132163"
  target="_blank"
  rel="noreferrer"
  className="transition hover:text-white"
>
  WhatsApp: +91 62321 32163
</a>
            <a
  href="mailto:hello@bloomiq.in"
  className="transition hover:text-white"
>
  Email: hello@bloomiq.in
</a>
<a
  href="https://instagram.com/bloomiqluxury"
  target="_blank"
  rel="noreferrer"
  className="transition hover:text-white"
>
  Instagram: @bloomiqluxury
</a>

            <p>Velvet Oud 30 ml — ₹459</p>
            <p>Velvet Oud 50 ml — ₹599</p>

            <a
              href="#"
              className="mt-3 inline-flex w-fit items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-[#e7c75a]"
            >
              Buy on Amazon →
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 text-center text-sm text-gray-600">
        © 2026 BLOOMIQ™. All Rights Reserved.
      </div>
    </footer>
  );
}