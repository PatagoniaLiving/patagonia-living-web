import { STORIES } from "@/lib/content";

export default function Stories() {
  return (
    <section
      id="stories"
      style={{
        background: "#f0ede8",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Journal</p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,4.5vw,56px)",
              fontWeight: 300,
              color: "var(--ink)",
              lineHeight: 1.06,
            }}
          >
            Notes from the mountain.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {STORIES.map((s, i) => (
            <a
              key={s.title}
              href="#stories"
              className={`reveal reveal-d${i + 1}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  borderRadius: 14,
                  marginBottom: 18,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    filter: "saturate(0.88) brightness(0.80)",
                    transition: "transform 1.2s ease",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14, left: 14,
                    background: "rgba(242,239,232,0.88)",
                    backdropFilter: "blur(8px)",
                    borderRadius: 100,
                    padding: "6px 14px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 9, fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#0f0e0c",
                  }}
                >
                  {s.tag}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(18px,2vw,22px)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  transition: "color 0.2s",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B8965A",
                  marginTop: 8,
                }}
              >
                Read →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
