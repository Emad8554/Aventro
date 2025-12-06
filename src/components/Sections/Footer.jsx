import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const socialIcons = [
  {
    id: 1,
    icon: <Facebook className="w-4 h-4" />,
  },
  { id: 2, icon: <X className="w-4 h-4" /> },
  {
    id: 3,
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    id: 4,
    icon: <Linkedin className="w-4 h-4" />,
  },
];

const linksData = [
  {
    title: "Useful Links",
    items: [
      "Home",
      "About us",
      "Services",
      "Terms of service",
      "Privacy policy",
    ],
  },
  {
    title: "Our Services",
    items: [
      "Web Design",
      "Web Development",
      "Product Management",
      "Marketing",
      "Graphic Design",
    ],
  },
  {
    title: "Hic solutasetp",
    items: [
      "Molestiae accusamus iure",
      "Excepturi dignissimos",
      "Suscipit distinctio",
      "Dilecta",
      "Sit quas consectetur",
    ],
  },
  {
    title: "Nobis illum",
    items: ["Ipsam", "Laudantium dolorum", "Dinera", "Trodelas", "Flexo"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground layout text-white">
      {/* Footer Top Container */}
      <div className="flex flex-col md:flex-row md:justify-between lg:items-start gap-10">
        {/* Footer Header - Left Side */}
        <div className="flex flex-col gap-6 w-full lg:w-[25%]">
          <a href="" className="text-blue-100 text-2xl font-bold md:text-3xl">
            Aventro
          </a>
          <div>
            <p className="text-sm text-gray-300">A108 Adam Street</p>
            <p className="text-gray-300 text-sm">New York, NY 535022</p>
          </div>
          <div>
            <p className="text-gray-300 text-sm">
              <span className="font-bold">Phone: </span>+1 5589 55488 55
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-bold">Email: </span> info@example.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-200/20 w-10 h-10 rounded-full flex items-center justify-center group hover:border-blue-400 transition-colors duration-300 cursor-pointer"
              >
                <div className="text-gray-200 group-hover:text-blue-400 transition-all group-hover:scale-125">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer Links */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {linksData.map((link, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg pb-4">
                {link.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {link.items.map((item, index) => (
                  <li key={index} className="list-none">
                    <a
                      href=""
                      className="text-gray-300 hover:text-blue-400 text-sm font-semib hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 w-full border-t border-t-gray-700 text-center text-gray-400 text-sm">
        <p className="mb-2">
          &copy; Copyright <span className="font-bold text-white">Aventro</span>{" "}
          All Rights Reserved
        </p>
        <p>
          Designed By{" "}
          <span className="text-blue-400 cursor-pointer">BootstrapMade</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
