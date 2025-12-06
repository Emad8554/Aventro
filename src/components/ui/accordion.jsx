"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus:bg-blue-400/10 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium outline-none disabled:pointer-events-none disabled:opacity-50 group transition-all duration-500",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "size-4 shrink-0 translate-y-0.5 transition-all duration-500", 
            "text-white", 
            "w-8 h-8 group-hover:text-blue-600 group-hover:bg-blue-400/10 group-hover:w-8 group-hover:h-8 group-hover:rounded-md",
            "group-data-[state=open]:rotate-180 group-data-[state=open]:w-8 group-data-[state=open]:h-8 group-data-[state=open]:bg-blue-400/10 group-data-[state=open]:text-blue-400 group-data-[state=open]:rounded-md transition-transform duration-200"
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="focus:bg-blue-400/10 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all duration-300"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
