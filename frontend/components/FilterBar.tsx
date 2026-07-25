import Link from "next/link";
import type { CallListFilters } from "@/lib/api";

export function FilterBar({ filters }: { filters: CallListFilters }) {
  return (
    <form className="flex flex-wrap gap-3 items-end" method="get">
      <label className="flex flex-col text-sm gap-1">
        Direction
        <select
          name="direction"
          defaultValue={filters.direction ?? ""}
          className="border border-black/15 dark:border-white/20 rounded px-2 py-1 bg-transparent"
        >
          <option value="">All</option>
          <option value="inbound">Inbound</option>
          <option value="outbound">Outbound</option>
        </select>
      </label>
      <label className="flex flex-col text-sm gap-1">
        Status
        <select
          name="status"
          defaultValue={filters.status ?? ""}
          className="border border-black/15 dark:border-white/20 rounded px-2 py-1 bg-transparent"
        >
          <option value="">All</option>
          <option value="in_progress">In progress</option>
          <option value="ended">Ended</option>
          <option value="error">Error</option>
        </select>
      </label>
      <label className="flex flex-col text-sm gap-1">
        Category
        <input
          name="category"
          defaultValue={filters.category ?? ""}
          placeholder="e.g. OPD"
          className="border border-black/15 dark:border-white/20 rounded px-2 py-1 bg-transparent"
        />
      </label>
      <label className="flex flex-col text-sm gap-1">
        Resolution
        <input
          name="resolution"
          defaultValue={filters.resolution ?? ""}
          placeholder="e.g. escalated"
          className="border border-black/15 dark:border-white/20 rounded px-2 py-1 bg-transparent"
        />
      </label>
      <button
        type="submit"
        className="rounded bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm font-medium"
      >
        Filter
      </button>
      <Link href="/" className="text-sm underline px-1 py-1.5">
        Reset
      </Link>
    </form>
  );
}
