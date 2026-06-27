import type { Metadata } from "next";
import { ARTICLES } from "@/lib/content";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingCTA from "@/components/FloatingCTA";
import MountainsClient from "./MountainsClient";

export const metadata: Metadata = {
  title: "The Mountains — Patagonia Living",
  description:
    "A considered library on the places we ski — Cerro Catedral, Vail, Aspen, Beaver Creek and Breckenridge, written by the people who guide them.",
};

export default function MountainsPage() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <MountainsClient articles={ARTICLES} />
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
