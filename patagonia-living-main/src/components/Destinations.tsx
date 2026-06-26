"use client";
import { useState } from "react";
import Link from "next/link";
import { REGIONS } from "@/lib/content";

export default function Destinations() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="destinations"
      className="relative overflow-hidden"
      style={{ height: "92vh", minHeight: 640 }}
    >
      {/* Crossfading background images */}
      {REGIONS.map((r, i) => (
        <div
          key={r.slug}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 2 : 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={r.image}
            alt={r.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 38%, rgba(0,0,0,0.78) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-[clamp(20px,4vw,52px)]">

        {/* Top: label + tab pills */}
        <div className="flex items-start justify-between gap-4">
          <p
            className="text-[11px] font-medium tracking-[0.14em] uppercase mt-2.5"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Destinations
          </p>

          <div className="flex items-center gap-2">
            {REGIONS.map((r, i) => (
              <button
                key={r.slug}
                onClick={() => setActive(i)}
                style={{
                  background:
                    active === i
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.10)",
                  color:
                    active === i ? "#0f0f0f" : "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  padding: "10px 22px",
                  borderRadius: 50,
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
                  transform: active === i ? "scale(1.04)" : "scale(1)",
                }}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom: stacked content panels (only active is visible) */}
        <div className="relative" style={{ minHeight: 260 }}>
          {REGIONS.map((r, i) => (
            <div
              key={r.slug}
              className="absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                transform:
                  i === active ? "translateY(0)" : "translateY(22px)",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                {/* Left: title + blurb */}
                <div>
                  <p
                    className="text-[11px] font-medium tracking-[0.14em] uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {r.region}
                  </p>
                  <h2
                    className="display-xl"
                    style={{ color: "rgba(255,255,255,0.96)" }}
                  >
                    {r.name}
                  </h2>
                  <p
                    className="mt-5 max-w-[44ch] text-[16px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.70)" }}
                  >
                    {r.blurb}
                  </p>
                </div>

                {/* Right: resort pills + CTA */}
                <div className="flex flex-col gap-4 items-start md:items-end shrink-0">
                  <div className="flex flex-wrap gap-2 md:justify-end max-w-[320px]">
                    {r.resorts.slice(0, 5).map((resort) => (
                      <span key={resort} className="pill-glass" style={{ fontSize: 12 }}>
                        {resort}
                      </span>
                    ))}
                    {r.resorts.length > 5 && (
                      <span className="pill-glass" style={{ fontSize: 12 }}>
                        +{r.resorts.length - 5} more
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/destinations/${r.slug}`}
                    className="pill pill-dark"
                    style={{ marginTop: 4 }}
                  >
                    Explore {r.name} →
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
