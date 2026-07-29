"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { AmbientGlow } from "@/components/marketing/AmbientGlow";
import {
  Award,
  MessagesSquare,
  PhoneIncoming,
  Rocket,
  Smile,
  Target,
  TrendingUp,
  TriangleAlert,
  Wallet,
} from "lucide-react";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const USE_CASES = [
  {
    icon: TrendingUp,
    color: "blue",
    title: "Sales",
    blurb: "Engages every lead instantly and hands off only the ones worth a call.",
    href: "/use-cases/sales",
  },
  {
    icon: Target,
    color: "amber",
    title: "Lead Scoring",
    blurb: "Scores every lead the moment they engage, so reps call the right ones first.",
    href: "/use-cases/lead-scoring",
  },
  {
    icon: Rocket,
    color: "emerald",
    title: "Onboarding",
    blurb: "Guides new customers to their first win with proactive check-ins and nudges.",
    href: "/use-cases/onboarding",
  },
  {
    icon: PhoneIncoming,
    color: "cyan",
    title: "Inbound",
    blurb: "Routes and resolves inbound requests across voice, chat, and email — no queue.",
    href: "/use-cases/inbound",
  },
  {
    icon: TriangleAlert,
    color: "rose",
    title: "Escalation Monitoring",
    blurb: "Flags frustration and risk signals live, before a call becomes a complaint.",
    href: "/use-cases/escalation-monitoring",
  },
  {
    icon: Wallet,
    color: "orange",
    title: "Collections",
    blurb: "Sends reminders and negotiates repayment with a tone that adapts to the customer.",
    href: "/use-cases/collections",
  },
  {
    icon: Smile,
    color: "fuchsia",
    title: "Sentiment Analysis",
    blurb: "Reads tone and emotion across 100% of calls, not just a sampled slice.",
    href: "/use-cases/sentiment-analysis",
  },
  {
    icon: Award,
    color: "teal",
    title: "Agent Performance",
    blurb: "Scores every call against your rubric and hands coaches the exact moment to review.",
    href: "/use-cases/agent-performance",
  },
  {
    icon: MessagesSquare,
    color: "sky",
    title: "Voice of Customer",
    blurb: "Turns every conversation into structured signal for product and business decisions.",
    href: "/use-cases/voice-of-customer",
  },
] as const;

const BADGE_CLASSES: Record<(typeof USE_CASES)[number]["color"], string> = {
  blue: "bg-blue-500/15 text-blue-400",
  amber: "bg-amber-500/15 text-amber-400",
  emerald: "bg-emerald-500/15 text-emerald-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  rose: "bg-rose-500/15 text-rose-400",
  orange: "bg-orange-500/15 text-orange-400",
  fuchsia: "bg-fuchsia-500/15 text-fuchsia-400",
  teal: "bg-teal-500/15 text-teal-400",
  sky: "bg-sky-500/15 text-sky-400",
};

export function UseCasesGrid() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AmbientGlow className="bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Use Cases</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-gradient-heading">
            Built for Every Conversation That Matters
          </h2>
          <p className="mt-3 text-muted-foreground">
            One platform, deployed wherever a conversation drives the outcome.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {USE_CASES.map(({ icon: Icon, color, title, blurb, href }) => (
            <motion.div key={title} variants={cardVariants}>
              <Link
                href={href}
                className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_28px_-8px_rgba(191,128,255,0.35)]"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${BADGE_CLASSES[color]}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{blurb}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
