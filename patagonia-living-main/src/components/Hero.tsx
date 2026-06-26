export default function Hero() {
  return (
    <section
      id="top"
      className="hero-in"
      style={{
        padding: "clamp(100px, 14vw, 160px) clamp(20px, 5vw, 72px) clamp(56px, 8vw, 90px)",
        textAlign: "center",
        background: "var(--background)",
      }}
    >
      <p className="eyebrow hero-in hd1">Patagonia · USA · Europe</p>
      <h1
        className="hero-in hd2"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(44px, 7vw, 86px)",
          fontWeight: 300,
          lineHeight: 1.04,
          letterSpacing: "-0.01em",
          maxWidth: 780,
          margin: "16px auto 0",
          color: "var(--bone)",
        }}
      >
        The mountain,{" "}
        <em style={{ fontStyle: "italic", color: "var(--bronze)" }}>handled.</em>
      </h1>
      <p
        className="hero-in hd3"
        style={{
          margin: "22px auto 0",
          fontSize: "clamp(13px, 1.4vw, 15.5px)",
          color: "var(--stone)",
          maxWidth: 500,
          lineHeight: 1.8,
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 300,
        }}
      >
        Private instruction, curated stays, and seamless logistics across the
        Andes, the Rockies, and the Alps.
      </p>
    </section>
  );
}
