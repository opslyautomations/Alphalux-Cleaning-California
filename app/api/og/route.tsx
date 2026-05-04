import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "AlphaLux Cleaning";
  const subtitle = searchParams.get("subtitle") || "Eco-Friendly House Cleaning in Texas & California";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Gold border */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "2px solid #253858",
            borderRadius: "16px",
            opacity: 0.4,
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,169,97,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#253858", fontSize: "22px", fontWeight: "bold", letterSpacing: "2px" }}>
            AlphaLux
          </span>
          <span style={{ color: "#ffffff", fontSize: "10px", letterSpacing: "8px", marginTop: "2px" }}>
            CLEANING
          </span>
        </div>

        {/* Main title */}
        <h1
          style={{
            color: "#ffffff",
            fontSize: title.length > 40 ? "52px" : "64px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "900px",
            margin: "0 0 24px",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: "22px",
            textAlign: "center",
            maxWidth: "700px",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            color: "#253858",
            fontSize: "16px",
          }}
        >
          <span>(972) 559-0223</span>
          <span style={{ color: "#253858", opacity: 0.4 }}>·</span>
          <span>alphaluxclean.com</span>
          <span style={{ color: "#253858", opacity: 0.4 }}>·</span>
          <span>17 Cities in TX &amp; CA</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
