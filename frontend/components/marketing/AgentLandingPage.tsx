"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

// `icon` is a pre-rendered element (e.g. `<Zap className="h-5 w-5" />`), not a
// component reference — component types can't cross the Server/Client
// boundary since this template is a Client Component (needed for motion),
// but a rendered React element can.
export type Problem = { icon: ReactNode; title: string; body: string };
export type FeatureBlock = { eyebrow: string; title: string; body: string; checks: string[] };
export type UseCase = { icon: ReactNode; tag: string; title: string; body: string };
export type Stat = { value: string; label: string };
export type RelatedItem = { icon: ReactNode; title: string; tagline: string };

export type AgentLandingPageProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  trustLine?: string;
  problemHeading: string;
  problems: Problem[];
  whyHeading: string;
  featureBlocks: FeatureBlock[];
  useCasesHeading: string;
  useCases: UseCase[];
  statsHeading: string;
  stats: Stat[];
  relatedHeading?: string;
  relatedItems?: RelatedItem[];
  ctaHeading: string;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const cardClassName =
  "rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30";
const smallCardClassName =
  "rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30";

function RevealSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}

export function AgentLandingPage({
  eyebrow,
  headline,
  subheadline,
  trustLine,
  problemHeading,
  problems,
  whyHeading,
  featureBlocks,
  useCasesHeading,
  useCases,
  statsHeading,
  stats,
  relatedHeading,
  relatedItems,
  ctaHeading,
}: AgentLandingPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingHeader />

      {/* Hero */}
      <motion.section
        className="pt-32 pb-20 px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">{eyebrow}</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gradient-heading">
            {headline}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subheadline}</p>
          <div className="mt-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
            >
              Book a Demo
            </motion.button>
          </div>
          {trustLine && (
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{trustLine}</p>
          )}
        </div>
      </motion.section>

      {/* Problem */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase">The Problem</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{problemHeading}</h2>
          </div>
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {problems.map(({ icon, title, body }) => (
              <motion.div key={title} variants={cardVariants} className={cardClassName}>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {icon}
                </span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* Why Meridian */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase">Why Meridian</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{whyHeading}</h2>
          </div>
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {featureBlocks.map((block) => (
              <motion.div key={block.eyebrow} variants={cardVariants} className={cardClassName}>
                <div className="text-[11px] font-semibold tracking-widest text-primary uppercase">
                  {block.eyebrow}
                </div>
                <h3 className="mt-2 font-semibold">{block.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{block.body}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {block.checks.map((check) => (
                    <li key={check} className="flex items-start gap-2 text-xs text-foreground/80">
                      <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary" />
                      {check}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* Use cases */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{useCasesHeading}</h2>
          </div>
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {useCases.map(({ icon, tag, title, body }) => (
              <motion.div key={title} variants={cardVariants} className={smallCardClassName}>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {icon}
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* Impact / stats */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Impact</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{statsHeading}</h2>
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={cardVariants}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-heading">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* Related */}
      {relatedItems && relatedItems.length > 0 && (
        <RevealSection className="py-20 px-6 border-t border-border">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{relatedHeading}</h2>
            </div>
            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {relatedItems.map(({ icon, title, tagline }) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  className={`${smallCardClassName} flex items-start gap-3`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 text-white">
                    {icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{tagline}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealSection>
      )}

      {/* Final CTA */}
      <RevealSection className="py-24 px-6 border-t border-border text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-heading">{ctaHeading}</h2>
        <div className="mt-6">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Book a Demo
          </motion.button>
        </div>
      </RevealSection>

      <MarketingFooter />
    </div>
  );
}
