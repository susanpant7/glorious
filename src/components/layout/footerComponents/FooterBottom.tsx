import { footerData } from "@/lib/footer";

export function FooterBottom() {
  return (
    <div className="border-t border-slate-800 pt-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-500">{footerData.copyright}</p>
      </div>
    </div>
  );
}
