"use client";
import { SITE } from "@/lib/content";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Guides", href: "#guides" },
  { label: "Stories", href: "#stories" },
];

const DESTINATIONS = [
  { label: "Patagonia", href: "/destinations/patagonia", region: "Argentina · Andes" },
  { label: "Europe", href: "/destinations/europe", region: "Alps · Dolomites" },
  { label: "USA", href: "/destinations/usa", region: "Rockies · Tahoe" },
];

export default function SiteNav() {
  return (
    <header
      className="hero-in sticky top-0 z-50 w-full"
      style={{
        background: "rgba(250,250,250,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center px-[clamp(20px,5vw,36px)] py-4">

        {/* Logo */}
        <a href="/" className="justify-self-start text-[17px] font-medium tracking-tight">
          {SITE.name}
        </a>

        {/* Center tagline */}
        <p className="hidden justify-self-center text-[14px] font-medium tracking-tight md:block">
          <span style={{ color: "var(--soft)" }}>Based in: </span>
          <span style={{ color: "var(--ink)" }}>{SITE.basedIn}</span>
        </p>

        {/* Right nav */}
        <div className="flex items-center gap-1 justify-self-end">

          {/* Destinations with dropdown */}
          <div className="relative group">
            <a
              href="#destinations"
              className="rounded-[50px] px-3.5 py-2 text-[14px] font-medium tracking-tight transition-colors duration-300"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Destinations
            </a>

            {/* Dropdown */}
            <div
              className="absolute right-0 top-full mt-3 hidden group-hover:block"
              style={{ zIndex: 100 }}
            >
              {/* invisible bridge so hover doesn't break */}
              <div style={{ height: 6 }} />
              <div
                style={{
                  background: "rgba(255,255,255,0.94)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  padding: "8px",
                  minWidth: 200,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {DESTINATIONS.map((d) => (
                  <a
                    key={d.href}
                    href={d.href}
                    className="flex flex-col gap-0.5 rounded-[10px] px-4 py-3 transition-colors duration-200"
                    style={{ color: "var(--ink)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--pill)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    <span className="text-[14px] font-medium tracking-tight">{d.label}</span>
                    <span className="text-[12px]" style={{ color: "var(--soft)" }}>{d.region}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[50px] px-3.5 py-2 text-[14px] font-medium tracking-tight transition-colors duration-300"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item.label}
            </a>
          ))}

        </div>
      </nav>
    </header>
  );
}
