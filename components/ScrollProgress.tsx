"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-gradient-to-r from-[#D4AF37] via-[#F4E2A1] to-[#D4AF37]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}