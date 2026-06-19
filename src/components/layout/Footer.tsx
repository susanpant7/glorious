"use client";

import { footerData } from "@/lib/footer";
import { FooterBrand, FooterBottom, FooterContact, FooterLinkGroup, FooterSocial } from "./footerComponents";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-[1380px] px-6 py-6 md:py-10">
        {/* Premium Top Section - Asymmetrical Layout */}
        <div className="mb-12 flex flex-col gap-10 md:mb-16 md:flex-row md:items-start md:justify-between lg:gap-16">
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col md:flex-1">
            <FooterBrand />
          </div>

          {/* Right: Join Community Section with Offset */}
          <div className="md:flex-1 md:pt-12 lg:pt-16">
            <FooterSocial />
          </div>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 md:mb-14" />

        {/* Bottom Section - Navigation, Contact, Legal */}
        <div className="mb-12 grid gap-12 md:mb-14 md:grid-cols-3 md:gap-10 lg:gap-16">
          <FooterLinkGroup title="Navigation" links={footerData.quickLinks} />
          <FooterContact />
          <div className="md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Legal</h4>
            <div className="mt-5 grid gap-4 grid-cols-2 text-sm text-slate-400">
              {footerData.legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-all duration-300 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
