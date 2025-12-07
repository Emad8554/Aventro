"use client";
import { motion } from "framer-motion";
import {
  ChartLine,
  CloudUpload,
  Cog,
  Layers,
  Microchip,
  MoveRight,
  Shield,
} from "lucide-react";
import React from "react";
import SectionHeader from "../SectionHeader";
const services = [
  {
    icon: <Layers />,
    title: "Digital Solutions",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
    link: "#digital-solutions",
  },
  {
    icon: <Shield />,
    title: "Secure Systems",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
    link: "#secure-systems",
  },
  {
    icon: <ChartLine />,
    title: "Growth Strategy",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem.",
    link: "#growth-strategy",
  },
  {
    icon: <Microchip />,
    title: "AI Integration",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
    link: "#ai-integration",
  },
  {
    icon: <CloudUpload />,
    title: "Cloud Services",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.",
    link: "#cloud-services",
  },
  {
    icon: <Cog />,
    title: "Process Automation",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    link: "#process-automation",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-background layout">
      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <SectionHeader title="Services" />
      </motion.div>
      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
            key={index}
            className="relative group p-6 flex flex-col gap-2 bg-cardBg rounded-lg hover:-translate-y-1 transition-all duration-300 servicesCardAnim"
          >
            <div className="text-6xl text-blue-400 pb-4 group-hover:text-blue-200 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-blue-100 text-xl font-bold">{service.title}</h3>
            <p className="text-gray-300 text-sm font-medium">
              {service.description}
            </p>
            <div className="flex items-center gap-2 text-blue-400 ">
              <a href="" className="font-semibold">
                Learn More
              </a>
              <MoveRight className="group-hover:translate-x-1 group-hover:text-blue-200 duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
