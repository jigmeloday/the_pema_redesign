import { Brand } from './Brand';
import { DesktopNav } from './DesktopNav';
import { HeaderActions } from './HeaderActions';
import { MobileNav } from './MobileNav';

// Full links from the xl breakpoint; below it they move into MobileNav.
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="flex h-20 w-full items-center justify-between gap-3 px-4 sm:px-7 lg:px-28">
        <Brand />
        <DesktopNav />
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <HeaderActions />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
