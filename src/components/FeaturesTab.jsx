"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Cpu,
  Gauge,
  Lightbulb,
  Link,
  MoveRight,
  MoveUpRight,
  Timer,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const tabsData = [
  {
    id: "innovation",
    number: "01",
    title: "Innovation",
    subtitle: "Creative solutions",
    image: "/innovation.jpg",
    imageDesc: "A lightbulb representing innovative ideas",
    badge: {
      icon: <Zap className="w-5 h-5" />,
      label: "Speed",
      value: "3x Faster",
    },
    content: {
      icon: <Lightbulb className="w-8 h-8" />,
      heading: "Innovation Hub",
      subheading: "Revolutionary Design Thinking",
      description:
        "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dibta sunt explicabo.",
      stats: [
        { value: "145%", label: "Innovation Rate" },
        { value: "28K", label: "Ideas Generated" },
      ],
      bullets: [
        "Nemo enim ipsam voluptatem quia voluptas sit",
        "Aspernatur aut odit fugit sed quia consequuntur",
        "Magni dolores eos qui ratione voluptatem",
      ],
      btn: "Explore Innovation",
    },
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategy",
    subtitle: "Business growth",
    image: "/strategy.jpg",
    imageDesc: "Chart showing business growth strategy",
    badge: {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Growth",
      value: "+189% ROI",
    },
    content: {
      icon: <Timer className="w-8 h-8" />,
      heading: "Strategic Planning",
      subheading: "Data-Driven Business Strategy",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      stats: [
        { value: "234%", label: "Growth Rate" },
        { value: "156", label: "Strategies" },
      ],
      bullets: [
        "Similique sunt in culpa qui officia deserunt",
        "Mollitia animi id est laborum et dolorum fuga",
        "Et harum quidem rerum facilis est expedita",
      ],
      btn: "View Strategy",
    },
  },
  {
    id: "performance",
    number: "03",
    title: "Performance",
    subtitle: "Optimal results",
    image: "/performance.jpg",
    imageDesc: "A gauge measuring system performance",
    badge: {
      icon: <Cpu className="w-5 h-5" />,
      label: "Power",
      value: "128 Cores",
    },
    content: {
      icon: <Gauge className="w-8 h-8" />,
      heading: "High Performance",
      subheading: "Optimized System Performance",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur sapiente delectus.",
      stats: [
        { value: "99.8%", label: "System Uptime" },
        { value: "2.4s", label: "Load Time" },
      ],
      bullets: [
        "Ut aut reiciendis voluptatibus maiores alias",
        "Consequatur aut perferendis doloribus asperiores",
        "Repellat nam libero tempore cum soluta nobis",
      ],
      btn: "Check Performance",
    },
  },
  {
    id: "integration",
    number: "04",
    title: "Integration",
    subtitle: "Seamless workflow",
    image: "/integeration.jpg",
    imageDesc: "Two systems connected seamlessly",
    badge: {
      icon: <Link className="w-5 h-5" />,
      label: "Connected",
      value: "24/7 Sync",
    },
    content: {
      icon: <Workflow className="w-8 h-8" />,
      heading: "Smart Integration",
      subheading: "Seamless Workflow Integration",
      description:
        "Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis.",
      stats: [
        { value: "450+", label: "Integrations" },
        { value: "85%", label: "Automation" },
      ],
      bullets: [
        "Rerum necessitatibus saepe eveniet voluptates",
        "Repudiandae sint et molestiae non recusandae",
        "Itaque earum rerum hic tenetur sapiente",
      ],
      btn: "Start Integration",
    },
  },
];

export default function FeaturesTabs() {
  const [activeTabNumber, setActiveTabNumber] = useState("01");
  return (
    <section className="w-full py-20">
      <div className="">
        <Tabs defaultValue="innovation">
          <TabsList className="flex flex-wrap flex-col md:flex-row w-full h-full bg-foreground rounded-xl lg:h-18 p-2">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                onClick={() => setActiveTabNumber(tab.number)}
                className="flex items-center gap-3 p-4 w-full h-full rounded-lg cursor-pointer md:w-1/2 lg:flex-1
                        hover:bg-blue-200/10 transition-colors duration-300
                       data-[state=active]:bg-blue-400/30  
                         data-[state=active]:shadow-lg 
                        data-[state=active]:text-white 
                        text-gray-300"
              >
                {/* Number */}
                <div className="flex items-center gap-3 group transition-colors duration-300">
                  <div
                    className={`w-6 h-6 text-xs rounded-full flex items-center justify-center font-semibold transition-colors ${
                      activeTabNumber === tab.number
                        ? "bg-blue-300/20 text-white"
                        : "bg-slate-400/10 text-gray-300"
                    }`}
                  >
                    {tab.number}
                  </div>
                  <div className="text-left">
                    <h5 className="font-semibold">{tab.title}</h5>
                    <p className="text-sm opacity-70">{tab.subtitle}</p>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {tabsData.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-12 text-white"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="special">
                    {tab.content.icon} {tab.content.subheading}
                  </div>
                  {/* Container */}
                  <div className="grid lg:grid-cols-2 gap-10 mt-6 items-center">
                    {/* Left */}
                    <div>
                      <h2 className="text-4xl font-bold text-blue-200">
                        {tab.content.subheading}
                      </h2>
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {tab.content.description}
                      </p>
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-10 mt-8">
                        {tab.content.stats.map((stat, i) => (
                          <div key={i}>
                            <h3 className="text-3xl text-blue-400 font-extralight">
                              {stat.value}
                            </h3>
                            <p className="text-gray-500 text-xs tracking-widest font-semibold mt-1">
                              {stat.label.toUpperCase()}
                            </p>
                          </div>
                        ))}
                      </div>
                      {/* Bullets */}
                      <ul className="mt-8 space-y-3">
                        {tab.content.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="text-blue-400 text-xl">
                              <MoveRight />
                            </span>
                            <span className="text-gray-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Button */}
                      <button
                        className="
                    mt-8 text-blue-300 font-medium flex items-center gap-2 group transition-transform duration-300 cursor-pointer"
                      >
                        {tab.content.btn}{" "}
                        <span className=" group-hover group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-blue-200 transition-all">
                          <MoveUpRight />
                        </span>
                      </button>
                    </div>

                    {/* Right  */}
                    <div className="relative w-full lg:min-w-md h-80 lg:h-96 overflow-hidden transition-all duration-500 group shadow-[5px_5px_15px_5px_rgba(24,255,255,.1)]">
                      <Image
                        src={tab.image}
                        alt={tab.imageDesc}
                        fill
                        className="rounded-xl object-cover group-hover:scale-115 group-hover:grayscale-75 hover:rotate-2 transition-all border-2 border-gray-200/20 "
                      />

                      {/* Image Description */}
                      <div
                        className="absolute bottom-6 right-6 bg-[#0b1524] text-white
                    px-6 py-4 rounded-xl shadow-md flex items-center gap-3 tabBadgeAnim
                  "
                      >
                        <div className="text-blue-400">{tab.badge.icon}</div>
                        <div>
                          <p className="text-xs text-gray-400">
                            {tab.badge.label}
                          </p>
                          <h4 className="font-semibold text-lg">
                            {tab.badge.value}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
