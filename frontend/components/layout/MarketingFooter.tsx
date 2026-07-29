import Link from "next/link";
import { Zap } from "lucide-react";
import { MARKETING_MENUS, type MarketingMenu } from "@/lib/marketing-nav-data";

// Reuses the same MARKETING_MENUS the header dropdown reads from, so the
// footer never drifts out of sync with the real nav — each menu's categories
// are flattened into one link list per column instead of the header's
// category sub-headers, which don't fit a footer's column width.
const [AGENTS, CAPABILITIES, INDUSTRIES, USE_CASES, ...STACKED_MENUS] = MARKETING_MENUS;

function flattenItems(menu: MarketingMenu) {
  return menu.categories.flatMap((category) =>
    category.items.map((item) => (typeof item === "string" ? { name: item, href: null } : item)),
  );
}

function FooterLink({ name, href }: { name: string; href: string | null }) {
  if (!href) {
    return <span className="text-sm text-sidebar-foreground/40">{name}</span>;
  }
  return (
    <Link href={href} className="text-sm text-sidebar-foreground/80 transition-colors hover:text-sidebar-foreground">
      {name}
    </Link>
  );
}

function FooterColumn({ menu }: { menu: MarketingMenu }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{menu.label}</div>
      <ul className="mt-4 flex flex-col gap-3">
        {flattenItems(menu).map((item) => (
          <li key={item.name}>
            <FooterLink name={item.name} href={item.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z",
  },
  {
    name: "X",
    href: "#",
    path: "M18.9 3h3.2l-7 8 8.2 10.9h-6.4l-5-6.6-5.7 6.6H2l7.5-8.6L1.7 3h6.5l4.5 6 6.2-6Zm-1.1 17.1h1.8L7.3 4.8H5.4l12.4 15.3Z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.78.22 2.41.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.63.41 1.35.46 2.41.05 1.06.06 1.4.06 4.12 0 2.72-.01 3.06-.06 4.12-.05 1.06-.22 1.78-.46 2.41a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.63.24-1.35.41-2.41.46-1.06.05-1.4.06-4.12.06-2.72 0-3.06-.01-4.12-.06-1.06-.05-1.78-.22-2.41-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.24-.63-.41-1.35-.46-2.41C2.01 15.06 2 14.72 2 12c0-2.72.01-3.06.06-4.12.05-1.06.22-1.78.46-2.41.26-.66.6-1.22 1.16-1.77a4.9 4.9 0 0 1 1.77-1.16c.63-.24 1.35-.41 2.41-.46C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.88-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z",
  },
];

export function MarketingFooter() {
  return (
    <footer className="relative bg-sidebar text-sidebar-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sidebar-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          <FooterColumn menu={AGENTS} />
          <FooterColumn menu={CAPABILITIES} />
          <FooterColumn menu={INDUSTRIES} />
          <FooterColumn menu={USE_CASES} />
          <div className="flex flex-col gap-10">
            {STACKED_MENUS.map((menu) => (
              <FooterColumn key={menu.label} menu={menu} />
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-sidebar-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-sidebar-foreground/60">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold tracking-tighter text-gradient-heading">Meridian</span>
            <span className="text-sidebar-border">·</span>
            <span>© 2026 Meridian. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ name, href, path }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-sidebar-border text-sidebar-foreground/70 transition-colors hover:border-primary/40 hover:text-sidebar-foreground"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
