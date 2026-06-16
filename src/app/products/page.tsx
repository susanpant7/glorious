import type { Metadata } from "next";
import { ProductsPage } from "@/components/products/ProductsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Shop Skincare, Sun Care & Haircare Products",
  description:
    "Browse GlowRious skincare and haircare products in Nepal, from face wash and moisturizer to SPF 50 sun block, Vitamin C serum, retinol night cream, cleanser, and shampoo.",
  path: "/products",
  keywords: [
    "GlowRious products",
    "buy skincare Nepal",
    "SPF 50 sun block Nepal",
    "Vitamin C serum Nepal",
    "anti hair fall shampoo Nepal",
  ],
});

export default function ProductsRoute() {
  return <ProductsPage />;
}
