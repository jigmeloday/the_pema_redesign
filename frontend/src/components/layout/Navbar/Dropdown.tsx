import { Link, useLocation } from 'react-router-dom';
import { cn } from 'cn';
import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import type { NavGroupItem } from '@/types/nav.type';
import {
  dropdownLinkClass,
  menuLinkClass,
  navActiveClass,
  navItemClass,
} from './navbar.styles';

export function Dropdown({ item }: { item: NavGroupItem }) {
  const { pathname } = useLocation();
  const hasActiveChild = item.children.some((child) => child.to === pathname);

  return (
    <>
      <NavigationMenuTrigger
        className={cn(navItemClass, hasActiveChild && navActiveClass)}
      >
        {item.label}
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-72 gap-1 p-1">
          {item.children.map((child) => (
            <li key={child.to}>
              <NavigationMenuLink
                closeOnClick
                active={pathname === child.to}
                render={<Link to={child.to} />}
                className={cn(
                  dropdownLinkClass,
                  menuLinkClass(pathname === child.to),
                )}
              >
                {child.label}
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  );
}
