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
    region: "Argentina",
    name: "Patagonia",
    blurb:
      "Ski trips to Bariloche and Cerro Catedral. Private instruction, stays at Llao Llao and Arelauquen Golf & Country Club, and heli-skiing in the Argentine Andes.",
    resorts: ["Cerro Catedral", "Llao Llao", "Arelauquen", "Chapelco"],
    image: "/images/pat-heli.jpg",
  },
  {
    slug: "usa",
    region: "United States",
    name: "United States",
    blurb:
      "Private ski lessons and curated stays at Vail, Beaver Creek, Aspen, and Breckenridge. The four iconic Rocky Mountain resorts, handled without compromise.",
    resorts: ["Vail", "Beaver Creek", "Aspen", "Breckenridge"],
    image: "/images/pat-vista.jpg",
  },
  {
    slug: "europe",
    region: "Europe",
    name: "Europe",
    blurb:
      "Ski trips to Zermatt, Courchevel, St. Moritz, and Cortina. Luxury chalets, private guides, and full concierge across the most iconic resorts in the Alps.",
    resorts: ["Zermatt", "Courchevel", "St. Moritz", "Cortina", "Gstaad", "Megève"],
    image: "/images/pat-exterior.jpg",
  },
];

export type Service = {
  title: string;
  blurb: string;
};

export const SERVICES: Service[] = [
  {
    title: "Private Ski Instruction",
    blurb:
      "Hand-selected instructors at Vail, Aspen, Beaver Creek, Breckenridge, and Bariloche. Every level, every age — matched to your group personally.",
  },
  {
    title: "Curated Accommodations",
    blurb:
      "Llao Llao, Arelauquen, ski-in ski-out chalets in the Rockies and the Alps. Every property personally vetted — no surprises.",
  },
  {
    title: "Flights & Private Transfers",
    blurb:
      "Commercial and private charter coordination, plus door-to-slope ground transfers. Every leg of the journey handled.",
  },
  {
    title: "Exclusive Experiences",
    blurb:
      "Heli-skiing in Patagonia, off-piste in Aspen, private mountain dinners in the Alps. Rare access, fully arranged.",
  },
  {
    title: "Full Trip Concierge",
    blurb:
      "Lift passes, equipment, reservations, and on-the-ground coordination from arrival to departure. Nothing left to chance.",
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
