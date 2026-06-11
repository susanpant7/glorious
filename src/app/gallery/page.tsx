import { GallerySection } from "@/components/gallery/GallerySection";
import { galleryImages } from "@/lib/gallery";
import type { GalleryImage } from "@/lib/gallery";

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
