"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useTransform, type MotionValue } from "framer-motion";
import { FrontlineFeature } from "@/components/erp/FrontlineFeature";
import { SupervisorFeature } from "@/components/erp/SupervisorFeature";
import { CopilotFeature } from "@/components/erp/CopilotFeature";

const SLIDES = [FrontlineFeature, SupervisorFeature, CopilotFeature];

// Desktop-only stacked-card effect, driven continuously off real scroll input
// rather than snapping to the next slide once a threshold is crossed. `progress`
// is a single motion value from 0 to SLIDES.length-1; every card's position is
// a pure function of it, computed by framer-motion's transform pipeline (no
// React re-render per wheel tick), so the stack tracks the wheel/trackpad 1:1.
const CARD_HEIGHT = 490;
const PEEK = 44;
const MAX_PROGRESS = SLIDES.length - 1;
const WHEEL_SENSITIVITY = 0.0035;
const BELOW = CARD_HEIGHT + PEEK * MAX_PROGRESS + 80;
const GHOST_OPACITY = 0.15;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function StackedCard({
  index,
  progress,
  Slide,
}: {
  index: number;
  progress: MotionValue<number>;
  Slide: React.ComponentType;
}) {
  // How "arrived" this card is: 0 while still below the fold, 1 once fully
  // settled at its peeking/front slot. Card 0 starts already revealed.
  const reveal = useTransform(progress, (p) => (index === 0 ? 1 : clamp(p - (index - 1), 0, 1)));
  const top = useTransform(reveal, (r) => BELOW + (PEEK * index - BELOW) * r);

  // Once the next card starts covering this one, fade it toward a faint
  // "ghost" rather than leaving it fully opaque underneath — otherwise its
  // text stays legible and reads as overlapping with the card in front while
  // mid-scroll, instead of a clean handoff. The last card has nothing to
  // fade for, so it stays fully visible once revealed.
  const opacity = useTransform([reveal, progress], (latest) => {
    const [r, p] = latest as [number, number];
    if (r <= 0) return 0;
    const nextReveal = index < SLIDES.length - 1 ? clamp(p - index, 0, 1) : 0;
    return 1 - nextReveal * (1 - GHOST_OPACITY);
  });

  return (
    <motion.div
      style={{ position: "absolute", left: 0, right: 0, top, opacity, zIndex: index }}
      className="rounded-2xl bg-background"
    >
      <div className="flex items-center" style={{ height: CARD_HEIGHT }}>
        <Slide />
      </div>
    </motion.div>
  );
}

export function FeatureCarousel() {
  const progress = useMotionValue(0);
  const [dotIndex, setDotIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeight = useTransform(progress, (p) => CARD_HEIGHT + PEEK * clamp(p, 0, MAX_PROGRESS));

  useMotionValueEvent(progress, "change", (v) => {
    setDotIndex(Math.round(v));
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function handleWheel(event: WheelEvent) {
      const current = progress.get();
      const next = clamp(current + event.deltaY * WHEEL_SENSITIVITY, 0, MAX_PROGRESS);

      // Only take over the scroll while it actually moves the stack —
      // otherwise let the page scroll normally past the carousel.
      if (next === current) return;
      event.preventDefault();
      progress.set(next);
    }

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [progress]);

  const CurrentSlide = SLIDES[dotIndex];

  return (
    <div ref={containerRef}>
      {/* Desktop: stacked cards, scroll-scrubbed in real time */}
      <motion.div className="relative hidden overflow-hidden md:block" style={{ height: containerHeight }}>
        {SLIDES.map((Slide, i) => (
          <StackedCard key={i} index={i} progress={progress} Slide={Slide} />
        ))}
      </motion.div>

      {/* Mobile: stacking doesn't fit a single column's variable height, so just show the current slide */}
      <div className="md:hidden">
        <CurrentSlide />
      </div>
    </div>
  );
}
