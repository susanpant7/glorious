import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
import { galleryImages } from "@/lib/gallery";
import type { GalleryImage } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Dermatology-Inspired Skincare for Radiant Skin",
  description:
    "Shop GlowRious skincare and haircare made for Nepal, including brightening serum, SPF 50 sun block, gentle cleansers, moisturizer, night cream, and anti-hair fall shampoo.",
  path: "/",
  keywords: [
    "GlowRious Nepal",
    "skincare Nepal",
    "dermatology inspired skincare",
    "brightening serum Nepal",
    "GlowRious products",
  ],
});

async function getCloudinaryImages(): Promise<GalleryImage[]> {
  try {
      return galleryImages;
  } catch (error) {
    return galleryImages;
  }
}

export default async function Home() {
  const images = await getCloudinaryImages();

  return (
    <div className="bg-slate-50">
      <HeroSection />
      <NewArrivalsSection />
      <TestimonialsSection />
      <GallerySection images={images} maxItems={4} showViewMore />
    </div>
  );
}
