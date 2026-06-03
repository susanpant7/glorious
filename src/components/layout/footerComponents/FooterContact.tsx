import { footerData } from "@/lib/footer";

export function FooterContact() {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
      <div className="mt-6 space-y-4 text-sm text-slate-400">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-lg">📍</span>
          <div>
            <p className="font-medium text-slate-300">Address</p>
            <p className="text-slate-500">{footerData.contact.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg">📧</span>
          <div>
            <p className="font-medium text-slate-300">Email</p>
            <a href={`mailto:${footerData.contact.email}`} className="text-slate-500 transition hover:text-amber-400">
              {footerData.contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg">📞</span>
          <div>
            <p className="font-medium text-slate-300">Phone</p>
            <a href={`tel:${footerData.contact.phone}`} className="text-slate-500 transition hover:text-amber-400">
              {footerData.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
