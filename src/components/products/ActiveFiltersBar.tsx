import type { FilterSection } from "@/lib/productPage";
import { FilterTag } from "@/components/products/FilterTag";

type ActiveFiltersBarProps = {
  sections: FilterSection[];
  activeFilters: Record<string, string[]>;
  onRemoveFilter: (sectionId: string, optionValue: string) => void;
  onClearAll: () => void;
};

export function ActiveFiltersBar({ sections, activeFilters, onRemoveFilter, onClearAll }: ActiveFiltersBarProps) {
  const labels = sections.reduce<Record<string, string>>((map, section) => {
    section.options.forEach((option) => {
      map[`${section.id}:${option.value}`] = option.label;
    });
    return map;
  }, {});

  const filterEntries = Object.entries(activeFilters).flatMap(([sectionId, values]) =>
    values.map((value) => ({
      key: `${sectionId}:${value}`,
      label: `${labels[`${sectionId}:${value}`] ?? value}`,
      sectionId,
      value,
    }))
  );

  if (filterEntries.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900">Active filters</p>
        <button
          type="button"
          onClick={onClearAll}
          className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-600 hover:text-amber-400"
        >
          Clear all
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filterEntries.map((filter) => (
          <FilterTag
            key={filter.key}
            label={filter.label}
            onRemove={() => onRemoveFilter(filter.sectionId, filter.value)}
          />
        ))}
      </div>
    </div>
  );
}
