"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarketingNav } from "@/components/layout/MarketingNav";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { MagneticLink } from "@/components/ui/MagneticLink";

export function MarketingHeader({ showLogin = true }: { showLogin?: boolean }) {
  // Transparent over the hero, solidifying into a blurred bar once the page
  // has actually scrolled — every page's content sits on the same dark
  // bg-background, so contrast holds either way.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 h-16 text-sidebar-foreground transition-colors duration-300",
        scrolled
          ? "border-b border-sidebar-border bg-sidebar/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Mobile: hamburger + drawer, horizontal bar doesn't fit this content on small screens */}
      <div className="flex md:hidden h-full items-center gap-3 px-4">
        <MobileNavDrawer showLogin={showLogin} />
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold tracking-tighter text-gradient-heading">Meridian</span>
        </Link>
      </div>

      {/* Desktop: full horizontal bar. The nav sits in a flex-1 middle column
          (not absolutely centered) so it shares space with the logo and
          buttons instead of being able to overlap them at narrower desktop
          widths — it scrolls internally via its own overflow-x-auto if it
          ever runs out of room. */}
      <div className="hidden md:flex h-full px-4 md:px-6 items-center gap-4">
        <Link href="/" className="ml-8 md:ml-16 flex items-center gap-2 shrink-0">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold tracking-tighter text-gradient-heading">Meridian</span>
        </Link>

        <div className="flex flex-1 min-w-0 justify-center">
          <MarketingNav align="center" />
        </div>

        <div className="flex shrink-0 items-center gap-3">
          {showLogin && (
            <Link
              href="/erp/login"
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-sidebar-accent transition-colors whitespace-nowrap"
            >
              Login
            </Link>
          )}
          <MagneticLink
            href="/book-demo"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors whitespace-nowrap"
          >
            Book Demo
          </MagneticLink>
        </div>
      </div>
    </header>
  );
}
