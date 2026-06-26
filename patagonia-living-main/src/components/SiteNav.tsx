"use client";
import Link from "next/link";

export default function SiteNav() {
  return (
    <header
      className="hero-in sticky top-0 z-50 w-full"
      style={{
        background: "rgba(247,245,242,0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(15,14,12,0.07)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px,4vw,48px)",
          height: 64,
        }}
      >
        {/* Logo — left aligned */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#0f0e0c",
              lineHeight: 1,
            }}
          >
            Patagonia{" "}
            <span style={{ color: "#B8965A" }}>Living</span>
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 8,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontStyle: "italic",
              color: "#8a8480",
              lineHeight: 1,
            }}
          >
            Luxury Ski Travel
          </span>
        </Link>

        {/* Right nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#destinations" className="nav-link nav-link-dark">Destinations</a>
          <a href="#services" className="nav-link nav-link-dark">Services</a>
          <a href="#guides" className="nav-link nav-link-dark">About</a>
          <a
            href="#contact"
            style={{
              background: "#B8965A",
              color: "#fff",
              padding: "10px 22px",
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
