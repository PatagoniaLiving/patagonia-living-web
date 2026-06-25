import { STORIES } from "@/lib/content";

export default function Stories() {
  return (
    <section id="stories" className="section" style={{ background: "var(--background)" }}>
      <div className="container-x">
        <div className="reveal mb-12">
          <p className="eyebrow mb-3">Journal</p>
          <h2 className="display-lg">Notes from the slopes.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <a
              key={s.title}
              href="#stories"
              className={`reveal reveal-d${i + 1} group block`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <span
                  className="absolute left-4 top-4 rounded-[50px] px-3 py-1.5 text-[12px] font-medium tracking-tight backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.85)", color: "var(--ink)" }}
                >
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-4 text-[20px] font-medium leading-snug tracking-tight transition-colors group-hover:text-[color:var(--soft)]">
                {s.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
