import { Toast as ToastPrimitive } from "@base-ui/react/toast"

export const createToastManager = ToastPrimitive.createToastManager
export const useToastManager = ToastPrimitive.useToastManager

// Call toast.add({ title }) from anywhere to show a message.
export const toast = createToastManager()
