"use client";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DropdownItem from "./DropdownItem";
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
