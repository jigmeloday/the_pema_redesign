import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/constants/contact.constant';

const rowClass = 'flex items-start gap-3';
const iconClass = 'mt-1 size-4 shrink-0';
const linkClass =
  'rounded-sm underline decoration-navy-foreground/40 underline-offset-4 hover:text-navy-foreground hover:decoration-navy-foreground';

export function FooterContact() {
  return (
    <address className="flex flex-col gap-2 text-navy-foreground/80 not-italic">
      <span className={rowClass}>
        <MapPin className={iconClass} aria-hidden="true" />
        {CONTACT.address}
      </span>
      <span className={rowClass}>
        <Phone className={iconClass} aria-hidden="true" />
        <a href={CONTACT.phoneHref} className={linkClass}>
          {CONTACT.phone}
        </a>
      </span>
      <span className={rowClass}>
        <Mail className={iconClass} aria-hidden="true" />
        <a href={`mailto:${CONTACT.email}`} className={linkClass}>
          {CONTACT.email}
        </a>
      </span>
      <span className={rowClass}>
        <ExternalLink className={iconClass} aria-hidden="true" />
        <a href={CONTACT.facebook} className={linkClass}>
          Facebook
        </a>
      </span>
    </address>
  );
}
