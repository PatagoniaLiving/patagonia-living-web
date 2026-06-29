"use client";
import { REGIONS, SERVICES, SITE } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer style={{ background: "#0A0C0F", borderTop: "1px solid rgba(242,239,232,0.07)" }}>
      <div
        className="container-x"
        style={{ padding: "clamp(64px,9vw,110px) clamp(20px,5vw,72px) clamp(36px,5vw,56px)" }}
      >
        {/* Top: brand + columns */}
        <div
          className="r-footer-cols"
          style={{
            display: "grid",
            gap: "clamp(32px,5vw,72px)",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(242,239,232,0.07)",
          }}
        >
          {/* Brand */}
          <div className="r-footer-brand">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20, fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(242,239,232,0.95)",
                lineHeight: 1,
              }}
            >
              Patagonia <span style={{ color: "#B8965A" }}>Living</span>
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12, fontWeight: 300,
                color: "rgba(242,239,232,0.40)",
                lineHeight: 1.8, marginTop: 16,
                maxWidth: 240,
              }}
            >
              Boutique ski travel agency. Bariloche, the Rockies, and the Alps —
              handled end to end.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener"
                style={{
                  background: "#B8965A", color: "#fff",
                  padding: "10px 20px", borderRadius: 100,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                }}
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                style={{
                  border: "1px solid rgba(242,239,232,0.18)", color: "rgba(242,239,232,0.65)",
                  padding: "10px 20px", borderRadius: 100,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 400,
                  letterSpacing: "0.06em",
                }}
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(242,239,232,0.35)",
              marginBottom: 20,
            }}>
              Destinations
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {REGIONS.map((r) => (
                <a
                  key={r.slug}
                  href={`/destinations/${r.slug}`}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13, fontWeight: 300,
                    color: "rgba(242,239,232,0.62)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(242,239,232,0.95)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,239,232,0.62)")}
                >
                  {r.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(242,239,232,0.35)",
              marginBottom: 20,
            }}>
              Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {SERVICES.map((s) => (
                <a
                  key={s.title}
                  href="/services"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13, fontWeight: 300,
                    color: "rgba(242,239,232,0.62)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(242,239,232,0.95)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,239,232,0.62)")}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(242,239,232,0.35)",
              marginBottom: 20,
            }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "WhatsApp", href: SITE.whatsappUrl, external: true },
                { label: SITE.email, href: `mailto:${SITE.email}` },
                { label: "Worldwide · 24/7", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener" : undefined}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13, fontWeight: 300,
                    color: "rgba(242,239,232,0.62)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(242,239,232,0.95)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(242,239,232,0.62)")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10.5, fontWeight: 300,
            color: "rgba(242,239,232,0.28)",
            letterSpacing: "0.04em",
          }}>
            © 2026 Patagonia Living
          </span>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10.5, fontWeight: 300,
            color: "rgba(242,239,232,0.28)",
            letterSpacing: "0.04em",
          }}>
            Luxury Ski Travel · Argentina · USA · Europe
          </span>
        </div>
      </div>
    </footer>
  );
}
