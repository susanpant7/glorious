"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const categories = [site.featured.allLabel, ...Array.from(new Set(products.map((product) => product.category)))];

function buildSummary(category: string, count: number) {
  return site.featured.summaryTemplate
    .replace("{count}", String(count))
    .replace("{category}", category.toLowerCase());
}

export function NewArrivalsSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === site.featured.allLabel) {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategory = (category: string) => {
    if (category === selectedCategory) return;
    setIsTransitioning(true);
    window.setTimeout(() => {
      setSelectedCategory(category);
      setIsTransitioning(false);
    }, 180);
  };

  return (
    <section id="featured" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--theme)]">{site.featured.subtitle}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {site.featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {site.featured.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "outline"}
                size="sm"
                onClick={() => handleCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-500 ease-out ${isTransitioning ? "opacity-40 scale-95" : "opacity-100 scale-100"}`}>
          <p className="mb-6 text-sm text-slate-600">{buildSummary(selectedCategory, filteredProducts.length)}</p>
          <ProductGrid products={filteredProducts} variant="home" />
        </div>
      </div>
    </section>
  );
}
