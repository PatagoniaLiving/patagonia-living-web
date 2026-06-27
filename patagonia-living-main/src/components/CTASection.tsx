"use client";
import { SITE } from "@/lib/content";

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        background: "#0A0C0F",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">
        <div
          className="reveal r-split"
          style={{
            display: "grid",
            alignItems: "end",
            gap: "clamp(32px,5vw,80px)",
          }}
        >
          <div>
            <p
              className="eyebrow"
              style={{ color: "#B8965A", marginBottom: 16 }}
            >
              Plan Your Season
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px,5.5vw,72px)",
                fontWeight: 300,
                lineHeight: 1.04,
                color: "rgba(242,239,232,0.95)",
                maxWidth: "18ch",
              }}
            >
              Tell us where you want to ski.
            </h2>
            <p
              style={{
                marginTop: 20,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: "rgba(242,239,232,0.48)",
                maxWidth: 400,
                lineHeight: 1.85,
                letterSpacing: "0.02em",
              }}
            >
              Share your destination, dates, and group size.
              We'll send a tailored proposal within 48 hours — no commitments.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener"
                className="btn-bronze"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-outline-light"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Side detail */}
          <div
            className="cta-aside"
            style={{
              borderLeft: "1px solid rgba(242,239,232,0.08)",
              paddingLeft: "clamp(24px,4vw,56px)",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {[
              { n: "01", label: "Share destination & dates" },
              { n: "02", label: "Receive a tailored proposal" },
              { n: "03", label: "We handle everything" },
            ].map((step) => (
              <div key={step.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    color: "#B8965A",
                    lineHeight: 1,
                    paddingTop: 2,
                    minWidth: 20,
                  }}
                >
                  {step.n}
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    color: "rgba(242,239,232,0.55)",
                    lineHeight: 1.6,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
