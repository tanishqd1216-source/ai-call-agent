"use client";

import { motion, type Variants } from "framer-motion";
import { Lock, MessagesSquare, Target, Users } from "lucide-react";
import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

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

const VALUES = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Accuracy Over Confidence",
    body: "An agent that's unsure should say so, not guess convincingly. We'd rather escalate than fabricate.",
  },
  {
    icon: <MessagesSquare className="h-5 w-5" />,
    title: "Built for the Whole Conversation",
    body: "A good answer to the wrong question isn't helpful. Every agent we build listens to the whole context, not just the last message.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Humans Stay in the Loop",
    body: "Automation should free people for the conversations that need them, not replace judgment entirely.",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Privacy Isn't Optional",
    body: "Customer data is handled with the same care we'd want for our own, by default, not as an afterthought.",
  },
];

const STATS = [
  { value: "2026", label: "Founded" },
  { value: "1M+", label: "Conversations handled" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Support and monitoring" },
];

export default function AboutUsPage() {
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
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">About Meridian</div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gradient-heading">
            We Think Every Conversation Deserves a Real Answer
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Meridian builds AI agents that talk, listen, and act like they actually understand the person on the
            other end — not because it's a nice idea, but because anything less doesn't hold up at scale.
          </p>
        </div>
      </motion.section>

      {/* Story */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Our Story</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">Why We Started Meridian</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We built Meridian because we kept running into the same problem from both sides of the phone:
            businesses that wanted to be responsive to every customer, and customers who just wanted an answer
            without waiting on hold. Off-the-shelf chatbots and rigid IVR trees solved neither.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            So we built something different — an agent that actually carries a conversation, remembers what was
            said, and can take real action instead of just talking about it. Today, Meridian handles conversations
            for teams who used to choose between speed and quality. We think they shouldn't have to.
          </p>
        </div>
      </RevealSection>

      {/* Values */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase">What We Believe</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">What Actually Guides How We Build</h2>
          </div>
          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {VALUES.map(({ icon, title, body }) => (
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

      {/* Stats */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase">Meridian in Numbers</div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">A Quick Look at Where We Stand</h2>
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={cardVariants}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-heading">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* Final CTA */}
      <RevealSection className="py-24 px-6 border-t border-border text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-heading">
          Want to See It in Action?
        </h2>
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
