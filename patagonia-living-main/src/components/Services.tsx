import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--paper)" }}>
      <div className="container-x">
        <div className="reveal mb-12">
          <p className="eyebrow mb-3">What we handle</p>
          <h2 className="display-lg">From first lift to last call.</h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[24px] sm:grid-cols-2 lg:grid-cols-3"
          style={{ background: "var(--line)" }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-d${(i % 3) + 1} flex flex-col gap-3 p-8`}
              style={{ background: "var(--paper)" }}
            >
              <span className="text-[13px] font-medium tracking-tight text-[color:var(--soft)]">
                0{i + 1}
              </span>
              <h3 className="text-[22px] font-medium tracking-tight">{s.title}</h3>
              <p className="text-[14px] font-medium leading-relaxed text-[color:var(--muted)]">
                {s.blurb}
              </p>
            </div>
          ))}
          <div
            className="reveal reveal-d3 flex flex-col justify-between gap-6 p-8"
            style={{ background: "var(--ink)" }}
          >
            <h3 className="text-[22px] font-medium leading-tight tracking-tight text-[#fafafa]">
              One team, door to slope.
            </h3>
            <a
              href="#contact"
              className="pill self-start"
              style={{ background: "#fafafa", color: "var(--ink)" }}
            >
              Start planning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
