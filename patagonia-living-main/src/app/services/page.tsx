import type { Metadata } from "next";
import { SERVICES, SITE } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Patagonia Living",
  description:
    "Private instruction, curated stays, flights and transfers, exclusive experiences and full concierge — every detail of a ski trip handled end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main style={{ background: "#f7f5f2", paddingTop: 72 }}>

        {/* Header */}
        <header
          style={{
            maxWidth: 900, margin: "0 auto",
            padding: "clamp(56px,8vw,112px) clamp(20px,5vw,40px) clamp(24px,4vw,48px)",
          }}
        >
          <p className="eyebrow reveal" style={{ marginBottom: 18 }}>What We Handle</p>
          <h1
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px,6vw,80px)",
              fontWeight: 300, lineHeight: 1.02,
              color: "#0f0e0c", maxWidth: "16ch", marginBottom: 26,
            }}
          >
            Every detail of your ski trip, handled.
          </h1>
          <p
            className="reveal reveal-d1"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(16px,1.4vw,17px)",
              fontWeight: 300, color: "#5a5754",
              lineHeight: 1.9, maxWidth: "58ch",
            }}
          >
            We don&apos;t send you a list of options. We build your trip from
            scratch and run every moving part — instruction, accommodation,
            flights, access and on-the-ground logistics — so you arrive and ski.
          </p>
        </header>

        {/* Service sections */}
        <div
          style={{
            maxWidth: 1120, margin: "0 auto",
            padding: "clamp(24px,3vw,48px) clamp(20px,5vw,40px) clamp(72px,10vw,130px)",
            display: "flex", flexDirection: "column",
            gap: "clamp(64px,9vw,128px)",
          }}
        >
          {SERVICES.map((s, i) => (
            <section
              key={s.slug}
              className={`reveal r-two${i % 2 === 1 ? " svc-rev" : ""}`}
              style={{
                display: "grid",
                gap: "clamp(28px,4vw,64px)",
                alignItems: "center",
              }}
            >
              {/* Media */}
              <div
                className="img-rise svc-media"
                style={{
                  position: "relative", aspectRatio: "4/3",
                  overflow: "hidden", borderRadius: 14, background: "#0a0c0f",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image} alt={s.title}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    filter: "saturate(0.85) brightness(0.78)",
                  }}
                />
                <span style={{
                  position: "absolute", top: 16, left: 16,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 500, letterSpacing: "0.18em",
                  color: "rgba(242,239,232,0.9)",
                }}>
                  0{i + 1}
                </span>
              </div>

              {/* Body */}
              <div className="svc-body">
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px,3.4vw,46px)",
                  fontWeight: 300, color: "#0f0e0c",
                  lineHeight: 1.08, marginBottom: 20,
                }}>
                  {s.title}
                </h2>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(15px,1.2vw,16px)",
                  fontWeight: 300, color: "#4a4641",
                  lineHeight: 1.9, marginBottom: 28,
                  maxWidth: "52ch",
                }}>
                  {s.detail}
                </p>

                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#B8965A", marginBottom: 14,
                }}>
                  Includes
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {s.features.map((f) => (
                    <li key={f} style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13.5, fontWeight: 300,
                      color: "#0f0e0c", lineHeight: 1.7,
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(15,14,12,0.08)",
                      display: "flex", gap: 12, alignItems: "flex-start",
                    }}>
                      <span style={{ color: "#B8965A", flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.whatsappUrl}
                  target="_blank" rel="noopener"
                  style={{
                    display: "inline-block",
                    background: "#0A0C0F",
                    color: "rgba(242,239,232,0.92)",
                    padding: "15px 30px", borderRadius: 100,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                  }}
                >
                  Ask About This →
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section style={{ background: "#0A0C0F", padding: "clamp(64px,9vw,120px) clamp(20px,5vw,72px)" }}>
          <div className="container-x reveal">
            <p className="eyebrow" style={{ color: "#B8965A", marginBottom: 16 }}>Plan Your Season</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,4.5vw,60px)",
              fontWeight: 300, color: "rgba(242,239,232,0.95)",
              lineHeight: 1.06, maxWidth: "20ch", marginBottom: 32,
            }}>
              One team, door to slope.
            </h2>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/plan" className="btn-bronze">Plan My Trip</a>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener" className="btn-outline-light">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
