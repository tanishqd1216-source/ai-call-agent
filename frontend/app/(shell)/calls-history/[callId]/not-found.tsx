import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-xl border border-border bg-surface ring-1 ring-white/5 p-8 text-center flex flex-col gap-3 items-center">
      <p>No call found with that ID.</p>
      <Link href="/calls-history" className="text-primary hover:text-primary-hover underline text-sm">
        ← Back to call summary
      </Link>
    </div>
  );
}
