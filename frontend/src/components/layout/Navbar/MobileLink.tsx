import { Link, useLocation } from 'react-router-dom';
import { cn } from 'cn';
import type { NavLinkItem } from '@/types/nav.type';
import { menuLinkClass } from './navbar.styles';

type MobileLinkProps = {
  item: NavLinkItem;
  onNavigate: () => void;
  className: string;
};

export function MobileLink({ item, onNavigate, className }: MobileLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === item.to;

  return (
    <Link
      to={item.to}
      onClick={onNavigate}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'block rounded-2xl py-2.5 font-medium',
        className,
        menuLinkClass(isActive),
      )}
    >
      {item.label}
    </Link>
  );
}
