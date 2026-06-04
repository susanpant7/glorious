"use client";

import { useEffect, useState } from "react";

export function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onLoad = () => setLoading(false);

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        setLoading(false);
      } else {
        window.addEventListener("load", onLoad, { once: true });
      }
    }

    return () => {
      window.removeEventListener("load", onLoad as any);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-slate-950/90 p-6 text-white shadow-xl shadow-slate-950/10">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-amber-400" />
        <span className="text-sm font-semibold">Loading…</span>
      </div>
    </div>
  );
}
