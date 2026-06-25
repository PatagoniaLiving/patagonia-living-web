"use client";
import { useState } from "react";
import { REGIONS } from "@/lib/content";

export default function Destinations() {
  const [active, setActive] = useState(0);
  const r = REGIONS[active];

  return (
    <section id="destinations" className="section" style={{ background: "var(--background)" }}>
      <div className="container-x">

        {/* Header */}
        <div className="reveal mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Destinations</p>
            <h2 className="display-lg max-w-[16ch]">The world&apos;s finest ski regions</h2>
          </div>
          <p className="max-w-[42ch] text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Every hotel we recommend, we have stayed in. Every run we book, we have skied. No exceptions.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="reveal mb-10 flex"
          style={{ borderBottom: "1px solid var(--line)" }}
        >
          {REGIONS.map((region, i) => (
            <button
              key={region.slug}
              onClick={() => setActive(i)}
              className="relative pb-4 pr-8 text-[13px] font-medium tracking-tight transition-colors"
              style={{
                color: active === i ? "var(--foreground)" : "var(--soft)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {region.name}
              {active === i && (
                <span
                  className="absolute bottom-0 left-0 right-8 h-[2px]"
                  style={{ background: "var(--foreground)", borderRadius: 2 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Active destination */}
        <div className="reveal grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">

          {/* Image */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: 20, aspectRatio: "4/3" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={r.slug}
              src={r.image}
              alt={r.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.75) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p
                className="text-[11px] font-medium tracking-tight mb-1"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {r.region}
              </p>
              <h3
                className="text-[30px] font-medium leading-none tracking-tight"
                style={{ color: "rgba(255,255,255,0.96)" }}
              >
                {r.name}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-7">
            <p
              className="text-[16px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {r.blurb}
            </p>

            <div>
              <p className="eyebrow mb-4">Resorts</p>
              <div className="flex flex-wrap gap-2">
                {r.resorts.map((resort) => (
                  <span
                    key={resort}
                    className="text-[12px] font-medium tracking-tight"
                    style={{
                      background: "var(--pill)",
                      color: "var(--ink)",
                      padding: "7px 14px",
                      borderRadius: 50,
                    }}
                  >
                    {resort}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[13px] font-medium"
              style={{ color: "var(--foreground)" }}
            >
              Plan a trip to {r.name} →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
