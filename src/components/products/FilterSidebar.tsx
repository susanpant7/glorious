import type { FilterSection as FilterSectionType } from "@/lib/productPage";
import { FilterSection } from "@/components/products/FilterSection";

type FilterSidebarProps = {
  sections: FilterSectionType[];
  activeFilters: Record<string, string[]>;
  onToggleFilter: (sectionId: string, optionValue: string) => void;
  onClearAll: () => void;
};

export function FilterSidebar({ sections, activeFilters, onToggleFilter, onClearAll }: FilterSidebarProps) {
  return (
    <aside className="space-y-4">
      {sections.map((section) => (
        <FilterSection
          key={section.id}
          section={section}
          selected={activeFilters[section.id] ?? []}
          onToggle={onToggleFilter}
        />
      ))}
    </aside>
  );
}
