import { notFound } from "next/navigation";
import Link from "next/link";
import { HOTELS, REGIONS, SITE } from "@/lib/content";

export async function generateStaticParams() {
  return HOTELS.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) return {};
  return {
    title: `${hotel.name} — Patagonia Living`,
    description: hotel.description.slice(0, 155),
  };
}

export default async function HotelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) notFound();

  const region = REGIONS.find((r) => r.slug === hotel.region);
  const related = HOTELS.filter(
    (h) => h.region === hotel.region && h.slug !== hotel.slug
  ).slice(0, 3);

  return (
    <main style={{ background: "#f7f5f2", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: "70vh", minHeight: 480 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hotel.image}
          alt={hotel.name}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            filter: "saturate(0.82) brightness(0.55)",
          }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(10,12,15,0.35) 0%, rgba(10,12,15,0.72) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            padding: "clamp(32px,5vw,72px)",
          }}
        >
          <Link
            href={`/destinations/${hotel.region}`}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(242,239,232,0.65)",
              marginBottom: 20,
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            ← {region?.name ?? hotel.region}
          </Link>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#B8965A",
              marginBottom: 12,
            }}
          >
            {hotel.category} · {hotel.resort}
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 300,
              color: "rgba(242,239,232,0.95)",
              lineHeight: 1.05,
              maxWidth: "22ch",
            }}
          >
            {hotel.name}
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(16px,1.8vw,21px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(242,239,232,0.62)",
              marginTop: 12,
            }}
          >
            {hotel.tagline}
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "clamp(56px,8vw,100px) clamp(20px,5vw,72px)",
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: "clamp(48px,6vw,80px)",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(13px,1.3vw,15px)",
              fontWeight: 300,
              color: "#5a5754",
              lineHeight: 1.85,
              marginBottom: 48,
            }}
          >
            {hotel.description}
          </p>

          <div style={{ borderTop: "1px solid rgba(15,14,12,0.1)", paddingTop: 40 }}>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#B8965A",
                marginBottom: 24,
              }}
            >
              Property Highlights
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {hotel.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13, fontWeight: 300,
                    color: "#0f0e0c",
                    lineHeight: 1.7,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(15,14,12,0.07)",
                    display: "flex", gap: 14, alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "#B8965A", flexShrink: 0, marginTop: 2 }}>—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — CTA Card */}
        <div style={{ position: "sticky", top: 100 }}>
          <div
            style={{
              background: "#0A0C0F",
              padding: "clamp(28px,3vw,44px)",
              borderRadius: 4,
            }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 20,
              }}
            >
              Book via Patagonia Living
            </p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px,2vw,28px)",
                fontWeight: 300, lineHeight: 1.2,
                color: "rgba(242,239,232,0.92)",
                marginBottom: 16,
              }}
            >
              We arrange everything around your stay at {hotel.name}.
            </h3>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12, fontWeight: 300,
                color: "rgba(242,239,232,0.45)",
                lineHeight: 1.75, marginBottom: 28,
              }}
            >
              Ski instruction, transfers, lift passes, and concierge — co-ordinated with the hotel before you arrive.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href={SITE.whatsappUrl}
                target="_blank" rel="noopener"
                style={{
                  background: "#B8965A", color: "#fff",
                  padding: "14px 24px", borderRadius: 100,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Plan via WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}?subject=Enquiry: ${hotel.name}`}
                style={{
                  border: "1px solid rgba(242,239,232,0.15)",
                  color: "rgba(242,239,232,0.55)",
                  padding: "14px 24px", borderRadius: 100,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 400,
                  letterSpacing: "0.06em",
                  textAlign: "center",
                }}
              >
                Send an Enquiry
              </a>
            </div>
          </div>

          <div style={{ marginTop: 24, padding: "24px 0", borderTop: "1px solid rgba(15,14,12,0.1)" }}>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11, fontWeight: 300,
                color: "#8a8480", lineHeight: 1.7,
              }}
            >
              Proposal within 48 hours. Every stay we book, we have personally stayed in.
            </p>
          </div>
        </div>
      </div>

      {/* ── RELATED HOTELS ── */}
      {related.length > 0 && (
        <div
          style={{
            background: "#F2EFE8",
            padding: "clamp(56px,7vw,88px) clamp(20px,5vw,72px)",
          }}
        >
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 32,
              }}
            >
              More in {region?.name ?? hotel.region}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
                gap: 16,
              }}
            >
              {related.map((h) => (
                <Link
                  key={h.slug}
                  href={`/hotels/${h.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      borderRadius: 12,
                      marginBottom: 16,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={h.image}
                      alt={h.name}
                      style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        filter: "saturate(0.8) brightness(0.7)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(180deg, transparent 50%, rgba(10,12,15,0.8) 100%)",
                      }}
                    />
                    <div style={{ position: "absolute", bottom: 18, left: 18 }}>
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 9, fontWeight: 500,
                        letterSpacing: "0.16em", textTransform: "uppercase",
                        color: "#B8965A", marginBottom: 6,
                      }}>
                        {h.resort}
                      </p>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(16px,1.8vw,20px)",
                        fontWeight: 400,
                        color: "rgba(242,239,232,0.92)",
                        lineHeight: 1.1,
                      }}>
                        {h.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
