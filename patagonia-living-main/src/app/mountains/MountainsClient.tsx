"use client";
import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/content";

const FILTERS: { label: string; value: "all" | "patagonia" | "usa" }[] = [
  { label: "All", value: "all" },
  { label: "Patagonia", value: "patagonia" },
  { label: "United States", value: "usa" },
];

export default function MountainsClient({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState<"all" | "patagonia" | "usa">("all");
  const shown = filter === "all" ? articles : articles.filter((a) => a.region === filter);

  return (
    <main style={{ background: "#f7f5f2", paddingTop: 72 }}>
      {/* ── Header ── */}
      <header
        style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "clamp(56px,8vw,104px) clamp(20px,5vw,40px) clamp(32px,4vw,48px)",
        }}
      >
        <p className="eyebrow reveal" style={{ marginBottom: 18 }}>The Journal</p>
        <h1
          className="reveal"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px,6.5vw,86px)",
            fontWeight: 300, lineHeight: 1.0,
            color: "#0f0e0c", maxWidth: "14ch",
            marginBottom: 26,
          }}
        >
          The Mountains
        </h1>
        <p
          className="reveal reveal-d1"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(13px,1.3vw,15px)",
            fontWeight: 300, color: "#5a5754",
            lineHeight: 1.85, maxWidth: "52ch",
          }}
        >
          Not a blog. A small, considered library on the places we ski —
          written by the people who guide them, for travellers who care
          how a mountain is read.
        </p>

        {/* Filter */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 40 }}>
          {FILTERS.map((f) => {
            const active = filter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                style={{
                  background: active ? "#0A0C0F" : "transparent",
                  color: active ? "rgba(242,239,232,0.95)" : "#5a5754",
                  border: active ? "1px solid #0A0C0F" : "1px solid rgba(15,14,12,0.18)",
                  borderRadius: 100,
                  padding: "10px 22px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.25s, color 0.25s, border-color 0.25s",
                  minHeight: 44,
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* ── Editorial grid ── */}
      <section
        style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "clamp(24px,3vw,40px) clamp(20px,5vw,40px) clamp(72px,10vw,130px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
          gap: "clamp(36px,4.5vw,64px)",
        }}
      >
        {shown.map((a, i) => (
          <Link
            key={a.slug}
            href={`/mountains/${a.slug}`}
            className="ed-wrap ed-fade"
            style={{ display: "block", textDecoration: "none", animationDelay: `${i * 0.06}s` }}
          >
            <div
              style={{
                position: "relative", aspectRatio: "5/6",
                overflow: "hidden", marginBottom: 22, background: "#0a0c0f",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={a.category}
                className="ed-img"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9.5, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#B8965A", marginBottom: 12,
            }}>
              {a.category} · {a.place}
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px,2.6vw,34px)",
              fontWeight: 400, color: "#0f0e0c",
              lineHeight: 1.12, marginBottom: 14,
            }}>
              {a.title}
            </h2>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13, fontWeight: 300,
              color: "#5a5754", lineHeight: 1.7,
              marginBottom: 16,
            }}>
              {a.dek}
            </p>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0e0c",
            }}>
              Read · {a.readTime}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
