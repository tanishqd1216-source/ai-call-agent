import type { MetadataRoute } from "next";
import { MARKETING_MENUS } from "@/lib/marketing-nav-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Derived from the same MARKETING_MENUS the header/footer nav render from,
// so the sitemap can't drift out of sync with the real marketing routes.
function marketingRoutes(): string[] {
  const routes = new Set<string>();
  for (const menu of MARKETING_MENUS) {
    for (const category of menu.categories) {
      for (const item of category.items) {
        if (typeof item !== "string") routes.add(item.href);
      }
    }
  }
  return [...routes];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/book-demo", ...marketingRoutes()];
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
