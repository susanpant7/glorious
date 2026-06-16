export type EventScheduleItem = {
  time: string;
  activity: string;
};

export type Event = {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  summary: string;
  description: string;
  organizer: string;
  ticketPrice: string;
  ticketsAvailable: string;
  registrationUrl: string;
  contactEmail: string;
  contactPhone: string;
  tags: string[];
  schedule: EventScheduleItem[];
  highlights: string[];
  images: string[];
  defaultImage: string;
};

export const events: Event[] = [
  {
    id: "skincare-launch",
    title: "Skincare Launch Experience",
    category: "Launch",
    date: "June 20, 2026",
    time: "5:00 PM - 8:00 PM",
    location: "The Bloom Hall, Mumbai",
    venue: "Bloom Hall, Lower Parel",
    summary: "Discover our newest botanical skincare line with live demos, expert talks, and exclusive launch offers.",
    description:
      "Join us for an immersive evening where beauty professionals and skincare lovers gather to experience new formulations, try product samples, and learn about clean, glowing skin routines from industry experts.",
    organizer: "GlowRious Events",
    ticketPrice: "799",
    ticketsAvailable: "Limited seats available",
    registrationUrl: "https://example.com/events/skincare-launch",
    contactEmail: "events@glowrious.example",
    contactPhone: "+91 98765 43211",
    tags: ["Skincare", "Launch", "Wellness"],
    schedule: [
      { time: "05:00 PM", activity: "Welcome reception & refreshments" },
      { time: "05:30 PM", activity: "Product demos with skincare specialists" },
      { time: "06:15 PM", activity: "Live routine walkthrough" },
      { time: "07:00 PM", activity: "Q&A and networking" },
    ],
    highlights: [
      "New botanical serum reveal",
      "Live skin consultation tips",
      "Exclusive launch-only discounts",
    ],
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "makeup-masterclass",
    title: "Bridal Makeup Masterclass",
    category: "Masterclass",
    date: "July 5, 2026",
    time: "11:00 AM - 2:00 PM",
    location: "Studio Seven, Bandra",
    venue: "Studio Seven, Bandra",
    summary: "Learn bridal makeup techniques from top artists and build a polished glow for ceremony-ready looks.",
    description:
      "This hands-on session covers bridal prep, base application, eye makeup, and longwear finishing for weddings and special occasions. Every attendee receives a personalized look guide and product kit.",
    organizer: "glowrious Academy",
    ticketPrice: "1199",
    ticketsAvailable: "20 seats remaining",
    registrationUrl: "https://example.com/events/makeup-masterclass",
    contactEmail: "academy@glowrious.example",
    contactPhone: "+91 98765 43212",
    tags: ["Makeup", "Masterclass", "Bridal"],
    schedule: [
      { time: "11:00 AM", activity: "Introduction and product selection" },
      { time: "11:30 AM", activity: "Skin prep and base application" },
      { time: "12:15 PM", activity: "Eye makeup and lip styling" },
      { time: "01:00 PM", activity: "Finishing touches and Q&A" },
    ],
    highlights: [
      "Pro makeup kit included",
      "Live demonstration by expert artist",
      "Complimentary consultation notes",
    ],
    images: [
      "https://images.unsplash.com/photo-1512418490979-92798cec27e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1512418490979-92798cec27e8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "skin-health-webinar",
    title: "Skin Health Webinar",
    category: "Webinar",
    date: "July 18, 2026",
    time: "7:00 PM - 8:30 PM",
    location: "Online",
    venue: "Virtual event",
    summary: "A live webinar focused on sensitive skin care, hydration, and daily wellness habits.",
    description:
      "Join dermatologists and beauty specialists for a guided conversation about skin health, ingredient science, and creating a stress-free skincare routine from home.",
    organizer: "glowrious Wellness",
    ticketPrice: "499",
    ticketsAvailable: "Unlimited online access",
    registrationUrl: "https://example.com/events/skin-health-webinar",
    contactEmail: "wellness@glowrious.example",
    contactPhone: "+91 98765 43213",
    tags: ["Webinar", "Skin Care", "Virtual"],
    schedule: [
      { time: "07:00 PM", activity: "Opening remarks and event overview" },
      { time: "07:15 PM", activity: "Expert discussion on hydration" },
      { time: "07:45 PM", activity: "Ingredient spotlight" },
      { time: "08:00 PM", activity: "Live Q&A" },
    ],
    highlights: [
      "Live dermatologist panel",
      "Downloadable skin guide",
      "Post-event replay available",
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wellness-weekend",
    title: "Wellness Weekend Retreat",
    category: "Retreat",
    date: "August 8-10, 2026",
    time: "All day",
    location: "Goa Resort",
    venue: "Seaside Wellness Retreat, Goa",
    summary: "A three-day retreat combining mindfulness, skincare workshops, and nature-inspired rituals.",
    description:
      "Recharge with curated skin and body sessions, gentle yoga, spa rituals, and wellness conversations designed for a calm, glowing reset.",
    organizer: "glowrious Retreats",
    ticketPrice: "5999",
    ticketsAvailable: "Sold by invitation",
    registrationUrl: "https://example.com/events/wellness-weekend",
    contactEmail: "retreats@glowrious.example",
    contactPhone: "+91 98765 43214",
    tags: ["Retreat", "Wellness", "Spa"],
    schedule: [
      { time: "Day 1", activity: "Arrival, welcome circle, and evening meditation" },
      { time: "Day 2", activity: "Skincare workshop, herbal tea ritual, and sound bath" },
      { time: "Day 3", activity: "Sunrise yoga and closing brunch" },
    ],
    highlights: [
      "Nature-inspired skincare labs",
      "Luxury wellness accommodations",
      "Small group experience",
    ],
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "summer-makeup-party",
    title: "Summer Makeup Party",
    category: "Event",
    date: "August 22, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "Artisan Loft, Andheri",
    venue: "Artisan Loft, Andheri",
    summary: "A social evening of colour, glow, and sample stations for the new season’s top looks.",
    description:
      "Explore seasonal shades, enjoy live demonstrations, and get personalized colour recommendations while mingling with beauty lovers in a creative studio setting.",
    organizer: "glowrious Social",
    ticketPrice: "299",
    ticketsAvailable: "40 seats available",
    registrationUrl: "https://example.com/events/summer-makeup-party",
    contactEmail: "social@glowrious.example",
    contactPhone: "+91 98765 43215",
    tags: ["Makeup", "Summer", "Community"],
    schedule: [
      { time: "04:00 PM", activity: "Welcome drinks and colour bar" },
      { time: "05:00 PM", activity: "Live makeup look demonstrations" },
      { time: "06:00 PM", activity: "Personal product consultations" },
      { time: "06:45 PM", activity: "Photo booth and giveaways" },
    ],
    highlights: [
      "Summer shade launch preview",
      "Complimentary touch-up stations",
      "Personalized recommendations",
    ],
    images: [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "beauty-innovation-panel",
    title: "Beauty Innovation Panel",
    category: "Panel",
    date: "September 2, 2026",
    time: "6:30 PM - 8:00 PM",
    location: "Creamery Hub, Lower Parel",
    venue: "Creamery Hub",
    summary: "Hear from founders, scientists, and trend experts about the future of beauty and sustainable skincare.",
    description:
      "A moderated panel exploring product innovation, ingredient transparency, and how beauty brands can build responsible, effective lines for modern consumers.",
    organizer: "glowrious Insights",
    ticketPrice: "599",
    ticketsAvailable: "100 seats available",
    registrationUrl: "https://example.com/events/beauty-innovation-panel",
    contactEmail: "insights@glowrious.example",
    contactPhone: "+91 98765 43216",
    tags: ["Innovation", "Panel", "Sustainability"],
    schedule: [
      { time: "06:30 PM", activity: "Doors open and networking" },
      { time: "07:00 PM", activity: "Panel discussion" },
      { time: "07:40 PM", activity: "Audience Q&A" },
      { time: "08:00 PM", activity: "Closing remarks" },
    ],
    highlights: [
      "Founder perspectives",
      "Ingredient transparency topics",
      "Networking with beauty professionals",
    ],
    images: [
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "facecare-fitness-session",
    title: "Face Care & Fitness Session",
    category: "Wellness",
    date: "September 15, 2026",
    time: "9:30 AM - 12:30 PM",
    location: "Green Studio, Powai",
    venue: "Green Studio, Powai",
    summary: "Blend facial self-care with movement, breathwork, and hydration tips for a balanced beauty routine.",
    description:
      "This morning session combines guided facial exercises, light movement, and skincare coaching to help your skin look bright and refreshed from the inside out.",
    organizer: "glowrious Wellness",
    ticketPrice: "899",
    ticketsAvailable: "30 seats available",
    registrationUrl: "https://example.com/events/facecare-fitness-session",
    contactEmail: "wellness@glowrious.example",
    contactPhone: "+91 98765 43217",
    tags: ["Wellness", "Face Care", "Fitness"],
    schedule: [
      { time: "09:30 AM", activity: "Breathwork and skin prep" },
      { time: "10:00 AM", activity: "Facial movement session" },
      { time: "11:00 AM", activity: "Hydration and skincare routine" },
      { time: "12:00 PM", activity: "Closing refresh and takeaway guide" },
    ],
    highlights: [
      "Guided facial exercises",
      "Hydration ritual kit",
      "Wellness take-home plan",
    ],
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "sensory-salon-evening",
    title: "Sensory Salon Evening",
    category: "Experience",
    date: "October 7, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Luxe Salon, Colaba",
    venue: "Luxe Salon, Colaba",
    summary: "A curated sensory event featuring aroma-based skincare rituals, texture testing, and complementary refreshments.",
    description:
      "Enjoy a thoughtfully designed evening of scent, texture, and self-care. The sensory salon pairs product experiences with a relaxed atmosphere and expert storytelling.",
    organizer: "glowrious Experiences",
    ticketPrice: "699",
    ticketsAvailable: "50 seats available",
    registrationUrl: "https://example.com/events/sensory-salon-evening",
    contactEmail: "experiences@glowrious.example",
    contactPhone: "+91 98765 43218",
    tags: ["Sensory", "Skincare", "Relaxation"],
    schedule: [
      { time: "06:00 PM", activity: "Welcome and scent exploration" },
      { time: "06:45 PM", activity: "Texture stations and demos" },
      { time: "07:30 PM", activity: "Guided skincare ritual" },
      { time: "08:15 PM", activity: "Networking with refreshments" },
    ],
    highlights: [
      "Aroma-driven experience",
      "Product texture stations",
      "Relaxed salon setting",
    ],
    images: [
      "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hair-care-lounge",
    title: "Hair Care Lounge",
    category: "Workshop",
    date: "October 22, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Studio Nine, Juhu",
    venue: "Studio Nine, Juhu",
    summary: "A haircare workshop exploring scalp health, nourishing styling, and product layering techniques.",
    description:
      "Learn expert haircare rituals for shine, strength, and scalp balance. The workshop includes product stations, styling demos, and home care recommendations.",
    organizer: "glowrious Studio",
    ticketPrice: "999",
    ticketsAvailable: "35 seats available",
    registrationUrl: "https://example.com/events/hair-care-lounge",
    contactEmail: "studio@glowrious.example",
    contactPhone: "+91 98765 43219",
    tags: ["Hair Care", "Workshop", "Style"],
    schedule: [
      { time: "02:00 PM", activity: "Scalp health talk" },
      { time: "02:45 PM", activity: "Nourishing mask demo" },
      { time: "03:30 PM", activity: "Styling and finish tips" },
      { time: "04:15 PM", activity: "Haircare Q&A" },
    ],
    highlights: [
      "Scalp health education",
      "Hands-on care stations",
      "Take-home styling tips",
    ],
    images: [
      "https://images.unsplash.com/photo-1512418490979-92798cec27e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1512418490979-92798cec27e8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "holiday-glow-studio",
    title: "Holiday Glow Studio",
    category: "Session",
    date: "November 10, 2026",
    time: "1:00 PM - 4:00 PM",
    location: "Oak Studio, Khar",
    venue: "Oak Studio, Khar",
    summary: "Get ready for festive gatherings with glow-boosting skin prep, quick beauty hacks, and styling tips.",
    description:
      "This festive session is perfect for anyone looking for beauty inspiration, quick holiday routines, and confidence-boosting glam pathways ahead of seasonal celebrations.",
    organizer: "glowrious Studio",
    ticketPrice: "649",
    ticketsAvailable: "90 seats available",
    registrationUrl: "https://example.com/events/holiday-glow-studio",
    contactEmail: "studio@glowrious.example",
    contactPhone: "+91 98765 43220",
    tags: ["Holiday", "Glow", "Beauty"],
    schedule: [
      { time: "01:00 PM", activity: "Welcome and glow consultation" },
      { time: "01:30 PM", activity: "Makeup refresh demonstrations" },
      { time: "02:30 PM", activity: "Quick skincare glow tips" },
      { time: "03:15 PM", activity: "Festive finishing touches" },
    ],
    highlights: [
      "Festive beauty ideas",
      "Quick routine tips",
      "Complimentary sample bag",
    ],
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    ],
    defaultImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getEventById(id: string) {
  return events.find((event) => event.id === id);
}
