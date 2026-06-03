"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function GlobalLoader() {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null);
  const [loading, setLoading] = useState(true);
  const hideTimer = useRef<number | null>(null);

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

  useEffect(() => {
    // skip initial mount
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname;
      return;
    }

    if (pathname !== prevPathRef.current) {
      // show loader on route change
      setLoading(true);
      // ensure loader visible for min duration to avoid flicker
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => {
        setLoading(false);
      }, 350);
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 p-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-400 border-t-transparent" />
        </div>
        <div className="text-sm font-semibold text-slate-800">Loading…</div>
      </div>
    </div>
  );
}
