"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkColor = scrolled ? "rgba(15,14,12,0.65)" : "rgba(242,239,232,0.75)";
  const linkHover = scrolled ? "#0f0e0c" : "#fff";

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        height: 76,
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(247,245,242,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15,14,12,0.07)" : "1px solid transparent",
        transition: "background 0.45s ease, border-color 0.45s ease",
      }}
    >
      <nav
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px,4vw,56px)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: scrolled ? "#0f0e0c" : "rgba(242,239,232,0.97)",
              lineHeight: 1,
              transition: "color 0.45s ease",
            }}
          >
            Patagonia{" "}
            <span style={{ color: "#B8965A" }}>Living</span>
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 9,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontStyle: "italic",
              color: scrolled ? "#8a8480" : "rgba(242,239,232,0.45)",
              lineHeight: 1,
              transition: "color 0.45s ease",
            }}
          >
            Luxury Ski Travel
          </span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {[
            { label: "Destinations", href: "#destinations" },
            { label: "Services", href: "#services" },
            { label: "About", href: "#guides" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10.5,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: linkColor,
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: "#B8965A",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: 100,
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              transition: "background 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#ccaa6d";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#B8965A";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Plan My Trip
          </a>
        </div>
      </nav>
    </header>
  );
}
