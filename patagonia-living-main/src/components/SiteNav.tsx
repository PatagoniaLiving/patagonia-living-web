"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkColor = scrolled ? "rgba(15,14,12,0.65)" : "rgba(242,239,232,0.88)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 72,
        display: "flex",
        alignItems: "center",
        // Always have a backdrop — dark when over hero, cream when scrolled
        background: scrolled
          ? "rgba(247,245,242,0.97)"
          : "rgba(5,6,8,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(15,14,12,0.07)"
          : "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      <nav
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px,4vw,56px)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: 3, textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 21,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: scrolled ? "#0f0e0c" : "rgba(242,239,232,0.97)",
              lineHeight: 1,
              transition: "color 0.4s ease",
              whiteSpace: "nowrap",
            }}
          >
            Patagonia{" "}
            <span style={{ color: "#B8965A" }}>Living</span>
          </span>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 7.5,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: scrolled ? "#B8965A" : "rgba(184,150,90,0.72)",
              lineHeight: 1,
              transition: "color 0.4s ease",
              whiteSpace: "nowrap",
            }}
          >
            Luxury Ski Travel
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[
            { label: "Destinations", href: "/destinations" },
            { label: "Services", href: "/#services" },
            { label: "About", href: "/#guides" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: linkColor,
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#contact"
            style={{
              background: "#B8965A",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 100,
              fontSize: 9.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Plan My Trip
          </a>
        </div>
      </nav>
    </header>
  );
}
