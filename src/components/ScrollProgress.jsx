"use client";
import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="absolute -bottom-[3px] left-0 w-0 h-[3px] rounded-r-full bg-blue-400/70"
      style={{ width: `${scrollPercent}%` }}
    ></div>
  );
};

export default ScrollProgress;
