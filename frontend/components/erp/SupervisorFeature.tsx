import { MessageCircle, User, Zap } from "lucide-react";

const FEATURES = [
  "Performance Management AI",
  "Voice of Customer Extraction",
  "Sales Objection Analysis",
  "Automated Quality Scoring",
];

function AgentBubble({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-1.5 max-w-[220px]">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/80">
        <MessageCircle className="h-3 w-3 text-white" />
      </span>
      <p className="rounded-lg bg-white/10 px-2 py-1.5 text-[10px] leading-relaxed text-foreground/70">
        {text}
      </p>
    </div>
  );
}

function CustomerCard({
  name,
  time,
  message,
  highlights,
  tag,
  className,
}: {
  name: string;
  time: string;
  message: string;
  highlights: string[];
  tag: string;
  className?: string;
}) {
  const parts = message.split(new RegExp(`(${highlights.join("|")})`, "g"));
  return (
    <div className={className}>
      <div className="relative w-48 rounded-lg bg-white text-neutral-900 shadow-2xl p-3">
        <div className="flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1 font-semibold text-neutral-800">
            <User className="h-3 w-3 text-neutral-400" />
            {name}
          </span>
          <span className="text-neutral-400">{time}</span>
        </div>
        <p className="mt-1.5 text-xs leading-snug">
          {parts.map((part, i) =>
            highlights.includes(part) ? (
              <mark key={i} className="bg-yellow-300 px-0.5">
                {part}
              </mark>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
        <span className="absolute -bottom-2.5 right-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-2 py-0.5 text-[10px] font-medium text-white shadow-lg">
          <Zap className="h-2.5 w-2.5" />
          {tag}
        </span>
      </div>
    </div>
  );
}

export function SupervisorFeature() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-xs font-semibold tracking-widest text-primary uppercase">
          The Genius Assistant
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gradient-heading">
          Supervisor AI Agent
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
          A single source of truth for conversation quality — reviewing 100% of human and AI
          interactions to surface sentiment, compliance risk, and resolution gaps.
        </p>
        <ul className="mt-6 flex flex-col gap-3">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-foreground/90">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-[240px] max-w-sm mx-auto w-full overflow-hidden rounded-xl">
        <div className="flex flex-col gap-3 p-4 opacity-50">
          <AgentBubble text="Thanks for calling support — how can I help today?" />
          <div className="h-8" />
          <AgentBubble text="Sorry about that — could you share your order number?" />
        </div>

        <CustomerCard
          name="Customer#1"
          time="0:03-0:08"
          message="How quick can you make this delivery time?"
          highlights={["quick", "delivery time"]}
          tag="High Intent"
          className="absolute top-5 right-6"
        />

        <CustomerCard
          name="Customer#2"
          time="0:35-0:40"
          message="Is this shoe available in Blue colour?"
          highlights={["available in Blue"]}
          tag="Product Demand"
          className="absolute bottom-4 left-1"
        />
      </div>
    </div>
  );
}
