import { notFound } from "next/navigation";
import { RESORTS, HOTELS, REGIONS } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingCTA from "@/components/FloatingCTA";
import ResortClient from "./ResortClient";

export async function generateStaticParams() {
  return RESORTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resort = RESORTS.find((r) => r.slug === slug);
  if (!resort) return {};
  return {
    title: `${resort.name} — Patagonia Living`,
    description: resort.tagline,
  };
}

export default async function ResortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resort = RESORTS.find((r) => r.slug === slug);
  if (!resort) notFound();

  const region = REGIONS.find((r) => r.slug === resort.region);
  const hotels = HOTELS.filter((h) => h.resortSlug === slug);
  const siblingResorts = RESORTS.filter(
    (r) => r.region === resort.region && r.slug !== slug
  );

  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <ResortClient
        resort={resort}
        region={region ?? null}
        hotels={hotels}
        siblingResorts={siblingResorts}
      />
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
