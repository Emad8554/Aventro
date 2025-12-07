"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function LoadingTransitionWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsFading(true), );
    const timer2 = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {(loading || isFading) && <Loading isFading={isFading} />}{" "}
      <div
        className={`transition-opacity duration-200 ${
          loading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {children}
      </div>
    </>
  );
}
