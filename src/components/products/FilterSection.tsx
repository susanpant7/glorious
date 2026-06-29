"use client";

import { useState } from "react";
import type { FilterSection } from "@/lib/productPage";

type FilterSectionProps = {
  section: FilterSection;
  selected: string[];
  onToggle: (sectionId: string, optionValue: string) => void;
};

export function FilterSection({ section, selected, onToggle }: FilterSectionProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900"
      >
        <span>{section.title}</span>
        <span className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#eea504] hover:text-[#eea504]">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="mt-3 space-y-2">
          {section.options.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-xs text-slate-700 transition hover:border-[#eea504]/60">
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => onToggle(section.id, option.value)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-[#eea504] focus:ring-[#eea504]"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
