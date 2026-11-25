import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/constants/nav.constant';
import { HeaderActions } from './HeaderActions';
import { MobileLink } from './MobileLink';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        render={
          <Button variant="outline" size="icon-lg" className="xl:hidden" />
        }
      >
        <Menu aria-hidden="true" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>

      <SheetContent className="gap-6 overflow-y-auto p-5">
        <SheetTitle>Menu</SheetTitle>

        <nav aria-label="Main">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <p className="px-3.5 pt-3 pb-1 text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <MobileLink
                            item={child}
                            onNavigate={close}
                            className="pr-3.5 pl-6"
                          />
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <MobileLink
                    item={item}
                    onNavigate={close}
                    className="px-3.5"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <HeaderActions onNavigate={close} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
