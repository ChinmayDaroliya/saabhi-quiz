import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn()
 * Utility to merge Tailwind + conditional classes
 * Example:
 *   cn("px-4", isActive && "bg-green-500")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
