import Link from "next/link";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#F0EDE8",
        padding: "clamp(64px,8vw,110px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">

        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", flexWrap: "wrap", gap: 20,
            marginBottom: 44,
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>What We Handle</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(30px,4vw,52px)",
                fontWeight: 300,
                lineHeight: 1.06,
                color: "var(--ink)",
                maxWidth: "20ch",
              }}
            >
              Every detail, taken care of.
            </h2>
          </div>
          <Link
            href="/services"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0e0c",
              borderBottom: "1px solid rgba(15,14,12,0.3)",
              paddingBottom: 4,
            }}
          >
            All services →
          </Link>
        </div>

        {/* Compact list */}
        <div className="reveal" style={{ borderTop: "1px solid rgba(15,14,12,0.10)" }}>
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href="/services"
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                alignItems: "center",
                gap: "clamp(14px,2vw,28px)",
                padding: "clamp(18px,2.2vw,26px) clamp(8px,1.5vw,16px)",
                borderBottom: "1px solid rgba(15,14,12,0.10)",
                textDecoration: "none",
              }}
            >
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500,
                letterSpacing: "0.18em", color: "#B8965A",
              }}>
                0{i + 1}
              </span>
              <span>
                <span style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px,2.2vw,28px)",
                  fontWeight: 400, color: "var(--ink)", lineHeight: 1.15,
                }}>
                  {s.title}
                </span>
                <span className="svc-blurb" style={{
                  display: "block",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12.5, fontWeight: 300,
                  color: "var(--stone)", lineHeight: 1.6, marginTop: 4,
                  maxWidth: "60ch",
                }}>
                  {s.blurb}
                </span>
              </span>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 16, color: "rgba(15,14,12,0.3)",
              }}>
                →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            background: "#0A0C0F",
            padding: "clamp(32px,4vw,52px) clamp(28px,3vw,44px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            borderRadius: 4,
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(22px,2.5vw,32px)",
              fontWeight: 300,
              color: "rgba(242,239,232,0.92)",
              lineHeight: 1.2,
            }}
          >
            One team, door to slope.
          </h3>
          <a
            href="/plan"
            style={{
              background: "#B8965A", color: "#fff",
              padding: "14px 28px", borderRadius: 100,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Plan My Trip →
          </a>
        </div>

      </div>
    </section>
  );
}
