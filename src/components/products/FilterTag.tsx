type FilterTagProps = {
  label: string;
  onRemove: () => void;
};

export function FilterTag({ label, onRemove }: FilterTagProps) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
    >
      <span>{label}</span>
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-600">×</span>
    </button>
  );
}
