export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="h-24 rounded-lg bg-black/5 dark:bg-white/10" />
      <div className="h-48 rounded-lg bg-black/5 dark:bg-white/10" />
    </div>
  );
}
