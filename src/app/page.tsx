import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
import { galleryImages } from "@/lib/gallery";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <NewArrivalsSection />
      <TestimonialsSection />
      <GallerySection images={galleryImages} maxItems={4} showViewMore />
    </div>
  );
}
