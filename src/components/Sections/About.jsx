"use client";
import { Sparkles, TimerReset, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Glore from "../Glore";
import SectionHeader from "../SectionHeader";
const aboutCards = [
  {
    icon: <Sparkles />,
    title: "Our Core Principles",
    description:
      "We adhere to a strict set of values focused on integrity, innovation, and client satisfaction in every aspect.",
  },
  {
    icon: <TimerReset />,
    title: "Our Journey So Far",
    description:
      "Since our inception, we have continuously evolved to meet the dynamic needs of the global market effectively.",
  },
  {
    icon: <Users />,
    title: "Meet Our Team",
    description:
      "Our dedicated personnel are the backbone of our success, bringing diverse expertise and a shared commitment to excellence.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-background layout px-6 sm:px-14 md:px-32"
    >
      <Glore />
      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <SectionHeader title="About" />
      </motion.div>
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center flex-wrap gap-6">
        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            type: "spring",
            delay: 0.1,
            stiffness: 120,
            damping: 10,
          }}
          className="w-full lg:w-[45%] min-w-[350px] relative h-64 lg:h-80 min-h-[200px]"
        >
          <Image
            src={"/about.jpg"}
            alt="About Picture"
            fill
            className="rounded-lg"
          />
        </motion.div>
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          className="w-full lg:w-[45%]"
        >
          <div className="flex flex-col space-y-6 md:max-w-3xl lg:max-w-5xl">
            <h1 className="text-blue-100 font-bold text-2xl lg:text-2xl">
              Our Visionary Endeavors
            </h1>
            <p className="text-gray-300 font-extralight text-base leading-7 lg:text-xl">
              Discover how our diverse range of services can empower your
              business to achieve greater efficiency and growth in a competitive
              landscape.
            </p>
            <p className="text-white text-[15px] font-medium">
              We provide expert consultancy and practical tools designed to
              streamline your operations, enhance productivity, and maximize
              your return on investment. Our committed team of professionals is
              dedicated to helping you navigate challenges and seize
              opportunities.
            </p>
            <a href="#" className="btn text-white rounded-full w-max py-2 px-8">
              Discover Our Story
            </a>
          </div>
        </motion.div>
      </div>
      {/* Card Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {aboutCards.map((card, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3 * index,
              ease: "easeInOut",
            }}
            key={index}
            className="group p-6 flex flex-col gap-2 bg-cardBg shadow-blue-600/20 rounded-lg hover:shadow-2xl hover:scale-105 hover:backdrop-blur-xl hover:-translate-1 transition-all duration-300"
          >
            <div className="text-blue-400 mb-4 w-14 h-14 flex items-center justify-center bg-[#0d1d31] rounded-full group-hover:bg-[#1278bb] group-hover:text-white transition-colors duration-300">
              {card.icon}
            </div>
            <h3 className="text-blue-100 text-xl font-bold group-hover:text-white transition-colors">
              {card.title}
            </h3>
            <p className="text-gray-300 text-sm font-medium">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
