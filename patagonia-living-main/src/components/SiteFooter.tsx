import { NAV, REGIONS, SERVICES, SITE } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--ink)" }}>
      <div className="container-x px-[clamp(20px,5vw,72px)] py-[clamp(56px,7vw,96px)]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-[34ch]">
            <p className="text-[22px] font-medium tracking-tight text-[#fafafa]">
              {SITE.name}
            </p>
            <p className="mt-3 text-[14px] font-medium leading-relaxed text-[rgba(250,250,250,0.6)]">
              Luxury ski travel across the Andes, the Rockies, and the Alps.
              Worldwide, 24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-[12px] font-medium tracking-tight text-[rgba(250,250,250,0.45)]">
                Destinations
              </p>
              <ul className="flex flex-col gap-2.5">
                {REGIONS.map((r) => (
                  <li key={r.slug}>
                    <a
                      href="#destinations"
                      className="text-[14px] font-medium text-[rgba(250,250,250,0.78)] transition-colors hover:text-[#fafafa]"
                    >
                      {r.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[12px] font-medium tracking-tight text-[rgba(250,250,250,0.45)]">
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {SERVICES.slice(0, 4).map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="text-[14px] font-medium text-[rgba(250,250,250,0.78)] transition-colors hover:text-[#fafafa]"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[12px] font-medium tracking-tight text-[rgba(250,250,250,0.45)]">
                Contact
              </p>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener"
                    className="text-[14px] font-medium text-[rgba(250,250,250,0.78)] transition-colors hover:text-[#fafafa]"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[14px] font-medium text-[rgba(250,250,250,0.78)] transition-colors hover:text-[#fafafa]"
                  >
                    {SITE.email}
                  </a>
                </li>
                {NAV.slice(2).map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-[14px] font-medium text-[rgba(250,250,250,0.78)] transition-colors hover:text-[#fafafa]"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-2 border-t pt-6 text-[12.5px] font-medium text-[rgba(250,250,250,0.45)] sm:flex-row sm:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <span>© 2026 {SITE.name}</span>
          <span>Luxury Ski Travel · Argentina · USA · Europe</span>
        </div>
      </div>
    </footer>
  );
}
