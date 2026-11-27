import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from 'cn';
import { buttonVariants } from '@/components/ui/button-variants';

type MoreLinkProps = {
  title: string;
  to: string;
};

export function MoreLink({ title, to }: MoreLinkProps) {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'bg-card',
        )}
      >
        {title}
        <ArrowRight aria-hidden="true" />
      </Link>
    </li>
  );
}
