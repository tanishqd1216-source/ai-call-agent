"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CallListFilters } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const labelClass = "flex flex-col text-xs font-medium text-muted-foreground gap-1";

export function FilterBar({ filters }: { filters: CallListFilters }) {
  const router = useRouter();
  const [direction, setDirection] = useState(filters.direction ?? "all");
  const [status, setStatus] = useState(filters.status ?? "all");
  const [category, setCategory] = useState(filters.category ?? "");
  const [resolution, setResolution] = useState(filters.resolution ?? "");

  function applyFilters(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (direction !== "all") params.set("direction", direction);
    if (status !== "all") params.set("status", status);
    if (category) params.set("category", category);
    if (resolution) params.set("resolution", resolution);
    const query = params.toString();
    router.push(`/calls-history${query ? `?${query}` : ""}`);
  }

  function resetFilters() {
    setDirection("all");
    setStatus("all");
    setCategory("");
    setResolution("");
    router.push("/calls-history");
  }

  return (
    <form
      onSubmit={applyFilters}
      className="flex flex-wrap items-end gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10"
    >
      <label className={labelClass}>
        Direction
        <Select value={direction} onValueChange={setDirection}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="inbound">Inbound</SelectItem>
            <SelectItem value="outbound">Outbound</SelectItem>
          </SelectContent>
        </Select>
      </label>
      <label className={labelClass}>
        Status
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="in_progress">In progress</SelectItem>
            <SelectItem value="ended">Ended</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </label>
      <label className={labelClass}>
        Category
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. OPD"
          className="w-36"
        />
      </label>
      <label className={labelClass}>
        Resolution
        <Input
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          placeholder="e.g. escalated"
          className="w-36"
        />
      </label>
      <Button type="submit" size="sm">
        Filter
      </Button>
      <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
        Reset
      </Button>
    </form>
  );
}
