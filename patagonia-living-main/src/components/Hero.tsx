import { IconMountain, IconSnow, IconCompass, IconUser, IconRoute, IconSparkle } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="px-[clamp(16px,2.5vw,36px)] pb-[clamp(16px,2.5vw,36px)] pt-[clamp(12px,1.5vw,18px)]"
      style={{ background: "var(--background)" }}
    >
      <div
        className="hero-in relative w-full overflow-hidden rounded-[20px]"
        style={{ height: "calc(100svh - 96px)", minHeight: 580 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pat-heli.jpg"
          alt="Heli-skiing in Patagonia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,12,15,0.28) 0%, rgba(10,12,15,0.05) 34%, rgba(10,12,15,0.62) 100%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-end p-[clamp(24px,4vw,48px)]">
          {/* upper row: title (left) + subtitle (right) */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <h1
              className="hero-in hd2 display-xl max-w-[14ch]"
              style={{ color: "rgba(250,250,250,0.95)" }}
            >
              Winter travel destinations
            </h1>
            <p
              className="hero-in hd3 max-w-[340px] text-[15px] font-medium leading-relaxed md:text-right"
              style={{ color: "rgba(250,250,250,0.82)" }}
            >
              Private instruction, curated stays, and seamless logistics across
              the Andes, the Rockies, and the Alps.
            </p>
          </div>

          {/* base row: badge + chips (left) · feature pills (right) */}
          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="hero-in hd4 flex items-center gap-3">
              <div className="leading-tight">
                <p className="text-[20px] font-medium tracking-tight text-[rgba(250,250,250,0.95)]">
                  21 Resorts
                </p>
                <p className="text-[12.5px] font-medium text-[rgba(250,250,250,0.7)]">
                  Across three continents
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="icon-chip"><IconMountain /></span>
                <span className="icon-chip"><IconSnow /></span>
                <span className="icon-chip"><IconCompass /></span>
              </div>
            </div>

            <div className="hero-in hd5 flex flex-wrap gap-2">
              <span className="pill-glass"><IconUser width={15} height={15} /> Private Instruction</span>
              <span className="pill-glass"><IconRoute width={15} height={15} /> Transfers Included</span>
              <span className="pill-glass"><IconSparkle width={15} height={15} /> Full Concierge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
