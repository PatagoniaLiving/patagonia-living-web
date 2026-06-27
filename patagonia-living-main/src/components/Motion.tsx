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
            {/* Eyebrow */}
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#B8965A",
            }}>
              Our Approach
            </p>

            {/* Bottom: quote + stats */}
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
                We've skied every run we book.{" "}
                <em style={{ color: "rgba(242,239,232,0.55)" }}>That's the difference.</em>
              </h2>

              {/* Stats row — no pills, just clean numbers */}
              <div style={{ display: "flex", gap: "clamp(32px,5vw,64px)", flexWrap: "wrap" }}>
                {[
                  { value: "21", label: "Ski resorts" },
                  { value: "3", label: "Continents" },
                  { value: "48h", label: "Proposal turnaround" },
                  { value: "100%", label: "Personally vetted" },
                ].map((s) => (
                  <div key={s.label} style={{ borderLeft: "1px solid rgba(184,150,90,0.4)", paddingLeft: 16 }}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(28px,3.5vw,44px)",
                      fontWeight: 300,
                      color: "rgba(242,239,232,0.95)",
                      lineHeight: 1,
                    }}>
                      {s.value}
                    </p>
                    <p style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 9, fontWeight: 500,
                      letterSpacing: "0.16em", textTransform: "uppercase",
                      color: "rgba(242,239,232,0.40)",
                      marginTop: 6,
                    }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
