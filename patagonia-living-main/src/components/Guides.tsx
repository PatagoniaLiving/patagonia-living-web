import Link from "next/link";
import { GUIDES } from "@/lib/content";

export default function Guides() {
  const team = GUIDES.slice(0, 3);
  return (
    <section
      id="guides"
      style={{
        background: "var(--background)",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 56,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p className="eyebrow">The Team</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px,4.5vw,56px)",
                fontWeight: 300,
                color: "var(--ink)",
                lineHeight: 1.06,
                maxWidth: "20ch",
              }}
            >
              Guides who know every run they book.
            </h2>
          </div>
          <Link
            href="/about"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0e0c",
              borderBottom: "1px solid rgba(15,14,12,0.3)",
              paddingBottom: 4,
            }}
          >
            Meet the team →
          </Link>
        </div>

        <div
          className="r-three"
          style={{
            display: "grid",
            gap: 16,
          }}
        >
          {team.map((g, i) => (
            <div
              key={g.name}
              className={`reveal reveal-d${i + 1} img-rise`}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: 16,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.image}
                alt={g.name}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  filter: "saturate(0.85) brightness(0.72)",
                  transition: "transform 1.2s ease",
                }}
                className="guide-img"
              />
              <div
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, transparent 45%, rgba(10,12,15,0.88) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: "clamp(16px,2.5vw,24px)",
                }}
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(22px,2.4vw,30px)",
                  fontWeight: 400,
                  color: "rgba(242,239,232,0.95)",
                  lineHeight: 1.1,
                }}>
                  {g.name}
                </p>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11, fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "#B8965A",
                  marginTop: 8,
                }}>
                  {g.role} · {g.region}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
