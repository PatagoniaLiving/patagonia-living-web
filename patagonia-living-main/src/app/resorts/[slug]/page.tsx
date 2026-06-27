import { notFound } from "next/navigation";
import Link from "next/link";
import { RESORTS, HOTELS, REGIONS, SITE } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return RESORTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resort = RESORTS.find((r) => r.slug === slug);
  if (!resort) return {};
  return {
    title: `${resort.name} Ski Hotels — Patagonia Living`,
    description: resort.tagline,
  };
}

export default async function ResortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resort = RESORTS.find((r) => r.slug === slug);
  if (!resort) notFound();

  const region = REGIONS.find((r) => r.slug === resort.region);
  const hotels = HOTELS.filter((h) => h.resortSlug === slug);
  const featuredHotels = hotels.filter((h) => h.featured);
  const otherHotels = hotels.filter((h) => !h.featured);

  // Other resorts in same region
  const siblingResorts = RESORTS.filter(
    (r) => r.region === resort.region && r.slug !== slug
  );

  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main style={{ background: "#f7f5f2", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            height: "80vh",
            minHeight: 560,
            overflow: "hidden",
            background: "#0a0c0f",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.image}
            alt={resort.name}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "saturate(0.80) brightness(0.45)",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(10,12,15,0.2) 0%, rgba(10,12,15,0.82) 100%)",
            }}
          />

          {/* Breadcrumb */}
          <div style={{ position: "absolute", top: "clamp(24px,3vw,40px)", left: "clamp(24px,4vw,56px)", zIndex: 10, display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href={`/destinations/${resort.region}`}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "rgba(242,239,232,0.55)",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              ← {region?.name ?? resort.region}
            </Link>
          </div>

          {/* Hero text */}
          <div
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "clamp(32px,5vw,72px)",
              zIndex: 5,
            }}
          >
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9.5, fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#B8965A", marginBottom: 12,
            }}>
              {resort.country} · {resort.elevation} · {resort.season}
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px,6.5vw,84px)",
                fontWeight: 300,
                lineHeight: 0.97,
                color: "rgba(242,239,232,0.96)",
                marginBottom: 18,
              }}
            >
              {resort.name}
            </h1>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px,1.8vw,22px)",
                fontStyle: "italic", fontWeight: 300,
                color: "rgba(242,239,232,0.58)",
                maxWidth: "52ch",
              }}
            >
              {resort.tagline}
            </p>
          </div>
        </section>

        {/* ── RESORT INTRO ── */}
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "clamp(56px,7vw,88px) clamp(20px,5vw,72px) clamp(32px,4vw,48px)",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(13px,1.3vw,15px)",
              fontWeight: 300,
              color: "#5a5754",
              lineHeight: 1.9,
            }}
          >
            {resort.description}
          </p>
        </div>

        {/* ── HOTELS ── */}
        <div
          style={{
            padding: "0 clamp(20px,5vw,72px) clamp(72px,9vw,110px)",
            maxWidth: 1200, margin: "0 auto",
          }}
        >
          {hotels.length > 0 ? (
            <>
              <div style={{ marginBottom: 40 }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "#B8965A", marginBottom: 10,
                }}>
                  Where We Stay in {resort.name}
                </p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(28px,3.5vw,48px)",
                    fontWeight: 300, color: "#0f0e0c", lineHeight: 1.06,
                  }}
                >
                  {hotels.length} curated {hotels.length === 1 ? "property" : "properties"}.
                </h2>
              </div>

              {/* Featured hotels — grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 20,
                  marginBottom: otherHotels.length > 0 ? 56 : 0,
                }}
              >
                {featuredHotels.map((hotel) => (
                  <Link
                    key={hotel.slug}
                    href={`/hotels/${hotel.slug}`}
                    style={{ display: "block", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        position: "relative", aspectRatio: "4/3",
                        overflow: "hidden", borderRadius: 14, marginBottom: 18,
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hotel.image} alt={hotel.name}
                        style={{
                          position: "absolute", inset: 0,
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          filter: "saturate(0.82) brightness(0.62)",
                          transition: "transform 1.1s ease",
                        }}
                      />
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(180deg, transparent 40%, rgba(10,12,15,0.88) 100%)",
                      }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9, fontWeight: 500,
                          letterSpacing: "0.16em", textTransform: "uppercase",
                          color: "#B8965A", marginBottom: 6,
                        }}>
                          {hotel.category}
                        </p>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(18px,2vw,24px)",
                          fontWeight: 400, color: "rgba(242,239,232,0.95)", lineHeight: 1.1,
                        }}>
                          {hotel.name}
                        </p>
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12, fontWeight: 300,
                      color: "#5a5754", lineHeight: 1.65,
                    }}>
                      {hotel.tagline}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Other hotels — compact list */}
              {otherHotels.length > 0 && (
                <div style={{ borderTop: "1px solid rgba(15,14,12,0.09)", paddingTop: 40 }}>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 9, fontWeight: 500,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "#8a8480", marginBottom: 20,
                  }}>
                    Also Available
                  </p>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: 1,
                    background: "rgba(15,14,12,0.07)",
                    border: "1px solid rgba(15,14,12,0.07)",
                  }}>
                    {otherHotels.map((hotel) => (
                      <Link
                        key={hotel.slug}
                        href={`/hotels/${hotel.slug}`}
                        style={{
                          display: "block", background: "#f7f5f2",
                          padding: "22px 24px", textDecoration: "none",
                        }}
                      >
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9, fontWeight: 500,
                          letterSpacing: "0.14em", textTransform: "uppercase",
                          color: "#B8965A", marginBottom: 7,
                        }}>
                          {hotel.category}
                        </p>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(16px,1.6vw,20px)",
                          fontWeight: 400, color: "#0f0e0c", lineHeight: 1.2, marginBottom: 4,
                        }}>
                          {hotel.name}
                        </p>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 10.5, fontWeight: 300, color: "#8a8480",
                        }}>
                          {hotel.tagline}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14, fontWeight: 300, color: "#8a8480",
            }}>
              Contact us to discuss accommodation options in {resort.name}.
            </p>
          )}
        </div>

        {/* ── CTA ── */}
        <div style={{ background: "#0A0C0F", padding: "clamp(56px,7vw,88px) clamp(20px,5vw,72px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 36 }}>
            <div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 14,
              }}>
                Plan Your Trip
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(26px,3.5vw,48px)",
                fontWeight: 300, color: "rgba(242,239,232,0.92)",
                lineHeight: 1.1, maxWidth: "30ch",
              }}>
                Tell us your dates and group size for {resort.name}.
              </h2>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={SITE.whatsappUrl}
                target="_blank" rel="noopener"
                style={{
                  background: "#B8965A", color: "#fff",
                  padding: "16px 32px", borderRadius: 100,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                style={{
                  border: "1px solid rgba(242,239,232,0.2)",
                  color: "rgba(242,239,232,0.65)",
                  padding: "16px 32px", borderRadius: 100,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10, fontWeight: 400,
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* ── OTHER RESORTS IN REGION ── */}
        {siblingResorts.length > 0 && (
          <div style={{ padding: "clamp(56px,7vw,88px) clamp(20px,5vw,72px)", maxWidth: 1200, margin: "0 auto" }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9, fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#8a8480", marginBottom: 28,
            }}>
              More in {region?.name ?? resort.region}
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 14,
            }}>
              {siblingResorts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resorts/${r.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    borderRadius: 12,
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image} alt={r.name}
                      style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        filter: "saturate(0.78) brightness(0.55)",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg, transparent 40%, rgba(10,12,15,0.85) 100%)",
                    }} />
                    <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 9, letterSpacing: "0.16em",
                        textTransform: "uppercase", color: "#B8965A",
                        marginBottom: 5, fontWeight: 500,
                      }}>
                        {r.country}
                      </p>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(18px,2vw,22px)",
                        fontWeight: 400, color: "rgba(242,239,232,0.95)",
                      }}>
                        {r.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>
      <SiteFooter />
    </>
  );
}
