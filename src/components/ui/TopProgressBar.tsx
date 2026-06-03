"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function TopProgressBar() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const completeTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Ignore initial mount
    if (prevPath.current === null) {
      prevPath.current = pathname;
      return;
    }

    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      // start
      setVisible(true);
      setPercent(8);

      // progressive increment
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setPercent((p) => Math.min(90, p + Math.random() * 8));
      }, 200) as unknown as number;

      // complete after a short period to simulate route finish
      if (completeTimeout.current) window.clearTimeout(completeTimeout.current);
      completeTimeout.current = window.setTimeout(() => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        setPercent(100);
        // hide after animation
        window.setTimeout(() => {
          setVisible(false);
          setPercent(0);
        }, 300);
      }, 800) as unknown as number;
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (completeTimeout.current) window.clearTimeout(completeTimeout.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5">
      <div
        className="h-0.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 shadow-lg"
        style={{ width: `${percent}%`, transition: "width 200ms linear" }}
      />
    </div>
  );
}
