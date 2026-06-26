export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 580,
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
          filter: "saturate(0.85) brightness(0.52)",
        }}
      >
        <source src="/video/hero.mov" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,12,15,0.35) 0%, rgba(10,12,15,0.05) 38%, rgba(10,12,15,0.78) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "clamp(24px,4vw,56px)",
        }}
      >
        <p
          className="hero-in hd1 eyebrow"
          style={{ color: "rgba(184,150,90,0.9)", marginBottom: 16 }}
        >
          Luxury Ski Travel · Patagonia · USA · Europe
        </p>

        <h1
          className="hero-in hd2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 7vw, 96px)",
            fontWeight: 300,
            lineHeight: 1.02,
            color: "rgba(242,239,232,0.96)",
            maxWidth: "14ch",
            letterSpacing: "-0.01em",
          }}
        >
          Luxury ski trips to Patagonia, USA & Europe
        </h1>

        <p
          className="hero-in hd3"
          style={{
            marginTop: 20,
            fontSize: "clamp(13px,1.3vw,15px)",
            color: "rgba(242,239,232,0.65)",
            maxWidth: 480,
            lineHeight: 1.8,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          Private ski instruction, curated luxury stays, and full logistics
          handled end to end — from Buenos Aires to Aspen to the Alps.
        </p>

        <div
          className="hero-in hd4"
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}
        >
          <a href="#destinations" className="btn-bronze">
            Explore Destinations
          </a>
          <a href="#contact" className="btn-outline-light">
            Get a Custom Quote
          </a>
        </div>

        {/* Stat strip */}
        <div
          className="hero-in hd5"
          style={{
            display: "flex",
            gap: "clamp(24px,4vw,48px)",
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid rgba(242,239,232,0.12)",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "21", label: "Ski resorts" },
            { value: "3", label: "Continents" },
            { value: "48h", label: "Proposal turnaround" },
            { value: "100%", label: "Personally vetted" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px,3vw,38px)",
                  fontWeight: 300,
                  color: "rgba(242,239,232,0.95)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(242,239,232,0.45)",
                  fontFamily: "'Montserrat', sans-serif",
                  marginTop: 5,
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
