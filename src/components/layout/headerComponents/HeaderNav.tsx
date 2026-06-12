"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { site } from "@/lib/site";

const navLinks = site.navLinks;

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflowX = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.documentElement.style.overflowX = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useLayoutEffect(() => {
    function updateHeaderHeight() {
      const headerElement = document.querySelector<HTMLElement>("header");
      setHeaderHeight(headerElement?.offsetHeight ?? 64);
    }

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-700">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition-colors duration-200 text-slate-700 hover:text-amber-600 focus:text-amber-600"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-expanded={mobileMenuOpen}
        className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 sm:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          {/* Slide-in Menu */}
          <div
            className="fixed left-0 top-0 z-50 h-screen w-full max-w-sm bg-gradient-to-b from-slate-50 to-white shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden flex flex-col overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6" style={{ paddingTop: headerHeight || 64 }}>
              <div className="mb-4 pb-4 border-b border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Menu</p>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
