import { GallerySection } from "@/components/gallery/GallerySection";
import { galleryImages } from "@/lib/gallery";
import type { GalleryImage } from "@/lib/gallery";

async function getCloudinaryImages(): Promise<GalleryImage[]> {
  try {
    const response = await fetch("/api/gallery", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch Cloudinary images");
      return galleryImages;
    }

    const data = await response.json();
    return data.images && data.images.length > 0 ? data.images : galleryImages;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return galleryImages;
  }
}

export default async function GalleryPage() {
  const images = await getCloudinaryImages();
  return <GallerySection images={images} maxItems={images.length} showViewMore={false} />;
}
