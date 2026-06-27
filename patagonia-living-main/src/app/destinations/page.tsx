import Link from "next/link";
import { REGIONS, RESORTS, HOTELS } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Destinations — Patagonia Living",
  description: "Ski trips to Patagonia, the United States, and Europe. Private instruction, curated stays, and full concierge.",
};

export default function DestinationsPage() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main style={{ background: "#f7f5f2", paddingTop: 72 }}>

        {/* Header */}
        <div
          style={{
            padding: "clamp(56px,8vw,100px) clamp(20px,5vw,72px) clamp(40px,5vw,64px)",
            maxWidth: 1200, margin: "0 auto",
          }}
        >
          <p
            className="eyebrow reveal"
            style={{ marginBottom: 16 }}
          >
            Where We Operate
          </p>
          <h1
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px,6vw,80px)",
              fontWeight: 300,
              color: "#0f0e0c",
              lineHeight: 1.02,
              maxWidth: "18ch",
            }}
          >
            Three continents. One team.
          </h1>
        </div>

        {/* Region cards */}
        <div
          style={{
            padding: "0 clamp(20px,5vw,72px) clamp(72px,9vw,110px)",
            maxWidth: 1200, margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 80,
          }}
        >
          {REGIONS.map((region, ri) => {
            const regionResorts = RESORTS.filter((r) => r.region === region.slug);
            const hotelCount = HOTELS.filter((h) => h.region === region.slug).length;

            return (
              <div key={region.slug} className={`reveal reveal-d${ri + 1}`}>
                {/* Region hero strip */}
                <Link href={`/destinations/${region.slug}`} style={{ display: "block", textDecoration: "none" }}>
                  <div
                    className="img-rise"
                    style={{
                      position: "relative",
                      height: "clamp(280px,40vw,520px)",
                      overflow: "hidden",
                      borderRadius: 16,
                      marginBottom: 32,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={region.image}
                      alt={region.name}
                      style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        filter: "saturate(0.80) brightness(0.5)",
                        transition: "transform 1.2s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(180deg, rgba(10,12,15,0.1) 0%, rgba(10,12,15,0.75) 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute", bottom: 32, left: 36, right: 36,
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <div>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9.5, fontWeight: 500,
                          letterSpacing: "0.22em", textTransform: "uppercase",
                          color: "#B8965A", marginBottom: 10,
                        }}>
                          {region.region} · {regionResorts.length} resorts · {hotelCount} hotels
                        </p>
                        <h2 style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(36px,5vw,68px)",
                          fontWeight: 300,
                          color: "rgba(242,239,232,0.97)",
                          lineHeight: 0.97,
                        }}>
                          {region.name}
                        </h2>
                      </div>
                      <span style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 10, fontWeight: 500,
                        letterSpacing: "0.14em", textTransform: "uppercase",
                        color: "rgba(242,239,232,0.55)",
                        whiteSpace: "nowrap",
                      }}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Resort cards row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 12,
                  }}
                >
                  {regionResorts.map((resort) => {
                    const count = HOTELS.filter((h) => h.resortSlug === resort.slug).length;
                    return (
                      <Link
                        key={resort.slug}
                        href={`/resorts/${resort.slug}`}
                        style={{ display: "block", textDecoration: "none" }}
                      >
                        <div
                          className="img-rise"
                          style={{
                            position: "relative",
                            aspectRatio: "3/2",
                            overflow: "hidden",
                            borderRadius: 10,
                            marginBottom: 12,
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={resort.image} alt={resort.name}
                            style={{
                              position: "absolute", inset: 0,
                              width: "100%", height: "100%",
                              objectFit: "cover",
                              filter: "saturate(0.78) brightness(0.58)",
                              transition: "transform 1s ease",
                            }}
                          />
                          <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(180deg, transparent 30%, rgba(10,12,15,0.88) 100%)",
                          }} />
                          <div style={{ position: "absolute", bottom: 12, left: 14, right: 14 }}>
                            <p style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "clamp(14px,1.6vw,18px)",
                              fontWeight: 400,
                              color: "rgba(242,239,232,0.95)",
                              lineHeight: 1.1,
                            }}>
                              {resort.name}
                            </p>
                          </div>
                          {count > 0 && (
                            <span style={{
                              position: "absolute", top: 10, right: 10,
                              background: "rgba(10,12,15,0.6)",
                              backdropFilter: "blur(6px)",
                              borderRadius: 100,
                              padding: "4px 9px",
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: 8, fontWeight: 500,
                              color: "rgba(242,239,232,0.7)",
                              letterSpacing: "0.08em",
                            }}>
                              {count}
                            </span>
                          )}
                        </div>
                        <p style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 10, fontWeight: 300,
                          color: "#8a8480", lineHeight: 1.5,
                        }}>
                          {resort.season}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
