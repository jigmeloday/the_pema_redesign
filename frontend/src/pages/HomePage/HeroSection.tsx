import { Link } from 'react-router-dom';
import { ArrowDown, LifeBuoy } from 'lucide-react';
import { cn } from 'cn';
import { buttonVariants } from '@/components/ui/button-variants';
import { HelpPanel } from './HelpPanel';

export function HeroSection() {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-7 lg:px-28 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-[clamp(2.25rem,1.4rem+3.2vw,4.25rem)] leading-[1.1]">
            You don’t have to face it alone
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg text-secondary-foreground">
            The PEMA Secretariat supports mental health and wellbeing in Bhutan,
            for you and for the people you care about.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/i-need-help"
              className={buttonVariants({ variant: 'help', size: 'lg' })}
            >
              <LifeBuoy aria-hidden="true" />
              I Need Help
            </Link>
            <a
              href="#services"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'bg-card')}
            >
              <ArrowDown aria-hidden="true" />
              See our services
            </a>
          </div>
        </div>

        <HelpPanel />
      </div>
    </section>
  );
}
