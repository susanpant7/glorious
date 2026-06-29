"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { productsPageText, productFilterSections } from "@/lib/productPage";
import { ActiveFiltersBar } from "@/components/products/ActiveFiltersBar";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { ProductGrid } from "@/components/products/ProductGrid";

// price and discount filters removed

export function ProductsPage() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        Object.entries(activeFilters).every(([sectionId, values]) => {
          if (values.length === 0) {
            return true;
          }

          const productValue = String(product[sectionId as keyof typeof product] ?? "");
          return values.includes(productValue);
        })
      ),
    [activeFilters]
  );

  const handleToggleFilter = (sectionId: string, optionValue: string) => {
    setActiveFilters((current) => {
      const sectionFilters = current[sectionId] ?? [];
      const isSelected = sectionFilters.includes(optionValue);
      const nextValues = isSelected
        ? sectionFilters.filter((value) => value !== optionValue)
        : [...sectionFilters, optionValue];

      return {
        ...current,
        [sectionId]: nextValues,
      };
    });

    setIsTransitioning(true);
    window.setTimeout(() => setIsTransitioning(false), 180);
  };

  const handleRemoveFilter = (sectionId: string, optionValue: string) => {
    setActiveFilters((current) => {
      const values = current[sectionId] ?? [];
      const nextValues = values.filter((value) => value !== optionValue);
      return {
        ...current,
        [sectionId]: nextValues,
      };
    });
  };

  const handleClearAll = () => {
    setActiveFilters({});
    setIsTransitioning(true);
    window.setTimeout(() => setIsTransitioning(false), 180);
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#eea504]">{productsPageText.subtitle}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{productsPageText.title}</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">{productsPageText.description}</p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
        <FilterSidebar
          sections={productFilterSections}
          activeFilters={activeFilters}
          onToggleFilter={handleToggleFilter}
          onClearAll={handleClearAll}
        />

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">{productsPageText.showing.replace("{count}", String(filteredProducts.length))}</p>
                <h2 className="text-xl font-semibold text-slate-950">{filteredProducts.length} results</h2>
              </div>
              <button
                type="button"
                onClick={handleClearAll}
                aria-label="Reset filters"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-[#eea504] hover:bg-[#eea504]/10 hover:text-[#eea504]"
              >
                <span aria-hidden="true">↺</span>
              </button>
            </div>
          </div>

          <ActiveFiltersBar
            sections={productFilterSections}
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAll}
          />

          <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 ${
            isTransitioning ? "opacity-70 motion-safe:translate-y-1" : "opacity-100"
          }`}>
            {filteredProducts.length === 0 ? (
              <div className="min-h-[220px] flex items-center justify-center text-center text-slate-500">
                {productsPageText.noResults}
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
