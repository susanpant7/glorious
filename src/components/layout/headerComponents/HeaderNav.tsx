"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const navLinks = site.navLinks;

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${link.hiddenOnMobile ? "hidden sm:inline-block" : ""} transition-colors duration-200 text-slate-700 hover:text-amber-600 focus:text-amber-600`}
        >
          {link.label}
        </Link>
      ))}

      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => {
          if (closeTimeout.current) {
            window.clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
          }
          setOpen(true);
        }}
        onMouseLeave={() => {
          closeTimeout.current = window.setTimeout(() => setOpen(false), 150);
        }}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2"
        >
          Help
          <svg className="h-4 w-4 text-slate-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {open && (
          <div className="absolute left-0 z-50 mt-2 w-44 rounded-lg border bg-white shadow-lg">
            <ul className="flex flex-col p-1">
              <li>
                <Link href="/about" className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
