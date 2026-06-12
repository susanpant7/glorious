export type NavLink = {
  label: string;
  href: string;
  hiddenOnMobile?: boolean;
};

export const site = {
  name: "glowrious Health Care",
  shortName: "glowrious",
  description: "Beauty & skincare essentials crafted with care.",
  contact: {
    email: "glowrious.info@gmail.com",
    phone: "+977-9704509812",
    address: "Suncity Road, Kageshwori Manohara - 09, Kathmandu",
    hours: {
      weekday: "Mon - Fri: 9:00 AM – 6:00 PM",
    },
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],
  hero: {
    badge: "GlowRious",
    title: "Chasing your glow",
    description:
      "GlowRious is a premium dermatology-inspired skincare brand owned and marketed by Yuva Trade Concern, Nepal. Built around a single promise — Chasing your glow — the brand combines clinically respected actives with modern encapsulation science to deliver visible, comfortable results for everyday skin concerns.",
  },
  heroActions: {
    primary: "Shop products",
    secondary: "View listings",
  },
  featured: {
    subtitle: "Trending now",
    title: "New arrivals",
    description: "Discover our latest makeup and skincare essentials in a beautifully designed product grid.",
    allLabel: "All",
    summaryTemplate: "Showing {count} products for {category}.",
  },
  about: {
    title: "About glowrious Health Care",
    description:
      "GlowRious is a premium dermatology-inspired skincare brand owned and marketed by Yuva Trade Concern, Nepal. Built around a single promise — Chasing your glow — the brand combines clinically respected actives with modern encapsulation science to deliver visible, comfortable results for everyday skin concerns.",
    values: [
      "Quality ingredients",
      "Gentle, effective formulations",
      "Sustainability in packaging and sourcing",
      "Customer-first support",
    ],
    fiveThingsToRemember: [
      "GlowRious is a Neosome™-powered brightening serum — deep delivery is our headline.",
      "Eleven actives cover four jobs: brighten, exfoliate, repair, protect.",
      "It targets melasma, sun & age spots, acne marks/PIH and dull, uneven skin.",
      "It's clean, vegan and gentle — sell the tolerability and the nightly routine.",
      "Always pair it with daily sunscreen, and set a 6–8 week expectation."
    ]
  },
};

export default site;
