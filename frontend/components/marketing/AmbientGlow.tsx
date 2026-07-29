// Large soft blurred accent blob, purely decorative. Reuses the same purple
// used by the hero's particle canvas and card hover glow — a container that
// places one of these needs `relative overflow-hidden`.
export function AmbientGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full opacity-20 blur-3xl ${className ?? ""}`}
      style={{ background: "radial-gradient(circle, rgba(191,128,255,0.7), transparent 70%)" }}
    />
  );
}
