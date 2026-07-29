"use client";

import { MotionConfig } from "framer-motion";

// Applies the visitor's OS-level "reduce motion" preference to every
// framer-motion animation in the app (fade-ups, stagger, hover/tap/focus
// springs) without each component having to check it individually.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
