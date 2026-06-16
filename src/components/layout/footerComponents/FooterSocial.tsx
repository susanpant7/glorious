import { footerData } from "@/lib/footer";
import { SocialIcon } from "./SocialIcon";

export function FooterSocial() {
  return (
    <div className="flex flex-col gap-6 md:items-end">
      <div className="md:text-right">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
          Join our community
        </p>
        <div className="flex gap-3">
          {footerData.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
