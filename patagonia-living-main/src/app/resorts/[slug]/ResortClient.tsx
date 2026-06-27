"use client";
import { useState } from "react";
import Link from "next/link";
import type { Resort, Hotel, Region } from "@/lib/content";
import { SITE } from "@/lib/content";
import HotelDrawer from "@/components/HotelDrawer";

interface Props {
  resort: Resort;
  region: Region | null;
  hotels: Hotel[];
  siblingResorts: Resort[];
}

export default function ResortClient({ resort, region, hotels, siblingResorts }: Props) {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const featuredHotels = hotels.filter((h) => h.featured);
  const otherHotels = hotels.filter((h) => !h.featured);

  return (
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
            background: "linear-gradient(180deg, rgba(10,12,15,0.4) 0%, rgba(10,12,15,0.80) 100%)",
          }}
        />

        {/* Breadcrumb */}
        <div style={{
          position: "absolute",
          top: "calc(72px + clamp(16px,2vw,28px))",
          left: "clamp(24px,4vw,56px)",
          zIndex: 10,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <Link
            href="/destinations"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9.5, fontWeight: 400,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "rgba(242,239,232,0.40)",
              textDecoration: "none",
            }}
          >
            Destinations
          </Link>
          <span style={{ color: "rgba(242,239,232,0.22)", fontSize: 10 }}>›</span>
          <Link
            href={`/destinations/${resort.region}`}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9.5, fontWeight: 400,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "rgba(242,239,232,0.40)",
              textDecoration: "none",
            }}
          >
            {region?.name ?? resort.region}
          </Link>
          <span style={{ color: "rgba(242,239,232,0.22)", fontSize: 10 }}>›</span>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9.5, fontWeight: 500,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "rgba(242,239,232,0.70)",
          }}>
            {resort.name}
          </span>
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
              fontSize: "clamp(38px,6vw,80px)",
              fontWeight: 300,
              lineHeight: 0.97,
              color: "rgba(242,239,232,0.96)",
              marginBottom: 16,
            }}
          >
            {resort.name}
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(15px,1.8vw,21px)",
              fontStyle: "italic", fontWeight: 300,
              color: "rgba(242,239,232,0.55)",
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
          maxWidth: 780, margin: "0 auto",
          padding: "clamp(48px,6vw,80px) clamp(20px,5vw,72px) clamp(24px,3vw,40px)",
        }}
      >
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(13px,1.3vw,14.5px)",
          fontWeight: 300, color: "#5a5754", lineHeight: 1.9,
        }}>
          {resort.description}
        </p>
      </div>

      {/* ── HOTELS ── */}
      <div
        style={{
          padding: "0 clamp(20px,5vw,72px) clamp(64px,8vw,100px)",
          maxWidth: 1200, margin: "0 auto",
        }}
      >
        {hotels.length > 0 ? (
          <>
            <div style={{ marginBottom: 36 }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9, fontWeight: 500,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 10,
              }}>
                Where We Stay · {hotels.length} {hotels.length === 1 ? "property" : "properties"}
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(26px,3.2vw,44px)",
                fontWeight: 300, color: "#0f0e0c", lineHeight: 1.06,
              }}>
                Curated hotels in {resort.name}.
              </h2>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12, fontWeight: 300, color: "#8a8480",
                marginTop: 10,
              }}>
                Click any hotel to see details.
              </p>
            </div>

            {/* Featured hotels */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 18,
                marginBottom: otherHotels.length > 0 ? 48 : 0,
              }}
            >
              {featuredHotels.map((hotel) => (
                <button
                  key={hotel.slug}
                  onClick={() => setSelectedHotel(hotel)}
                  style={{
                    background: "none", border: "none",
                    cursor: "pointer", textAlign: "left",
                    padding: 0,
                  }}
                >
                  <div
                    style={{
                      position: "relative", aspectRatio: "4/3",
                      overflow: "hidden", borderRadius: 14, marginBottom: 16,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={hotel.image} alt={hotel.name}
                      style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        filter: "saturate(0.82) brightness(0.60)",
                        transition: "transform 1.1s ease, filter 0.4s",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg, transparent 38%, rgba(10,12,15,0.90) 100%)",
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
                        fontWeight: 400,
                        color: "rgba(242,239,232,0.96)", lineHeight: 1.1,
                      }}>
                        {hotel.name}
                      </p>
                    </div>
                    {/* View hint */}
                    <span style={{
                      position: "absolute", top: 14, right: 14,
                      background: "rgba(10,12,15,0.5)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(242,239,232,0.12)",
                      borderRadius: 100,
                      padding: "5px 11px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 8.5, fontWeight: 500,
                      letterSpacing: "0.1em",
                      color: "rgba(242,239,232,0.65)",
                    }}>
                      View →
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12, fontWeight: 300,
                    color: "#5a5754", lineHeight: 1.65,
                  }}>
                    {hotel.tagline}
                  </p>
                </button>
              ))}
            </div>

            {/* Other hotels list */}
            {otherHotels.length > 0 && (
              <div style={{ borderTop: "1px solid rgba(15,14,12,0.09)", paddingTop: 36 }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#8a8480", marginBottom: 18,
                }}>
                  Also Available
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: 1,
                  background: "rgba(15,14,12,0.07)",
                  border: "1px solid rgba(15,14,12,0.07)",
                }}>
                  {otherHotels.map((hotel) => (
                    <button
                      key={hotel.slug}
                      onClick={() => setSelectedHotel(hotel)}
                      style={{
                        background: "#f7f5f2", border: "none",
                        padding: "20px 22px", textAlign: "left",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#F0EDE8")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#f7f5f2")}
                    >
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 8.5, fontWeight: 500,
                        letterSpacing: "0.14em", textTransform: "uppercase",
                        color: "#B8965A", marginBottom: 6,
                      }}>
                        {hotel.category}
                      </p>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(15px,1.5vw,19px)",
                        fontWeight: 400, color: "#0f0e0c", lineHeight: 1.2, marginBottom: 4,
                      }}>
                        {hotel.name}
                      </p>
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 10, fontWeight: 300, color: "#8a8480",
                      }}>
                        {hotel.tagline}
                      </p>
                    </button>
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
              Tell us your dates and group for {resort.name}.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener"
              style={{
                background: "#B8965A", color: "#fff",
                padding: "15px 30px", borderRadius: 100,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                textDecoration: "none", whiteSpace: "nowrap",
              }}>
              WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`}
              style={{
                border: "1px solid rgba(242,239,232,0.2)",
                color: "rgba(242,239,232,0.65)",
                padding: "15px 30px", borderRadius: 100,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 400,
                letterSpacing: "0.06em",
                textDecoration: "none", whiteSpace: "nowrap",
              }}>
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* ── SIBLING RESORTS ── */}
      {siblingResorts.length > 0 && (
        <div style={{ padding: "clamp(48px,6vw,80px) clamp(20px,5vw,72px)", maxWidth: 1200, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 9, fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#8a8480", marginBottom: 24,
          }}>
            More in {region?.name ?? resort.region}
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 12,
          }}>
            {siblingResorts.map((r) => (
              <Link key={r.slug} href={`/resorts/${r.slug}`} style={{ display: "block", textDecoration: "none" }}>
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderRadius: 10 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.name}
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
                  <div style={{ position: "absolute", bottom: 14, left: 16 }}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(16px,2vw,20px)",
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

      {/* Hotel Drawer */}
      <HotelDrawer hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
    </main>
  );
}
