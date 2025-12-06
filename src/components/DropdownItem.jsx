import { useState } from "react";

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
  const [openSub, setOpenSub] = useState(null);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setOpenSub(null);
      }}
    >
      <button className="text-gray-400 cursor-pointer hover:text-white transition">
        {label}
      </button>

      {/* Main Dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-slate-950 border border-gray-700 shadow-lg rounded-md p-1 z-50">
          {dropdownData.map((item, index) =>
            item.sub ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenSub(index)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <div className="text-gray-400 px-3 py-2 hover:text-blue-400 cursor-pointer flex justify-between">
                  {item.label}
                  <span>›</span>
                </div>

                {/* Sub Menu */}
                {openSub === index && (
                  <div className="absolute top-0 left-full ml-1 w-48 bg-slate-950 border border-gray-700 shadow-lg rounded-md p-1">
                    {item.sub.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block text-white px-3 py-2 hover:text-blue-400 cursor-pointer"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={item.href}
                className="block text-white px-3 py-2 hover:text-blue-400 cursor-pointer"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};
export default DropdownItem;
