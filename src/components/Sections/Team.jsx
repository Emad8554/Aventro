"use client";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

const socialIcons = [
  { icon: <Twitter className="w-4 h-4" />, href: "#" },
  { icon: <Github className="w-4 h-4" />, href: "#" },
  { icon: <Instagram className="w-4 h-4" />, href: "#" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#" },
];
const teamMembers = [
  {
    name: "Emad Ahmed",
    role: "Frontend",
    image: "/emad.jpg",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },

  {
    name: "Mohammed Yasser",
    role: "UI/UX",
    image: "/yasser.jpg",
    bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  },

  {
    name: "Mohamed Hamdy",
    role: "Cyber Security",
    image: "/hamdy.jpg",
    bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
  {
    name: "Hasabo",
    role: "UI/UX",
    image: "/hasabo.jpg",
    bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
  {
    name: "Mohamed Hamdy",
    role: "Cyber Security",
    image: "/hamdy.jpg",
    bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
];

const Team = () => {
  const swiperRef = useRef(null);

  return (
    <section id="team" className="bg-background layout">
      {/* Header Text */}
      <SectionHeader title="Team" />

      {/* Our Team Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 mb-8">
        {/* Left */}
        <div>
          <h1 className="text-blue-100 font-bold text-3xl mx-auto lg:mx-0 relative w-max after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 lg:after:translate-x-0 lg:after:left-0 after:bg-blue-500 after:w-[20%] after:h-[3px] after:rounded-lg mb-12">
            Our Professional Team
          </h1>
          <p className="text-gray-600 text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>
        </div>
        {/* Right */}
        <div className="flex justify-start items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-blue-300 w-12 h-12 border-2 border-blue-300 hover:bg-blue-800/60 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-blue-300 w-12 h-12 border-2 border-blue-300 hover:bg-blue-800/60 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1120: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="py-6"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-blue-800/10 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group ">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  {/* Image Blur Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  {/* Social Links */}
                  <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 p-4 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    {socialIcons.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-blue-400 flex items-center justify-center text-blue-400 hover:text-white shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-500"
                      >
                        <div className="">{link.icon}</div>
                      </a>
                    ))}
                  </div>
                </div>
                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
