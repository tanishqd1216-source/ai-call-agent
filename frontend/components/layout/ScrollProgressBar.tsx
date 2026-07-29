"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Thin accent line at the very top of the viewport tracking page-scroll
// progress — sits above the header (z-50 vs. its z-40) on every page.
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-50 h-0.5 origin-left bg-primary"
    />
  );
}
