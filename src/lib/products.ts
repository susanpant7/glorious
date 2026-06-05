export type Review = {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type InfoSection = {
  id: string;
  title: string;
  content: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  type: string;
  color: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  discount?: number;
  description: string;
  details: string;
  shades: string;
  tone: string;
  colorClass: string;
  image: string;
  specs: Spec[];
  sections: InfoSection[];
  rating: number;
  reviews: Review[];
  currency?: "NPR";
};

export const products: Product[] = [
  {
    id: "powder",
    name: "Lakmé Forever Matte Face Powder",
    category: "Makeup",
    type: "Powder",
    color: "Amber",
    price: "₹169",
    oldPrice: "₹225",
    discount: 25,
    badge: "New",
    description:
      "Soft-focus powder for flawless coverage and lightweight comfort.",
    shades: "2 Shades Available",
    tone: "Warm Glow",
    colorClass: "bg-gradient-to-br from-amber-100 via-rose-100 to-slate-50",
    image:
      "https://images.unsplash.com/photo-1556228724-4d7a1ef4ecb0?auto=format&fit=crop&w=900&q=80",
    specs: [
      {
        label: "Product dimension",
        value: "3.6cm x 2.97cm x 10.25cm (l x b x h)",
      },
      { label: "Net quantity", value: "25g" },
      { label: "Commodity", value: "Face" },
      { label: "Manufacturer", value: "Aero Care Personal Products LLP" },
      { label: "Country of origin", value: "India" },
      { label: "Expiry date", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Talc, mica, silica, zinc stearate, vitamin E, colorants, and botanical extracts for a silky, skin-friendly finish.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply with a soft brush over foundation or bare skin. Blend in circular motions for even coverage and touch up during the day as needed.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Soft-focus effect, oil control, lightweight feel, and long-lasting natural coverage for all-day wear.",
      },
      {
        id: "safety",
        title: "Safety information",
        content:
          "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.",
      },
    ],
    rating: 4.8,
    details:
      "A luxurious pressed powder formulated for smooth coverage, shine control, and long-lasting comfort. The ultra-fine texture blends evenly for a soft-focus finish.",
    reviews: [
      {
        id: "powder-review-1",
        author: "Aisha R.",
        rating: 5,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
        content:
          "Perfect for a natural finish. The powder blends beautifully and lasts all day without feeling heavy.",
      },
      {
        id: "powder-review-2",
        author: "Sneha K.",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        date: "April 2026",
        content:
          "Amazing coverage and keeps shine away. I love how light it feels on my skin.",
      },
    ],
  },
  {
    id: "lipstick",
    name: "Lakmé 9to5 Hya Matte Lipstick",
    category: "Makeup",
    type: "Lipstick",
    color: "Peach",
    price: "₹594",
    oldPrice: "₹699",
    discount: 15,
    badge: "New",
    description:
      "Longwear matte lipstick with hydration and rich colour payoff.",
    shades: "24 Shades Available",
    tone: "Peach Nude",
    colorClass: "bg-gradient-to-br from-rose-100 via-orange-100 to-slate-50",
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80",
    specs: [
      {
        label: "Product dimension",
        value: "1.2cm x 1.2cm x 8.7cm (l x b x h)",
      },
      { label: "Net quantity", value: "3.6g" },
      { label: "Commodity", value: "Lips" },
      { label: "Manufacturer", value: "Aero Care Personal Products LLP" },
      { label: "Country of origin", value: "India" },
      { label: "Expiry date", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Hydrogenated castor oil, mineral oil, hyaluronic acid, antioxidants, and lightweight pigments for lasting color.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply directly to lips from the bullet or use a brush for precise coverage. Reapply as needed after eating or drinking.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Hydrates lips while delivering rich matte color that stays comfortable and prevents dryness.",
      },
      {
        id: "safety",
        title: "Safety information",
        content:
          "For external use only. Keep away from eyes. Stop use if irritation occurs.",
      },
    ],
    details:
      "A longwear matte formula enriched with hyaluronic acid to keep lips soft, plump, and richly pigmented throughout the day.",
    rating: 4.7,
    reviews: [
      {
        id: "lipstick-review-1",
        author: "Geeta M.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        content:
          "The colour is vibrant and comfortable. It lasted through lunch without drying out my lips.",
      },
      {
        id: "lipstick-review-2",
        author: "Priya S.",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        date: "May 2026",
        content:
          "Great matte finish with a moisturizing feel. The peach nude is my new go-to shade.",
      },
    ],
  },
  {
    id: "primer",
    name: "Lakmé 9 to 5 Primer + Matte Perfect Cover Foundation Mini",
    category: "Makeup",
    type: "Primer",
    color: "Nude",
    price: "₹254",
    oldPrice: "₹299",
    discount: 15,
    badge: "New",
    description: "Primer and foundation duo for a smooth, matte base.",
    shades: "8 Shades Available",
    tone: "Soft Beige",
    colorClass: "bg-gradient-to-br from-slate-100 via-slate-200 to-white",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
    specs: [
      {
        label: "Product dimension",
        value: "2.4cm x 2.4cm x 11.5cm (l x b x h)",
      },
      { label: "Net quantity", value: "30ml" },
      { label: "Commodity", value: "Face" },
      { label: "Manufacturer", value: "Aero Care Personal Products LLP" },
      { label: "Country of origin", value: "India" },
      { label: "Expiry date", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Cyclopentasiloxane, glycerin, silica, dimethicone, and microfine pigments for a smooth matte base.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply before foundation or mix with foundation. Blend evenly to blur pores and create a long-lasting matte finish.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Smooths skin texture, controls oil, and improves makeup adhesion without heaviness.",
      },
      {
        id: "safety",
        title: "Safety information",
        content:
          "For external use only. Avoid broken skin and discontinue if irritation occurs.",
      },
    ],
    details:
      "A lightweight primer and mini foundation set that smooths pores, controls shine, and creates a polished matte base for all-day wear.",
    rating: 4.6,
    reviews: [
      {
        id: "primer-review-1",
        author: "Nisha P.",
        rating: 5,
        date: "April 2026",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        content:
          "The primer keeps makeup in place and controls shine nicely. The foundation mini is perfect for travel.",
      },
      {
        id: "primer-review-2",
        author: "Anjali R.",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        date: "March 2026",
        content:
          "Lightweight coverage that feels natural. I appreciate how it doesn’t cake even after hours.",
      },
    ],
  },
  {
    id: "foundation",
    name: "Lakmé 9to5 Hya Matte Foundation + Hyaluronic Acid",
    category: "Makeup",
    type: "Foundation",
    color: "Nude",
    price: "₹719",
    oldPrice: "₹899",
    discount: 20,
    badge: "New",
    description:
      "Hydrating matte foundation with oil control and SPF benefits.",
    shades: "20 Shades Available",
    tone: "Neutral Beige",
    colorClass: "bg-gradient-to-br from-slate-100 via-amber-100 to-slate-50",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
    specs: [
      {
        label: "Product dimension",
        value: "2.8cm x 2.8cm x 13.5cm (l x b x h)",
      },
      { label: "Net quantity", value: "30ml" },
      { label: "Commodity", value: "Face" },
      { label: "Manufacturer", value: "Aero Care Personal Products LLP" },
      { label: "Country of origin", value: "India" },
      { label: "Expiry date", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Water, glycerin, hyaluronic acid, kaolin, mica, and SPF boosters for hydration and matte coverage.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Shake gently, apply to clean skin with fingers or brush, blend outward for smooth, long-lasting coverage.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Hydrates skin while delivering a matte finish with SPF protection and a lightweight feel.",
      },
      {
        id: "safety",
        title: "Safety information",
        content:
          "For external use only. Avoid direct eye contact and store at room temperature.",
      },
    ],
    details:
      "A hydrating matte foundation rich in hyaluronic acid, designed to deliver an even, luminous finish without feeling heavy.",
    rating: 4.9,
    reviews: [
      {
        id: "foundation-review-1",
        author: "Riya T.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
        content:
          "My skin looks flawless and hydrated all day. The SPF is an excellent bonus.",
      },
      {
        id: "foundation-review-2",
        author: "Meera S.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        date: "May 2026",
        content:
          "Beautiful finish and long wear. It blends easily and doesn't feel heavy.",
      },
    ],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
