"use client";
import { SERVICES } from "@/lib/content";

const ICONS = ["—", "—", "—", "—", "—"];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--background)",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>What We Handle</p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px,5vw,62px)",
              fontWeight: 300,
              lineHeight: 1.06,
              color: "var(--ink)",
              maxWidth: "22ch",
            }}
          >
            Every detail of your ski trip, taken care of.
          </h2>
        </div>

        {/* Services grid — 5 items in a bordered table layout */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            borderTop: "1px solid var(--line)",
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              style={{
                padding: "clamp(28px,3vw,44px) clamp(20px,2.5vw,32px)",
                borderRight: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,150,90,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8965A",
                  marginBottom: 18,
                  fontWeight: 500,
                }}
              >
                0{i + 1}
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px,2vw,26px)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  marginBottom: 12,
                  lineHeight: 1.15,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 300,
                  color: "var(--stone)",
                  lineHeight: 1.8,
                }}
              >
                {s.blurb}
              </p>
            </div>
          ))}

          {/* CTA tile */}
          <div
            style={{
              padding: "clamp(28px,3vw,44px) clamp(20px,2.5vw,32px)",
              background: "#0A0C0F",
              borderBottom: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
              minHeight: 200,
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px,2.2vw,28px)",
                fontWeight: 300,
                color: "rgba(242,239,232,0.92)",
                lineHeight: 1.2,
              }}
            >
              One team,<br />door to slope.
            </h3>
            <a
              href="#contact"
              className="btn-bronze"
              style={{ alignSelf: "flex-start" }}
            >
              Plan My Trip →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
