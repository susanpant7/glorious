import type { Metadata } from "next";
import { GallerySection } from "@/components/gallery/GallerySection";
import { galleryImages } from "@/lib/gallery";
import type { GalleryImage } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "GlowRious Gallery & Product Moments",
  description:
    "View GlowRious product photography, skincare visuals, campaign moments, and beauty inspiration from the GlowRious gallery.",
  path: "/gallery",
  keywords: [
    "GlowRious gallery",
    "skincare product gallery",
    "beauty product photos",
    "GlowRious campaign",
  ],
});

async function getCloudinaryImages(): Promise<GalleryImage[]> {
  try {
    return  galleryImages;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return galleryImages;
  }
}

export default async function GalleryPage() {
  const images = await getCloudinaryImages();
  return <GallerySection images={images} maxItems={8} showViewMore={false} />;
}
