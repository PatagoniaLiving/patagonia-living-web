import { STATS } from "@/lib/content";

export default function Motion() {
  return (
    <section className="section" style={{ background: "var(--background)", paddingTop: 0 }}>
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-[28px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/pat-vista.jpg"
            alt="The mountain in motion"
            className="h-[clamp(360px,52vw,620px)] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(10,12,15,0.55) 0%, rgba(10,12,15,0.08) 55%, rgba(10,12,15,0) 100%)",
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-between p-[clamp(24px,4vw,56px)]">
            <h2 className="display-md max-w-[16ch]" style={{ color: "rgba(250,250,250,0.96)" }}>
              Your season, fully managed.
            </h2>

            <div className="flex flex-wrap items-end gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[20px] px-5 py-4 backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.16)", minWidth: 150 }}
                >
                  <p
                    className="text-[34px] font-medium leading-none tracking-tight"
                    style={{ color: "#fff" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="mt-2 max-w-[20ch] text-[12.5px] font-medium leading-snug"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
