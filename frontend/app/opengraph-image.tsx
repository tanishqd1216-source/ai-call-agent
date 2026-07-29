import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Reuses only the brand name/tagline already in metadata and the accent
// color already used for the hero's particle canvas — no new copy or theme.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          background: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#bf80ff",
          }}
        >
          Meridian
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#ffffff" }}>
          AI agents for sales, support, and marketing
        </div>
      </div>
    ),
    { ...size },
  );
}
