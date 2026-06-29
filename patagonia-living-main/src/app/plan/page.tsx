import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import PlanClient from "./PlanClient";

export const metadata: Metadata = {
  title: "Plan My Trip — Patagonia Living",
  description:
    "Tell us your destination, dates and group. We'll send a tailored ski-trip proposal within 48 hours. WhatsApp and email welcome.",
};

export default function PlanPage() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main style={{ background: "#f7f5f2", paddingTop: 72 }}>
        <header
          style={{
            maxWidth: 1080, margin: "0 auto",
            padding: "clamp(56px,8vw,112px) clamp(20px,5vw,40px) clamp(28px,4vw,44px)",
          }}
        >
          <p className="eyebrow reveal" style={{ marginBottom: 18 }}>Plan Your Season</p>
          <h1
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px,6vw,80px)",
              fontWeight: 300, lineHeight: 1.02,
              color: "#0f0e0c", maxWidth: "16ch", marginBottom: 24,
            }}
          >
            Tell us where you want to ski.
          </h1>
          <p
            className="reveal reveal-d1"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(16px,1.4vw,17px)",
              fontWeight: 300, color: "#5a5754",
              lineHeight: 1.9, maxWidth: "56ch",
            }}
          >
            Share your destination, dates and group size. We build the trip
            from scratch and reply with a tailored proposal within 48 hours —
            no commitment.
          </p>
        </header>

        <section
          style={{
            maxWidth: 1080, margin: "0 auto",
            padding: "clamp(16px,2vw,32px) clamp(20px,5vw,40px) clamp(72px,10vw,130px)",
          }}
        >
          <PlanClient />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
