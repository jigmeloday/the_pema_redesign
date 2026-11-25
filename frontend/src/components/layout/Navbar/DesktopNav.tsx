import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NAV_LINKS } from '@/constants/nav.constant';
import { Dropdown } from './Dropdown';
import { TopLink } from './TopLink';

export function DesktopNav() {
  return (
    <nav aria-label="Main" className="hidden xl:block">
      <NavigationMenu>
        <NavigationMenuList className="gap-0 min-[94rem]:gap-0.5">
          {NAV_LINKS.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.children ? (
                <Dropdown item={item} />
              ) : (
                <TopLink item={item} />
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
