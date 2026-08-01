"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "#collection" },
  { name: "Story", href: "#story" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#D4AF37]/20 bg-black/90 backdrop-blur-xl"
          : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="BLOOMIQ"
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-10" : "h-12"
              }`}
            />

            <div>
              <h2 className="text-xl tracking-[5px] text-white">BLOOMIQ</h2>

              <p className="hidden text-[10px] uppercase tracking-[3px] text-[#D4AF37] sm:block">
                Luxury Perfumes
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[3px] lg:flex">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 transition hover:text-[#D4AF37]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop shop button */}
          <a
            href="#collection"
            className="hidden rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#E8C866] sm:inline-block"
          >
            Shop Now
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-[#D4AF37]/20 pb-6 pt-2 lg:hidden">
            <nav className="mt-4 flex flex-col gap-5">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="uppercase tracking-[3px] text-gray-300 transition hover:text-[#D4AF37]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#collection"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[#D4AF37] px-6 py-3 text-center font-semibold text-black"
              >
                Shop Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}