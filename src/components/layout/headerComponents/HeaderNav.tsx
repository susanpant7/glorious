"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const navLinks = site.navLinks;

export function HeaderNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflowX = "unset";
      document.body.style.overflow = "unset";
    }
    return () => {
      document.documentElement.style.overflowX = "unset";
      document.body.style.overflow = "unset";
    };
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

        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={() => {
            if (closeTimeout.current) {
              window.clearTimeout(closeTimeout.current);
              closeTimeout.current = null;
            }
            setDropdownOpen(true);
          }}
          onMouseLeave={() => {
            closeTimeout.current = window.setTimeout(() => setDropdownOpen(false), 150);
          }}
        >
          <button
            type="button"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-expanded={dropdownOpen}
            className="inline-flex items-center gap-2"
          >
            Help
            <svg className="h-4 w-4 text-slate-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          {dropdownOpen && (
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
            className="fixed left-0 right-0 top-16 bottom-0 z-40 bg-black/10 sm:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Slide-in Menu */}
          <div className="fixed right-0 top-16 z-50 h-[calc(100vh-64px)] w-72 bg-gradient-to-b from-slate-50 to-white shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden overflow-y-auto">
            <div className="flex flex-col gap-2 p-6">
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
              <div className="border-t border-slate-200 mt-4 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Help</p>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
