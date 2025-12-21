"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function LoadingTransitionWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 1000);
    const LoadingTimer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(LoadingTimer);
    };
  }, []);

  return (
    <>
      {(loading || isFading) && <Loading isFading={isFading} />}{" "}
      <div
        className={`transition-all duration-200 ${
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
