import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-gray-300/50  file:text-gray-200 placeholder:text-text-gray-300/20 placeholder:font-medium selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-12 w-full min-w-0 rounded-lg bg-transparent border-2 border-gray-300/10 px-3 py-2 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-300",
        "focus:border-blue-400/40",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
