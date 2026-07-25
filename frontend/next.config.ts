import type { NextConfig } from "next";

// Proxies the existing calling-agent console (webcall_server.py, unmodified)
// through this app's own origin, so "Launch" never leaves the ERP's single
// URL/tab and an HTTPS tunnel (e.g. ngrok) never has to embed plain-HTTP
// content (which browsers block as mixed content). webcall.html's own JS
// calls these exact paths as root-absolute fetches, so the rewrite targets
// must match them verbatim rather than living under a prefix.
const webcallTarget = process.env.WEBCALL_URL ?? "http://localhost:8080";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["overdrawn-slush-refute.ngrok-free.dev"],
  async rewrites() {
    return [
      { source: "/webcall", destination: `${webcallTarget}/` },
      { source: "/outbound", destination: `${webcallTarget}/outbound` },
      { source: "/inbound", destination: `${webcallTarget}/inbound` },
      { source: "/token", destination: `${webcallTarget}/token` },
      { source: "/recording", destination: `${webcallTarget}/recording` },
      { source: "/live", destination: `${webcallTarget}/live` },
      { source: "/api/:path*", destination: `${webcallTarget}/api/:path*` },
    ];
  },
};

export default nextConfig;
