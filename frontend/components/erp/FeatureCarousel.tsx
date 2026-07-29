"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FrontlineFeature } from "@/components/erp/FrontlineFeature";
import { SupervisorFeature } from "@/components/erp/SupervisorFeature";
import { CopilotFeature } from "@/components/erp/CopilotFeature";

const SLIDES = [FrontlineFeature, SupervisorFeature, CopilotFeature];

// Desktop-only stacked-card effect, driven by real page scroll via framer-motion's
// `useScroll` rather than an intercepted wheel event. The section pins itself with
// `position: sticky` for one scroll "run", and every card's position/opacity is a
// pure function of scrollYProgress computed through the transform pipeline (no
// React re-render per scroll tick) — so pacing is identical across mouse wheel,
// trackpad, touch, and keyboard scrolling instead of varying with raw wheel delta.
const CARD_HEIGHT = 490;
const PEEK = 44;
const MAX_PROGRESS = SLIDES.length - 1;
const SCROLL_RUN_VH = 70; // scroll distance spent transitioning between each pair of cards
const GHOST_OPACITY = 0.15;
const PANEL_PADDING = 48; // matches the desktop p-12 the panel previously got from its page wrapper

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
  const below = CARD_HEIGHT + PEEK * MAX_PROGRESS + 80;
  const top = useTransform(reveal, (r) => below + (PEEK * index - below) * r);

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

// Which of the stacked cards is currently in front, synced to the same
// scroll-driven `progress` value the cards themselves use.
function ProgressDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const active = useTransform(progress, (p) => Math.round(clamp(p, 0, MAX_PROGRESS)) === index);
  const scale = useTransform(() => (active.get() ? 1 : 0.6));
  const opacity = useTransform(() => (active.get() ? 1 : 0.35));
  return <motion.span style={{ scale, opacity }} className="h-1.5 w-1.5 rounded-full bg-primary" />;
}

export function FeatureCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, MAX_PROGRESS]);

  const stickyHeight = CARD_HEIGHT + PEEK * MAX_PROGRESS + PANEL_PADDING * 2;

  return (
    <>
      {/* Desktop: pinned section, stacked cards scrubbed against real scroll.
          The sticky wrapper is exactly h-screen/top-0 (not the glass panel's
          own, much smaller, fixed height) — position:sticky only releases
          once its OWN rendered box runs out of room in its parent, and that
          box's height has to equal the viewport for the release point to
          land exactly where scrollYProgress reports "fully scrolled
          through". With a fixed pixel sticky height instead, the release
          point drifts with the visitor's actual window height: on a short
          enough viewport it fires before the last card even finishes
          revealing, which read as the card "going out of screen" / a gap of
          empty space before Use Cases. The visible glass panel is now
          centered inside the full-height wrapper instead of being the
          sticky element itself, so its release point is viewport-exact
          regardless of window size. */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: `calc(${SCROLL_RUN_VH * MAX_PROGRESS}vh + 100vh)` }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div
            className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md"
            style={{ height: stickyHeight, padding: PANEL_PADDING }}
          >
            <div className="relative h-full">
              {SLIDES.map((Slide, i) => (
                <StackedCard key={i} index={i} progress={progress} Slide={Slide} />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-2">
                {SLIDES.map((_, i) => (
                  <ProgressDot key={i} index={i} progress={progress} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacking doesn't fit a single column's variable height, and touch
          scrolling never fired the old wheel listener anyway — so lay every card
          out in normal flow instead of freezing on the first slide. */}
      <div className="flex flex-col gap-6 md:hidden">
        {SLIDES.map((Slide, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md"
          >
            <Slide />
          </div>
        ))}
      </div>
    </>
  );
}
