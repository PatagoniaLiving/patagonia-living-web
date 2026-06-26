"use client";
import Link from "next/link";
import { SITE } from "@/lib/content";

export default function SiteNav() {
  return (
    <header
      className="hero-in sticky top-0 z-50 w-full"
      style={{
        background: "rgba(10,12,15,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(242,239,232,0.10)",
      }}
    >
      <nav
        className="grid items-center px-[clamp(20px,4vw,36px)] py-5"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        {/* Left links */}
        <div className="hidden md:flex items-center gap-7 justify-end pr-10">
          <a href="/#destinations" className="nav-link">Destinations</a>
          <a href="/#services" className="nav-link">Services</a>
        </div>

        {/* Center logo */}
        <Link href="/" className="justify-self-center text-center">
          <span
            className="block tracking-[0.22em] uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontWeight: 300,
              color: "var(--bone)",
              lineHeight: 1,
            }}
          >
            Patagonia{" "}
            <span style={{ color: "var(--bronze)" }}>Living</span>
          </span>
          <span
            className="block mt-1 tracking-[0.3em] uppercase italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 8.5,
              color: "var(--stone)",
              letterSpacing: "0.32em",
            }}
          >
            Luxury Ski Travel
          </span>
        </Link>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-7 pl-10">
          <a href="/#guides" className="nav-link">Guides</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  );
}
