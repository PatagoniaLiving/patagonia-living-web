export const SITE = {
  name: "Patagonia Living",
  tagline: "Luxury Ski Travel",
  email: "comercial@patagonialiving.com",
  whatsapp: "5492945906935",
  whatsappUrl: "https://wa.me/5492945906935",
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
    slug: "north-america",
    region: "North America",
    name: "North America",
    blurb:
      "Private ski lessons and curated stays across the Rockies, Utah, and the mountains of British Columbia. Vail, Aspen, Beaver Creek, Breckenridge, Deer Valley, Whistler, Park City, and more — the iconic North American resorts, handled without compromise.",
    resorts: ["Aspen", "Vail", "Beaver Creek", "Breckenridge", "Deer Valley", "Stowe", "Lake Tahoe"],
    image: "/images/usa-panel.jpg",
  },
  {
    slug: "europe",
    region: "Europe",
    name: "Europe",
    blurb:
      "Ski trips to Zermatt, Courchevel, St. Moritz, Cortina, Gstaad, Megève, Val Gardena, and Madonna di Campiglio. Full concierge across the most iconic resorts in the Alps.",
    resorts: ["Zermatt", "Courchevel", "St. Moritz", "Cortina", "Gstaad", "Megève", "Val Gardena", "Madonna"],
    image: "/images/europe-panel.jpg",
  },
  {
    slug: "patagonia",
    region: "Argentina",
    name: "Patagonia",
    blurb:
      "Ski trips to Bariloche and Cerro Catedral. Private instruction, stays at Llao Llao and Arelauquen Golf & Country Club, and heli-skiing in the Argentine Andes.",
    resorts: ["Cerro Catedral", "Llao Llao", "Arelauquen"],
    image: "/images/pat-heli.jpg",
  },

];

// ─── RESORTS ────────────────────────────────────────────────────────────────

export type Resort = {
  slug: string;
  name: string;
  region: "patagonia" | "north-america" | "europe";
  country: string;
  elevation: string;
  season: string;
  tagline: string;
  description: string;
  image: string;
};

export const RESORTS: Resort[] = [
  // ── PATAGONIA ────────────────────────────────────────────────────────────
  {
    slug: "bariloche",
    name: "Bariloche & Cerro Catedral",
    region: "patagonia",
    country: "Argentina",
    elevation: "2,388m",
    season: "July – September",
    tagline: "The Andes at their most dramatic. South America's premier ski destination.",
    description:
      "Cerro Catedral is the largest ski resort in South America and the heart of Argentine ski culture. Set above the city of San Carlos de Bariloche on the shores of Nahuel Huapi lake, it offers 1,200 hectares of skiable terrain with views across the Patagonian Andes that are unlike anything in the northern hemisphere. Our hotels — Llao Llao, Arelauquen, Peuma Hue — are within 30 minutes of the base.",
    image: "/images/pat-heli.jpg",
  },
  // ── NORTH AMERICA ──────────────────────────────────────────────────────────────────
  {
    slug: "aspen",
    name: "Aspen",
    region: "north-america",
    country: "United States",
    elevation: "3,813m",
    season: "November – April",
    tagline: "Four mountains. Unmatched culture. The standard all others chase.",
    description:
      "Aspen is skiing's most complete destination — four mountains (Aspen, Aspen Highlands, Buttermilk, Snowmass), world-class dining, and a town that operates at a level of sophistication found nowhere else in the Rockies. We work here with The Little Nell, Hotel Jerome, St. Regis, and W Aspen, and our instructors are among the most sought-after on Ajax.",
    image: "/hotels/usa-aspen-the-little-nell.jpg",
  },
  {
    slug: "vail",
    name: "Vail",
    region: "north-america",
    country: "United States",
    elevation: "3,527m",
    season: "November – April",
    tagline: "The back bowls alone are worth the flight.",
    description:
      "Vail's back bowls are the single best argument for skiing in Colorado. 5,300 acres of terrain, an immaculate village, and ski-in ski-out hotels that set the standard for the Rockies. We arrange full packages here — Four Seasons, Lodge at Vail, The Sebastian — with instructors who know every inch of the mountain.",
    image: "/hotels/usa-vail-four-seasons-vail.jpg",
  },
  {
    slug: "beaver-creek",
    name: "Beaver Creek",
    region: "north-america",
    country: "United States",
    elevation: "3,488m",
    season: "November – April",
    tagline: "Vail's quieter, more refined neighbour. Our most recommended.",
    description:
      "If Vail is the headline, Beaver Creek is the insider choice. The village is immaculate, the runs are impeccably groomed, and the crowds are a fraction of what you find at Vail. The Ritz-Carlton Bachelor Gulch, Park Hyatt, and Osprey are all excellent — and on a Tuesday, you can have some of the best terrain in Colorado almost to yourself.",
    image: "/hotels/usa-beavercreek-ritz-carlton-bachelor-gulch.jpg",
  },
  {
    slug: "breckenridge",
    name: "Breckenridge",
    region: "north-america",
    country: "United States",
    elevation: "3,914m",
    season: "November – April",
    tagline: "High altitude, long runs, a town with genuine character.",
    description:
      "Breckenridge sits at the highest base elevation of any major Colorado resort and offers some of the longest continuous vertical in the state. The historic Main Street is one of the most enjoyable ski town experiences in America. Grand Hyatt and One Ski Hill Place offer true ski-in ski-out at Peak 9.",
    image: "/hotels/usa-breckenridge-grand-hyatt-breckenridge.jpg",
  },
  {
    slug: "deer-valley",
    name: "Deer Valley",
    region: "north-america",
    country: "United States",
    elevation: "2,918m",
    season: "December – April",
    tagline: "Skiers only. Impeccably groomed. The most civilised resort in America.",
    description:
      "Deer Valley is the only major American resort that remains skiers-only — no snowboarders, no terrain parks. The grooming is the finest in the country, the service culture on the mountain is extraordinary, and the hotels (St. Regis, Montage, Stein Eriksen) are among the best in Utah. A client who stays here once almost always comes back.",
    image: "/hotels/usa-deervalley-st-regis-deer-valley.jpg",
  },
  {
    slug: "stowe",
    name: "Stowe",
    region: "north-america",
    country: "United States",
    elevation: "1,339m",
    season: "December – March",
    tagline: "New England skiing at its finest. Charm, tradition, and real terrain.",
    description:
      "Vermont's most iconic ski resort, and the best argument for East Coast skiing. Stowe offers genuine challenge on Mount Mansfield's steep trails, paired with a village that has maintained its character through decades of development. Lodge at Spruce Peak and Stowe Mountain Lodge are both exceptional bases.",
    image: "/hotels/usa-stowe-lodge-at-spruce-peak.jpg",
  },
  {
    slug: "lake-tahoe",
    name: "Lake Tahoe",
    region: "north-america",
    country: "United States",
    elevation: "2,637m",
    season: "November – April",
    tagline: "The lake, the light, the Sierra Nevada. West Coast skiing at its peak.",
    description:
      "Lake Tahoe is a ski destination unlike any other in the US — a vast alpine lake surrounded by Sierra Nevada resorts, each with its own character. Palisades Tahoe (formerly Squaw Valley), Heavenly, and Northstar are the major resorts. The Ritz-Carlton Lake Tahoe and Edgewood Tahoe are the definitive luxury addresses here.",
    image: "/hotels/usa-tahoe-ritz-carlton-lake-tahoe.jpg",
  },
  // ── EUROPE ───────────────────────────────────────────────────────────────
  {
    slug: "zermatt",
    name: "Zermatt",
    region: "europe",
    country: "Switzerland",
    elevation: "3,883m",
    season: "December – April",
    tagline: "The Matterhorn. Car-free. The most recognisable ski resort on earth.",
    description:
      "Zermatt is the most iconic ski destination in the world. Car-free, set below the Matterhorn, and connected to Cervinia in Italy via one of the great cross-border ski experiences. The Riffelalp Resort and The Omnia are our preferred properties here — both extraordinary in very different ways.",
    image: "/hotels/europe-zermatt-riffelalp-resort.jpg",
  },
  {
    slug: "courchevel",
    name: "Courchevel",
    region: "europe",
    country: "France",
    elevation: "2,738m",
    season: "December – April",
    tagline: "The most prestigious address in French skiing. 1850 defines luxury on the mountain.",
    description:
      "Courchevel 1850 is the apex of European ski luxury — three Michelin-starred restaurants, a private airport, ski-in ski-out from the Trois Vallées' best terrain, and a concentration of exceptional hotels (Aman, Cheval Blanc, Les Airelles) that is unmatched anywhere in the Alps. Connected to 600km of pistes across the Trois Vallées.",
    image: "/hotels/europe-courchevel-aman-le-melezin.jpg",
  },
  {
    slug: "st-moritz",
    name: "St. Moritz",
    region: "europe",
    country: "Switzerland",
    elevation: "3,303m",
    season: "December – March",
    tagline: "Two Winter Olympics. One hundred and fifty years of alpine elegance.",
    description:
      "St. Moritz hosted two Winter Olympics and invented the modern ski holiday. The Corviglia and Corvatsch ski areas are superb, but it's the combination of mountain, lake, town, and hotel culture — Badrutt's Palace, Kulm, Carlton — that makes St. Moritz a once-in-a-lifetime destination worth returning to annually.",
    image: "/hotels/europe-stmoritz-badruttss-palace-hotel.jpg",
  },
  {
    slug: "cortina",
    name: "Cortina d'Ampezzo",
    region: "europe",
    country: "Italy",
    elevation: "2,930m",
    season: "December – March",
    tagline: "The Dolomites. La Dolce Vita at altitude.",
    description:
      "Cortina is Italy's most glamorous ski resort — set in the Dolomites with ski areas (Faloria, Cristallo, Lagazuoi) connected across some of the most dramatic mountain scenery in Europe. The food, the fashion, and the après-ski culture are distinctly Italian. Host of the 2026 Winter Olympics. Mandarin Oriental Cristallo and Ancora are the landmark addresses.",
    image: "/hotels/europe-cortina-mandarin-oriental-cristallo.jpg",
  },
  {
    slug: "gstaad",
    name: "Gstaad",
    region: "europe",
    country: "Switzerland",
    elevation: "3,000m",
    season: "December – April",
    tagline: "The Bernese Oberland's most exclusive address. Quiet luxury, perfect snow.",
    description:
      "Gstaad operates at a different register from St. Moritz or Courchevel — quieter, more private, favoured by those who don't need to be seen. The Gstaad Mountain network offers 220km of pistes across six different ski areas. The Alpina Gstaad and Palace are among Switzerland's finest hotels.",
    image: "/hotels/europe-gstaad-the-alpina-gstaad.jpg",
  },
  {
    slug: "megeve",
    name: "Megève",
    region: "europe",
    country: "France",
    elevation: "2,350m",
    season: "December – April",
    tagline: "The most elegant ski village in France. Created by the Rothschilds in 1916.",
    description:
      "Megève was created in 1916 by the Baroness de Rothschild as a French alternative to St. Moritz, and it has never lost its original elegance. The village is arguably the most beautiful in the French Alps, the food culture is extraordinary (Emmanuel Renaut's Flocons de Sel has three Michelin stars), and the Four Seasons is a superb base.",
    image: "/hotels/europe-megeve-four-seasons.jpg",
  },
  {
    slug: "val-gardena",
    name: "Val Gardena",
    region: "europe",
    country: "Italy",
    elevation: "2,519m",
    season: "December – March",
    tagline: "The Dolomites' hidden gem. Rosa Alpina, three Michelin stars, and empty pistes.",
    description:
      "Val Gardena — and specifically the Alta Badia area — is the insider's choice for the Dolomites. Connected to the Sellaronda ski circuit (a full day circumnavigation of the Sella massif), and home to Rosa Alpina — one of the great European ski hotels, with St. Hubertus holding three Michelin stars.",
    image: "/hotels/europe-valgardena-rosa-alpina.jpg",
  },
  {
    slug: "madonna",
    name: "Madonna di Campiglio",
    region: "europe",
    country: "Italy",
    elevation: "2,504m",
    season: "December – March",
    tagline: "Italy's most fashionable ski resort. The Dolomiti di Brenta backdrop.",
    description:
      "Madonna di Campiglio is Italy's most fashionable resort after Cortina — set in the Dolomiti di Brenta with 150km of pistes and a clientele that arrives by helicopter and dresses for dinner. Lefay Resort, DV Chalet, and Chalet del Sogno are among the finest properties in the Italian Alps.",
    image: "/hotels/europe-madonna-lefay-resort.jpg",
  },
];

// ─── SERVICES ───────────────────────────────────────────────────────────────

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
      "Instructors worldwide, literally",
      "All levels: first-timers to advanced off-piste",
      "Multi-day and full-season packages",
      "Multilingual instructors (English, Spanish, Portuguese, French, Italian)",
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
      "Private aviation on request",
      "Helicopter transfers worldwide",
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
      "Private mountain dinners (Vail back bowls, Beaver Creek, Courchevel peaks & the Patagonian Andes)",
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
  { value: "24h", label: "Tailored proposal turnaround" },
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
  line: string; // editorial one-liner, ≤ 20 words
};

export const GUIDES: Guide[] = [
  {
    name: "Tomás Aguirre",
    role: "Lead Mountain Guide",
    region: "Patagonia",
    image: "/images/team/tomas.jpg",
    bio: "Born in Bariloche. Twenty years on Cerro Catedral. Tomás leads every Patagonia heli-skiing operation personally.",
    line: "Grew up reading the Patagonian wind. Still skis Catedral better than anyone we know.",
  },
  {
    name: "Elena Brunner",
    role: "Alpine Instructor",
    region: "Europe",
    image: "/images/team/elena.jpg",
    bio: "Former Swiss national team member. Elena specializes in technical instruction at Zermatt, St. Moritz, and Courchevel.",
    line: "Raced for Switzerland. Now teaches the precise, quiet technique the Alps are built on.",
  },
  {
    name: "Jack Mercer",
    role: "Backcountry Specialist",
    region: "Rockies",
    image: "/images/team/jack.jpg",
    bio: "AMGA-certified and AIARE level 2. Jack has guided off-piste in Aspen and Vail for over a decade.",
    line: "Knows which bowl filled overnight before the patrol drops the rope.",
  },
  {
    name: "Sofía Lange",
    role: "Travel Director",
    region: "Worldwide",
    image: "/images/team/sofia.jpg",
    bio: "Fifteen years designing private mountain itineraries. Sofía builds every trip from a blank page.",
    line: "Has stayed in every room she books you. Remembers which ones face the sunrise.",
  },
  {
    name: "Martín Vidal",
    role: "Concierge & Logistics",
    region: "Worldwide",
    image: "/images/team/martin.jpg",
    bio: "Private aviation, transfers, restaurants. Martín handles the parts of a trip you never see.",
    line: "The reason your flight, your car and your table all happen to align.",
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
    image: "/hotels/usa-aspen-the-little-nell.jpg",
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
    image: "/hotels/usa-beavercreek-ritz-carlton-bachelor-gulch.jpg",
    readTime: "5 min",
  },
  {
    tag: "Europe",
    title: "St. Moritz for people who don't care about St. Moritz",
    excerpt:
      "Ignore the town. The Corviglia runs above the lake are some of the finest groomed terrain in Europe, and the Kulm Hotel is one of the great places to wake up in the Alps.",
    image: "/hotels/europe-stmoritz-kulm-hotel-st-moritz.jpg",
    readTime: "6 min",
  },
];

// ─── THE MOUNTAINS · LONG-FORM ARTICLES ──────────────────────────────────────

export type Article = {
  slug: string;
  category: string;                 // e.g. "Cerro Catedral"
  place: string;                    // e.g. "Patagonia, Argentina"
  region: "patagonia" | "north-america";      // filter group
  title: string;
  dek: string;                      // one-line standfirst
  readTime: string;
  image: string;
  body: string[];                   // paragraphs
};

export const ARTICLES: Article[] = [
  {
    slug: "cerro-catedral",
    category: "Cerro Catedral",
    place: "Bariloche, Patagonia",
    region: "patagonia",
    title: "The Giant at the Bottom of the World",
    dek: "South America's largest ski area, read the way the locals read it.",
    readTime: "4 min",
    image: "/images/articles/cerro-catedral.jpg",
    body: [
      "The first time the gondola clears the line of lenga trees, most people stop talking. Below you, Lago Nahuel Huapi spreads out like an inland sea — cold, deep blue, fed by glaciers and ringed by peaks that never made it onto anyone's bucket list. This is the view you ski toward all day at Cerro Catedral, and it never stops working on you.",
      "Catedral is the largest ski resort in South America — just under 1,200 hectares of terrain rising from a base at 1,030 metres to a summit a little above 2,100. Half of that is groomed; the other half is open off-piste, the kind of unmarked, wind-sculpted country that rewards anyone willing to read it. Near the top sits Refugio Lynch, a mountain hut perched where the weather writes its own rules.",
      "What outsiders miss is that Patagonian snow behaves differently. It comes off the Pacific heavy and full of moisture, and the wind moves it constantly — loading one face, scouring the next. The locals don't fight this. They ski with the wind rather than against the clock, chasing the aspects that filled overnight and leaving the scoured ones alone. Spend a morning following someone who grew up here and you start to read the mountain as a living thing rather than a trail map.",
      "The season is short and honest — roughly July to mid-September — and the weather makes no promises. But when it aligns, when the sky clears and the lake turns to glass two thousand metres below your skis, there is nowhere in the Andes you would rather be standing.",
    ],
  },
  {
    slug: "vail",
    category: "Vail",
    place: "Colorado, United States",
    region: "north-america",
    title: "Why the Experts Keep Coming Back",
    dek: "Seven bowls, six miles of open snow, and a village built from memory.",
    readTime: "4 min",
    image: "/images/articles/vail.jpg",
    body: [
      "You don't understand Vail until you ski over the back of it. The front mountain is excellent — long, civilised, immaculately groomed — but it's a curtain. Drop over the ridge and the Back Bowls open in front of you: seven treeless alpine basins running six miles end to end, more than three thousand acres of open snow with nothing between you and the far side of the Rockies.",
      "That scale isn't an accident. In 1957, a 10th Mountain Division veteran named Pete Siebert hiked seven hours to the summit with a local rancher, Earl Eaton, stood on Ptarmigan Ridge, and looked down at the backside for the first time. The resort opened in 1962. Today Vail covers 5,289 acres — the third-largest single mountain in the United States — and the bowls remain its beating heart.",
      "The village is the other half of the story. Siebert had spent time in the Alps, and he built Vail to feel like the Tyrol — narrow streets, steep gabled roofs pitched to shed the snow, the warm light of a European mountain town at dusk. It is a piece of theatre, and it works. After a day in the bowls, walking those streets feels exactly right.",
      "Ask a serious skier why they return to Vail and they rarely mention the lifts or the lodges. They talk about a powder morning in the bowls in January, the whole expanse untracked, the cold thin air, and the rare sense — almost gone elsewhere — of having more mountain in front of you than you could ski in a week.",
    ],
  },
  {
    slug: "aspen",
    category: "Aspen",
    place: "Colorado, United States",
    region: "north-america",
    title: "Four Mountains, One Idea",
    dek: "A silver town that became four ski areas — and never lost the plot.",
    readTime: "4 min",
    image: "/images/articles/aspen.jpg",
    body: [
      "Aspen is really four mountains wearing one name, and the trick is knowing which to ski on a given morning. They sit minutes apart, share a single town, and could not be more different in character. The mistake visitors make is treating them as interchangeable. The people who love Aspen treat them as a wardrobe.",
      "Aspen Mountain — Ajax — is where it began in 1946, its runs cut by veterans of the 10th Mountain Division straight down the fall line above town. It is steep, classic, and unforgiving in the best way. Aspen Highlands is the locals' mountain: less polished, more honest, crowned by Highland Bowl, a hike-to double-black that pays you back with 360-degree views and some of the finest expert terrain in Colorado.",
      "Then there is Buttermilk — gentle enough to learn on, yet home to one of the longest slopestyle parks in the world — and Snowmass, which is larger than the other three combined and deep enough to disappear into for days. One lift ticket covers all four. Most people never ski them all in a single trip, and that is part of the appeal: there is always a reason to come back.",
      "Underneath it sits a Victorian silver town that never tore down its past. The brick storefronts, the high ceilings, the old hotels — they are real, not staged. The après is part of the ritual too; Cloud Nine, up at Highlands, is the liveliest table on the hill. But strip all of it away and Aspen still holds, because the skiing was always the point.",
    ],
  },
  {
    slug: "beaver-creek",
    category: "Beaver Creek",
    place: "Colorado, United States",
    region: "north-america",
    title: "Colorado's Best-Kept Secret",
    dek: "The mountain the people who know choose over Vail.",
    readTime: "3 min",
    image: "/images/articles/beaver-creek.jpg",
    body: [
      "There is a gatehouse on Avon Road, and everything about Beaver Creek follows from it. You don't pass through Beaver Creek on the way to somewhere else; there is no through-traffic, no accident of geography that brings strangers in. Everyone in the village chose to be there. It gives the whole place a stillness that its larger neighbour, ten minutes down the valley, simply doesn't have.",
      "That neighbour is Vail, and the comparison is unavoidable. Vail gets the headlines, the crowds, the six-mile bowls. Beaver Creek gets the mountain to itself on a Tuesday. Its 2,082 acres rise from a base at 8,100 feet to a summit of 11,440 — beautifully groomed, quietly demanding where you want it to be, and rarely busy enough to wait in a lift line.",
      "The details are what give it away. Heated walkways through the village. Ski valets who take your equipment at the end of the run. And, at three o'clock every afternoon at the base, someone handing out warm chocolate-chip cookies to anyone skiing past — a small, almost absurd gesture that tells you exactly what kind of resort this is.",
      "People who have skied everywhere tend to end up here, and they tend to be quiet about it. Beaver Creek doesn't announce itself. It assumes you already know what you are looking for: a serious mountain without the spectacle, and an afternoon that ends with a cookie in your glove and no one in your way.",
    ],
  },
  {
    slug: "breckenridge",
    category: "Breckenridge",
    place: "Colorado, United States",
    region: "north-america",
    title: "Skiing Above the Trees",
    dek: "A gold-rush town, and the highest chairlift on the continent.",
    readTime: "4 min",
    image: "/images/articles/breckenridge.jpg",
    body: [
      "At the top of Breckenridge the trees simply stop. Above a certain line nothing grows, and the mountain becomes a world of open bowls, wind-packed chutes and thin, brilliant air. To reach the highest of it you ride the Imperial Express SuperChair to 12,840 feet — the highest chairlift in North America — and step off somewhere that used to take a forty-five-minute hike to earn.",
      "That ride buys you a kind of skiing most people never get in-bounds: more than four hundred acres of high-alpine terrain above the treeline, all bowls and steeps and long sightlines. Peak 6, opened in 2013, added another five hundred acres of the same — wide-open snow with the curve of the Tenmile Range running away in every direction. It is exposed, serious country, and on a clear morning it feels like the roof of the continent.",
      "Then you ski back down into 1859. Gold was found in the Blue River that August, and the town that grew up around it never erased itself — Breckenridge still keeps the longest Victorian main street in Colorado, low clapboard storefronts in faded colours, the whole thing improbably intact beneath the peaks.",
      "That contrast is the appeal. Few places ask you to ski the thin air at thirteen thousand feet in the morning and walk a gold-rush street at night. Breckenridge does both without trying, and the altitude — punishing, exhilarating — stays with you the entire time.",
    ],
  },
];

// ─── HOTELS ────────────────────────────────────────────────────────────────

export type Hotel = {
  slug: string;
  name: string;
  resort: string;
  resortSlug: string;
  region: "patagonia" | "north-america" | "europe";
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  featured: boolean;
};

export const HOTELS: Hotel[] = [
  // ── PATAGONIA / BARILOCHE ────────────────────────────────────────────────
  {
    slug: "llao-llao",
    name: "Llao Llao Hotel & Resort",
    resort: "Bariloche",
    resortSlug: "bariloche",
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
    resortSlug: "bariloche",
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
    resortSlug: "bariloche",
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
    resortSlug: "bariloche",
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
    resortSlug: "bariloche",
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

  // ── USA / ASPEN ──────────────────────────────────────────────────────────
  {
    slug: "the-little-nell",
    name: "The Little Nell",
    resort: "Aspen",
    resortSlug: "aspen",
    region: "north-america",
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
    slug: "hotel-jerome",
    name: "Hotel Jerome",
    resort: "Aspen",
    resortSlug: "aspen",
    region: "north-america",
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
    featured: true,
  },
  {
    slug: "st-regis-aspen",
    name: "The St. Regis Aspen Resort",
    resort: "Aspen",
    resortSlug: "aspen",
    region: "north-america",
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
    featured: true,
  },
  {
    slug: "w-aspen",
    name: "W Aspen",
    resort: "Aspen",
    resortSlug: "aspen",
    region: "north-america",
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
    featured: true,
  },

  // ── USA / VAIL ───────────────────────────────────────────────────────────
  {
    slug: "four-seasons-vail",
    name: "Four Seasons Resort Vail",
    resort: "Vail",
    resortSlug: "vail",
    region: "north-america",
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
    slug: "lodge-at-vail",
    name: "Lodge at Vail",
    resort: "Vail",
    resortSlug: "vail",
    region: "north-america",
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
    featured: true,
  },
  {
    slug: "the-sebastian-vail",
    name: "The Sebastian — Vail",
    resort: "Vail",
    resortSlug: "vail",
    region: "north-america",
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
    featured: true,
  },
  {
    slug: "grand-hyatt-vail",
    name: "Grand Hyatt Vail",
    resort: "Vail",
    resortSlug: "vail",
    region: "north-america",
    category: "Luxury Resort",
    tagline: "Ski-in ski-out at Cascade Village, Vail.",
    description:
      "The Grand Hyatt brings generous rooms, multiple dining options, and true ski-in ski-out access to Vail's Cascade ski area. An excellent choice for families and groups needing space and convenience at a competitive price point for Vail.",
    features: [
      "Ski-in ski-out at Cascade Village",
      "Outdoor heated pool and hot tubs",
      "Atwater on Gore Creek restaurant",
      "Full-service spa and fitness",
      "Family suites and connecting rooms",
    ],
    image: "/hotels/usa-vail-grand-hyatt-vail.jpg",
    featured: false,
  },

  // ── USA / BEAVER CREEK ───────────────────────────────────────────────────
  {
    slug: "ritz-carlton-bachelor-gulch",
    name: "The Ritz-Carlton, Bachelor Gulch",
    resort: "Beaver Creek",
    resortSlug: "beaver-creek",
    region: "north-america",
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
    slug: "park-hyatt-beaver-creek",
    name: "Park Hyatt Beaver Creek",
    resort: "Beaver Creek",
    resortSlug: "beaver-creek",
    region: "north-america",
    category: "Ski Resort Hotel",
    tagline: "Ski-in ski-out in the heart of Beaver Creek Village.",
    description:
      "The Park Hyatt anchors Beaver Creek Village with a classic mountain-lodge aesthetic and true ski-in ski-out access. Consistently one of the most popular properties in the Vail Valley.",
    features: [
      "Ski-in ski-out at Beaver Creek Village",
      "Allegria Spa and multiple dining venues",
      "Outdoor heated lap pool",
      "Family suites and connecting rooms",
      "24-hour ski concierge desk",
    ],
    image: "/hotels/usa-beavercreek-park-hyatt-beaver-creek.jpg",
    featured: true,
  },
  {
    slug: "osprey-at-beaver-creek",
    name: "The Osprey at Beaver Creek",
    resort: "Beaver Creek",
    resortSlug: "beaver-creek",
    region: "north-america",
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

  // ── USA / BRECKENRIDGE ───────────────────────────────────────────────────
  {
    slug: "grand-hyatt-breckenridge",
    name: "Grand Hyatt Breckenridge",
    resort: "Breckenridge",
    resortSlug: "breckenridge",
    region: "north-america",
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
  {
    slug: "one-ski-hill-place",
    name: "One Ski Hill Place",
    resort: "Breckenridge",
    resortSlug: "breckenridge",
    region: "north-america",
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
    featured: true,
  },

  // ── USA / DEER VALLEY ────────────────────────────────────────────────────
  {
    slug: "st-regis-deer-valley",
    name: "St. Regis Deer Valley",
    resort: "Deer Valley",
    resortSlug: "deer-valley",
    region: "north-america",
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
    slug: "montage-deer-valley",
    name: "Montage Deer Valley",
    resort: "Deer Valley",
    resortSlug: "deer-valley",
    region: "north-america",
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
    featured: true,
  },
  {
    slug: "stein-eriksen-lodge",
    name: "Stein Eriksen Lodge",
    resort: "Deer Valley",
    resortSlug: "deer-valley",
    region: "north-america",
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
    featured: true,
  },

  // ── USA / STOWE ──────────────────────────────────────────────────────────
  {
    slug: "lodge-at-spruce-peak",
    name: "Lodge at Spruce Peak",
    resort: "Stowe",
    resortSlug: "stowe",
    region: "north-america",
    category: "Ski-In/Out Lodge",
    tagline: "Ski-in ski-out in the heart of Stowe's mountain village.",
    description:
      "The Lodge at Spruce Peak is the anchor property of Stowe's mountain village development — ski-in ski-out, with a spa, multiple dining venues, and easy access to Mount Mansfield's famous terrain.",
    features: [
      "Ski-in ski-out at Spruce Peak base",
      "Spa and fitness centre",
      "Multiple dining venues including a steakhouse",
      "Outdoor heated pool and hot tubs",
      "Steps from Stowe's new mountain village",
    ],
    image: "/hotels/usa-stowe-lodge-at-spruce-peak.jpg",
    featured: true,
  },
  {
    slug: "stowe-mountain-lodge",
    name: "Stowe Mountain Lodge",
    resort: "Stowe",
    resortSlug: "stowe",
    region: "north-america",
    category: "Mountain Resort",
    tagline: "Vermont's premier ski resort hotel.",
    description:
      "Set at the base of the gondola with ski-in ski-out access, Stowe Mountain Lodge combines New England charm with full resort amenities. A great base for exploring Vermont's best mountain.",
    features: [
      "Ski-in ski-out at Stowe gondola",
      "Full-service spa and wellness",
      "Hourglass Bar and Solerra restaurant",
      "Outdoor heated pool and fire pits",
      "Perfect for families and groups",
    ],
    image: "/hotels/usa-stowe-stowe-mountain-lodge.jpg",
    featured: true,
  },
  {
    slug: "topnotch-resort",
    name: "Topnotch Resort",
    resort: "Stowe",
    resortSlug: "stowe",
    region: "north-america",
    category: "Spa Resort",
    tagline: "Vermont's most acclaimed spa resort, steps from the mountain.",
    description:
      "Not ski-in ski-out, but Topnotch offers the most complete spa and wellness experience in Vermont, with shuttle access to both Stowe Mountain and the village. The combination of spa, tennis, and skiing is unmatched in New England.",
    features: [
      "120-acre property with spa and tennis",
      "Shuttle to Stowe Mountain and village",
      "Flannel restaurant: Vermont farm-to-table",
      "Equestrian centre and fitness facilities",
      "Vermont's highest-rated spa",
    ],
    image: "/hotels/usa-stowe-topnotch-resort.jpg",
    featured: false,
  },

  // ── USA / LAKE TAHOE ─────────────────────────────────────────────────────
  {
    slug: "ritz-carlton-lake-tahoe",
    name: "The Ritz-Carlton, Lake Tahoe",
    resort: "Lake Tahoe",
    resortSlug: "lake-tahoe",
    region: "north-america",
    category: "Five-Star Mountain Resort",
    tagline: "The definitive luxury ski hotel on Lake Tahoe's north shore.",
    description:
      "Positioned mid-mountain at Northstar California resort, the Ritz-Carlton Lake Tahoe is the finest hotel in the Tahoe basin — ski-in ski-out from its private gondola, with extraordinary lake and mountain views from almost every room.",
    features: [
      "Mid-mountain ski-in ski-out at Northstar",
      "Private gondola to base village",
      "Spa with 18 treatment rooms",
      "Heated outdoor pool with lake and mountain views",
      "Manzanita restaurant: Tahoe's best dining",
    ],
    image: "/hotels/usa-tahoe-ritz-carlton-lake-tahoe.jpg",
    featured: true,
  },
  {
    slug: "edgewood-tahoe",
    name: "Edgewood Tahoe Resort",
    resort: "Lake Tahoe",
    resortSlug: "lake-tahoe",
    region: "north-america",
    category: "Lakefront Resort",
    tagline: "Direct lake frontage and a championship golf course on South Tahoe.",
    description:
      "Edgewood sits directly on the south shore of Lake Tahoe with its own private beach, marina, and one of the country's most photographed golf courses. A superb base for Heavenly ski resort, just minutes away.",
    features: [
      "Private lakefront beach and marina",
      "Championship golf course (summer/fall)",
      "15 min to Heavenly ski resort",
      "Full-service spa and wellness",
      "Edgewood Restaurant with lake panorama",
    ],
    image: "/hotels/usa-tahoe-edgewood-tahoe.jpg",
    featured: true,
  },
  {
    slug: "hyatt-regency-lake-tahoe",
    name: "Hyatt Regency Lake Tahoe",
    resort: "Lake Tahoe",
    resortSlug: "lake-tahoe",
    region: "north-america",
    category: "Lakefront Hotel",
    tagline: "Private beach, lakeside dining, and Incline Village ski access.",
    description:
      "The Hyatt Regency sits on the north shore at Incline Village with its own private beach, close to Diamond Peak and a short drive from the major resorts. A reliable, well-positioned base for families.",
    features: [
      "Private beach on Lake Tahoe's north shore",
      "Close to Diamond Peak and Palisades Tahoe",
      "Lakeside Bar & Grill and spa",
      "Water sports in summer, skiing in winter",
      "Family suites and connecting rooms",
    ],
    image: "/hotels/usa-tahoe-hyatt-regency-lake-tahoe.jpg",
    featured: false,
  },

  // ── EUROPE / ZERMATT ─────────────────────────────────────────────────────
  {
    slug: "riffelalp-resort",
    name: "Riffelalp Resort",
    resort: "Zermatt",
    resortSlug: "zermatt",
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
    slug: "the-omnia-zermatt",
    name: "The Omnia",
    resort: "Zermatt",
    resortSlug: "zermatt",
    region: "europe",
    category: "Design Hotel",
    tagline: "A design hotel carved into the rock above Zermatt.",
    description:
      "The Omnia is accessed by a private rock elevator from Zermatt's main street. Thirty rooms of extraordinary design, all with Matterhorn views, and ski-out access that puts you on the mountain within minutes.",
    features: [
      "Private rock elevator access only",
      "Matterhorn views from every room",
      "30 rooms — intimate and considered",
      "Ski-out from the property",
      "Spa with Matterhorn panorama",
    ],
    image: "/hotels/europe-zermatt-the-omnia.jpg",
    featured: true,
  },
  {
    slug: "grand-hotel-zermatterhof",
    name: "Grand Hotel Zermatterhof",
    resort: "Zermatt",
    resortSlug: "zermatt",
    region: "europe",
    category: "Grand Hotel",
    tagline: "Zermatt's grand dame, steps from the Matterhorn.",
    description:
      "A classic Swiss grand hotel in the heart of Zermatt's car-free village. The Zermatterhof has welcomed guests since 1879 and combines traditional Swiss hospitality with contemporary luxury across 68 rooms and suites.",
    features: [
      "Historic property in central Zermatt",
      "Steps from all major ski lifts",
      "Spa and indoor pool",
      "Fine dining at The Gentleman's Dining Room",
      "Matterhorn views from upper rooms",
    ],
    image: "/hotels/europe-zermatt-grand-hotel-zermatterhof.jpg",
    featured: false,
  },

  // ── EUROPE / COURCHEVEL ──────────────────────────────────────────────────
  {
    slug: "aman-le-melezin",
    name: "Aman Le Mélézin",
    resort: "Courchevel",
    resortSlug: "courchevel",
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
    slug: "cheval-blanc-courchevel",
    name: "Cheval Blanc Courchevel",
    resort: "Courchevel",
    resortSlug: "courchevel",
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
    featured: true,
  },
  {
    slug: "les-airelles",
    name: "Les Airelles",
    resort: "Courchevel",
    resortSlug: "courchevel",
    region: "europe",
    category: "Château Hotel",
    tagline: "The most personal luxury hotel in Courchevel 1850.",
    description:
      "Les Airelles occupies the finest ski-in ski-out position in Courchevel 1850, with a château aesthetic and an exceptional staff-to-guest ratio. Pierre Gagnaire's restaurant is reason enough to come.",
    features: [
      "Best ski-in ski-out position in Courchevel 1850",
      "Restaurant by Pierre Gagnaire",
      "Les Airelles Spa with heated pool",
      "Château architecture and design",
      "Exceptional staff-to-guest ratio",
    ],
    image: "/hotels/europe-courchevel-les-airelles.jpg",
    featured: true,
  },
  {
    slug: "lapogee-courchevel",
    name: "L'Apogée Courchevel",
    resort: "Courchevel",
    resortSlug: "courchevel",
    region: "europe",
    category: "Design Chalet-Hotel",
    tagline: "The most design-forward address in Courchevel.",
    description:
      "L'Apogée is Courchevel's most contemporary luxury hotel — a chalet-hotel with a distinctly modern aesthetic and an outstanding ski-in ski-out position near the gondola.",
    features: [
      "Ski-in ski-out at Courchevel 1850",
      "Spa and indoor pool",
      "Rooftop terrace for mountain views",
      "Contemporary alpine design",
      "Bar and restaurant open to non-guests",
    ],
    image: "/hotels/europe-courchevel-lapogee.jpg",
    featured: false,
  },

  // ── EUROPE / ST. MORITZ ──────────────────────────────────────────────────
  {
    slug: "badrutts-palace",
    name: "Badrutt's Palace Hotel",
    resort: "St. Moritz",
    resortSlug: "st-moritz",
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
    slug: "kulm-hotel-st-moritz",
    name: "Kulm Hotel St. Moritz",
    resort: "St. Moritz",
    resortSlug: "st-moritz",
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
    featured: true,
  },
  {
    slug: "carlton-hotel-st-moritz",
    name: "Carlton Hotel St. Moritz",
    resort: "St. Moritz",
    resortSlug: "st-moritz",
    region: "europe",
    category: "Luxury Hotel",
    tagline: "Art Nouveau grandeur on the lakefront of St. Moritz.",
    description:
      "The Carlton is the most architecturally distinctive hotel in St. Moritz — a 1913 Art Nouveau building with a private ski lift connecting directly to the Corviglia ski area. One of the few remaining hotels with its own funicular.",
    features: [
      "Private ski lift to Corviglia",
      "1913 Art Nouveau architecture",
      "Lakefront position with panoramic views",
      "MYU Wellness Spa",
      "La Datcha restaurant and bar",
    ],
    image: "/hotels/europe-stmoritz-carlton-hotel-st-moritz.jpg",
    featured: false,
  },

  // ── EUROPE / CORTINA ─────────────────────────────────────────────────────
  {
    slug: "mandarin-oriental-cristallo",
    name: "Mandarin Oriental Cristallo",
    resort: "Cortina d'Ampezzo",
    resortSlug: "cortina",
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
  {
    slug: "ancora-cortina",
    name: "Ancora Cortina",
    resort: "Cortina d'Ampezzo",
    resortSlug: "cortina",
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
    featured: true,
  },
  {
    slug: "miramonti-cortina",
    name: "Miramonti Majestic Grand Hotel",
    resort: "Cortina d'Ampezzo",
    resortSlug: "cortina",
    region: "europe",
    category: "Belle Époque Grand Hotel",
    tagline: "Belle Époque grandeur in the Dolomites since 1893.",
    description:
      "One of the oldest grand hotels in the Dolomites, the Miramonti Majestic offers panoramic views across the Cortina valley from its elevated position, a historic swimming pool terrace, and the timeless atmosphere of a great 19th-century mountain hotel.",
    features: [
      "Panoramic elevated position above Cortina",
      "Historic outdoor pool and sun terrace",
      "Grand dining room with Dolomites views",
      "Shuttle to all Cortina ski areas",
      "Classic Belle Époque architecture",
    ],
    image: "/hotels/europe-cortina-miramonti-majestic-grand-hotel.jpg",
    featured: false,
  },

  // ── EUROPE / GSTAAD ──────────────────────────────────────────────────────
  {
    slug: "the-alpina-gstaad",
    name: "The Alpina Gstaad",
    resort: "Gstaad",
    resortSlug: "gstaad",
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
    slug: "gstaad-palace",
    name: "Gstaad Palace",
    resort: "Gstaad",
    resortSlug: "gstaad",
    region: "europe",
    category: "Palace Hotel",
    tagline: "The castle above Gstaad that defines Swiss alpine luxury.",
    description:
      "The turreted castle that has presided over Gstaad since 1913. Positioned high above the village, the Palace offers views across the Bernese Alps and immediate ski access to the GS mountain network.",
    features: [
      "Historic 1913 palace above Gstaad village",
      "360° alpine panorama from every room",
      "Ski-in ski-out to Gstaad Mountain",
      "La Fromagerie and multiple fine dining venues",
      "Palace Wellness with 9 treatment rooms",
    ],
    image: "/hotels/europe-gstaad-gstaad-palace.jpg",
    featured: true,
  },
  {
    slug: "grand-hotel-park-gstaad",
    name: "Grand Hotel Park Gstaad",
    resort: "Gstaad",
    resortSlug: "gstaad",
    region: "europe",
    category: "Grand Hotel",
    tagline: "Understated Swiss elegance in the heart of Gstaad village.",
    description:
      "The Grand Hotel Park occupies a prime position in Gstaad village, offering classic Swiss luxury at a scale more intimate than the Palace. A favourite with those who prefer quiet and discretion over spectacle.",
    features: [
      "Heart of Gstaad village",
      "Indoor pool and wellness facilities",
      "Park Restaurant and Terrace Bar",
      "Ski shuttle to Gstaad Mountain",
      "Renowned service and long-standing staff",
    ],
    image: "/hotels/europe-gstaad-grand-hotel-park.jpg",
    featured: false,
  },

  // ── EUROPE / MEGÈVE ──────────────────────────────────────────────────────
  {
    slug: "four-seasons-megeve",
    name: "Four Seasons Megève",
    resort: "Megève",
    resortSlug: "megeve",
    region: "europe",
    category: "Four Seasons Resort",
    tagline: "Four Seasons' French Alps flagship in the most elegant of ski villages.",
    description:
      "Megève is the most stylish ski village in France, and the Four Seasons is its most complete address. Traditional Savoyard architecture, contemporary luxury, and ski-in ski-out access on the Mont d'Arbois slopes.",
    features: [
      "Ski-in ski-out from Mont d'Arbois",
      "L'Alpaga restaurant: fine Savoyard dining",
      "Four Seasons Spa with heated outdoor pool",
      "Slope-side bar and après-ski terrace",
      "Concierge access to Megève's legendary restaurants",
    ],
    image: "/hotels/europe-megeve-four-seasons.jpg",
    featured: true,
  },
  {
    slug: "flocons-de-sel",
    name: "Flocons de Sel",
    resort: "Megève",
    resortSlug: "megeve",
    region: "europe",
    category: "Michelin-Star Auberge",
    tagline: "Three Michelin stars and six rooms above Megève.",
    description:
      "Emmanuel Renaut's legendary auberge above Megève. Six rooms only, three Michelin stars, and a culinary experience that makes it one of the most sought-after stays in the Alps.",
    features: [
      "Three Michelin stars — Emmanuel Renaut",
      "Six rooms only: the ultimate exclusivity",
      "Views over Megève valley",
      "Farm-to-table cuisine from own kitchen garden",
      "One of the hardest reservations in Europe",
    ],
    image: "/hotels/europe-megeve-flocons-de-sel.jpg",
    featured: true,
  },
  {
    slug: "hotel-mont-blanc-megeve",
    name: "Hôtel Mont-Blanc",
    resort: "Megève",
    resortSlug: "megeve",
    region: "europe",
    category: "Boutique Hotel",
    tagline: "The Sibuet family's landmark in the heart of Megève.",
    description:
      "The Sibuet family's flagship property in Megève village, combining Savoyard warmth with contemporary style. The spa, the food, and the personal service have made it one of the most beloved hotels in the French Alps.",
    features: [
      "Central Megève village position",
      "Sibuet family service culture",
      "Spa and indoor pool",
      "Restaurant with Megève gastronomy",
      "Ski shuttle to all three ski areas",
    ],
    image: "/hotels/europe-megeve-hotel-mont-blanc.jpg",
    featured: false,
  },

  // ── EUROPE / VAL GARDENA ─────────────────────────────────────────────────
  {
    slug: "rosa-alpina",
    name: "Rosa Alpina",
    resort: "Val Gardena",
    resortSlug: "val-gardena",
    region: "europe",
    category: "Five-Star Boutique",
    tagline: "The Dolomites' most intimate five-star, with the St. Hubertus three-star kitchen.",
    description:
      "A family-run five-star hotel in San Cassiano with the most decorated restaurant in the Dolomites — St. Hubertus, three Michelin stars. Ski-in ski-out from the Alta Badia pistes.",
    features: [
      "Ski-in ski-out from Alta Badia",
      "St. Hubertus: three Michelin stars",
      "Family-owned and operated since 1850",
      "Sole & Neve Spa with indoor pool",
      "Heli-skiing coordination available",
    ],
    image: "/hotels/europe-valgardena-rosa-alpina.jpg",
    featured: true,
  },
  {
    slug: "alpina-dolomites",
    name: "Alpina Dolomites",
    resort: "Val Gardena",
    resortSlug: "val-gardena",
    region: "europe",
    category: "Design Resort",
    tagline: "Contemporary design and Sellaronda ski access in the Dolomites.",
    description:
      "Alpina Dolomites is the most design-forward property in Val Gardena, with panoramic Dolomite views, a superb spa, and ski access to the famous Sellaronda circuit from the property.",
    features: [
      "Ski-in ski-out access to Sellaronda",
      "Award-winning contemporary architecture",
      "Panoramic Dolomite views",
      "Spa with indoor/outdoor pools",
      "Three restaurants and bar",
    ],
    image: "/hotels/europe-valgardena-alpina-dolomites-adler.jpg",
    featured: true,
  },
  {
    slug: "alpenroyal-grand",
    name: "Alpenroyal Grand Hotel",
    resort: "Val Gardena",
    resortSlug: "val-gardena",
    region: "europe",
    category: "Grand Hotel",
    tagline: "Classic grand hotel at the heart of Val Gardena.",
    description:
      "The Alpenroyal Grand has anchored Val Gardena's Selva village for decades, offering reliable five-star comfort, a superb wellness centre, and ski-in ski-out access to the Sellaronda circuit.",
    features: [
      "Ski-in ski-out to Sellaronda",
      "Wellness centre with pools and thermal baths",
      "Gourmet restaurant",
      "Central Selva village position",
      "Family-friendly with children's programme",
    ],
    image: "/hotels/europe-valgardena-alpenroyal-grand.jpg",
    featured: false,
  },

  // ── EUROPE / MADONNA ─────────────────────────────────────────────────────
  {
    slug: "lefay-resort-madonna",
    name: "Lefay Resort & Spa Madonna di Campiglio",
    resort: "Madonna di Campiglio",
    resortSlug: "madonna",
    region: "europe",
    category: "Wellness Resort",
    tagline: "The Dolomiti di Brenta's most complete wellness and ski resort.",
    description:
      "Lefay is the most awarded wellness resort in the Italian Alps — a modern chalet-hotel with an extraordinary spa, ski-in ski-out access to Madonna di Campiglio's 150km of pistes, and the distinctive Lefay brand of holistic luxury.",
    features: [
      "Ski-in ski-out at Madonna di Campiglio",
      "Lefay Spa: the Alps' premier wellness destination",
      "Gourmet restaurant with Dolomites views",
      "Organic garden and wellness programmes",
      "Heated outdoor pool with Brenta panorama",
    ],
    image: "/hotels/europe-madonna-lefay-resort.jpg",
    featured: true,
  },
  {
    slug: "dv-chalet-madonna",
    name: "DV Chalet",
    resort: "Madonna di Campiglio",
    resortSlug: "madonna",
    region: "europe",
    category: "Boutique Chalet-Hotel",
    tagline: "The most intimate luxury address in Madonna di Campiglio.",
    description:
      "DV Chalet is the most personal luxury property in Madonna — just a handful of suites, an outdoor hot tub with Dolomites views, and ski-in ski-out access on the 3-Tre Campiglio slope.",
    features: [
      "Ski-in ski-out on 3-Tre Campiglio",
      "Private outdoor hot tub with Dolomites views",
      "Small property — extremely personal service",
      "Gourmet breakfast and dinner",
      "Perfect for couples and small groups",
    ],
    image: "/hotels/europe-madonna-dv-chalet.jpg",
    featured: true,
  },
  {
    slug: "bio-hotel-hermitage",
    name: "Bio Hotel Hermitage",
    resort: "Madonna di Campiglio",
    resortSlug: "madonna",
    region: "europe",
    category: "Organic Boutique Hotel",
    tagline: "Madonna's leading organic hotel, ski-in ski-out.",
    description:
      "The Hermitage is Madonna di Campiglio's most distinctive hotel — certified organic, entirely ski-in ski-out, and with one of the best spa and pool facilities in the resort. A different kind of luxury, grounded in sustainability.",
    features: [
      "Certified organic hotel",
      "Ski-in ski-out at Madonna di Campiglio",
      "Spa with outdoor pool and Dolomites views",
      "100% organic restaurant",
      "Unique positioning for environmentally conscious travellers",
    ],
    image: "/hotels/europe-madonna-bio-hotel-hermitage.jpg",
    featured: false,
  },
];
