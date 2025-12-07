"use client";
import { motion } from "framer-motion";
import { IoIosPlay, IoIosSpeedometer } from "react-icons/io";
import { PiUsersLight } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Image from "next/image";

const heroInfo = [
  {
    title: "500+",
    desc: "Projects Completed",
  },
  {
    title: "98%",
    desc: "Client Satisfaction",
  },
  {
    title: "24/7",
    desc: "Support Available",
  },
];
const cardInfo = [
  {
    icon: <MdOutlineSecurity className="text-3xl text-blue-300" />,
    title: "Secure & Reliable",
  },
  {
    icon: <IoIosSpeedometer className="text-3xl text-blue-300" />,
    title: "High Performance",
  },
  {
    icon: <PiUsersLight className="text-3xl text-blue-300" />,
    title: "Expert Team",
  },
  {
    icon: <FaAward className="text-3xl text-blue-300" />,
    title: "Award Winning",
  },
];
const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full"
      id="home"
    >
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 to-black/80 z-10"></div>
      {/* Hero Content */}
      <div className="layout py-40 flex items-center justify-between flex-wrap relative z-20">
        {/* Hero LEFT */}
        <div className="w-full lg:w-[45%]">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-white text-sm py-2 px-4 rounded-full uppercase text-center bg-[#0f639b] inline-block mb-4"
          >
            Innovative Solutions
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-blue-100 text-[32px] md:text-[46px] lg:text-[52px] md:max-w-[620px] lg:max-w-[420px] xl:max-w-[720px] font-bold leading-12 xl:leading-16"
          >
            Transform Your Business with Modern Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 text-lg font-semibold mt-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud.
          </motion.p>
          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row item-center gap-3 mt-3 lg:mt-0">
            <motion.a
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="btn w-max py-3.5 px-6 hover:-translate-y-0.5"
            >
              Explore Services
            </motion.a>
            {/* Play Video */}
            <motion.button
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform duration-300"
            >
              <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-blue-400">
                <IoIosPlay className="text-blue-400" />
              </div>
              <p className="font-semibold text-blue-400">Watch Demo</p>
            </motion.button>
          </motion.div>
          {/* Hero Stats */}
          <div className="flex items-center gap-8 max-w-sm sm:max-w-full flex-wrap my-10">
            {heroInfo.map((item, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, delay: 0.3 }}
                  key={index}
                  className="flex flex-col"
                >
                  <h1 className="text-blue-400 text-3xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-gray-400 tracking-wide text-xs font-semibold uppercase">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Hero RIGHT */}
        <div className="w-full lg:w-[50%] flex lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="grid grid-cols-2 gap-6 w-full max-w-[560px]"
          >
            {cardInfo.map((card, index) => (
              <div
                className="w-full h-[130px] flex flex-col gap-2 items-center justify-center bg-gray-600/20 text-center rounded-lg border border-gray-200/10 backdrop-blur-xs"
                key={index}
              >
                {card.icon}
                <h3 className="text-gray-200 font-semibold text-sm">
                  {card.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
