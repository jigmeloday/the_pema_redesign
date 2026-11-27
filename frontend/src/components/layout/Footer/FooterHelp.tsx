import { Link } from 'react-router-dom';
import { LifeBuoy } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button-variants';
import { CONTACT } from '@/constants/contact.constant';

const phoneClass =
  'font-semibold underline underline-offset-4 hover:decoration-2';

export function FooterHelp() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/20 py-6">
      <p>
        24/7 helpline:{' '}
        <a href={`tel:${CONTACT.helpline}`} className={phoneClass}>
          {CONTACT.helpline}
        </a>
        <span className="mx-3 text-navy-foreground/50" aria-hidden="true">
          •
        </span>
        Substance use and rehabilitation:{' '}
        <a href={CONTACT.rehabPhoneHref} className={phoneClass}>
          {CONTACT.rehabPhone}
        </a>
      </p>

      <Link to="/i-need-help" className={buttonVariants({ variant: 'help' })}>
        <LifeBuoy aria-hidden="true" />
        I Need Help
      </Link>
    </div>
  );
}
