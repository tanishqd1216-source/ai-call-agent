"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 300, damping: 20, mass: 0.5 };
const PULL = 0.35;

export function MagneticLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * PULL);
    y.set((event.clientY - rect.top - rect.height / 2) * PULL);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link href={href} className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {children}
      </Link>
    </motion.div>
  );
}
