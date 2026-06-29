import type { Metadata } from "next";
import { GUIDES, SITE } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Patagonia Living",
  description:
    "A small team of guides, instructors and planners who have personally skied and stayed in everything we book.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main style={{ background: "#f7f5f2", paddingTop: 72 }}>

        {/* ── Philosophy lede ── */}
        <section
          style={{
            maxWidth: 820, margin: "0 auto",
            padding: "clamp(64px,9vw,128px) clamp(20px,5vw,40px) clamp(40px,5vw,64px)",
          }}
        >
          <p className="eyebrow reveal" style={{ marginBottom: 20 }}>Who We Are</p>
          <h1
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,4.6vw,60px)",
              fontWeight: 300, lineHeight: 1.12,
              color: "#0f0e0c", maxWidth: "22ch",
              marginBottom: 32,
            }}
          >
            A small team that has skied every run, and slept in every room, we sell.
          </h1>
          <p
            className="reveal reveal-d1"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(16px,1.4vw,17px)",
              fontWeight: 300, color: "#5a5754",
              lineHeight: 1.95, maxWidth: "60ch",
            }}
          >
            Patagonia Living is not a booking engine. We are a handful of guides,
            instructors and planners who happen to spend our winters chasing snow
            across the Andes, the Rockies and the Alps. When we recommend a mountain,
            a hotel or an instructor, it is because we have been there ourselves —
            recently, and on our own time.
          </p>
        </section>

        {/* ── The Team ── */}
        <section
          style={{
            maxWidth: 1080, margin: "0 auto",
            padding: "clamp(24px,3vw,40px) clamp(20px,5vw,40px) clamp(72px,10vw,130px)",
          }}
        >
          <p className="eyebrow reveal" style={{ marginBottom: 48 }}>The Team</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(56px,8vw,110px)" }}>
            {GUIDES.map((g, i) => (
              <div
                key={g.name}
                className={`reveal r-two team-row${i % 2 === 1 ? " team-row-rev" : ""}`}
                style={{
                  display: "grid",
                  gap: "clamp(28px,4vw,64px)",
                  alignItems: "center",
                }}
              >
                {/* Portrait */}
                <div
                  className="ed-wrap team-portrait"
                  style={{
                    position: "relative", aspectRatio: "4/5",
                    overflow: "hidden", background: "#0a0c0f",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.name}
                    className="ed-img"
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Text */}
                <div className="team-text">
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 9.5, fontWeight: 500,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#B8965A", marginBottom: 14,
                  }}>
                    {g.role} · {g.region}
                  </p>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(30px,3.6vw,52px)",
                    fontWeight: 300, color: "#0f0e0c",
                    lineHeight: 1.04, marginBottom: 22,
                  }}>
                    {g.name}
                  </h2>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(19px,2.1vw,26px)",
                    fontStyle: "italic", fontWeight: 300,
                    color: "#3f3b37", lineHeight: 1.5,
                    maxWidth: "26ch",
                  }}>
                    {g.line}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "#0A0C0F", padding: "clamp(64px,9vw,120px) clamp(20px,5vw,72px)" }}>
          <div className="container-x reveal">
            <p className="eyebrow" style={{ color: "#B8965A", marginBottom: 16 }}>Work With Us</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,4.5vw,60px)",
              fontWeight: 300, color: "rgba(242,239,232,0.95)",
              lineHeight: 1.06, maxWidth: "20ch", marginBottom: 32,
            }}>
              Tell us where you want to ski.
            </h2>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener" className="btn-bronze">
                WhatsApp
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-outline-light">
                {SITE.email}
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
