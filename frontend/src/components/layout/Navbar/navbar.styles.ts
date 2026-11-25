import { cn } from 'cn';

// Top-level desktop links: underline only.
export const navItemClass = [
  // Layout and text
  'relative inline-flex h-10 cursor-pointer items-center rounded-sm bg-transparent px-2 text-sm font-medium whitespace-nowrap text-foreground transition-colors duration-300 ease-out',
  // No background box in any state
  'hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent data-popup-open:bg-transparent data-popup-open:text-primary data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent',
  // Underline that slides in
  'after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 data-popup-open:after:scale-x-100',
  // Roomier on wide screens
  'min-[94rem]:px-3 min-[94rem]:text-[0.9375rem] min-[94rem]:after:inset-x-3',
].join(' ');

export const navActiveClass = 'text-primary after:scale-x-100';

// Removes the default background box from dropdown links.
export const dropdownLinkClass =
  'bg-transparent px-3.5 py-3 text-[0.9375rem] font-medium hover:bg-transparent focus:bg-transparent focus-visible:underline data-active:bg-transparent data-active:hover:bg-transparent data-active:focus:bg-transparent';

// Dropdown and slide-out menu links.
export function menuLinkClass(isActive: boolean) {
  return cn(
    'underline-offset-4 decoration-2',
    isActive
      ? 'text-primary underline'
      : 'text-foreground hover:text-primary hover:underline',
  );
}

// Header buttons: compact until there is room for icons.
export const actionClass =
  'xl:h-9 xl:px-3.5 xl:text-sm xl:[&_svg]:hidden min-[94rem]:h-10 min-[94rem]:px-5 min-[94rem]:[&_svg]:block';
