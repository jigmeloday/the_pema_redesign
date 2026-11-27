import { Link } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';
import { FooterContact } from './FooterContact';

export function FooterBrand() {
  return (
    <div className="flex flex-col items-start gap-5">
      <Link to="/" className="flex items-center gap-3 rounded-2xl">
        <span className="flex size-12 items-center justify-center rounded-full bg-navy-foreground text-navy">
          <HeartHandshake size={24} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className="flex flex-col">
          <span className="text-xl leading-tight font-bold tracking-tight">
            The PEMA
          </span>
          <span className="text-sm leading-tight text-navy-foreground/75">
            Care • Support • Wellbeing
          </span>
        </span>
      </Link>

      <FooterContact />
    </div>
  );
}
