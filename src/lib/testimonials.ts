export type Testimonial = {
  id: string;
  name: string;
  profession: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "lana",
    name: "Lana Anderson",
    profession: "Beauty Enthusiast",
    quote:
      "I love the smooth design and clean experience. This landing page feels premium, and the product cards are so inviting.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=4&w=200&h=200&q=80",
  },
  {
    id: "maya",
    name: "Maya Chen",
    profession: "Makeup Artist",
    quote:
      "The layout is beautiful and the transition from hero to products is effortless. It looks stylish and easy to navigate.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=4&w=200&h=200&q=80",
  },
  {
    id: "simone",
    name: "Simone Black",
    profession: "Skin Care Expert",
    quote:
      "My customers love the polished look. The testimonial section really adds trust and makes the page feel complete.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=4&w=200&h=200&q=80",
  },
];
