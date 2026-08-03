import { Mic, Terminal, Volume2 } from "lucide-react";

const ICONS = { cli: Terminal, stt: Mic, tts: Volume2 } as const;

export type HeroVisualVariant = keyof typeof ICONS;

const EQ_DELAYS = [-0.9, -0.6, -1.05, -0.3, -0.75];

export function HeroVisual({ variant }: { variant: HeroVisualVariant }) {
  const Icon = ICONS[variant];
  return (
    <div className="relative mx-auto mb-10 flex h-40 w-48 flex-col items-center" aria-hidden="true">
      <span className="animate-hero-drift absolute left-1 top-0 h-28 w-28 rounded-full bg-primary/50 blur-2xl" />
      <span className="animate-hero-drift absolute right-0 bottom-2 h-24 w-24 rounded-full bg-indigo-400/40 blur-2xl [animation-delay:-4.5s]" />

      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm">
        {variant === "tts" && (
          <>
            <span className="animate-hero-ping absolute left-1/2 top-1/2 h-24 w-24 rounded-full border border-primary/40" />
            <span className="animate-hero-ping absolute left-1/2 top-1/2 h-24 w-24 rounded-full border border-primary/40 [animation-delay:1.2s]" />
          </>
        )}
        <Icon className="relative h-8 w-8 text-primary" />
      </div>

      {variant === "stt" && (
        <div className="relative z-10 mt-3 flex h-6 items-end gap-1">
          {EQ_DELAYS.map((delay, i) => (
            <span
              key={i}
              className="animate-hero-eq h-full w-1.5 rounded-full bg-primary"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      )}

      {variant === "cli" && (
        <div className="relative z-10 mt-3 rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> deploy
          <span className="animate-hero-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-primary align-middle" />
        </div>
      )}
    </div>
  );
}
