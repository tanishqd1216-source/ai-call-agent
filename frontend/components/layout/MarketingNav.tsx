"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  Activity,
  Award,
  BarChart3,
  Bot,
  Building2,
  ChevronDown,
  ChevronRight,
  Globe,
  Headphones,
  Landmark,
  Mic,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Terminal,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MARKETING_MENUS as MENUS } from "@/lib/marketing-nav-data";

const CATEGORY_ICONS: Record<string, typeof Bot> = {
  "Conversational AI Agent": Bot,
  "Analyzer AI Agent": BarChart3,
  "Copilot AI Agent": Sparkles,
  "Intelligence & Insights": BarChart3,
  "Build & Automate": Wrench,
  "Reach & Scale": Globe,
  "Consumer & Retail": ShoppingBag,
  "Financial Services": Landmark,
  "Services & Care": Stethoscope,
  "Sales & Growth": TrendingUp,
  "Support & Service": Headphones,
  "Quality & Insight": Activity,
  "Build Tools": Terminal,
  "Voice Infrastructure": Mic,
  Learn: Sparkles,
  Proof: Award,
  Company: Building2,
};

export function MarketingNav({ align = "start" }: { align?: "start" | "center" }) {
  const [open, setOpen] = useState<{ label: string; top: number; left: number } | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !(dropdownRef.current && dropdownRef.current.contains(target))
      ) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(label: string, event: React.MouseEvent<HTMLButtonElement>) {
    if (open?.label === label) {
      setOpen(null);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    // Clamp against the viewport instead of anchoring straight to the button's
    // left edge — the dropdown is up to 560px wide, so right-hand items (e.g.
    // "Company", the last menu) would otherwise push it off the right edge.
    const margin = 16;
    const dropdownWidth = Math.min(560, window.innerWidth - margin * 2);
    const left = Math.min(
      Math.max(rect.left, margin),
      window.innerWidth - dropdownWidth - margin,
    );
    setOpen({ label, top: rect.bottom + 8, left });
    setActiveCategory(0);
  }

  const activeMenu = open ? MENUS.find((m) => m.label === open.label) : null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-x-auto min-w-0",
        align === "center" ? "w-fit max-w-full mx-auto" : "flex-1",
      )}
    >
      <div className="flex items-center gap-1">
        {MENUS.map((menu) => {
          const isOpen = open?.label === menu.label;
          return (
            <button
              key={menu.label}
              type="button"
              onClick={(e) => toggle(menu.label, e)}
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors shrink-0",
                isOpen
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
              )}
            >
              {menu.label}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
            </button>
          );
        })}
      </div>

      {mounted &&
        open &&
        activeMenu &&
        createPortal(
          <div
            ref={dropdownRef}
            className="fixed z-50 flex w-[560px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-sidebar-border bg-sidebar shadow-2xl"
            style={{ top: open.top, left: open.left }}
          >
            <div className="w-56 shrink-0 border-r border-sidebar-border py-2">
              {activeMenu.categories.map((category, i) => {
                const Icon = CATEGORY_ICONS[category.name] ?? Bot;
                const isActive = i === activeCategory;
                return (
                  <button
                    key={category.name}
                    type="button"
                    onMouseEnter={() => setActiveCategory(i)}
                    onClick={() => setActiveCategory(i)}
                    className={cn(
                      "flex w-[calc(100%-1rem)] mx-2 items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-left font-medium transition-colors",
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{category.name}</span>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                  </button>
                );
              })}
            </div>

            <div className="flex-1 p-4">
              <div className="text-sm font-semibold text-foreground">
                {activeMenu.categories[activeCategory].name}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {activeMenu.categories[activeCategory].description}
              </p>
              <div className="mt-3 flex flex-col gap-0.5">
                {activeMenu.categories[activeCategory].items.map((item) => {
                  const name = typeof item === "string" ? item : item.name;
                  const href = typeof item === "string" ? null : item.href;
                  const className =
                    "rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors";
                  return href ? (
                    <Link key={name} href={href} className={className} onClick={() => setOpen(null)}>
                      {name}
                    </Link>
                  ) : (
                    <div key={name} className={className}>
                      {name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
