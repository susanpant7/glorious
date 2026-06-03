export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  description: string;
  shades: string;
  tone: string;
  colorClass: string;
};

export const products: Product[] = [
  {
    id: "powder",
    name: "Lakmé Forever Matte Face Powder",
    category: "Makeup",
    price: "₹169",
    oldPrice: "₹225",
    badge: "New",
    description: "Soft-focus powder for flawless coverage and lightweight comfort.",
    shades: "2 Shades Available",
    tone: "Warm Glow",
    colorClass: "bg-gradient-to-br from-amber-100 via-rose-100 to-slate-50",
  },
  {
    id: "lipstick",
    name: "Lakmé 9to5 Hya Matte Lipstick",
    category: "Makeup",
    price: "₹594",
    oldPrice: "₹699",
    badge: "New",
    description: "Longwear matte lipstick with hydration and rich colour payoff.",
    shades: "24 Shades Available",
    tone: "Peach Nude",
    colorClass: "bg-gradient-to-br from-rose-100 via-orange-100 to-slate-50",
  },
  {
    id: "primer",
    name: "Lakmé 9 to 5 Primer + Matte Perfect Cover Foundation Mini",
    category: "Makeup",
    price: "₹254",
    oldPrice: "₹299",
    badge: "New",
    description: "Primer and foundation duo for a smooth, matte base.",
    shades: "8 Shades Available",
    tone: "Soft Beige",
    colorClass: "bg-gradient-to-br from-slate-100 via-slate-200 to-white",
  },
  {
    id: "foundation",
    name: "Lakmé 9to5 Hya Matte Foundation + Hyaluronic Acid",
    category: "Makeup",
    price: "₹719",
    oldPrice: "₹899",
    badge: "New",
    description: "Hydrating matte foundation with oil control and SPF benefits.",
    shades: "20 Shades Available",
    tone: "Neutral Beige",
    colorClass: "bg-gradient-to-br from-slate-100 via-amber-100 to-slate-50",
  },
];
