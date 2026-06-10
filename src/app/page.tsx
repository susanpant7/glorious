import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
import { galleryImages } from "@/lib/gallery";
import type { GalleryImage } from "@/lib/gallery";

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
