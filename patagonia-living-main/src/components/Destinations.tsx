import { REGIONS } from "@/lib/content";

export default function Destinations() {
  return (
    <section id="destinations" className="section" style={{ background: "var(--background)" }}>
      <div className="container-x">
        <div className="reveal mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Destinations</p>
            <h2 className="display-lg max-w-[16ch]">The world&apos;s finest ski regions</h2>
          </div>
          <p className="max-w-[42ch] text-[15px] font-medium leading-relaxed text-[color:var(--muted)]">
            Every hotel we recommend, we have stayed in. Every run we book, we have
            skied. No exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {REGIONS.map((r, i) => (
            <a
              key={r.slug}
              href={`#destinations`}
              className={`reveal reveal-d${i + 1} group relative block aspect-[3/4] overflow-hidden rounded-[24px]`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.image}
                alt={r.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,12,15,0) 42%, rgba(10,12,15,0.86) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[12px] font-medium tracking-tight text-[rgba(250,250,250,0.7)]">
                  {r.region}
                </p>
                <h3 className="mt-1 text-[28px] font-medium leading-none tracking-tight text-[rgba(250,250,250,0.96)]">
                  {r.name}
                </h3>
                <p className="mt-3 max-w-[34ch] text-[13.5px] font-medium leading-snug text-[rgba(250,250,250,0.7)]">
                  {r.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.resorts.slice(0, 4).map((resort) => (
                    <span
                      key={resort}
                      className="rounded-[50px] px-2.5 py-1 text-[11px] font-medium tracking-tight"
                      style={{
                        background: "rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {resort}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
