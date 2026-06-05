import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

type ProductGridProps = {
  products: Product[];
  variant?: "home" | "listing";
};

export function ProductGrid({ products, variant = "listing" }: ProductGridProps) {
  const gridClasses =
    variant === "home"
      ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      : "grid gap-6 sm:grid-cols-2 xl:grid-cols-2";

  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
