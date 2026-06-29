import { ImageResponse } from "next/og";

export const alt = "Patagonia Living — Luxury Ski Travel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    if (res.ok) return await res.arrayBuffer();
  } catch {
    /* fall back to default font */
  }
  return null;
}

export default async function Image() {
  const cormorant = await loadFont(
    "https://cdn.jsdelivr.net/npm/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff"
  );
  const montserrat = await loadFont(
    "https://cdn.jsdelivr.net/npm/@fontsource/montserrat/files/montserrat-latin-500-normal.woff"
  );

  const fonts: { name: string; data: ArrayBuffer; weight: 300 | 500; style: "normal" }[] = [];
  if (cormorant) fonts.push({ name: "Cormorant", data: cormorant, weight: 300, style: "normal" });
  if (montserrat) fonts.push({ name: "Montserrat", data: montserrat, weight: 500, style: "normal" });

  const serif = cormorant ? "Cormorant" : "serif";
  const sans = montserrat ? "Montserrat" : "sans-serif";

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
          backgroundColor: "#0A0C0F",
        }}
      >
        {/* Mountain mark */}
        <svg width="78" height="66" viewBox="0 0 78 66" style={{ marginBottom: 40 }}>
          <path d="M39 5 L73 61 L5 61 Z" fill="none" stroke="#B8965A" strokeWidth="3" />
        </svg>

        <div style={{ display: "flex", fontFamily: serif, fontSize: 88, fontWeight: 300, letterSpacing: 12, color: "#F2EFE8" }}>
          <span style={{ marginRight: 28 }}>PATAGONIA</span>
          <span style={{ color: "#B8965A" }}>LIVING</span>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: sans,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 14,
            color: "rgba(242,239,232,0.55)",
            marginTop: 30,
          }}
        >
          LUXURY SKI TRAVEL
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
