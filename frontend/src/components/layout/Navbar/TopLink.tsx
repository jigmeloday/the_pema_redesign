import { Link, useLocation } from 'react-router-dom';
import { cn } from 'cn';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import type { NavLinkItem } from '@/types/nav.type';
import { navActiveClass, navItemClass } from './navbar.styles';

export function TopLink({ item }: { item: NavLinkItem }) {
  const { pathname } = useLocation();
  const isActive = pathname === item.to;

  return (
    <NavigationMenuLink
      active={isActive}
      render={<Link to={item.to} />}
      className={cn(navItemClass, isActive && navActiveClass)}
    >
      {item.label}
    </NavigationMenuLink>
  );
}
