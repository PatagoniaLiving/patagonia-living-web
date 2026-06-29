import Link from "next/link";
import { ARTICLES } from "@/lib/content";

export default function Stories() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <section
      id="stories"
      className="journal-section"
      style={{
        background: "#F0EDE8",
        padding: "clamp(72px,10vw,130px) clamp(20px,5vw,72px)",
      }}
    >
      <div className="container-x">
        <div
          className="reveal"
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", flexWrap: "wrap", gap: 20,
            marginBottom: 56,
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>The Journal</p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px,4.5vw,56px)",
                fontWeight: 300,
                color: "var(--ink)",
                lineHeight: 1.06,
              }}
            >
              The Mountains.
            </h2>
          </div>
          <Link
            href="/mountains"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#0f0e0c",
              borderBottom: "1px solid rgba(15,14,12,0.3)",
              paddingBottom: 4,
            }}
          >
            All articles →
          </Link>
        </div>

        {/* Featured */}
        {featured && (
          <Link
            href={`/mountains/${featured.slug}`}
            className="reveal r-two ed-wrap journal-featured"
            style={{ display: "grid", gap: "clamp(24px,4vw,56px)", alignItems: "center", textDecoration: "none", marginBottom: 64 }}
          >
            <div
              style={{
                position: "relative", aspectRatio: "4/3",
                overflow: "hidden", background: "#0a0c0f",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.category}
                className="ed-img"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 16,
              }}>
                {featured.category} · {featured.place}
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px,3.2vw,42px)",
                  fontWeight: 300, color: "var(--ink)",
                  lineHeight: 1.12, marginBottom: 18,
                }}
              >
                {featured.title}
              </h3>
              <p className="journal-dek" style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13, fontWeight: 300,
                color: "var(--stone)", lineHeight: 1.85,
                marginBottom: 24, maxWidth: "44ch",
              }}>
                {featured.dek}
              </p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#B8965A",
              }}>
                Read · {featured.readTime} →
              </p>
            </div>
          </Link>
        )}

        {/* Grid of the rest */}
        <div
          className="journal-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "clamp(24px,3vw,36px)",
          }}
        >
          {rest.map((a, i) => (
            <Link
              key={a.slug}
              href={`/mountains/${a.slug}`}
              className={`ed-wrap reveal reveal-d${Math.min(i + 1, 4)}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <div
                style={{
                  position: "relative", aspectRatio: "4/3",
                  overflow: "hidden", marginBottom: 18, background: "#0a0c0f",
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
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 8,
              }}>
                {a.category}
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(19px,2vw,24px)",
                  fontWeight: 400, color: "var(--ink)",
                  lineHeight: 1.18, marginBottom: 10,
                }}
              >
                {a.title}
              </h3>
              <p className="journal-dek" style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11.5, fontWeight: 300,
                color: "var(--stone)", lineHeight: 1.6,
              }}>
                {a.dek}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
