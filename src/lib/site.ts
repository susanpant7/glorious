export const site = {
  name: "Glorious Health Care",
  shortName: "Glorious",
  description: "Beauty & skincare essentials crafted with care.",
  contact: {
    email: "support@glorious.example",
    phone: "+91 98765 43210",
    address: "42 Bloom Street, Mumbai, Maharashtra, India",
    hours: {
      weekday: "Mon - Fri: 9:00 AM – 6:00 PM IST",
      saturday: "Sat: 10:00 AM – 2:00 PM",
      sunday: "Sun: Closed",
    },
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery", hiddenOnMobile: true },
  ],
  hero: {
    badge: "New launch",
    title: "Beauty landing page with a scrolling product showcase.",
    description:
      "Start with a full-width hero, keep the header fixed across pages, and show product listings as users scroll.",
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
    title: "About Glorious Health Care",
    description:
      "Founded with a passion for clean formulations and sustainable practices, Glorious Health Care combines scientific research with nourishing botanicals to create modern skincare and makeup essentials.",
    values: [
      "Quality ingredients",
      "Gentle, effective formulations",
      "Sustainability in packaging and sourcing",
      "Customer-first support",
    ],
  },
};

export default site;
