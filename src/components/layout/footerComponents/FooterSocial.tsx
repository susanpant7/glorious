import { footerData } from "@/lib/footer";
import { SocialIcon } from "./SocialIcon";

export function FooterSocial() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Follow Us
        </p>
        <div className="flex gap-4">
          {footerData.socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-amber-400 hover:text-amber-400"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
