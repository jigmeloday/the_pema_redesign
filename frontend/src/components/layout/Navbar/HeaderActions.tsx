import { Link } from 'react-router-dom';
import { CalendarDays, LifeBuoy } from 'lucide-react';
import { cn } from 'cn';
import { buttonVariants } from '@/components/ui/button-variants';
import { actionClass } from './navbar.styles';

type HeaderActionsProps = {
  onNavigate?: () => void;
};

export function HeaderActions({ onNavigate }: HeaderActionsProps) {
  return (
    <>
      <Link
        to="/i-need-help"
        onClick={onNavigate}
        className={cn(buttonVariants({ variant: 'help' }), actionClass)}
      >
        <LifeBuoy aria-hidden="true" />
        I Need Help
      </Link>
      <Link
        to="/appointment"
        onClick={onNavigate}
        className={cn(buttonVariants(), actionClass)}
      >
        <CalendarDays aria-hidden="true" />
        Book appointment
      </Link>
    </>
  );
}
