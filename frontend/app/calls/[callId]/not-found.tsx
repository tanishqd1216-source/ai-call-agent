import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/15 p-8 text-center flex flex-col gap-3 items-center">
      <p>No call found with that ID.</p>
      <Link href="/" className="underline text-sm">
        ← Back to call history
      </Link>
    </div>
  );
}
