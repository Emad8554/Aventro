const {
  Shield,
  WorkflowIcon,
  Rocket,
  Infinity,
  MoveRight,
  StarsIcon,
} = require("lucide-react");
const { MdAnalytics } = require("react-icons/md");

const features = [
  {
    icon: <Shield className="text-blue-500 text-xl" />,
    title: "Advanced Security Protocol",
    status: "Active",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam feugiat vitae.",
  },
  {
    icon: <WorkflowIcon className="text-blue-500 text-xl" />,
    title: "Seamless Workflows",
    status: "Active",
    description:
      "Donec sodales sagittis magna sed pellentesque urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.",
  },
  {
    icon: <MdAnalytics className="text-blue-500 text-xl" />,
    title: "Real-Time Analytics",
    status: "Beta",
    description:
      "Proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
  },
  {
    icon: <Rocket className="text-blue-500 text-xl" />,
    title: "Rapid Deployment",
    status: "Coming Soon",
    description:
      "Vivamus suscipit tortor eget felis porttitor volutpat curabitur arcu erat accumsan id imperdiet et porttitor at sem.",
  },
  {
    icon: <Infinity className="text-blue-500 text-xl" />,
    title: "Infinite Scalability",
    status: "Active",
    description:
      "Mauris blandit aliquet elit eget tincidunt nibh pulvinar a proin eget tortor risus quisque velit nisi pretium ut lacinia.",
  },
];
const stats = [
  {
    value: "2.5K+",
    label: "Active Users",
  },
  {
    value: "99.9%",
    label: "Uptime Rate",
  },
  {
    value: "150+",
    label: "Integrations",
  },
];

import React from "react";
import FeaturesTabs from "./FeaturesTab";
import { cn } from "@/lib/utils";

const Features = () => {
  return (
    <div className="bg-background layout">
      <div className="flex flex-col lg:items-center lg:flex-row gap-6 space-y-8">
        {/* Left Section */}
        <div className="w-full lg:w-[45%] space-y-7">
          {/* Header icon */}
          <div className="special">
            <StarsIcon className="w-4 h-4" /> Premium Features
          </div>
          <h1 className="text-2xl text-white lg:text-4xl">
            Elevating Your Digital Experience
          </h1>
          <h3 className="text-gray-400/90 leading-8 text-sm font-light">
            Curabitur ullamcorper ultricies nisi. Nam eget dui etiam rhoncus
            maecenas tempus tellus eget condimentum rhoncus sem quam semper
            libero sit amet adipiscing sem neque sed ipsum.
          </h3>
          {/* Stats */}
          <div className="w-full md:max-w-[450px] flex flex-col space-y-5 md:flex-row md:items-center justify-between mt-3 flex-wrap">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-white text-xl mb-1.5">{stat.value}</div>
                <div className="text-gray-200/40 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="w-max flex items-center pb-2 border-b-2 border-blue-400/10 mt-12 gap-2 text-blue-400 group duration-300 hover:border-blue-600">
            <a href="" className="group-hover:text-blue-500 transition-colors">
              Explore all features{" "}
            </a>
            <MoveRight className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[45%]">
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-cardBg p-8 rounded-md space-y-4 hover:shadow-lg hover:shadow-blue-300/10 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-md bg-[#0c192a] flex items-center justify-center group-hover:bg-blue-700/10 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                    <h1 className="text-white font-semibold pb-0 md:pb-2 group-hover:translate-x-1 transition">
                      {feature.title}
                    </h1>
                    <p
                      className={cn(
                        "py-1.5 w-max px-3 text-xs rounded-md",
                        feature.status === "Active" &&
                          "bg-green-300/10 text-green-300",
                        feature.status === "Beta" &&
                          "bg-blue-300/10 text-blue-400",
                        feature.status === "Coming Soon" &&
                          "bg-transparent text-gray-300"
                      )}
                    >
                      {feature.status}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FeaturesTabs />
    </div>
  );
};

export default Features;
