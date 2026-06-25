import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--background)" }}>
      <div className="container-x">
        <div className="reveal mb-12">
          <p className="eyebrow mb-3">Travelers</p>
          <h2 className="display-lg">What our travelers say.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-d${i + 1} flex flex-col justify-between gap-8 rounded-[24px] p-8`}
              style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
            >
              <blockquote className="text-[17px] font-medium leading-relaxed tracking-tight text-[color:var(--ink)]">
                “{t.quote}”
              </blockquote>
              <figcaption>
                <p className="text-[14px] font-medium tracking-tight">{t.name}</p>
                <p className="mt-0.5 text-[13px] font-medium text-[color:var(--soft)]">
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
