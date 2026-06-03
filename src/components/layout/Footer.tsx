"use client";

import { footerData } from "@/lib/footer";
import { FooterBrand, FooterBottom, FooterContact, FooterLinkGroup, FooterSocial } from "./footerComponents";

export function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-slate-300">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:gap-24">
          <FooterBrand />
          <FooterSocial />
        </div>

        <div className="mb-16 h-px bg-slate-800" />

        <div className="mb-16 grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          <FooterLinkGroup title="Navigation" links={footerData.quickLinks} />
          <FooterLinkGroup title="Services" links={footerData.services} />
          <FooterContact />
          <FooterLinkGroup title="Legal" links={footerData.legalLinks} />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
