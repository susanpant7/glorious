"use client";

import { footerData } from "@/lib/footer";
import { FooterBrand, FooterBottom, FooterContact, FooterLinkGroup, FooterSocial } from "./footerComponents";

export function Footer() {
  return (
    <footer className="mt-10 bg-slate-950 text-slate-300">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-[1380px] px-6 py-10">
        <div className="mb-10 grid gap-8 md:grid-cols-3 md:items-center">
          <FooterBrand />
          <div className="text-left md:text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--theme)] sm:text-sm md:whitespace-nowrap md:tracking-[0.35em]">
              Chasing your glow
            </p>
          </div>
          <FooterSocial />
        </div>

        <div className="mb-10 h-px bg-slate-800" />

        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <FooterLinkGroup title="Navigation" links={footerData.quickLinks} />
          <FooterContact />
          <FooterLinkGroup title="Legal" links={footerData.legalLinks} align="right" />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
