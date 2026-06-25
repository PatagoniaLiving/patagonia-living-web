import { SITE } from "@/lib/content";

export default function CTASection() {
  return (
    <section id="contact" className="section" style={{ background: "var(--paper)" }}>
      <div className="container-x">
        <div
          className="reveal relative overflow-hidden rounded-[28px] px-[clamp(28px,5vw,72px)] py-[clamp(48px,7vw,96px)]"
          style={{ background: "var(--ink)" }}
        >
          <div>
            <p className="eyebrow mb-4" style={{ color: "rgba(250,250,250,0.6)" }}>
              Plan your season
            </p>
            <h2 className="display-lg max-w-[14ch]" style={{ color: "rgba(250,250,250,0.96)" }}>
              Let&apos;s get you on the mountain.
            </h2>
          </div>
          <p
            className="mt-6 max-w-[44ch] text-[15px] font-medium leading-relaxed"
            style={{ color: "rgba(250,250,250,0.72)" }}
          >
            Tell us your destination, dates, and group. We handle everything from
            there, with a tailored proposal in under 48 hours.
          </p>
          <div className="mt-9 flex flex-wrap gap-2.5">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="pill"
              style={{ background: "#fafafa", color: "var(--ink)" }}
            >
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="pill"
              style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
