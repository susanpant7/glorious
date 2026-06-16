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
  price: number;
  oldPrice?: number;
  badge?: string;
  discount?: number;
  description: string;
  details: string;
  shades: string;
  tone: string;
  colorClass: string;
  image: string;
  images?: string[];
  specs: Spec[];
  sections: InfoSection[];
  rating: number;
  reviews: Review[];
  currency?: "NPR";
};

export const products: Product[] = [
  {
    id: "face-wash",
    name: "Face Wash",
    category: "SkinCare",
    type: "Face wash",
    color: "Clear",
    price: 560,
    description:
      "Powered by 2% Salicylic Acid and 2% Lactic Acid, GlowRious Face Wash gently cleanses, brightens, and supports clearer skin without stripping moisture.",
    shades: "One formula",
    tone: "All skin types",
    colorClass: "bg-gradient-to-br from-cyan-100 via-slate-100 to-white",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102619/GlowRious_Face_wash_e2dnwu.png",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102619/GlowRious_Face_wash_e2dnwu.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106614/face_Wash_Glorious_06_eqzpi3.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106614/face_Wash_Glorious_04_s71ic0.png",
    ],
    specs: [
      { label: "Net quantity", value: "100 ml" },
      { label: "Commodity", value: "Face Cleanser" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua (Water), Sodium Lauroyl Sarcosinate, Cocamidopropyl Betaine, Coco Glucoside, Glycerin, Propylene Glycol, Lactic Acid, Salicylic Acid, Cellulose Beads, Glycyrrhiza Glabra (Licorice) Extract, Acmella Oleracea Extract, Curcuma Sativus (Turmeric) Extract, Rubia Cordifolia Extract, Punarnava (Boerhavia Diffusa) Extract, Sodium Hydroxide, Phenoxethanol.",
      },
      {
        id: "key-ingredients",
        title: "Key Active Ingredients",
        content:
          "2% Salicylic Acid helps unclog pores and reduce acne; 2% Lactic Acid gently exfoliates dead skin cells and improves texture. Botanical extracts like Licorice, Turmeric, Indian Madder, Punarnava, and Acmella soothe, brighten, and condition skin.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Removes excess oil, unclogs pores, brightens dull skin, and supports smoother, healthier-looking skin without stripping natural moisture.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Wet face, massage a small amount over wet skin in circular motions, then rinse thoroughly. Use daily morning and evening for best results.",
      },
    ],
    rating: 4.8,
    details:
      "GlowRious Face Wash combines acne-fighting 2% Salicylic Acid and 2% Lactic Acid with botanical extracts such as Licorice, Turmeric, Rubia Cordifolia, Punarnava, and Acmella Oleracea. Its gentle sulfate-free base removes excess oil, unclogs pores, and helps promote clearer, smoother, and healthier-looking skin without stripping moisture.",
    reviews: [
      {
        id: "face-wash-review-1",
        author: "Aanya S.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        content:
          "My skin feels fresh and clean without tightness. It has helped reduce breakouts and keeps my face comfortably hydrated.",
      },
      {
        id: "face-wash-review-2",
        author: "Rohini P.",
        rating: 4,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        content:
          "Great cleanser for oily skin. It brightens and controls shine while leaving the skin soft.",
      },
    ],
  },
  {
    id: "moisturizer",
    name: "Moisturizer",
    category: "SkinCare",
    type: "Moisturizer",
    color: "Hydrating",
    price: 920,
    description:
      "A deep-hydration moisturizer formulated with Purasal® Moistxs, Phytosqualene, Niacinamide and Propylene Glycol to strengthen skin barrier and improve texture.",
    shades: "One formula",
    tone: "All skin types",
    colorClass: "bg-gradient-to-br from-emerald-100 via-slate-100 to-white",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102798/GlowRious_Moisturiser_muq0y2.png",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102798/GlowRious_Moisturiser_muq0y2.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781105886/Moisturiser_Tube_dyksdw.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781105886/Moisturiser_Glorious_01_sxublf.png",
    ],
    specs: [
      { label: "Net quantity", value: "50 ml" },
      { label: "Commodity", value: "Moisturizer" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua (Water), Propylene Glycol, Glycerin, Urea, Sodium Acrylates Copolymer, Lecithin, Caprylic/Capric Triglyceride, Niacinamide, Phytosqualene, Purasal® Moistxs Complex, Lactic Acid, Sodium Gluconate, Sodium Hyaluronate, Phytosqualene, Phenoxyethanol, Copper Peptide, Dimethicone, Cucumis Sativus (Cucumber) Fruit Extract, Citrullus Lanatus (Watermelon) Fruit Extract, Carica Papaya (Papaya) Fruit Extract, Perfume, Color (CI 42051).",
      },
      {
        id: "key-ingredients",
        title: "Key Ingredients",
        content:
          "Purasal® Moistxs 2% delivers long-lasting hydration and softening. Phytosqualene 1% locks in moisture without greasiness. Niacinamide 1% improves texture and supports an even tone. 4% Propylene Glycol attracts and retains moisture while enhancing absorption.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Provides deep hydration, strengthens the skin barrier, smooths texture, and keeps skin soft, healthy, and radiant all day long.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply to cleansed skin morning and evening. Massage gently until fully absorbed and follow with sunscreen during daytime use.",
      },
    ],
    rating: 4.7,
    details:
      "Glowrious Moisturiser is formulated with Purasal® Moistxs 2%, Phytosqualene 1%, Niacinamide 1%, and 4% Propylene Glycol to deliver deep hydration, strengthen the skin barrier, and improve overall skin texture. Enriched with botanical extracts, it helps keep skin soft, smooth, healthy, and radiant all day long.",
    reviews: [
      {
        id: "moisturizer-review-1",
        author: "Simran K.",
        rating: 5,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        content:
          "This moisturizer keeps my skin hydrated all day. It feels lightweight and absorbs quickly without stickiness.",
      },
      {
        id: "moisturizer-review-2",
        author: "Neha L.",
        rating: 4,
        date: "April 2026",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        content:
          "Nice texture and soothing finish. My skin looks brighter and feels smoother after using it.",
      },
    ],
  },
  {
    id: "sun-block",
    name: "Sun Block SPF 50 PA+++",
    category: "SkinCare",
    type: "Sun Cream",
    color: "Light",
    price: 1280,
    description:
      "Broad-spectrum SPF 50 PA+++ protection with SunshieldEX™ Technology, Niacinamide and Aloe Vera for a lightweight, non-greasy finish.",
    shades: "One formula",
    tone: "All skin tones",
    colorClass: "bg-gradient-to-br from-yellow-100 via-amber-100 to-slate-50",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Sun_Block_50_yuavqa.png",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Sun_Block_50_yuavqa.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781107051/Sun_block_50_tube_rexkfi.jpg",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781107050/Glorious_Sun_block_50_06_c6gkfh.png",
    ],
    specs: [
      { label: "Net quantity", value: "60 ml" },
      { label: "Commodity", value: "Sun Care" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua (Water), Propylene Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Glycerin, Cyclopentasiloxane, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Benzophenone-3, Phenylbenzimidazole Sulfonic Acid, Ethylhexyl Triazone, Niacinamide, Panthenol, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Tocopheryl Acetate, Camellia Sinensis Leaf Extract, Glycyrrhiza Glabra Root Extract, Daucus Carota Sativa Root Extract, Centella Asiatica Extract, Dimethicone, Phenoxyethanol, Ethylhexylglycerin, Fragrance.",
      },
      {
        id: "key-ingredients",
        title: "Key Ingredients",
        content:
          "SunshieldEX™ Technology gives broad-spectrum defense against UVA, UVB, and blue light. Niacinamide supports even tone. Sodium Hyaluronate hydrates. Panthenol soothes and Aloe Vera cools.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Helps protect skin from sun damage while hydrating and nourishing with a lightweight, non-greasy finish suitable for everyday use.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply liberally to face and neck 15 minutes before sun exposure. Reapply every two hours or after sweating or towel drying.",
      },
    ],
    rating: 4.9,
    details:
      "GlowRious Sun Block SPF 50 PA+++ combines advanced SunshieldEX™ Technology with broad-spectrum UV filters, Niacinamide, Sodium Hyaluronate, Panthenol, Aloe Vera, and antioxidant botanical extracts to defend, hydrate, and nourish skin with a lightweight finish.",
    reviews: [
      {
        id: "sun-block-review-1",
        author: "Isha M.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        content:
          "Feels light and doesn't leave a white cast. It keeps my skin protected all day without feeling greasy.",
      },
      {
        id: "sun-block-review-2",
        author: "Karishma D.",
        rating: 4,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        content:
          "Great SPF for daily use. It blends easily and sits well under makeup.",
      },
    ],
  },
  {
    id: "shampoo",
    name: "Anti-Hair Fall Shampoo",
    category: "Haircare",
    type: "Shampoo",
    color: "Nourishing",
    price: 920,
    description:
      "A strengthening anti-hair fall shampoo formulated with Argan Oil, Whey Protein, Pea Protein and Cressatine® for stronger, healthier-looking hair.",
    shades: "One formula",
    tone: "All hair types",
    colorClass: "bg-gradient-to-br from-violet-100 via-slate-100 to-white",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Shampoo_ewvcx0.jpg",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Shampoo_ewvcx0.jpg",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106926/Shampoo_Conditioner_tbky3w.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106925/Gemini_Generated_Image_31qhj031qhj031qh_dylcry.png",
    ],
    specs: [
      { label: "Net quantity", value: "200 ml" },
      { label: "Commodity", value: "Hair Care" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua, Sodium Lauryl Sulphate, Ethylene Glycol Stearate, Coco Diethanolamide, Coco Betaine, Sorbitol, Argan Oil, Whey Protein, Pea Protein, Cressatine® (Nasturtium Officinale Extract & Tropaeolum Majus Extract), Vitamin E, Biotin, Rosemary Oil, Thuja Extract, Perfume, Sodium Chloride, Phenoxyethanol.",
      },
      {
        id: "key-ingredients",
        title: "Key Ingredients",
        content:
          "3% Argan Oil nourishes hair and improves elasticity; 2% Whey Protein strengthens strands; 2% Pea Protein helps repair damage; 2% Cressatine® supports healthier-looking hair and density.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Gently cleanses while reducing hair fall, strengthening fibers, improving scalp health, and leaving hair shinier and more manageable.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Massage into wet scalp and hair, lather well, then rinse thoroughly. Use regularly for best results.",
      },
    ],
    rating: 4.6,
    details:
      "Experience advanced hair care with GlowRious Anti-Hair Fall Shampoo, a nourishing formula with Argan Oil, Whey Protein, Pea Protein, and Cressatine® that helps reduce hair fall, strengthen hair fibers, improve scalp health, and promote thicker, healthier-looking hair.",
    reviews: [
      {
        id: "shampoo-review-1",
        author: "Tara S.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        content:
          "My hair feels stronger and less prone to breakage. It lathers well and leaves hair soft.",
      },
      {
        id: "shampoo-review-2",
        author: "Pooja R.",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
        rating: 4,
        date: "May 2026",
        content:
          "Good shampoo for hair fall control. The scent is pleasant and it rinses cleanly.",
      },
    ],
  },
  {
    id: "vitamin-c-serum",
    name: "Skin Brightening 15% Vitamin C Face Serum",
    category: "SkinCare",
    type: "Serum",
    color: "Radiant",
    price: 1960,
    description:
      "A brightening serum with 15% Vitamin C, Hyaluronic Acid, and Alpha Arbutin to even skin tone and deliver a luminous glow.",
    shades: "One formula",
    tone: "All skin tones",
    colorClass: "bg-gradient-to-br from-orange-100 via-slate-100 to-white",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Vitamin_C_h5igyp.png",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Vitamin_C_h5igyp.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106615/Gemini_Generated_Image_fgz1rcfgz1rcfgz1_sutenb.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106615/Gemini_Generated_Image_fpor8qfpor8qfpor_ukfqkg.png",
    ],
    specs: [
      { label: "Net quantity", value: "30 ml" },
      { label: "Commodity", value: "Serum" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua, Vitamin C (3-O-Ethyl Ascorbic Acid), Propylene Glycol, Glycerine, Sodium Hyaluronate, D-Panthenol, Diethylene Glycol Monoethyl Ether, Alpha Arbutin, PEG-40 Hydrogenated Castor Oil, RonaCare® AP, Rosehip Oil, Retinol, Sodium Metabisulfite, DMDM Hydantoin.",
      },
      {
        id: "key-ingredients",
        title: "Key Ingredients",
        content:
          "15% Vitamin C brightens and improves radiance; Hyaluronic Acid hydrates and plumps; Alpha Arbutin targets uneven tone; D-Panthenol soothes and supports the skin barrier.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Helps brighten dull skin, reduce pigmentation, even skin tone, and provide deep hydration for smoother, more luminous skin.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply evenly to cleansed face and neck each morning and evening before moisturizer. Use sunscreen during daytime.",
      },
    ],
    rating: 4.8,
    details:
      "Reveal radiant, healthy-looking skin with GlowRious 15% Vitamin C Face Serum. This lightweight, fast-absorbing formula combines vitamin C, hyaluronic acid, and alpha arbutin to brighten, hydrate, and improve skin tone while defending against environmental stressors.",
    reviews: [
      {
        id: "serum-review-1",
        author: "Ankita V.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        content:
          "My skin looks brighter and feels hydrated. It absorbs quickly without stickiness.",
      },
      {
        id: "serum-review-2",
        author: "Sana Q.",
        rating: 4,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        content:
          "This serum helped even out my skin tone and gave my complexion a nice glow.",
      },
    ],
  },
  {
    id: "night-cream",
    name: "Retinol Night Cream",
    category: "SkinCare",
    type: "Cream",
    color: "Repair",
    price: 1520,
    description:
      "A restorative night cream with Retinol, Snail Mucin, Bakuchiol, and Hyaluronic Acid to renew skin while you sleep.",
    shades: "One formula",
    tone: "All skin types",
    colorClass: "bg-gradient-to-br from-indigo-100 via-slate-100 to-white",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102801/GlowRious_Night_Cream_ryqmny.jpg",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102801/GlowRious_Night_Cream_ryqmny.jpg",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781107508/Night_Cream_01_izzdta.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781107506/Night_Cream_box_w5jajz.png",
    ],
    specs: [
      { label: "Net quantity", value: "50 ml" },
      { label: "Commodity", value: "Night Cream" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua, Propylene Glycol, Glycerine, D-Panthenol, Polyacrylate and Lecithin, Bakuchiol Water, Snail Mucin Secretion Filtrate, Sodium Hyaluronate, Cucumber Extract, Oatmeal Extract, Vitamin C, Allantoin, Squalane, Argan Oil, Clary Sage Oil, Chamomile Oil, Phyto Squalene, Retinol, Perfume, Phenoxyethanol.",
      },
      {
        id: "key-ingredients",
        title: "Key Ingredients",
        content:
          "Retinol supports skin renewal and reduces fine lines. Snail Mucin hydrates and repairs. Bakuchiol Water helps firmness. Hyaluronic Acid keeps skin plump and supple.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Helps restore skin overnight, improve texture, hydrate deeply, and leave skin feeling refreshed and youthful by morning.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply a thin layer to cleansed skin in the evening. Follow with moisturizer if needed and avoid direct sun exposure during daytime.",
      },
    ],
    rating: 4.7,
    details:
      "Wake up to smoother, firmer, healthier-looking skin with GlowRious Retinol Night Cream. Its rich yet lightweight formula deeply nourishes and supports visible skin renewal while you sleep.",
    reviews: [
      {
        id: "night-cream-review-1",
        author: "Kavita N.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
        content:
          "My skin feels softer and looks more refreshed every morning. It’s a lovely night cream.",
      },
      {
        id: "night-cream-review-2",
        author: "Megha T.",
        rating: 4,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        content:
          "Nice texture and easy to layer. My skin seems less dry and more even.",
      },
    ],
  },
  {
    id: "skin-cleanser",
    name: "Gentle Skin Cleanser",
    category: "SkinCare",
    type: "Cleanser",
    color: "Gentle",
    price: 1400,
    description:
      "A mild, hydrating daily cleanser enriched with Niacinamide, Panthenol, and Allantoin to gently remove impurities while preserving moisture.",
    shades: "One formula",
    tone: "Sensitive skin friendly",
    colorClass: "bg-gradient-to-br from-pink-100 via-slate-100 to-white",
    image:
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Cleanser_op8uzn.jpg",
    images: [
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781102802/GlowRious_Cleanser_op8uzn.jpg",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106612/Gemini_Generated_Image_wyy3xlwyy3xlwyy3_bgvl85.png",
      "https://res.cloudinary.com/dfyqhn5fy/image/upload/v1781106612/Gemini_Generated_Image_xdhdjgxdhdjgxdhd_r4xdnm.png",
    ],
    specs: [
      { label: "Net quantity", value: "150 ml" },
      { label: "Commodity", value: "Face Cleanser" },
      { label: "Manufacturer", value: "GlowRious Laboratories" },
      { label: "Shelf life", value: "24 months from manufacturing" },
    ],
    sections: [
      {
        id: "ingredients",
        title: "Ingredients",
        content:
          "Aqua (Water), Glycerin, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Niacinamide, Panthenol, Allantoin, Sodium PCA, Disodium EDTA, Phenoxyethanol, Citric Acid, Perfume.",
      },
      {
        id: "key-ingredients",
        title: "Key Ingredients",
        content:
          "Niacinamide brightens and strengthens the moisture barrier. Panthenol soothes and supports repair. Allantoin calms and protects sensitive skin.",
      },
      {
        id: "benefits",
        title: "Benefits",
        content:
          "Gently removes impurities, maintains the skin’s natural moisture barrier, and leaves skin soft, fresh, and comfortable.",
      },
      {
        id: "how-to-use",
        title: "How to use",
        content:
          "Apply to damp skin, massage into a creamy lather, then rinse. Use daily morning and evening for gentle cleansing.",
      },
    ],
    rating: 4.6,
    details:
      "GlowRious Gentle Skin Cleanser is a mild, hydrating daily face wash enriched with Niacinamide, Panthenol, and Allantoin. It gently removes impurities while preserving the skin’s natural moisture barrier for soft, comfortable skin.",
    reviews: [
      {
        id: "cleanser-review-1",
        author: "Nivedita H.",
        rating: 5,
        date: "June 2026",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        content:
          "My skin feels calm and hydrated after using this cleanser. It doesn’t strip or dry out my face.",
      },
      {
        id: "cleanser-review-2",
        author: "Ritu M.",
        rating: 4,
        date: "May 2026",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        content:
          "A very gentle daily cleanser with a soothing finish. Ideal for sensitive skin.",
      },
    ],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
