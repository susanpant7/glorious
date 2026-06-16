import type { MetadataRoute } from "next";
import { events } from "@/lib/events";
import { products } from "@/lib/products";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://glowrious.com").replace(/\/$/, "");

const lastModified = new Date();

function route(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes: MetadataRoute.Sitemap = [
    route("/", "weekly", 1),
    route("/products", "weekly", 0.95),
    route("/about", "monthly", 0.9),
    route("/contact", "monthly", 0.85),
    route("/events", "weekly", 0.8),
    route("/gallery", "weekly", 0.75),
    route("/faqs", "monthly", 0.65),
    route("/help", "monthly", 0.6),
    route("/brand-story", "monthly", 0.6),
    route("/mission", "monthly", 0.55),
    route("/vision", "monthly", 0.55),
    route("/career", "monthly", 0.45),
  ];

  const productRoutes = products.map((product) =>
    route(`/products/${product.id}`, "weekly", 0.8),
  );

  const eventRoutes = events.map((event) =>
    route(`/events/${event.id}`, "weekly", 0.65),
  );

  return [...mainRoutes, ...productRoutes, ...eventRoutes];
}
