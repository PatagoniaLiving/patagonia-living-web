import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingCTA from "@/components/FloatingCTA";

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.category}: ${article.title} — Patagonia Living`,
    description: article.dek,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];

  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main style={{ background: "#f7f5f2" }}>

        {/* ── Full-width hero image ── */}
        <section
          style={{
            position: "relative",
            height: "clamp(420px,72vh,760px)",
            overflow: "hidden",
            background: "#0a0c0f",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.image}
            alt={article.category}
            className="ed-img"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "grayscale(1) contrast(1.03) brightness(0.62)",
            }}
          />
          <div
            style={{
              position: "absolute", inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,12,15,0.35) 0%, transparent 38%, rgba(10,12,15,0.78) 100%)",
            }}
          />

          {/* Back link */}
          <div style={{ position: "absolute", top: "calc(72px + clamp(16px,2vw,28px))", left: "clamp(20px,5vw,72px)", zIndex: 10 }}>
            <Link
              href="/mountains"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 100,
                padding: "9px 18px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(242,239,232,0.82)",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >
              ← The Mountains
            </Link>
          </div>

          {/* Title block */}
          <div
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "clamp(28px,5vw,64px) clamp(20px,5vw,72px)",
              zIndex: 5,
            }}
          >
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "#B8965A", marginBottom: 16,
              }}>
                {article.category} · {article.place}
              </p>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px,5.5vw,72px)",
                fontWeight: 300, lineHeight: 1.04,
                color: "rgba(242,239,232,0.97)",
                maxWidth: "20ch",
              }}>
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <article
          className="reveal"
          style={{
            maxWidth: 720, margin: "0 auto",
            padding: "clamp(48px,7vw,96px) clamp(20px,5vw,40px) clamp(56px,8vw,104px)",
          }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(20px,2.4vw,28px)",
            fontStyle: "italic", fontWeight: 300,
            color: "#5a5754", lineHeight: 1.5,
            marginBottom: "clamp(32px,4vw,48px)",
            paddingBottom: "clamp(28px,3.5vw,40px)",
            borderBottom: "1px solid rgba(15,14,12,0.10)",
          }}>
            {article.dek}
          </p>

          <div className="article-body">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <p style={{
            marginTop: "clamp(40px,5vw,56px)",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10, fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#8a8480",
          }}>
            {article.readTime} read · Patagonia Living Journal
          </p>
        </article>

        {/* ── Next article ── */}
        <Link
          href={`/mountains/${next.slug}`}
          className="ed-wrap"
          style={{
            position: "relative", display: "block",
            height: "clamp(280px,38vw,420px)",
            overflow: "hidden", background: "#0a0c0f",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={next.image}
            alt={next.category}
            className="ed-img"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              filter: "grayscale(1) contrast(1.03) brightness(0.5)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            textAlign: "center", padding: "0 24px",
          }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10, fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#B8965A", marginBottom: 14,
            }}>
              Next · {next.category}
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(26px,3.4vw,46px)",
              fontWeight: 300, lineHeight: 1.08,
              color: "rgba(242,239,232,0.96)",
              maxWidth: "18ch",
            }}>
              {next.title}
            </p>
          </div>
        </Link>

      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
