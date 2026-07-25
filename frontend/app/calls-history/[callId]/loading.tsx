export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="h-24 rounded-xl bg-border/60" />
      <div className="h-48 rounded-xl bg-border/60" />
    </div>
  );
}
