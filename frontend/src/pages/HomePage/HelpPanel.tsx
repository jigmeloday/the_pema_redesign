import { Phone } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button-variants';
import { CONTACT } from '@/constants/contact.constant';

export function HelpPanel() {
  return (
    <aside
      aria-label="Helpline"
      className="rounded-2xl bg-card p-7 shadow-lg shadow-foreground/5 sm:p-9"
    >
      <h2 className="text-xl">Talk to someone now</h2>
      <p className="mt-2 text-muted-foreground">
        Toll free, 24 hours a day, 7 days a week.
      </p>
      <p className="mt-5 text-6xl font-bold tracking-tight text-help">
        {CONTACT.helpline}
      </p>
      <a
        href={`tel:${CONTACT.helpline}`}
        className={buttonVariants({
          variant: 'help',
          size: 'lg',
          className: 'mt-6 w-full',
        })}
      >
        <Phone aria-hidden="true" />
        Call {CONTACT.helpline}
      </a>
    </aside>
  );
}
