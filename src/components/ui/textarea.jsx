import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-gray-300/50 border-input font-light placeholder:text-gray-300/50 border-2 border-gray-200/10 focus:border-blue-400/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-32 w-full rounded-lg  bg-transparent px-3 py-2 text-base shadow-xs outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
