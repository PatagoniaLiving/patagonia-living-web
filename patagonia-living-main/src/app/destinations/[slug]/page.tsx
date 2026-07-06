import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { REGIONS, SERVICES, HOTELS, RESORTS, SITE } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.slug === slug);
  if (!region) return {};
  return {
    title: `${region.name} Ski Travel — Patagonia Living`,
    description: region.blurb,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.slug === slug);
  if (!region) notFound();

  const otherRegions = REGIONS.filter((r) => r.slug !== slug);
  const regionSlug = slug as "patagonia" | "north-america" | "europe";
  const regionResorts = RESORTS.filter((r) => r.region === regionSlug);
  const featuredHotels = HOTELS.filter((h) => h.region === regionSlug && h.featured);
  const allHotels = HOTELS.filter((h) => h.region === regionSlug);

  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main>

        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            height: "85vh",
            minHeight: 560,
            overflow: "hidden",
            background: "#0a0c0f",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={region.image}
            alt={region.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.82) brightness(0.48)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,12,15,0.3) 0%, transparent 35%, rgba(10,12,15,0.88) 100%)",
            }}
          />

          {/* Back link */}
          <div
            style={{
              position: "absolute",
              top: "clamp(24px,3vw,40px)",
              left: "clamp(24px,4vw,56px)",
              zIndex: 10,
            }}
          >
            <Link
              href="/#destinations"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 100,
                padding: "9px 18px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(242,239,232,0.80)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ← All Destinations
            </Link>
          </div>

          {/* Hero text */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "clamp(28px,4vw,60px)",
              zIndex: 5,
            }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8965A",
                marginBottom: 14,
              }}
            >
              {region.region}
            </p>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(52px,8vw,100px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "rgba(242,239,232,0.96)",
                marginBottom: 20,
              }}
            >
              {region.name}
            </h1>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(12px,1.2vw,14px)",
                fontWeight: 300,
                color: "rgba(242,239,232,0.60)",
                maxWidth: 500,
                lineHeight: 1.85,
                letterSpacing: "0.02em",
              }}
            >
              {region.blurb}
            </p>
          </div>
        </section>

        {/* ── Resort bar ── */}
        <div
          style={{
            background: "#15181e",
            borderBottom: "1px solid rgba(242,239,232,0.06)",
            padding: "16px clamp(24px,4vw,56px)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#B8965A",
              whiteSpace: "nowrap",
              fontWeight: 500,
            }}
          >
            Resorts
          </span>
          {region.resorts.map((r, i) => (
            <span key={r} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  color: "rgba(242,239,232,0.72)",
                  fontWeight: 300,
                }}
              >
                {r}
              </span>
              {i < region.resorts.length - 1 && (
                <span style={{ color: "rgba(242,239,232,0.18)", fontSize: 10 }}>·</span>
              )}
            </span>
          ))}
        </div>

        {/* ── Resorts ── */}
        {regionResorts.length > 0 && (
          <section
            style={{
              background: "var(--background)",
              padding: "clamp(64px,9vw,110px) clamp(24px,5vw,72px)",
            }}
          >
            <div className="container-x">
              <div className="reveal" style={{ marginBottom: 48 }}>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Ski Resorts</p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(28px,3.5vw,48px)",
                    fontWeight: 300, color: "var(--ink)", lineHeight: 1.06,
                  }}
                >
                  Choose your resort in {region.name}.
                </h2>
              </div>

              <div
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 16,
                }}
              >
                {regionResorts.map((resort, i) => {
                  const resortHotelCount = allHotels.filter((h) => h.resortSlug === resort.slug).length;
                  return (
                    <Link
                      key={resort.slug}
                      href={`/resorts/${resort.slug}`}
                      className={`reveal reveal-d${Math.min(i + 1, 4)}`}
                      style={{ display: "block", textDecoration: "none" }}
                    >
                      <div
                        className="img-rise"
                        style={{
                          position: "relative", aspectRatio: "4/3",
                          overflow: "hidden", borderRadius: 14, marginBottom: 18,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={resort.image} alt={resort.name}
                          style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "cover",
                            filter: "saturate(0.80) brightness(0.58)",
                            transition: "transform 1.2s ease",
                          }}
                        />
                        <div style={{
                          position: "absolute", inset: 0,
                          background: "linear-gradient(180deg, transparent 35%, rgba(10,12,15,0.90) 100%)",
                        }} />
                        <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                          <p style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 9, fontWeight: 500,
                            letterSpacing: "0.18em", textTransform: "uppercase",
                            color: "#B8965A", marginBottom: 6,
                          }}>
                            {resort.country} · {resort.elevation}
                          </p>
                          <p style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "clamp(20px,2.2vw,28px)",
                            fontWeight: 400, color: "rgba(242,239,232,0.96)", lineHeight: 1.1,
                          }}>
                            {resort.name}
                          </p>
                        </div>
                        {resortHotelCount > 0 && (
                          <span style={{
                            position: "absolute", top: 16, right: 16,
                            background: "rgba(10,12,15,0.55)",
                            backdropFilter: "blur(8px)",
                            borderRadius: 100,
                            padding: "6px 12px",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 9, fontWeight: 500,
                            letterSpacing: "0.1em",
                            color: "rgba(242,239,232,0.75)",
                          }}>
                            {resortHotelCount} {resortHotelCount === 1 ? "hotel" : "hotels"}
                          </span>
                        )}
                      </div>
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 11.5, fontWeight: 300,
                        color: "var(--stone)", lineHeight: 1.6,
                      }}>
                        {resort.tagline}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── What to expect ── */}
        <section
          style={{
            background: "var(--background)",
            padding: "clamp(64px,9vw,120px) clamp(24px,5vw,72px)",
          }}
        >
          <div className="container-x">
            <div
              className="reveal r-two"
              style={{
                display: "grid",
                gap: "clamp(40px,6vw,96px)",
                alignItems: "start",
              }}
            >
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>What to Expect</p>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(32px,4vw,52px)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    marginBottom: 24,
                  }}
                >
                  Every stay personally vetted.<br />Every instructor hand-selected.
                </h2>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    color: "var(--stone)",
                    lineHeight: 1.85,
                    marginBottom: 36,
                  }}
                >
                  We don't send you a list of options. We build your trip from
                  scratch — matching accommodations, instruction, and logistics
                  to your group's specific needs.
                </p>
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener" className="btn-bronze">Plan a Trip to {region.name}</a>
              </div>

              {/* Services list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {SERVICES.map((s, i) => (
                  <div
                    key={s.title}
                    style={{
                      padding: "22px 0",
                      borderBottom: "1px solid var(--line)",
                      display: "flex",
                      gap: 20,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 13,
                        color: "#B8965A",
                        minWidth: 20,
                        paddingTop: 3,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 13,
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                          color: "var(--ink)",
                          marginBottom: 6,
                        }}
                      >
                        {s.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 13.5,
                          fontWeight: 300,
                          color: "var(--stone)",
                          lineHeight: 1.75,
                        }}
                      >
                        {s.blurb}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Other destinations ── */}
        <section
          style={{
            background: "#f0ede8",
            padding: "clamp(64px,9vw,120px) clamp(24px,5vw,72px)",
          }}
        >
          <div className="container-x">
            <div className="reveal" style={{ marginBottom: 48 }}>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Also Explore</p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(30px,4vw,48px)",
                  fontWeight: 300,
                  color: "var(--ink)",
                }}
              >
                More destinations
              </h2>
            </div>
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 16,
              }}
            >
              {otherRegions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/destinations/${r.slug}`}
                  className="img-rise"
                  style={{
                    position: "relative",
                    display: "block",
                    overflow: "hidden",
                    borderRadius: 16,
                    aspectRatio: "3/2",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "saturate(0.85) brightness(0.6)",
                      transition: "transform 0.7s ease, filter 0.5s ease",
                    }}
                    className="dest-card-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, transparent 30%, rgba(10,12,15,0.80) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "clamp(16px,2.5vw,28px)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#B8965A",
                        marginBottom: 6,
                        fontWeight: 500,
                      }}
                    >
                      {r.region}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(24px,3vw,34px)",
                        fontWeight: 300,
                        color: "rgba(242,239,232,0.96)",
                        lineHeight: 1,
                      }}
                    >
                      {r.name}
                    </p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 100,
                      padding: "7px 14px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.85)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Explore →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            background: "#0A0C0F",
            padding: "clamp(72px,10vw,130px) clamp(24px,5vw,72px)",
          }}
          id="contact"
        >
          <div className="container-x reveal">
            <p className="eyebrow" style={{ color: "#B8965A", marginBottom: 16 }}>
              Plan Your Trip to {region.name}
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px,5vw,64px)",
                fontWeight: 300,
                color: "rgba(242,239,232,0.95)",
                maxWidth: "20ch",
                lineHeight: 1.06,
                marginBottom: 20,
              }}
            >
              Tell us where you want to ski.
            </h2>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: "rgba(242,239,232,0.45)",
                maxWidth: 380,
                lineHeight: 1.85,
                marginBottom: 36,
              }}
            >
              Share your dates and group size. We'll send a tailored proposal within 24 hours.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener" className="btn-bronze">
                WhatsApp
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-outline-light">
                {SITE.email}
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
