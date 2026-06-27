import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section
      style={{
        background: "#0A0C0F",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">
        <div className="reveal" style={{ marginBottom: 64 }}>
          <p className="eyebrow" style={{ color: "#B8965A", marginBottom: 14 }}>Travelers</p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,4.5vw,56px)",
              fontWeight: 300,
              color: "rgba(242,239,232,0.90)",
              lineHeight: 1.06,
            }}
          >
            What our clients say.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 1,
            background: "rgba(242,239,232,0.07)",
            border: "1px solid rgba(242,239,232,0.07)",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-d${i + 1}`}
              style={{
                background: "#0A0C0F",
                padding: "clamp(32px,4vw,52px) clamp(24px,3vw,40px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 40,
                margin: 0,
              }}
            >
              <blockquote
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(22px,2.4vw,30px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.45,
                  color: "rgba(242,239,232,0.86)",
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13, fontWeight: 500,
                  color: "rgba(242,239,232,0.80)",
                  letterSpacing: "0.04em",
                }}>
                  {t.name}
                </p>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12, fontWeight: 300,
                  color: "#B8965A",
                  marginTop: 5, letterSpacing: "0.04em",
                }}>
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
