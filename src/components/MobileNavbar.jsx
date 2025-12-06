"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
  {
    label: "Dropdown",
    href: "#",
    hasDropdown: true,
  },
  { label: "Contact", href: "#contact" },
];

const dropdownData = [
  { label: "Dropdown 1", href: "#" },
  {
    label: "Deep Dropdown",
    href: "#",
    sub: [
      { label: "Deep Dropdown 1", href: "#" },
      { label: "Deep Dropdown 2", href: "#" },
      { label: "Deep Dropdown 3", href: "#" },
      { label: "Deep Dropdown 4", href: "#" },
    ],
  },
  { label: "Dropdown 2", href: "" },
  { label: "Dropdown 3", href: "#" },
  { label: "Dropdown 4", href: "#" },
];
const DropdownItem = ({ label, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={`focus:outline-none block ${className}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[400px] border-gray-700 p-1 mt-1 bg-slate-950 absolute"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {dropdownData.map((item, index) =>
          item.sub ? (
            <DropdownMenuSub key={index}>
              <DropdownMenuSubTrigger className="text-white hover:text-blue-400 cursor-pointer">
                {item.label}
              </DropdownMenuSubTrigger>

              <DropdownMenuSubContent className="w-48 bg-slate-950 border-gray-700/10 p-1">
                {item.sub.map((subItem, subIndex) => (
                  <DropdownMenuItem
                    key={subIndex}
                    asChild
                    className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300"
                  >
                    <a href={subItem.href}>{subItem.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem
              key={index}
              asChild
              className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300"
            >
              <a href={item.href}>{item.label}</a>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MobileNavbar = ({ mobileOpen, setMobileOpen, active, setActive }) => {
  return (
    <AnimatePresence>
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-[95%] p-6 mt-12 fixed top-0 left-1/2 h-full bg-slate-950 z-50 -translate-x-1/2 rounded-lg"
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white absolute -top-8 right-0 cursor-pointer hover:text-red-500 hover:scale-105 transition-all duration-300"
          >
            <X />
          </button>

          {/* Navbar Links */}
          <ul className="flex flex-col space-y-6">
            {navItems.map((item, index) => {
              if (item.hasDropdown) {
                return (
                  <li key={index}>
                    <DropdownItem
                      label={item.label}
                      className={`text-gray-400 font-semibold hover:text-white duration-300 transition-colors cursor-pointer ${
                        active === item.label ? "text-white" : ""
                      }`}
                    />
                  </li>
                );
              }
              return (
                <li
                  key={index}
                  onClick={() => setActive(item.label)}
                  className={`text-gray-400 font-semibold hover:text-blue-400 duration-300 transition-colors cursor-pointer ${
                    active === item.label ? " text-blue-400" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className="block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
