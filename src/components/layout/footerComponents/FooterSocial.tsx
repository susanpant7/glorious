import { footerData } from "@/lib/footer";
import { SocialIcon } from "./SocialIcon";

export function FooterSocial() {
  return (
    <div className="flex flex-col items-start gap-6 md:items-end">
      {/* Join Our Community Heading */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white md:text-right">
          Join our community
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 md:justify-end">
        {footerData.socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 text-slate-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-400"
          >
            <SocialIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}
