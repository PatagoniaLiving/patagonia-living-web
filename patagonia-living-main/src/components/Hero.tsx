"use client";
export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 600,
        overflow: "hidden",
        background: "#0a0c0f",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "saturate(0.9) brightness(0.50)",
        }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,12,15,0.2) 0%, transparent 35%, rgba(10,12,15,0.72) 100%)",
        }}
      />

      {/* Content — bottom aligned */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(28px,4vw,60px)",
        }}
      >
        <p
          className="hero-in hd1"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#B8965A",
            marginBottom: 18,
          }}
        >
          Boutique Ski Travel · Patagonia · United States · Europe
        </p>

        <h1
          className="hero-in hd2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(46px, 6.5vw, 88px)",
            fontWeight: 300,
            lineHeight: 1.03,
            color: "rgba(242,239,232,0.97)",
            maxWidth: "16ch",
            letterSpacing: "0.01em",
          }}
        >
          Private ski trips,<br />
          <em style={{ fontStyle: "italic", color: "rgba(242,239,232,0.75)" }}>
            handled end to end.
          </em>
        </h1>

        <p
          className="hero-in hd3"
          style={{
            marginTop: 22,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(12px,1.2vw,14px)",
            fontWeight: 300,
            color: "rgba(242,239,232,0.58)",
            maxWidth: 420,
            lineHeight: 1.85,
            letterSpacing: "0.02em",
          }}
        >
          Patagonia Living is a boutique agency for high-end ski travel.
          Curated accommodations, private instruction, and full logistics —
          in Bariloche, the Rockies, and the Alps.
        </p>

        <div
          className="hero-in hd4"
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}
        >
          <a
            href="#destinations"
            style={{
              background: "#B8965A",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 100,
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              transition: "background 0.25s, transform 0.25s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#ccaa6d";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#B8965A";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            See Destinations
          </a>
          <a
            href="#contact"
            style={{
              border: "1px solid rgba(242,239,232,0.22)",
              color: "rgba(242,239,232,0.82)",
              padding: "14px 28px",
              borderRadius: 100,
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              transition: "border-color 0.25s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#B8965A"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(242,239,232,0.22)"}
          >
            Plan My Trip
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="hero-in hd5"
          style={{
            display: "flex",
            gap: "clamp(28px,4vw,56px)",
            marginTop: 52,
            paddingTop: 28,
            borderTop: "1px solid rgba(242,239,232,0.10)",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "21", label: "Ski resorts" },
            { value: "3", label: "Continents" },
            { value: "48h", label: "Custom proposal" },
            { value: "100%", label: "Personally vetted" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(24px,2.8vw,36px)",
                  fontWeight: 300,
                  color: "rgba(242,239,232,0.92)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(242,239,232,0.38)",
                  marginTop: 6,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
