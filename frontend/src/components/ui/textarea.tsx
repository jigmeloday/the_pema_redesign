import * as React from "react"
import { cn } from "cn"

import { fieldStyles } from "@/components/ui/field-styles"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        fieldStyles,
        "flex field-sizing-content min-h-28 py-3",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
