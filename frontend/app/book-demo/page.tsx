"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, LineChart, Mic, Quote, Sparkles } from "lucide-react";
import { MarketingHeader } from "@/components/layout/MarketingHeader";

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

const STATS = [
  { value: "3x", label: "Faster Resolution Times" },
  { value: "92%+", label: "First-Contact Resolution" },
  { value: "-30%", label: "Missed Follow-Ups" },
  { value: "2x", label: "Faster Rep Ramp-Up" },
];

const IN_ACTION = [
  {
    icon: <Mic className="h-5 w-5" />,
    title: "Voice & Chat Agents, Live in Minutes",
    body: "Spin up a conversational agent across voice, WhatsApp, and chat without waiting on an engineering sprint.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Real-Time Assist for Human Reps",
    body: "Give every rep next-best-actions, live sentiment, and the context they need, surfaced during the call itself.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Insights That Actually Close the Loop",
    body: "Turn every conversation into a trend, a coaching moment, or a product signal — automatically.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We went from sampling a handful of calls a week to seeing sentiment and resolution quality on every single one. It changed how we coach the team.",
    name: "Priya Nair",
    title: "VP, Customer Experience, Northwind Retail",
  },
  {
    quote:
      "Reps used to guess what to say next on a tricky call. Now the next-best-action just shows up, and ramp time for new hires has dropped by half.",
    name: "Marcus Webb",
    title: "Director of Support, Bluepeak Logistics",
  },
  {
    quote:
      "The follow-up reminders alone paid for the platform. We stopped losing deals to silence between the demo and the close.",
    name: "Ananya Rao",
    title: "Head of Growth, Solace Health",
  },
];

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MarketingHeader />

      {/* Hero + form */}
      <motion.section
        className="pt-32 pb-20 px-6"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs font-semibold tracking-widest text-primary uppercase">
              Support That Sounds Like It Actually Listened
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-gradient-heading">
              See Meridian Handle a Real Conversation, Live
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Book a short walkthrough with our team — we'll show Meridian answering, assisting, and analyzing
              on a conversation shaped around your actual use case, not a canned script.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-semibold">You're on the list</h2>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Someone from our team will reach out shortly to find a time that works for you.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name*
                  </label>
                  <input
                    id="fullName"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="workEmail" className="text-sm font-medium">
                    Work Email*
                  </label>
                  <input
                    id="workEmail"
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="text-sm font-medium">
                    Company Name*
                  </label>
                  <input
                    id="companyName"
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="text-sm font-medium">
                    Phone Number*
                  </label>
                  <input
                    id="phoneNumber"
                    required
                    type="tel"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="mt-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  Book My Demo
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <RevealSection className="py-16 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Trusted by Teams Who Used to Guess
          </div>
          <motion.div
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={cardVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-heading">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      {/* See it in action */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase">In Action</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">See Meridian In Action</h2>
          </div>
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {IN_ACTION.map(({ icon, title, body }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30"
              >
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

      {/* Testimonials */}
      <RevealSection className="py-20 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center text-xs font-semibold tracking-widest text-primary uppercase">
            Hear It From Our Customers
          </div>
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {TESTIMONIALS.map(({ quote, name, title }) => (
              <motion.div
                key={name}
                variants={cardVariants}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <Quote className="h-5 w-5 text-primary/50" />
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{quote}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs text-muted-foreground">{title}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      <footer className="py-8 px-6 border-t border-border text-center text-xs text-muted-foreground">
        Meridian — © 2026. All rights reserved.
      </footer>
    </div>
  );
}
