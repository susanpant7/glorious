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
      { label: "Makeup", value: "Makeup" },
      { label: "Skincare", value: "Skincare" },
      { label: "Haircare", value: "Haircare" },
    ],
  },
  {
    id: "type",
    title: "Product Type",
    options: [
      { label: "Powder", value: "Powder" },
      { label: "Lipstick", value: "Lipstick" },
      { label: "Serum", value: "Serum" },
      { label: "Foundation", value: "Foundation" },
      { label: "Primer", value: "Primer" },
      { label: "Mask", value: "Mask" },
    ],
  },
  {
    id: "color",
    title: "Colors",
    options: [
      { label: "Ivory", value: "Ivory" },
      { label: "Nude", value: "Nude" },
      { label: "Peach", value: "Peach" },
      { label: "Pink", value: "Pink" },
      { label: "Amber", value: "Amber" },
    ],
  },
  {
    id: "price",
    title: "Price",
    options: [
      { label: "Under ₹300", value: "under-300" },
      { label: "₹300 - ₹500", value: "300-500" },
      { label: "₹500 - ₹700", value: "500-700" },
      { label: "Above ₹700", value: "above-700" },
    ],
  },
  {
    id: "discount",
    title: "Discount",
    options: [
      { label: "10% or more", value: "10" },
      { label: "20% or more", value: "20" },
      { label: "30% or more", value: "30" },
    ],
  },
];

export function describeFilterLabel(sectionId: string, product: Product) {
  switch (sectionId) {
    case "category":
      return product.category;
    case "type":
      return product.type;
    case "color":
      return product.color;
    case "price":
      return product.price;
    case "discount":
      return product.discount ? `${product.discount}%` : "";
    default:
      return "";
  }
}
