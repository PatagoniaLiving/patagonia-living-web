import { GUIDES } from "@/lib/content";

export default function Guides() {
  return (
    <section id="guides" className="section" style={{ background: "var(--paper)" }}>
      <div className="container-x">
        <div className="reveal mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">The team</p>
            <h2 className="display-lg max-w-[14ch]">Meet your guides.</h2>
          </div>
          <p className="max-w-[40ch] text-[15px] font-medium leading-relaxed text-[color:var(--muted)]">
            Independent, vetted, and local to every range we work in. They have
            skied these mountains their whole lives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          {GUIDES.map((g, i) => (
            <div
              key={g.name}
              className={`reveal reveal-d${i + 1} group relative aspect-[4/5] overflow-hidden rounded-[24px]`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.image}
                alt={g.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,12,15,0) 48%, rgba(10,12,15,0.82) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[18px] font-medium tracking-tight text-[rgba(250,250,250,0.96)]">
                  {g.name}
                </p>
                <p className="mt-0.5 text-[12.5px] font-medium text-[rgba(250,250,250,0.72)]">
                  {g.role} · {g.region}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
