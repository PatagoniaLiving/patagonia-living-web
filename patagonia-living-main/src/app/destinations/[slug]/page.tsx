import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { REGIONS, SITE, SERVICES } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

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
    title: `${region.name} Ski Travel`,
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

  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ height: "88vh", minHeight: 580 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={region.image}
            alt={region.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.82) 100%)",
            }}
          />

          {/* Back */}
          <div className="absolute top-8 left-[clamp(20px,4vw,52px)] z-10">
            <Link
              href="/#destinations"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.20)",
                borderRadius: 50,
                padding: "9px 18px",
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.88)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                transition: "background 0.25s ease",
              }}
            >
              ← All destinations
            </Link>
          </div>

          {/* Hero text */}
          <div
            className="absolute bottom-0 left-0 right-0 p-[clamp(24px,4vw,56px)]"
            style={{ zIndex: 5 }}
          >
            <p
              className="text-[11px] font-medium tracking-[0.14em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              {region.region}
            </p>
            <h1
              className="display-xl"
              style={{ color: "rgba(255,255,255,0.96)" }}
            >
              {region.name}
            </h1>
            <p
              className="mt-5 max-w-[48ch] text-[17px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              {region.blurb}
            </p>
          </div>
        </section>

        {/* ── Resorts ── */}
        <section
          className="section"
          style={{ background: "var(--background)" }}
        >
          <div className="container-x">
            <div className="reveal grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">

              <div>
                <p className="eyebrow mb-4">What to expect</p>
                <h2 className="display-md mb-6">
                  Hand-picked stays,<br />every run scouted.
                </h2>
                <p
                  className="text-[16px] leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  Every hotel we recommend in {region.name}, we have stayed in.
                  Every instructor we book, we have skied with. No exceptions —
                  which means you arrive knowing exactly what you&apos;re getting.
                </p>
                <a
                  href="#contact"
                  className="pill pill-dark mt-8 inline-flex"
                >
                  Plan a trip to {region.name} →
                </a>
              </div>

              <div>
                <p className="eyebrow mb-5">Resorts we cover</p>
                <div className="flex flex-wrap gap-2">
                  {region.resorts.map((resort) => (
                    <span
                      key={resort}
                      className="text-[13px] font-medium"
                      style={{
                        background: "var(--pill)",
                        color: "var(--ink)",
                        padding: "9px 18px",
                        borderRadius: 50,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {resort}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section
          className="section"
          style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}
        >
          <div className="container-x">
            <div className="reveal mb-12">
              <p className="eyebrow mb-3">What&apos;s included</p>
              <h2 className="display-md max-w-[18ch]">
                Everything handled end to end
              </h2>
            </div>
            <div className="reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="card-soft p-7 flex flex-col gap-3"
                >
                  <h3
                    className="text-[17px] font-medium tracking-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other destinations ── */}
        <section
          className="section"
          style={{ background: "var(--background)", borderTop: "1px solid var(--line)" }}
        >
          <div className="container-x">
            <div className="reveal mb-10">
              <p className="eyebrow mb-3">Also explore</p>
              <h2 className="display-md">More destinations</h2>
            </div>
            <div className="reveal grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherRegions.map((r) => (
                <Link
                  key={r.slug}
                  href={`/destinations/${r.slug}`}
                  className="relative overflow-hidden block group"
                  style={{ borderRadius: 20, aspectRatio: "16/9" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                    style={{ transform: "scale(1)" }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.72) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p
                      className="text-[11px] font-medium tracking-[0.12em] uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {r.region}
                    </p>
                    <p
                      className="text-[24px] font-medium tracking-tight"
                      style={{ color: "rgba(255,255,255,0.96)" }}
                    >
                      {r.name}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: 50,
                        padding: "7px 14px",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.80)",
                      }}
                    >
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
