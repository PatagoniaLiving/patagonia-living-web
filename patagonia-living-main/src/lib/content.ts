// Patagonia Living — content model (Marwa-style one-pager, Patagonia content)

export const SITE = {
  name: "Patagonia Living",
  tagline: "Luxury Ski Travel",
  email: "comercial@patagonialiving.com",
  // TODO: replace with the real WhatsApp number (currently a placeholder)
  whatsapp: "5491100000000",
  whatsappUrl: "https://wa.me/5491100000000",
  basedIn: "Andes · Rockies · Alps",
};

export const NAV = [
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Guides", href: "#guides" },
  { label: "Stories", href: "#stories" },
];

export type Region = {
  slug: string;
  region: string;
  name: string;
  blurb: string;
  resorts: string[];
  image: string;
};

export const REGIONS: Region[] = [
  {
    slug: "patagonia",
    region: "Argentina · Andes",
    name: "Patagonia",
    blurb:
      "Luxury ski trips to Bariloche and Cerro Catedral. Heli-skiing, lake-view lodges, and private instruction in the Argentine Andes.",
    resorts: ["Bariloche", "Cerro Catedral", "Llao Llao", "Chapelco"],
    image: "/images/pat-heli.jpg",
  },
  {
    slug: "usa",
    region: "United States · Rockies",
    name: "United States",
    blurb:
      "Ski vacations to Aspen, Vail, Deer Valley, and more. Ski-in ski-out hotels, private lessons, and full concierge across the best resorts in the USA.",
    resorts: [
      "Aspen",
      "Vail",
      "Deer Valley",
      "Beaver Creek",
      "Breckenridge",
      "Park City",
      "Stowe",
      "Lake Tahoe",
    ],
    image: "/images/pat-vista.jpg",
  },
  {
    slug: "europe",
    region: "Europe · Alps",
    name: "Europe",
    blurb:
      "Ski trips to the Alps — Zermatt, Courchevel, St. Moritz, and Cortina. Curated luxury hotels and private ski guides in the most iconic resorts in Europe.",
    resorts: [
      "Cortina",
      "Val Gardena",
      "St. Moritz",
      "Gstaad",
      "Zermatt",
      "Courchevel",
      "Megève",
      "Madonna di Campiglio",
    ],
    image: "/images/pat-exterior.jpg",
  },
];

export type Service = {
  title: string;
  blurb: string;
};

export const SERVICES: Service[] = [
  {
    title: "Private Ski Lessons",
    blurb:
      "Book private ski instructors in Patagonia, the USA, and Europe. All levels and ages — from first-timers to advanced skiers.",
  },
  {
    title: "Luxury Accommodations",
    blurb:
      "Ski-in ski-out hotels and chalets, hand-selected and personally vetted at every resort. No surprises.",
  },
  {
    title: "Flights & Transfers",
    blurb:
      "Commercial flights, private charters, and ground transfers coordinated door-to-slope. We handle every leg.",
  },
  {
    title: "Heli-Skiing & Experiences",
    blurb:
      "Heli-skiing in Patagonia, snowmobile dinners in the Alps, guided off-piste in Aspen. Exclusive experiences, fully organized.",
  },
  {
    title: "Full Ski Concierge",
    blurb:
      "Lift passes, equipment rental, restaurant reservations, and on-the-ground coordination throughout your entire trip.",
  },
];

export const STATS = [
  { value: "21", label: "Resorts across three continents" },
  { value: "48h", label: "Tailored proposal turnaround" },
  { value: "100%", label: "Stays vetted in person" },
];

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They booked the whole season for our family. Every transfer was waiting, every instructor was right for each kid. We just skied.",
    name: "Valentina R.",
    detail: "Family of five · Aspen & Bariloche",
  },
  {
    quote:
      "I asked for a quiet week in the Dolomites and got exactly that. The lodge they picked we'd never have found ourselves.",
    name: "Marcus L.",
    detail: "Couple · Cortina d'Ampezzo",
  },
  {
    quote:
      "Proposal in under two days, no chasing. They knew the mountain better than the resort concierge did.",
    name: "Sofía D.",
    detail: "Group of eight · Zermatt",
  },
];

export type Guide = {
  name: string;
  role: string;
  region: string;
  image: string;
};

export const GUIDES: Guide[] = [
  {
    name: "Tomás Aguirre",
    role: "Lead Mountain Guide",
    region: "Patagonia",
    image: "/images/pat-interior.jpg",
  },
  {
    name: "Elena Brunner",
    role: "Alpine Instructor",
    region: "Europe",
    image: "/images/pat-room.jpg",
  },
  {
    name: "Jack Mercer",
    role: "Backcountry Specialist",
    region: "Rockies",
    image: "/images/pat-dining.jpg",
  },
];

export type Story = {
  tag: string;
  title: string;
  image: string;
};

export const STORIES: Story[] = [
  {
    tag: "Patagonia",
    title: "Best time to ski the Andes",
    image: "/images/pat-vista.jpg",
  },
  {
    tag: "Europe",
    title: "Where to stay in Courchevel 1850",
    image: "/images/pat-exterior.jpg",
  },
  {
    tag: "USA",
    title: "A week in Aspen, handled",
    image: "/images/pat-heli.jpg",
  },
];
