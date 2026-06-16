import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import FAQsClient from "./FAQsClient";

export const metadata: Metadata = createPageMetadata({
  title: "FAQs - Skincare, Ordering, Delivery & Returns",
  description:
    "Find answers to common GlowRious questions about skincare products, NEOSOME technology, ordering, delivery, returns, account support, and partnerships.",
  path: "/faqs",
  keywords: [
    "GlowRious FAQs",
    "GlowRious questions",
    "NEOSOME technology",
    "GlowRious delivery",
    "GlowRious returns",
  ],
});

export default function FAQsPage() {
  return <FAQsClient />;
}
