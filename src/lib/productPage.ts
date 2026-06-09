import type { Product } from "@/lib/products";

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSection = {
  id: string;
  title: string;
  options: FilterOption[];
};

export const productsPageText = {
  subtitle: "Shop beauty",
  title: "Product listing",
  description:
    "Browse our curated makeup and skincare collection with fast purchase actions and product details.",
  showing: "Showing {count} products",
  noResults: "No products match these filters. Try a different combination.",
  clearAll: "Clear all",
  activeFilters: "Active filters",
};

export const productFilterSections: FilterSection[] = [
  {
    id: "category",
    title: "Categories",
    options: [
      { label: "SkinCare", value: "SkinCare" },
      { label: "Haircare", value: "Haircare" },
    ],
  },
  {
    id: "type",
    title: "Product Type",
    options: [
      { label: "Face wash", value: "Face wash" },
      { label: "Moisturizer", value: "Moisturizer" },
      { label: "Sun Cream", value: "Sun Cream" },
      { label: "Shampoo", value: "Shampoo" },
      { label: "Serum", value: "Serum" },
      { label: "Cream", value: "Cream" },
      { label: "Cleanser", value: "Cleanser" },
    ],
  },
];

export function describeFilterLabel(sectionId: string, product: Product) {
  switch (sectionId) {
    case "category":
      return product.category;
    case "type":
      return product.type;
    default:
      return String(product[sectionId as keyof typeof product] ?? "");
  }
}
