// frontend/front/src/lib/utils.js
// Utility to merge classNames, handling Tailwind conflicts
export function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }