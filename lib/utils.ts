import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (event: 'event', eventName: string, properties?: Record<string, unknown>) => void
  }
}

// Utility function for analytics tracking
export const trackEvent = (
  eventName: string, 
  properties?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}
