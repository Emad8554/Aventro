// hooks/useActiveSection.js
import { useState, useEffect } from "react";

/**
 * Custom Hook لمراقبة الأقسام النشطة في مجال الرؤية (Viewport).
 * @param {string[]} sectionLabels .
 * @returns {string}
 */
export const useActiveSection = (sectionLabels) => {
  const sectionIds = sectionLabels.map((label) => label.toLowerCase());
  const [activeSection, setActiveSection] = useState(sectionLabels[0] || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const label = id.charAt(0).toUpperCase() + id.slice(1);
            setActiveSection(label);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionLabels, sectionIds]);

  return activeSection;
};
