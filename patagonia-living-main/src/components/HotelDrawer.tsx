"use client";
import { useEffect } from "react";
import type { Hotel } from "@/lib/content";
import { SITE } from "@/lib/content";

interface Props {
  hotel: Hotel | null;
  onClose: () => void;
}

export default function HotelDrawer({ hotel, onClose }: Props) {
  // Lock body scroll when open
  useEffect(() => {
    if (hotel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [hotel]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(5,6,8,0.65)",
          backdropFilter: "blur(4px)",
          zIndex: 200,
          opacity: hotel ? 1 : 0,
          pointerEvents: hotel ? "all" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: "fixed",
          top: 0, right: 0, bottom: 0,
          width: "min(560px, 95vw)",
          background: "#f7f5f2",
          zIndex: 201,
          overflowY: "auto",
          transform: hotel ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.25)",
        }}
      >
        {hotel && (
          <>
            {/* Hero image */}
            <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hotel.image} alt={hotel.name}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  filter: "saturate(0.82) brightness(0.70)",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(10,12,15,0.75) 100%)",
              }} />

              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: "absolute", top: 16, right: 16,
                  background: "rgba(10,12,15,0.55)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(242,239,232,0.15)",
                  borderRadius: "50%",
                  width: 40, height: 40,
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(242,239,232,0.8)",
                  fontSize: 18,
                  zIndex: 10,
                }}
              >
                ×
              </button>

              <div style={{ position: "absolute", bottom: 20, left: 24 }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#B8965A", marginBottom: 6,
                }}>
                  {hotel.category} · {hotel.resort}
                </p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(22px,3vw,30px)",
                  fontWeight: 300,
                  color: "rgba(242,239,232,0.97)",
                  lineHeight: 1.1,
                }}>
                  {hotel.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "32px 28px 48px" }}>
              {/* Tagline */}
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px,1.8vw,20px)",
                fontStyle: "italic", fontWeight: 300,
                color: "#5a5754",
                lineHeight: 1.55,
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: "1px solid rgba(15,14,12,0.08)",
              }}>
                {hotel.tagline}
              </p>

              {/* Description */}
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13, fontWeight: 300,
                color: "#5a5754", lineHeight: 1.85,
                marginBottom: 32,
              }}>
                {hotel.description}
              </p>

              {/* Features */}
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 16,
              }}>
                Highlights
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {hotel.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12.5, fontWeight: 300,
                      color: "#0f0e0c", lineHeight: 1.7,
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

              {/* CTAs */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank" rel="noopener"
                  style={{
                    background: "#B8965A", color: "#fff",
                    padding: "15px 24px", borderRadius: 100,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    textAlign: "center", textDecoration: "none",
                    display: "block",
                  }}
                >
                  Plan a Stay via WhatsApp
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Enquiry: ${hotel.name}`}
                  style={{
                    border: "1px solid rgba(15,14,12,0.15)",
                    color: "#5a5754",
                    padding: "15px 24px", borderRadius: 100,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10, fontWeight: 400,
                    letterSpacing: "0.08em",
                    textAlign: "center", textDecoration: "none",
                    display: "block",
                  }}
                >
                  Send an Enquiry
                </a>
              </div>

              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11, fontWeight: 300,
                color: "#8a8480", lineHeight: 1.7,
                marginTop: 20, textAlign: "center",
              }}>
                Proposal within 24 hours. Every stay we book, we have personally stayed in.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
