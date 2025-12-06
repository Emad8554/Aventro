"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollProgress from "./ScrollProgress";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
const navItems = [
  { label: "Home", href: "#home" },
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

const socialIcons = [
  { name: "X", href: "#x", icon: <FaXTwitter /> },
  { name: "Facebook", href: "#fb", icon: <FaFacebook /> },
  { name: "Instagram", href: "#ig", icon: <FaInstagram /> },
  { name: "LinkedIn", href: "#li", icon: <FaLinkedin /> },
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
        className={`focus:outline-none ${className}`}
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

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const sections = navItems
      .filter((item) => !item.hasDropdown)
      .map((item) => document.getElementById(item.label.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName =
              entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1);
            setActive(sectionName);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-20 px-6 md:px-16 lg:px-24 py-6 flex items-center justify-between z-50 transition-all duration-500 ${
        navbarBg ? "bg-black/70" : ""
      }`}
    >
      <ScrollProgress />
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-gray-200/10 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      {/* Mobile Nav */}
      <MobileNavbar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        active={active}
        setActive={setActive}
      />
      <h1 className="text-2xl text-white font-extrabold">Aventro</h1>
      <ul className="hidden lg:flex space-x-6">
        {navItems.map((item, index) => {
          if (item.hasDropdown) {
            return (
              <li key={index}>
                <DropdownItem
                  label={item.label}
                  className={`text-gray-400 font-semibold hover:text-white duration-300 transition-colors cursor-pointer underline-anim ${
                    active === item.label ? "activeLink text-white" : ""
                  }`}
                />
              </li>
            );
          }
          return (
            <li
              key={index}
              onClick={() => setActive(item.label)}
              className={`text-gray-400 font-semibold hover:text-white duration-300 transition-colors cursor-pointer underline-anim ${
                active === item.label ? "activeLink text-white" : ""
              }`}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center space-x-4">
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              className="text-gray-400 hover:text-blue-200 hover:-transalate-y-2 inline-block hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              {item.icon}
            </a>
          );
        })}
        <button
          className="flex lg:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
