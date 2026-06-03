import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { galleryImages } from "@/lib/gallery";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />

      <section id="featured" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-600">Trending now</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                New arrivals
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Discover our latest makeup and skincare essentials in a beautifully designed product grid.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Makeup
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                Skincare
              </button>
            </div>
          </div>

          <ProductGrid products={products} />
        </div>
      </section>

      <TestimonialsSection />

      <GallerySection images={galleryImages} maxItems={4} showViewMore />
    </div>
  );
}
