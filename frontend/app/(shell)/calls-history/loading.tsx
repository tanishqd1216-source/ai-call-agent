export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 rounded-xl bg-border/60" />
        ))}
      </div>
      <div className="h-64 rounded-xl bg-border/60" />
    </div>
  );
}
