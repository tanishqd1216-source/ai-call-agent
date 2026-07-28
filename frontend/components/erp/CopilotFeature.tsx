import { Bot, Check, Headphones, User, Zap } from "lucide-react";

const FEATURES = [
  "Live Call Assist",
  "Context Carried From Every Session",
  "Real-Time Compliance Checks",
  "Instant Rebuttal Suggestions",
  "No Knowledge Blind Spots",
];

const TAGS = ["Pre-Conversation", "Live-Conversation", "Post-Conversation"];

function SentimentGauge({ value }: { value: number }) {
  const theta = ((180 - (value / 100) * 180) * Math.PI) / 180;
  const nx = 50 + 38 * Math.cos(theta);
  const ny = 50 - 38 * Math.sin(theta);

  return (
    <div className="relative h-12 w-14 shrink-0">
      <svg viewBox="0 0 100 55" className="h-full w-full" aria-hidden="true">
        <path d="M8,50 A42,42 0 0,1 34,10" stroke="#ef4444" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M34,10 A42,42 0 0,1 66,10" stroke="#f59e0b" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M66,10 A42,42 0 0,1 92,50" stroke="#22c55e" strokeWidth="9" fill="none" strokeLinecap="round" />
        <line x1="50" y1="50" x2={nx} y2={ny} stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="3.5" fill="#111827" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 text-center text-[10px] font-bold text-neutral-800">{value}</div>
    </div>
  );
}

export function CopilotFeature() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-xs font-semibold tracking-widest text-primary uppercase">The Co-Pilot</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gradient-heading">
          Copilot AI Agent
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
          Real-time assistance that listens alongside your human agents, instantly surfacing the
          next best action and the context they need — so resolutions happen in seconds, not
          after a search.
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
        <div className="flex justify-end">
          <div className="flex items-start gap-2 max-w-[85%]">
            <div className="rounded-lg bg-neutral-100 text-neutral-800 px-3 py-2 text-[11px] leading-snug shadow-sm">
              I want a return for my shoe, it&apos;s damaged
            </div>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 ring-2 ring-background">
              <User className="h-3.5 w-3.5 text-white" />
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 ring-2 ring-background">
            <Bot className="h-3.5 w-3.5 text-white" />
          </span>
          <div className="rounded-lg bg-primary/10 px-3 py-2 text-[11px] leading-snug text-foreground/90">
            Got it — connecting you with a specialist now
          </div>
        </div>

        <div className="mx-auto h-3 border-l-2 border-dashed border-border" />

        <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm flex items-center gap-3">
          <SentimentGauge value={15} />
          <div className="flex-1 text-[10px] text-neutral-500">
            <div className="text-[10px] font-semibold text-neutral-800 uppercase tracking-wide">
              Call Summary
            </div>
            <div className="mt-1.5 grid grid-cols-[auto,1fr] gap-x-2 gap-y-1">
              <span>Order ID</span>
              <span className="text-neutral-800">#234311AFS</span>
              <span>Product</span>
              <span className="text-neutral-800">Running Shoe</span>
              <span>Return</span>
              <span className="font-medium text-emerald-600">Eligible</span>
              <span>Reason</span>
              <span className="text-neutral-800">Size Mismatch</span>
            </div>
          </div>
        </div>

        <div className="mx-auto h-3 border-l-2 border-dashed border-border" />

        <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-3 text-white shadow-lg">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide opacity-90">
            <Zap className="h-3 w-3" />
            Next Best Action
          </div>
          <p className="mt-1 text-xs leading-snug">
            Offer an instant exchange with <span className="font-semibold">₹200 bonus credit</span>
          </p>
        </div>

        <div className="mx-auto h-3 border-l-2 border-dashed border-border" />

        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 ring-2 ring-background">
            <Headphones className="h-3.5 w-3.5 text-white" />
          </span>
          <div className="max-w-[85%] rounded-lg bg-white px-3 py-2 text-[11px] leading-snug text-neutral-800 shadow-sm">
            Pickup is booked for tomorrow, and ₹200 credit has been added to your account.
          </div>
        </div>
      </div>
    </div>
  );
}
