"use client";
import { useState } from "react";
import { SERVICES } from "@/lib/content";

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="services"
      style={{
        background: "#F0EDE8",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 56 }}>
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

        {/* Services accordion list */}
        <div className="reveal" style={{ borderTop: "1px solid rgba(15,14,12,0.10)" }}>
          {SERVICES.map((s, i) => {
            const isOpen = open === s.slug;
            return (
              <div
                key={s.slug}
                style={{
                  borderBottom: "1px solid rgba(15,14,12,0.10)",
                  transition: "background 0.3s",
                  background: isOpen ? "rgba(184,150,90,0.04)" : "transparent",
                }}
              >
                {/* Row header — click to toggle */}
                <button
                  onClick={() => setOpen(isOpen ? null : s.slug)}
                  style={{
                    width: "100%", background: "none", border: "none",
                    padding: "clamp(20px,2.5vw,32px) clamp(16px,2vw,24px)",
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: "44px 1fr auto",
                    alignItems: "center",
                    gap: "clamp(16px,2vw,28px)",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10, fontWeight: 500,
                      letterSpacing: "0.18em", textTransform: "uppercase",
                      color: "#B8965A",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(20px,2.2vw,28px)",
                      fontWeight: 400,
                      color: "var(--ink)",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 18,
                      color: isOpen ? "#B8965A" : "rgba(15,14,12,0.28)",
                      transition: "transform 0.35s, color 0.25s",
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "44px 1fr 1fr",
                        gap: "clamp(20px,3vw,40px)",
                        padding: "0 clamp(16px,2vw,24px) clamp(28px,3vw,44px)",
                        alignItems: "start",
                      }}
                    >
                      {/* spacer */}
                      <div />

                      {/* Left: image + description */}
                      <div>
                        <div
                          style={{
                            position: "relative", aspectRatio: "4/3",
                            overflow: "hidden", borderRadius: 10, marginBottom: 24,
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.image} alt={s.title}
                            style={{
                              position: "absolute", inset: 0,
                              width: "100%", height: "100%",
                              objectFit: "cover",
                              filter: "saturate(0.82) brightness(0.75)",
                            }}
                          />
                        </div>
                        <p
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 13, fontWeight: 300,
                            color: "var(--stone)", lineHeight: 1.85,
                          }}
                        >
                          {s.detail}
                        </p>
                      </div>

                      {/* Right: feature list */}
                      <div>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9, fontWeight: 500,
                          letterSpacing: "0.2em", textTransform: "uppercase",
                          color: "#B8965A", marginBottom: 20,
                        }}>
                          Includes
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {s.features.map((f) => (
                            <li
                              key={f}
                              style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 12.5, fontWeight: 300,
                                color: "var(--ink)", lineHeight: 1.75,
                                padding: "12px 0",
                                borderBottom: "1px solid rgba(15,14,12,0.07)",
                                display: "flex", gap: 12, alignItems: "flex-start",
                              }}
                            >
                              <span style={{ color: "#B8965A", flexShrink: 0 }}>—</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#contact"
                          style={{
                            display: "inline-block",
                            marginTop: 24,
                            background: "#0A0C0F",
                            color: "rgba(242,239,232,0.90)",
                            padding: "13px 26px", borderRadius: 100,
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 10, fontWeight: 500,
                            letterSpacing: "0.12em", textTransform: "uppercase",
                          }}
                        >
                          Ask About This →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div
          className="reveal"
          style={{
            marginTop: 56,
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
            href="#contact"
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
