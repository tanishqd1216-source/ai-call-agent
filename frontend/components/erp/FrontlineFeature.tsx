import { ArrowLeft, BadgeCheck, Bot, Camera, Check, Mail, MessageCircle, MoreVertical, Package, Phone, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Multi-Session Context Retention",
  "Sub-second Voice Latency",
  "Natural Interruption Handling",
  "Adaptive Tonalities",
];

const TAGS = ["Voice AI Agent", "Chat AI Agent", "WhatsApp AI Agent", "Email AI Agent", "Social Media AI Agent"];

const CHANNEL_ICONS = [
  { Icon: MessageCircle, color: "#22c55e", lift: "translate-y-0" },
  { Icon: Phone, color: "#3b82f6", lift: "-translate-y-1.5" },
  { Icon: Mail, color: "#2563eb", lift: "-translate-y-3" },
  { Icon: MessageCircle, color: "#8b5cf6", lift: "-translate-y-1.5" },
  { Icon: Camera, color: "#ec4899", lift: "translate-y-0" },
];

const THOUGHT_STEPS = ["Intent Identification", "Search Knowledge", "Take Action"];

function Waveform({ color, align = "left" }: { color: string; align?: "left" | "right" }) {
  const bars = [3, 6, 5, 8, 5, 7, 4];
  return (
    <div
      className={cn("flex items-end gap-0.5 h-3", align === "right" && "justify-end")}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-0.5 rounded-full"
          style={{ height: `${h}px`, backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export function FrontlineFeature() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-xs font-semibold tracking-widest text-primary uppercase">
          The Frontline
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gradient-heading">
          Conversational AI Agent
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
          Autonomous, multilingual AI agents that execute workflows across voice, WhatsApp, and
          email 24/7 — preserving context across sessions, powered by your knowledge.
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-foreground/90">
              <Check className="h-4 w-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
          {TAGS.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              {tag}
              {i < TAGS.length - 1 && <span className="text-border">|</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
        <div className="relative flex items-end justify-between">
          <svg
            className="absolute left-5 right-5 top-1 h-10 w-[calc(100%-2.5rem)]"
            viewBox="0 0 300 60"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0,55 C70,-15 230,-15 300,55" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          </svg>

          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 ring-2 ring-background shadow">
            <User className="h-5 w-5 text-white" />
          </span>

          <div className="relative z-10 flex items-end gap-2 pb-0.5">
            {CHANNEL_ICONS.map(({ Icon, color, lift }, i) => (
              <span
                key={i}
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5 transition-transform",
                  lift,
                )}
              >
                <Icon className="h-3 w-3" style={{ color }} />
              </span>
            ))}
          </div>

          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 ring-2 ring-background shadow">
            <Bot className="h-5 w-5 text-white" />
          </span>
        </div>

        <div className="flex items-start justify-between gap-3 text-xs text-foreground/80">
          <div className="max-w-[48%] flex flex-col gap-1">
            <Waveform color="#a78bfa" />
            <p>Damaged product</p>
          </div>
          <div className="max-w-[48%] flex flex-col gap-1 items-end text-right">
            <Waveform color="#f472b6" align="right" />
            <p>Send a photo on WhatsApp</p>
          </div>
        </div>

        <div className="mx-auto h-4 border-l-2 border-dashed border-border" />

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
              <Sparkles className="h-3.5 w-3.5 text-purple-500" />
              AI Thought Process
            </div>
            <ul className="mt-2 flex flex-col gap-1.5">
              {THOUGHT_STEPS.map((step) => (
                <li key={step} className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                  <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-purple-500">
                    <Check className="h-2 w-2 text-white" />
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col">
            <div className="flex items-center gap-1.5 px-2 py-1.5 border-b border-neutral-200">
              <ArrowLeft className="h-3 w-3 text-neutral-400" />
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500">
                <Bot className="h-2.5 w-2.5 text-white" />
              </span>
              <span className="text-[11px] font-semibold text-neutral-800">Zena</span>
              <BadgeCheck className="h-3 w-3 text-sky-500" />
              <MoreVertical className="ml-auto h-3 w-3 text-neutral-400" />
            </div>

            <div className="p-2 flex flex-col gap-1.5">
              <div className="ml-auto max-w-[85%] rounded-lg bg-neutral-100 overflow-hidden">
                <div className="flex h-12 items-center justify-center bg-neutral-200 text-neutral-400">
                  <Package className="h-5 w-5" />
                </div>
                <p className="px-1.5 py-1 text-[10px] text-neutral-700">Box arrived broken</p>
              </div>
              <div className="max-w-[85%] rounded-lg bg-purple-50 px-1.5 py-1 text-[10px] text-neutral-700">
                Sorry about that — use code <span className="font-semibold">PR434332</span> for
                40% off
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
