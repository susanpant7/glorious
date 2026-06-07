"use client";

import { footerData } from "@/lib/footer";
import { FooterBrand, FooterBottom, FooterContact, FooterLinkGroup, FooterSocial } from "./footerComponents";

export function Footer() {
  return (
    <footer className="mt-10 bg-slate-950 text-slate-300">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:gap-16">
          <FooterBrand />
          <FooterSocial />
        </div>

        <div className="mb-8 h-px bg-slate-800" />

        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <FooterLinkGroup title="Navigation" links={footerData.quickLinks} />
          <FooterContact />
          <FooterLinkGroup title="Legal" links={footerData.legalLinks} />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
