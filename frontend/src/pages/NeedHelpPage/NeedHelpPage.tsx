import { buttonVariants } from '@/components/ui/button-variants';

export function NeedHelpPage() {
  return (
    <>
      <h1>I Need Help</h1>
      <p>Call toll free, 24 hours a day, 7 days a week.</p>
      <a
        className={buttonVariants({ variant: 'help', size: 'lg', className: 'my-6' })}
        href="tel:1098"
      >
        Call 1098
      </a>
      <p>
        Phone: <a className="text-primary underline" href="tel:02332862">02 332862</a>
      </p>
      <p>
        Email:{' '}
        <a className="text-primary underline" href="mailto:enquiry@thepema.gov.bt">
          enquiry@thepema.gov.bt
        </a>
      </p>
    </>
  );
}
