import React from "react";
import { Mail, Headphones, User, Shield, Clock } from "lucide-react";
import ContactForm from "../ContactForm";
import SectionHeader from "../SectionHeader";
const contactCard = [
  {
    id: 1,
    icon: <Mail />,
    title: "Email Support",
    description: "support@example.com",
    availability: "Usually replies in 2 hours",
  },
  {
    id: 2,
    icon: <Headphones />,
    title: "Live Chat",
    description: "Chat with our team",
    availability: "Available Mon-Fri, 9AM-6PM",
  },
  {
    id: 3,
    icon: <User />,
    title: "Our Location",
    description: "2847 Market Street\nSan Francisco, CA 94114",
    availability: "Open for visits",
  },
];
const features = [
  {
    id: 1,
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "100% Secure",
    description: "Your data is protected",
  },
  {
    id: 2,
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "Quick Response",
    description: "We reply within hours",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-background layout">
      {/* Header Text */}
      <SectionHeader title="Contact" />
      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
        {/* Left Side */}
        <div className="flex flex-col w-full lg:w-[35%] gap-3">
          {/* Card Box */}
          <div className="flex flex-col gap-4">
            {contactCard.map((card, index) => (
              // Card
              <div
                key={index}
                className="bg-cardBg p-6 rounded-lg shadow-sm shadow-[5px_5px_10px_rgba(0, 0, 0, 0.1)] space-y-2 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="icon w-12 h-12 rounded-md bg-blue-300/10 flex items-center justify-center text-blue-300 group-hover:bg-blue-300/50 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-blue-100 font-bold text-sm">
                  {card.title}
                </h3>
                <p className="text-gray-200 text-xs">{card.description}</p>
                <div className="flex items-center gap-1">
                  <div className="w-[3px] h-[3px] bg-gray-200/30 rounded-full"></div>
                  <span className="relative text-gray-400 text-[10px] before:absoulte before:left:0 before:w-3 before:h-2 before:bg-gray-200 before:rounded-full">
                    {card.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Second card Box */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Second Card */}
            {features.map((features, index) => (
              <div
                key={index}
                className="bg-[#020d1c] p-3 flex gap-4 rounded-md"
              >
                <div className="icon w-10 h-10 rounded-md bg-cyan-950/50 flex items-center justify-center text-blue-300 group-hover:bg-blue-300/50 group-hover:text-white transition-colors">
                  {features.icon}
                </div>
                <div>
                  {" "}
                  <h3 className="text-blue-100 font-bold text-sm">
                    {features.title}
                  </h3>
                  <span className="text-gray-400 text-xs font-semibold">
                    {features.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
