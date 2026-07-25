"use client";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="rounded-lg border border-red-300 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-6 flex flex-col gap-3">
      <h2 className="font-semibold text-red-800 dark:text-red-300">
        Couldn&apos;t load the dashboard
      </h2>
      <p className="text-sm text-red-700 dark:text-red-400">
        {error.message || "The backend API may be unreachable."}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="self-start rounded bg-red-700 text-white px-3 py-1.5 text-sm font-medium"
      >
        Try again
      </button>
    </div>
  );
}
