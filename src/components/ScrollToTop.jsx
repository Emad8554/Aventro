"use client";
import { MoveUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showScrollButton = () => {
      if (window.scrollY > 1000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", showScrollButton);
    return () => removeEventListener("scroll", showScrollButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 w-12 h-12 bg-blue-300 flex items-center justify-center 
          rounded-full text-white shadow-lg transition-all duration-300 cursor-pointer z-9999
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <MoveUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default ScrollToTop;
