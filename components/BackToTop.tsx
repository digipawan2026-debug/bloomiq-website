"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-xl transition hover:scale-110"
      aria-label="Back to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}