import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

import { fieldStyles } from "@/components/ui/field-styles"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        fieldStyles,
        "h-11 min-w-0 py-2 file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
