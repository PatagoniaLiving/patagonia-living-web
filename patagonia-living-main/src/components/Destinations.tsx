import Link from "next/link";
import { REGIONS } from "@/lib/content";

export default function Destinations() {
  return (
    <div className="dest-panels" id="destinations">
      {REGIONS.map((r) => (
        <Link key={r.slug} href={`/destinations/${r.slug}`} className="dest-panel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={r.image} alt={r.name} className="dest-panel-bg" />
          <div className="dest-panel-grad" />
          <div className="dest-panel-content">
            <p className="dest-panel-region">{r.region}</p>
            <h2 className="dest-panel-name">{r.name}</h2>
            <p className="dest-panel-resorts">{r.resorts.join(" · ")}</p>
            <span className="dest-panel-cta">Explore →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
