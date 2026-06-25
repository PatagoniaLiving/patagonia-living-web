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
      "The Andes at their most dramatic. Heli days, lake-view lodges and powder above Bariloche.",
    resorts: ["Bariloche", "Cerro Catedral", "Llao Llao"],
    image: "/images/pat-heli.jpg",
  },
  {
    slug: "usa",
    region: "United States",
    name: "USA",
    blurb:
      "The Rockies and beyond. Ski-in ski-out luxury from Aspen to Lake Tahoe.",
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
    region: "Europe",
    name: "Europe",
    blurb:
      "The Alps' most legendary names. Cortina, St. Moritz, Zermatt and Courchevel.",
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
    title: "Ski Lessons",
    blurb:
      "Private instruction with vetted independent instructors across all three regions. All levels, all ages.",
  },
  {
    title: "Accommodations",
    blurb:
      "Hotels and short-term rentals handpicked and vetted in person at every destination.",
  },
  {
    title: "Transfers",
    blurb:
      "Commercial and private flights, plus ground transfers, coordinated door to slope.",
  },
  {
    title: "Experiences",
    blurb:
      "Heli-skiing, snowmobile dinners, guided backcountry and off-piste adventures.",
  },
  {
    title: "Concierge",
    blurb:
      "Lift passes, equipment rental, restaurant reservations and daily coordination.",
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
