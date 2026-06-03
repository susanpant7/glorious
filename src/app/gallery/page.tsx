import { GallerySection } from "@/components/gallery/GallerySection";
import { galleryImages } from "@/lib/gallery";

export default function GalleryPage() {
  return <GallerySection images={galleryImages} maxItems={galleryImages.length} showViewMore={false} />;
}
