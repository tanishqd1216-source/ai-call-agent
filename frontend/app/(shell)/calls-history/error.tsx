"use client";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="rounded-xl border border-status-error-fg/30 bg-status-error-bg p-6 flex flex-col gap-3">
      <h2 className="font-semibold text-status-error-fg">Couldn&apos;t load the dashboard</h2>
      <p className="text-sm text-status-error-fg/90">
        {error.message || "The backend API may be unreachable."}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="self-start rounded-lg bg-status-error-fg text-white px-3.5 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
