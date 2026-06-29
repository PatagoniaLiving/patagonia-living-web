import SiteNav from "@/components/SiteNav";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Motion from "@/components/Motion";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Guides from "@/components/Guides";
import Stories from "@/components/Stories";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <ScrollReveal />
      <main>
        <Hero />
        <Destinations />
        <Motion />
        <Services />
        <Testimonials />
        <Guides />
        <Stories />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
