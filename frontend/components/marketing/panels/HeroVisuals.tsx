"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AmbientGlow } from "@/components/marketing/AmbientGlow";

// Shared building blocks for per-page hero illustrative panels. Layout
// primitives only — page-specific copy and composition live in each page.tsx.

export function HeroPanelFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-md lg:max-w-none ${className ?? ""}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <AmbientGlow className="-top-16 -right-10 h-64 w-64" />
      </div>
      {children}
    </div>
  );
}

export function PanelShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      className={`relative rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-black/40 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

const FLOAT_POSITIONS = {
  "bottom-right": "-bottom-5 -right-5",
  "bottom-left": "-bottom-5 -left-5",
  "top-right": "-top-5 -right-5",
  "top-left": "-top-5 -left-5",
} as const;

export function FloatingSubCard({
  children,
  className,
  position = "bottom-right",
}: {
  children: ReactNode;
  className?: string;
  position?: keyof typeof FLOAT_POSITIONS;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      className={`absolute z-10 rounded-xl border border-border bg-surface/95 p-3 shadow-xl backdrop-blur-md ${FLOAT_POSITIONS[position]} ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export function PanelHeader({ title, status }: { title: string; status?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3">
      <span className="text-xs font-semibold text-foreground/90">{title}</span>
      {status && (
        <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {status}
        </span>
      )}
    </div>
  );
}

export function ChatBubble({
  from = "agent",
  children,
  label,
}: {
  from?: "agent" | "user";
  children: ReactNode;
  label?: string;
}) {
  const isAgent = from === "agent";
  return (
    <div className={`flex items-start gap-2 ${isAgent ? "" : "flex-row-reverse text-right"}`}>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
          isAgent ? "bg-primary/15 text-primary" : "bg-white/10 text-foreground/70"
        }`}
      >
        {isAgent ? "AI" : "C"}
      </span>
      <div>
        {label && <div className="mb-1 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>}
        <div
          className={`max-w-[210px] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
            isAgent
              ? "rounded-tl-sm bg-primary/10 text-foreground/90"
              : "rounded-tr-sm bg-white/5 text-foreground/80"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-3">
      <div className="text-lg font-bold text-gradient-heading">{value}</div>
      <div className="mt-0.5 text-[10px] text-muted-foreground">{label}</div>
    </div>
  );
}

export function ScoreBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5">
      <span className="text-sm font-bold text-primary">{value}</span>
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </div>
  );
}

export function ChecklistItem({ label, done = true }: { label: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-xs text-foreground/80">
      <Check className={`h-3.5 w-3.5 shrink-0 ${done ? "text-primary" : "text-muted-foreground/40"}`} />
      {label}
    </div>
  );
}

export function FlowNode({
  title,
  subtitle,
  active = false,
  icon,
}: {
  title: string;
  subtitle?: string;
  active?: boolean;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs ${
        active ? "border-primary/50 bg-primary/10 text-foreground" : "border-border bg-background/40 text-foreground/80"
      }`}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <div>
        <div className="font-medium">{title}</div>
        {subtitle && <div className="text-[10px] text-muted-foreground">{subtitle}</div>}
      </div>
    </div>
  );
}

export function FlowConnector({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 pl-4">
      <div className="h-4 w-px bg-border" />
      {label && <span className="text-[10px] text-muted-foreground">{label}</span>}
    </div>
  );
}

export function PipelineStepper({ steps, currentIndex }: { steps: string[]; currentIndex: number }) {
  return (
    <div className="flex items-start">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 items-center last:flex-none">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
                i <= currentIndex ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`max-w-[70px] text-center text-[9px] leading-tight ${
                i <= currentIndex ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`mx-1 mb-4 h-px flex-1 ${i < currentIndex ? "bg-primary" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export function FileTypeIcon({ label, colorClass }: { label: string; colorClass: string }) {
  return (
    <span className={`flex h-8 w-10 items-center justify-center rounded-md text-[10px] font-bold ${colorClass}`}>
      {label}
    </span>
  );
}
