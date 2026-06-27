export const SITE = {
  name: "Patagonia Living",
  tagline: "Luxury Ski Travel",
  email: "comercial@patagonialiving.com",
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
    image: "/images/usa-panel.jpg",
  },
  {
    slug: "europe",
    region: "Europe",
    name: "Europe",
    blurb:
      "Ski trips to Zermatt, Courchevel, St. Moritz, and Cortina. Luxury chalets, private guides, and full concierge across the most iconic resorts in the Alps.",
    resorts: ["Zermatt", "Courchevel", "St. Moritz", "Cortina", "Gstaad", "Megève"],
    image: "/images/europe-panel.jpg",
  },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
  features: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "instruction",
    title: "Private Ski Instruction",
    blurb:
      "Hand-selected instructors at Vail, Aspen, Beaver Creek, Breckenridge, and Bariloche. Every level, every age — matched to your group personally.",
    detail:
      "We work exclusively with independent, vetted instructors — not resort staff pools. Each instructor is selected based on teaching style, language, and terrain expertise. We match them to your group before you land, so day one begins on the mountain, not in a queue.",
    features: [
      "Instructors in Bariloche, Cerro Catedral, Vail, Aspen, Beaver Creek & Breckenridge",
      "All levels: first-timers to advanced off-piste",
      "Multi-day and full-season packages",
      "Bilingual instructors available (English / Spanish)",
      "Child-specialist instructors on request",
    ],
    image: "/images/service-lessons.jpg",
  },
  {
    slug: "accommodations",
    title: "Curated Accommodations",
    blurb:
      "Llao Llao, Arelauquen, ski-in ski-out chalets in the Rockies and the Alps. Every property personally vetted — no surprises.",
    detail:
      "Every hotel and chalet we recommend, we have stayed in. We keep a live portfolio of properties across all three regions — from the iconic Llao Llao Hotel & Resort on the shores of Lake Nahuel Huapi to ski-in/ski-out suites at The Little Nell in Aspen. No guesswork, no online reviews.",
    features: [
      "Hotels and private chalets across Patagonia, the Rockies & the Alps",
      "Ski-in ski-out options at every major resort",
      "Every property personally inspected",
      "Private chalet options with dedicated staff",
      "Airport-to-door coordination included",
    ],
    image: "/images/service-accommodations.jpg",
  },
  {
    slug: "transfers",
    title: "Flights & Private Transfers",
    blurb:
      "Commercial and private charter coordination, plus door-to-slope ground transfers. Every leg of the journey handled.",
    detail:
      "From the moment you leave home to the moment your skis hit the snow, every transfer is pre-arranged. Commercial flight coordination, private charter options, helicopter transfers in Patagonia, and dedicated ground vehicles at every resort. No waiting, no guessing.",
    features: [
      "Commercial flight search and booking across all three regions",
      "Private aviation on request (Buenos Aires → Bariloche, etc.)",
      "Helicopter transfers in the Argentine Andes",
      "Dedicated ground vehicles resort to resort",
      "Real-time transfer tracking for peace of mind",
    ],
    image: "/images/service-transfers.jpg",
  },
  {
    slug: "experiences",
    title: "Exclusive Experiences",
    blurb:
      "Heli-skiing in Patagonia, off-piste in Aspen, private mountain dinners in the Alps. Rare access, fully arranged.",
    detail:
      "The experiences that define a trip — heli-skiing above the Nahuel Huapi lake basin, a private snowcat dinner in Vail's back bowls, a guided descent on the Zermatt Matterhorn north face. We have the relationships to arrange access that standard bookings cannot.",
    features: [
      "Heli-skiing in the Argentine Patagonia Andes",
      "Off-piste and backcountry guided days in Aspen & Zermatt",
      "Private mountain dinners (Vail back bowls, Courchevel peaks)",
      "Snowmobile tours and glacier excursions",
      "Cultural extensions: wine, estancia, alpine gastronomy",
    ],
    image: "/images/service-experiences.jpg",
  },
  {
    slug: "concierge",
    title: "Full Trip Concierge",
    blurb:
      "Lift passes, equipment, reservations, and on-the-ground coordination from arrival to departure. Nothing left to chance.",
    detail:
      "A single point of contact — before, during, and after your trip. We pre-arrange lift passes, equipment rental, restaurant reservations, and anything that arises on the ground. Our team is available throughout your stay, so you spend zero time managing logistics.",
    features: [
      "Lift pass procurement for all resorts (no queuing)",
      "Equipment rental: skis, boots, helmets, poles",
      "Restaurant reservations at top mountain restaurants",
      "Daily on-call coordination via WhatsApp",
      "Post-trip debrief and season planning",
    ],
    image: "/images/service-concierge.jpg",
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
  {
    quote:
      "The heli-skiing in Bariloche was the single best day I've had on skis. They made it look effortless.",
    name: "James T.",
    detail: "Solo traveller · Cerro Catedral",
  },
];

export type Guide = {
  name: string;
  role: string;
  region: string;
  image: string;
  bio: string;
};

export const GUIDES: Guide[] = [
  {
    name: "Tomás Aguirre",
    role: "Lead Mountain Guide",
    region: "Patagonia",
    image: "/images/pat-interior.jpg",
    bio: "Born in Bariloche. Twenty years on Cerro Catedral. Tomás leads every Patagonia heli-skiing operation personally.",
  },
  {
    name: "Elena Brunner",
    role: "Alpine Instructor",
    region: "Europe",
    image: "/images/pat-room.jpg",
    bio: "Former Swiss national team member. Elena specializes in technical instruction at Zermatt, St. Moritz, and Courchevel.",
  },
  {
    name: "Jack Mercer",
    role: "Backcountry Specialist",
    region: "Rockies",
    image: "/images/pat-dining.jpg",
    bio: "AMGA-certified and AIARE level 2. Jack has guided off-piste in Aspen and Vail for over a decade.",
  },
];

export type Story = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
};

export const STORIES: Story[] = [
  {
    tag: "Patagonia",
    title: "Heli-skiing the Nahuel Huapi basin: what no one tells you",
    excerpt:
      "The window is narrow — July to mid-September — and the weather unpredictable. But when conditions align above the lake, there is nothing quite like it on earth.",
    image: "/images/pat-heli.jpg",
    readTime: "6 min",
  },
  {
    tag: "Europe",
    title: "Why Courchevel 1850 still sets the standard",
    excerpt:
      "Three Michelin-starred restaurants within walking distance of the gondola. A private airport. And ski-in ski-out from the best slopes in the French Alps. Some things just work.",
    image: "/images/europe-panel.jpg",
    readTime: "5 min",
  },
  {
    tag: "USA",
    title: "A week at The Little Nell, honestly reviewed",
    excerpt:
      "We've stayed there a dozen times. Here's what earns the rate, what you should request on arrival, and the one restaurant in Aspen you can't miss after a long day.",
    image: "/images/pat-exterior.jpg",
    readTime: "7 min",
  },
  {
    tag: "Patagonia",
    title: "Llao Llao in winter: the suite that changed everything",
    excerpt:
      "The lake view at sunrise. Breakfast brought to the room at 7am. And then — twenty minutes later — first tracks on Catedral. This is what we mean when we say handled.",
    image: "/images/pat-vista.jpg",
    readTime: "4 min",
  },
  {
    tag: "USA",
    title: "Beaver Creek vs. Vail: the case for less famous",
    excerpt:
      "Vail gets the headlines. Beaver Creek gets the mountain to itself on a Tuesday. If you're choosing between them, we have a view.",
    image: "/images/usa-panel.jpg",
    readTime: "5 min",
  },
  {
    tag: "Europe",
    title: "St. Moritz for people who don't care about St. Moritz",
    excerpt:
      "Ignore the town. The Corviglia runs above the lake are some of the finest groomed terrain in Europe, and the Kulm Hotel is one of the great places to wake up in the Alps.",
    image: "/images/pat-room.jpg",
    readTime: "6 min",
  },
];

// ─── HOTELS ────────────────────────────────────────────────────────────────

export type Hotel = {
  slug: string;
  name: string;
  resort: string;
  region: "patagonia" | "usa" | "europe";
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  featured: boolean;
};

export const HOTELS: Hotel[] = [
  // ── PATAGONIA ────────────────────────────────────────────────────────────
  {
    slug: "llao-llao",
    name: "Llao Llao Hotel & Resort",
    resort: "Bariloche",
    region: "patagonia",
    category: "Iconic Resort",
    tagline: "The most iconic hotel in Argentine Patagonia.",
    description:
      "Set on a peninsula between lakes Nahuel Huapi and Moreno, Llao Llao is Argentina's great mountain resort. Golf course, spa, private beach, and twenty minutes from Cerro Catedral. We arrange ski packages that begin and end here.",
    features: [
      "20 min from Cerro Catedral ski centre",
      "Private lakefront with panoramic Andes views",
      "Full-service spa and outdoor pool",
      "Golf course open through winter",
      "On-site ski concierge arranged through Patagonia Living",
    ],
    image: "/images/pat-exterior.jpg",
    featured: true,
  },
  {
    slug: "arelauquen-lodge",
    name: "Arelauquen Lodge",
    resort: "Bariloche",
    region: "patagonia",
    category: "Boutique Lodge",
    tagline: "Private golf & ski estate at the base of the Andes.",
    description:
      "Within the gated Arelauquen Golf & Country Club, this lodge offers privacy rarely found in Bariloche. Forested grounds, a private lake, and exclusive access to one of Patagonia's finest estates. Ski transfers to Catedral arranged daily.",
    features: [
      "Private gated estate with lake and forest",
      "Golf, horse riding, and fishing in-property",
      "Boutique rooms with personal service",
      "Daily ski transfers to Cerro Catedral",
      "Ideal for groups and families",
    ],
    image: "/images/pat-interior.jpg",
    featured: true,
  },
  {
    slug: "peuma-hue",
    name: "Peuma Hue",
    resort: "Bariloche",
    region: "patagonia",
    category: "Eco-Luxury Estate",
    tagline: "A private Patagonian estate on the shores of Lake Gutiérrez.",
    description:
      "One of the most intimate properties in all of Patagonia. Peuma Hue takes just a handful of guests at a time, offering complete seclusion, homegrown food, and guided mountain experiences across the surrounding wilderness.",
    features: [
      "Maximum 12 guests — total privacy",
      "Lake Gutiérrez waterfront on private land",
      "Homegrown organic gastronomy",
      "Guided treks, kayaking, and winter snowshoeing",
      "30 min to Cerro Catedral",
    ],
    image: "/images/patagonia-lake.jpg",
    featured: true,
  },
  {
    slug: "design-suites-bariloche",
    name: "Design Suites Bariloche",
    resort: "Bariloche",
    region: "patagonia",
    category: "Design Hotel",
    tagline: "Contemporary design with unobstructed Nahuel Huapi views.",
    description:
      "Positioned on the edge of Bariloche with floor-to-ceiling glass facing the lake and mountains, Design Suites offers contemporary rooms, a rooftop pool, and direct access to the resort town's best restaurants and culture.",
    features: [
      "Floor-to-ceiling lake and mountain views",
      "Rooftop pool and spa",
      "Walking distance to Bariloche centre",
      "Ski shuttle to Cerro Catedral daily",
      "Sleek contemporary design throughout",
    ],
    image: "/images/pat-dining.jpg",
    featured: true,
  },
  {
    slug: "charming-luxury-lodge",
    name: "Charming Luxury Lodge",
    resort: "Bariloche",
    region: "patagonia",
    category: "Mountain Lodge",
    tagline: "Old-world elegance in the Argentine Andes.",
    description:
      "A small, personal lodge set among native coihue forest, Charming offers the warmth of a family home with the service standards of a fine hotel. Fireplaces, exceptional regional cuisine, and guided skiing arranged from the door.",
    features: [
      "12 rooms set in native Patagonian forest",
      "Fireside dining with local produce",
      "Private ski arrangements to Cerro Catedral",
      "Guided trekking and fly fishing",
      "One of the most personal stays in Bariloche",
    ],
    image: "/images/pat-vista.jpg",
    featured: true,
  },

  // ── USA ──────────────────────────────────────────────────────────────────
  {
    slug: "the-little-nell",
    name: "The Little Nell",
    resort: "Aspen",
    region: "usa",
    category: "Five-Star Ski-In/Out",
    tagline: "The only ski-in ski-out five-star hotel in Aspen.",
    description:
      "At the base of Ajax mountain, The Little Nell has defined Aspen luxury for three decades. The only hotel in Aspen with direct ski-in ski-out access to the Silver Queen gondola. World-class wine cellar, a top-rated spa, and a level of service that is genuinely hard to match anywhere in the Rockies.",
    features: [
      "Only ski-in ski-out five-star hotel in Aspen",
      "Direct access to Silver Queen gondola",
      "Wine cellar with over 20,000 bottles",
      "Full-service spa and fitness centre",
      "Multiple award-winning dining venues",
    ],
    image: "/hotels/usa-aspen-the-little-nell.jpg",
    featured: true,
  },
  {
    slug: "four-seasons-vail",
    name: "Four Seasons Resort Vail",
    resort: "Vail",
    region: "usa",
    category: "Five-Star Resort",
    tagline: "Ski-in ski-out access at the heart of Vail Village.",
    description:
      "Positioned in the heart of Vail Village with ski-in ski-out access, the Four Seasons is the benchmark for Vail luxury. Spacious rooms, multiple heated pools, and a ski concierge team that takes care of everything from boot fitting to lift pass pickup.",
    features: [
      "Ski-in ski-out from Vail Village",
      "Three outdoor heated pools and hot tubs",
      "Ski valet and boot warming service",
      "Flame restaurant for mountain dining",
      "Full-service spa with alpine treatments",
    ],
    image: "/hotels/usa-vail-four-seasons-vail.jpg",
    featured: true,
  },
  {
    slug: "ritz-carlton-bachelor-gulch",
    name: "The Ritz-Carlton, Bachelor Gulch",
    resort: "Beaver Creek",
    region: "usa",
    category: "Iconic Mountain Resort",
    tagline: "The grand lodge of the Rockies — ski-in ski-out at Beaver Creek.",
    description:
      "A classic mountain lodge elevated to Ritz-Carlton standards. Set at 8,100 feet with ski-in ski-out access to Beaver Creek's impeccably groomed runs. The spa is among the finest in Colorado, and the views across the Gore Range are second to none.",
    features: [
      "Ski-in ski-out at Beaver Creek",
      "Altitude spa with hydrotherapy pools",
      "Outdoor heated pool and hot tubs",
      "Dedicated ski concierge on mountain",
      "Backcountry access from the property",
    ],
    image: "/hotels/usa-beavercreek-ritz-carlton-bachelor-gulch.jpg",
    featured: true,
  },
  {
    slug: "st-regis-deer-valley",
    name: "St. Regis Deer Valley",
    resort: "Deer Valley",
    region: "usa",
    category: "Luxury Ski Hotel",
    tagline: "Butler service and ski-in ski-out at the heart of Deer Valley.",
    description:
      "The St. Regis at Deer Valley offers the brand's signature butler service in one of the most refined ski environments in America. Deer Valley is skiers-only, impeccably groomed, and runs one of the best ski concierge operations in the country.",
    features: [
      "Ski-in ski-out at Deer Valley (skiers only)",
      "St. Regis butler service throughout",
      "Heated outdoor pool with mountain views",
      "J&G Steakhouse and après-ski lounge",
      "Private ski storage and valet",
    ],
    image: "/hotels/usa-deervalley-st-regis-deer-valley.jpg",
    featured: true,
  },
  {
    slug: "grand-hyatt-breckenridge",
    name: "Grand Hyatt Breckenridge",
    resort: "Breckenridge",
    region: "usa",
    category: "Mountain Resort",
    tagline: "Ski-in ski-out luxury at the peak of Breckenridge.",
    description:
      "The most well-positioned luxury hotel in Breckenridge, with ski-in ski-out access and expansive mountain views. Comfortable, spacious rooms, a full-service spa, and easy access to Breck's iconic terrain parks and high-altitude bowls.",
    features: [
      "Ski-in ski-out access at Peak 9",
      "Heated outdoor pool at 9,600 feet",
      "Full-service spa and fitness centre",
      "Broken Compass steakhouse on-site",
      "Walking distance to Main Street Breckenridge",
    ],
    image: "/hotels/usa-breckenridge-grand-hyatt-breckenridge.jpg",
    featured: true,
  },
  // more USA
  {
    slug: "hotel-jerome",
    name: "Hotel Jerome",
    resort: "Aspen",
    region: "usa",
    category: "Historic Luxury Hotel",
    tagline: "Aspen's most storied address since 1889.",
    description:
      "The beating heart of Aspen since the silver rush. Hotel Jerome has been the gathering place for everyone who matters in Aspen for over a century, and Auberge Resorts has elevated it without losing a thread of its character.",
    features: [
      "Historic 1889 building, fully restored",
      "J-Bar: Aspen's legendary après-ski",
      "Outdoor heated pool and spa",
      "2 blocks from the Silver Queen gondola",
      "Auberge Resorts signature service",
    ],
    image: "/hotels/usa-aspen-hotel-jerome.jpg",
    featured: false,
  },
  {
    slug: "st-regis-aspen",
    name: "The St. Regis Aspen Resort",
    resort: "Aspen",
    region: "usa",
    category: "Five-Star Resort",
    tagline: "Refined ski luxury at the base of Aspen Mountain.",
    description:
      "A classic five-star property steps from the base of Aspen Mountain. The St. Regis brings its trademark butler service and impeccable standards to one of skiing's most glamorous destinations.",
    features: [
      "Steps from Aspen Mountain gondola",
      "St. Regis butler service",
      "Remède Spa with signature treatments",
      "Heated outdoor pool and hot tub",
      "Shadow Mountain Lounge for après",
    ],
    image: "/hotels/usa-aspen-st-regis-aspen.jpg",
    featured: false,
  },
  {
    slug: "w-aspen",
    name: "W Aspen",
    resort: "Aspen",
    region: "usa",
    category: "Boutique Luxury",
    tagline: "Bold design and energy at the heart of Aspen.",
    description:
      "The W brings a different energy to Aspen — lively, design-forward, and unapologetically contemporary. The rooftop bar is one of the best spots in town for sunset après, and the ski valet is seamless.",
    features: [
      "Rooftop pool with Aspen Mountain views",
      "AWAY Spa with alpine-inspired treatments",
      "Living Room bar: the social heart of the hotel",
      "Ski valet and on-mountain concierge",
      "Best location on the pedestrian mall",
    ],
    image: "/hotels/usa-aspen-w-aspen.jpg",
    featured: false,
  },
  {
    slug: "osprey-at-beaver-creek",
    name: "The Osprey at Beaver Creek",
    resort: "Beaver Creek",
    region: "usa",
    category: "Boutique Ski Hotel",
    tagline: "Intimate ski-in ski-out boutique in Beaver Creek Village.",
    description:
      "Small enough to feel personal, positioned perfectly within Beaver Creek Village. The Osprey is the boutique alternative for guests who want ski-in ski-out access without the scale of a major resort hotel.",
    features: [
      "Ski-in ski-out from Beaver Creek Village",
      "Outdoor heated pool and hot tubs",
      "Fireside lounge with daily après ski service",
      "Small property — personal service throughout",
      "30 min from Vail",
    ],
    image: "/hotels/usa-beavercreek-osprey-at-beaver-creek.jpg",
    featured: false,
  },
  {
    slug: "park-hyatt-beaver-creek",
    name: "Park Hyatt Beaver Creek",
    resort: "Beaver Creek",
    region: "usa",
    category: "Ski Resort Hotel",
    tagline: "Ski-in ski-out in the heart of Beaver Creek Village.",
    description:
      "The Park Hyatt anchors Beaver Creek Village with a classic mountain-lodge aesthetic and true ski-in ski-out access. Consistently one of the most popular properties in the Vail Valley for good reason.",
    features: [
      "Ski-in ski-out at Beaver Creek Village",
      "Allegria Spa and multiple dining venues",
      "Outdoor heated lap pool",
      "Family suites and connecting rooms",
      "24-hour ski concierge desk",
    ],
    image: "/hotels/usa-beavercreek-park-hyatt-beaver-creek.jpg",
    featured: false,
  },
  {
    slug: "one-ski-hill-place",
    name: "One Ski Hill Place",
    resort: "Breckenridge",
    region: "usa",
    category: "Ski-In/Out Residence",
    tagline: "Residence-style ski-in ski-out at Peak 8.",
    description:
      "Condominium-style residences with full hotel services, ski-in ski-out access at Peak 8, and all the space a family or group needs. One of the best value propositions in Breckenridge for extended stays.",
    features: [
      "Ski-in ski-out at Peak 8",
      "Full kitchen residences — ideal for families",
      "Heated outdoor pool and multiple hot tubs",
      "Complimentary ski valet and storage",
      "Walking distance to Breckenridge village",
    ],
    image: "/hotels/usa-breckenridge-one-ski-hill-place.jpg",
    featured: false,
  },
  {
    slug: "the-sebastian-vail",
    name: "The Sebastian — Vail",
    resort: "Vail",
    region: "usa",
    category: "Boutique Hotel",
    tagline: "Art-filled boutique in the heart of Vail Village.",
    description:
      "A boutique hotel that punches well above its category. Rotating art collection, a rooftop pool overlooking Vail Mountain, and a concierge team that genuinely knows the mountain. One of the most enjoyable stays in Vail.",
    features: [
      "Rooftop pool with Vail Mountain views",
      "Leonora restaurant: one of Vail's best",
      "Steps to Vail's gondola base",
      "Rotating contemporary art programme",
      "Spa and wellness centre",
    ],
    image: "/hotels/usa-vail-the-sebastian-vail.jpg",
    featured: false,
  },
  {
    slug: "lodge-at-vail",
    name: "Lodge at Vail",
    resort: "Vail",
    region: "usa",
    category: "Classic Ski Lodge",
    tagline: "Vail's original luxury ski lodge, opened 1962.",
    description:
      "The original luxury address in Vail, open since the resort's founding year. The Lodge at Vail occupies the best position in the village — steps from the gondola, ski-in ski-out, and steeped in sixty years of mountain history.",
    features: [
      "Ski-in ski-out at the base of Vail Mountain",
      "Open since Vail's founding in 1962",
      "Wildflower restaurant: farm-to-table fine dining",
      "Full spa and pool facilities",
      "Classic European-style alpine architecture",
    ],
    image: "/hotels/usa-vail-lodge-at-vail.jpg",
    featured: false,
  },
  {
    slug: "montage-deer-valley",
    name: "Montage Deer Valley",
    resort: "Deer Valley",
    region: "usa",
    category: "Luxury Resort",
    tagline: "Expansive mountain resort with ski-in ski-out at Deer Valley.",
    description:
      "The Montage is Deer Valley's most complete resort — 154 spacious rooms and residences, multiple dining venues, a full-service spa, and ski-in ski-out access on one of America's finest skier-only mountains.",
    features: [
      "Ski-in ski-out at Deer Valley (skiers only)",
      "154 rooms and full-service residences",
      "Spa Montage with 35,000 sq ft of facilities",
      "Multiple restaurants and cocktail lounges",
      "Heated outdoor pool with mountain views",
    ],
    image: "/hotels/usa-deervalley-montage-deer-valley.jpg",
    featured: false,
  },
  {
    slug: "stein-eriksen-lodge",
    name: "Stein Eriksen Lodge",
    resort: "Deer Valley",
    region: "usa",
    category: "Five-Star Mountain Lodge",
    tagline: "Deer Valley's legendary ski lodge, named for the Olympic champion.",
    description:
      "Named for Norwegian Olympic ski champion Stein Eriksen, this lodge has been Deer Valley's signature address since 1982. Ski-in ski-out, exceptional dining at Glitretind, and a spa that is among the finest in Utah.",
    features: [
      "Ski-in ski-out at Deer Valley",
      "Glitretind restaurant: one of Utah's best",
      "Stein's Ski Locker Room on mountain",
      "World-class spa with après-ski treatments",
      "Named for Olympic champion Stein Eriksen",
    ],
    image: "/hotels/usa-deervalley-stein-eriksen-lodge.jpg",
    featured: false,
  },

  // ── EUROPE ───────────────────────────────────────────────────────────────
  {
    slug: "aman-le-melezin",
    name: "Aman Le Mélézin",
    resort: "Courchevel",
    region: "europe",
    category: "Aman · Ski-In/Out",
    tagline: "The quietest, most considered address in Courchevel 1850.",
    description:
      "Aman Le Mélézin is the only Aman hotel in a ski resort, and it operates exactly as you'd expect: with radical calm, extraordinary food, and a level of attention that is entirely invisible. Ski-in ski-out from Courchevel 1850's finest pistes.",
    features: [
      "Aman's only ski resort property worldwide",
      "Ski-in ski-out from Courchevel 1850",
      "31 rooms — intimate scale",
      "Aman Spa with heated indoor pool",
      "Ski valet and boot-warming service",
    ],
    image: "/hotels/europe-courchevel-aman-le-melezin.jpg",
    featured: true,
  },
  {
    slug: "badrutts-palace",
    name: "Badrutt's Palace Hotel",
    resort: "St. Moritz",
    region: "europe",
    category: "Grand Palace Hotel",
    tagline: "The grand dame of St. Moritz since 1896.",
    description:
      "The most famous hotel in the Alps — and one of the great hotels of the world. Badrutt's Palace has defined St. Moritz since 1896, hosting royalty, artists, and the world's most discerning travellers across five generations of the Badrutt family.",
    features: [
      "Iconic lakefront palace since 1896",
      "Seven restaurants including the famous King's Club",
      "Ski-in ski-out to Corviglia via funicular",
      "ESPA Life spa across multiple floors",
      "Ice rink and private beach on Lake St. Moritz",
    ],
    image: "/hotels/europe-stmoritz-badruttss-palace-hotel.jpg",
    featured: true,
  },
  {
    slug: "the-alpina-gstaad",
    name: "The Alpina Gstaad",
    resort: "Gstaad",
    region: "europe",
    category: "Six-Star Mountain Resort",
    tagline: "The most luxurious hotel in Switzerland.",
    description:
      "Opened in 2012 to critical acclaim, The Alpina Gstaad has rapidly become Switzerland's most lauded hotel. Six Senses Spa, three Michelin-starred dining, and a location that puts you between the Gstaad pistes and the village's legendary Promenade.",
    features: [
      "Six Senses Spa: the finest spa in the Alps",
      "Three Michelin stars across dining venues",
      "Ski-in ski-out from Gstaad Mountain",
      "Private ski guiding team available",
      "Kids' programme and dedicated family suites",
    ],
    image: "/hotels/europe-gstaad-the-alpina-gstaad.jpg",
    featured: true,
  },
  {
    slug: "riffelalp-resort",
    name: "Riffelalp Resort",
    resort: "Zermatt",
    region: "europe",
    category: "Alpine Resort",
    tagline: "The highest five-star resort in the Alps — 2,222m above sea level.",
    description:
      "Perched at 2,222 metres with unobstructed views of the Matterhorn, the Riffelalp can only be reached by the Gornergrat cogwheel railway. No roads, no cars — just the mountain, the views, and uninterrupted skiing from your doorstep.",
    features: [
      "No road access — private cogwheel railway only",
      "Matterhorn views from every room",
      "Heated outdoor pool at 2,222m elevation",
      "Ski-out directly from the resort",
      "One of the most remote luxury hotels in Europe",
    ],
    image: "/hotels/europe-zermatt-riffelalp-resort.jpg",
    featured: true,
  },
  {
    slug: "mandarin-oriental-cristallo",
    name: "Mandarin Oriental Cristallo",
    resort: "Cortina d'Ampezzo",
    region: "europe",
    category: "Historic Grand Hotel",
    tagline: "A century of elegance at the heart of the Dolomites.",
    description:
      "The grande dame of Cortina, now under Mandarin Oriental management, combining over a century of history with the group's exacting service standards. The Dolomites backdrop is unmatched, and the hotel's proximity to the Faloria and Cristallo lifts is unrivalled.",
    features: [
      "Over 100 years of Cortina history",
      "Mandarin Oriental Spa and wellness",
      "Direct access to Faloria and Cristallo ski areas",
      "Multiple restaurants and wine cellars",
      "Heated outdoor pool in the Dolomites",
    ],
    image: "/hotels/europe-cortina-mandarin-oriental-cristallo.jpg",
    featured: true,
  },
  // more Europe
  {
    slug: "cheval-blanc-courchevel",
    name: "Cheval Blanc Courchevel",
    resort: "Courchevel",
    region: "europe",
    category: "LVMH Maison",
    tagline: "LVMH's flagship alpine Maison in Courchevel 1850.",
    description:
      "The Cheval Blanc brings the rigour and aesthetic of the LVMH group to Courchevel 1850. Ski-in ski-out, a luminous spa, and dining at 1947 — the restaurant that raised Courchevel's culinary reputation to a new level.",
    features: [
      "Ski-in ski-out at Courchevel 1850",
      "1947 restaurant: Michelin-starred dining",
      "Le Blanc Spa with thermal circuit",
      "36 rooms and suites with private butler",
      "Children's Le Petit Blanc programme",
    ],
    image: "/hotels/europe-courchevel-cheval-blanc.jpg",
    featured: false,
  },
  {
    slug: "les-airelles",
    name: "Les Airelles",
    resort: "Courchevel",
    region: "europe",
    category: "Château Hotel",
    tagline: "A Chamonix château transported to the highest pistes of the Alps.",
    description:
      "Les Airelles occupies the finest ski-in ski-out position in Courchevel 1850, with a château aesthetic and the most intensive guest ratio in the resort. The service-to-guest ratio is exceptional, and Pierre Gagnaire's restaurant is reason enough to come.",
    features: [
      "Best ski-in ski-out position in Courchevel 1850",
      "Restaurant by Pierre Gagnaire",
      "Les Airelles Spa with heated pool",
      "Château architecture and design",
      "Exceptional staff-to-guest ratio",
    ],
    image: "/hotels/europe-courchevel-les-airelles.jpg",
    featured: false,
  },
  {
    slug: "gstaad-palace",
    name: "Gstaad Palace",
    resort: "Gstaad",
    region: "europe",
    category: "Palace Hotel",
    tagline: "The castle above Gstaad that defines Swiss alpine luxury.",
    description:
      "The turreted castle that has presided over Gstaad since 1913. Positioned high above the village, the Palace offers views across the Bernese Alps and immediate ski access to the GS mountain network. A rare combination of heritage and modernity.",
    features: [
      "Historic 1913 palace above Gstaad village",
      "360° alpine panorama from every room",
      "Ski-in ski-out to Gstaad Mountain",
      "La Fromagerie and multiple fine dining venues",
      "Palace Wellness with 9 treatment rooms",
    ],
    image: "/hotels/europe-gstaad-gstaad-palace.jpg",
    featured: false,
  },
  {
    slug: "kulm-hotel-st-moritz",
    name: "Kulm Hotel St. Moritz",
    resort: "St. Moritz",
    region: "europe",
    category: "Historic Five-Star",
    tagline: "The birthplace of alpine winter tourism, since 1856.",
    description:
      "The hotel where winter tourism was invented — the Kulm hosted the first curling club and the first ski club in the Alps. Today it remains one of St. Moritz's finest, with exceptional views and a calm that contrasts with the resort's more frenetic neighbours.",
    features: [
      "Open since 1856 — the original alpine hotel",
      "Birthplace of curling and bobsled in St. Moritz",
      "Ski-in ski-out via Chantarella funicular",
      "Kulm Spa and indoor pool",
      "Grand Restaurant with lake views",
    ],
    image: "/hotels/europe-stmoritz-kulm-hotel-st-moritz.jpg",
    featured: false,
  },
  {
    slug: "the-omnia-zermatt",
    name: "The Omnia",
    resort: "Zermatt",
    region: "europe",
    category: "Design Hotel",
    tagline: "A design hotel carved into the rock above Zermatt.",
    description:
      "The Omnia is accessed by a private rock elevator from Zermatt's main street. Thirty rooms of extraordinary design, all with Matterhorn views, and ski-out access that puts you on the mountain within minutes. One of the most individual properties in the Alps.",
    features: [
      "Private rock elevator access only",
      "Matterhorn views from every room",
      "30 rooms — intimate and considered",
      "Ski-out from the property",
      "Spa with Matterhorn panorama",
    ],
    image: "/hotels/europe-zermatt-the-omnia.jpg",
    featured: false,
  },
  {
    slug: "rosa-alpina",
    name: "Rosa Alpina",
    resort: "Val Gardena",
    region: "europe",
    category: "Five-Star Boutique",
    tagline: "The Dolomites' most intimate five-star, with the St. Hubertus three-star kitchen.",
    description:
      "A family-run five-star hotel in San Cassiano with the most decorated restaurant in the Dolomites — St. Hubertus, three Michelin stars. Ski-in ski-out from the Alta Badia pistes, and a spa that deserves as much attention as the kitchen.",
    features: [
      "Ski-in ski-out from Alta Badia",
      "St. Hubertus: three Michelin stars",
      "Family-owned and operated since 1850",
      "Sole & Neve Spa with indoor pool",
      "Heli-skiing coordination available",
    ],
    image: "/hotels/europe-valgardena-rosa-alpina.jpg",
    featured: false,
  },
  {
    slug: "four-seasons-megeve",
    name: "Four Seasons Megève",
    resort: "Megève",
    region: "europe",
    category: "Four Seasons Resort",
    tagline: "Four Seasons' French Alps flagship in the most elegant of ski villages.",
    description:
      "Megève is the most stylish ski village in France, and the Four Seasons is its most complete address. The property blends traditional Savoyard architecture with contemporary luxury, and the ski-in ski-out access puts you on the Mont d'Arbois slopes in minutes.",
    features: [
      "Ski-in ski-out from Mont d'Arbois",
      "L'Alpaga restaurant: fine Savoyard dining",
      "Four Seasons Spa with heated outdoor pool",
      "Slope-side bar and après-ski terrace",
      "Concierge access to Megève's legendary chefs and restaurants",
    ],
    image: "/hotels/europe-megeve-four-seasons.jpg",
    featured: false,
  },
  {
    slug: "flocons-de-sel",
    name: "Flocons de Sel",
    resort: "Megève",
    region: "europe",
    category: "Michelin-Star Auberge",
    tagline: "Three Michelin stars and six rooms above Megève.",
    description:
      "Emmanuel Renaut's legendary auberge above Megève. Six rooms only, three Michelin stars, and a culinary experience that makes it one of the most sought-after stays in the Alps. Not for the traveller seeking luxury amenities — for the one seeking an unrepeatable experience.",
    features: [
      "Three Michelin stars — Emmanuel Renaut",
      "Six rooms only: the ultimate exclusivity",
      "Views over Megève valley",
      "Farm-to-table cuisine from own kitchen garden",
      "One of the hardest reservations to secure in Europe",
    ],
    image: "/hotels/europe-megeve-flocons-de-sel.jpg",
    featured: false,
  },
  {
    slug: "ancora-cortina",
    name: "Ancora Cortina",
    resort: "Cortina d'Ampezzo",
    region: "europe",
    category: "Historic Design Hotel",
    tagline: "The most social address in Cortina, since the 1950s.",
    description:
      "Ancora has been the gathering place of Cortina's most glamorous visitors since the golden age of Italian skiing in the 1950s. A hotel with genuine personality — design-led, socially vibrant, and positioned perfectly on the Corso Italia pedestrian street.",
    features: [
      "Prime position on Corso Italia, Cortina's main street",
      "Historic 1950s provenance",
      "Contemporary Italian design throughout",
      "Walking distance to Faloria and Cristallo lifts",
      "Restaurant and bar: the meeting point of Cortina",
    ],
    image: "/hotels/europe-cortina-ancora-cortina.jpg",
    featured: false,
  },
];
