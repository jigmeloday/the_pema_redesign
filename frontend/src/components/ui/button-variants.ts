import { cva } from "class-variance-authority"

// Calm by design: pill shapes, 40px default height, slow colour changes and no
// movement on press.
export const buttonVariants = cva(
  "group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-[0.9375rem] font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-300 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[color-mix(in_oklch,var(--primary),var(--foreground)_18%)]",
        help: "bg-help text-help-foreground hover:bg-[color-mix(in_oklch,var(--help),var(--foreground)_18%)]",
        outline:
          "border-primary/30 bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_6%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/8 text-destructive hover:bg-destructive/15 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/15 dark:hover:bg-destructive/25",
        link: "text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary",
      },
      size: {
        default: "h-10 gap-2 px-5",
        xs: "h-7 gap-1 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3.5 text-sm",
        lg: "h-11 gap-2 px-6",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
