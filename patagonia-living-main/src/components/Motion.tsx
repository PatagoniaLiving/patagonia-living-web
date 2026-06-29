"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "8+", label: "Years guiding" },
  { value: "21", label: "Ski resorts" },
  { value: "3", label: "Continents" },
  { value: "24h", label: "Proposal turnaround" },
  { value: "100%", label: "Personally vetted" },
];

function CountUp({ value, label }: { value: string; label: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : "";
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(target); return; }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1600;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ borderLeft: "1px solid rgba(184,150,90,0.4)", paddingLeft: 16 }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px,3.5vw,44px)",
        fontWeight: 300,
        color: "rgba(242,239,232,0.95)",
        lineHeight: 1,
      }}>
        {n}{suffix}
      </p>
      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 9, fontWeight: 500,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: "rgba(242,239,232,0.40)",
        marginTop: 6,
      }}>
        {label}
      </p>
    </div>
  );
}

export default function Motion() {
  return (
    <section style={{ background: "var(--background)", padding: "clamp(56px,7vw,96px) clamp(20px,5vw,72px) clamp(64px,9vw,120px)" }}>
      <div className="container-x">
        <div
          className="reveal"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 20,
            height: "clamp(380px,52vw,620px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pat-vista.jpg"
            alt="Patagonia ski landscape"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "saturate(0.88) brightness(0.55)",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(120deg, rgba(10,12,15,0.70) 0%, rgba(10,12,15,0.10) 60%, rgba(10,12,15,0) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              justifyContent: "space-between",
              padding: "clamp(28px,4vw,56px)",
            }}
          >
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#B8965A",
            }}>
              Our Approach
            </p>

            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px,4.5vw,60px)",
                  fontWeight: 300, lineHeight: 1.06,
                  color: "rgba(242,239,232,0.95)",
                  maxWidth: "18ch",
                  marginBottom: 40,
                }}
              >
                We&apos;ve skied every run we book.{" "}
                <em style={{ color: "rgba(242,239,232,0.55)" }}>That&apos;s the difference.</em>
              </h2>

              <div style={{ display: "flex", gap: "clamp(28px,4vw,56px)", flexWrap: "wrap" }}>
                {STATS.map((s) => (
                  <CountUp key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
