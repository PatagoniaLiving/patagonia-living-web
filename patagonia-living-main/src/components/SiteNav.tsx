"use client";
import Link from "next/link";
import { SITE } from "@/lib/content";

export default function SiteNav() {
  return (
    <header
      className="hero-in sticky top-0 z-50 w-full"
      style={{
        background: "rgba(247,245,242,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(15,14,12,0.08)",
      }}
    >
      <nav
        className="grid items-center px-[clamp(20px,4vw,36px)] py-5"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        {/* Left */}
        <div className="hidden md:flex items-center gap-7 justify-end pr-10">
          <a href="#destinations" className="nav-link nav-link-dark">Destinations</a>
          <a href="#services" className="nav-link nav-link-dark">Services</a>
        </div>

        {/* Center logo */}
        <Link href="/" className="justify-self-center text-center">
          <span
            className="block tracking-[0.22em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 19,
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1,
            }}
          >
            Patagonia{" "}
            <span style={{ color: "var(--bronze)" }}>Living</span>
          </span>
          <span
            className="block mt-1 italic tracking-[0.28em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 8,
              color: "var(--stone)",
            }}
          >
            Luxury Ski Travel
          </span>
        </Link>

        {/* Right */}
        <div className="hidden md:flex items-center gap-7 pl-10">
          <a href="#guides" className="nav-link nav-link-dark">Guides</a>
          <a href="#contact" className="btn-bronze" style={{ padding: "9px 20px", fontSize: 10 }}>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
