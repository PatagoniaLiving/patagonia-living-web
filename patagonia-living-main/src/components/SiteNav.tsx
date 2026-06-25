import { NAV, SITE } from "@/lib/content";

export default function SiteNav() {
  return (
    <header
      className="hero-in sticky top-0 z-50 w-full"
      style={{
        background: "rgba(250,250,250,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center px-[clamp(20px,5vw,36px)] py-4">
        <a href="#top" className="justify-self-start text-[17px] font-medium tracking-tight">
          {SITE.name}
        </a>

        <p className="hidden justify-self-center text-[14px] font-medium tracking-tight md:block">
          <span className="text-[color:var(--soft)]">Based in: </span>
          <span className="text-[color:var(--ink)]">{SITE.basedIn}</span>
        </p>

        <div className="flex items-center gap-1 justify-self-end">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[50px] px-3.5 py-2 text-[14px] font-medium tracking-tight text-[color:var(--muted)] transition-colors duration-300 hover:text-[color:var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
