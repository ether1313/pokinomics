"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setShow(scrollPercent > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-[100]
        transition-all duration-300 
        hover:scale-110
        ${show ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-3"}
      `}
      style={{ background: "transparent" }}
    >
      <img
        src="/rocket.png"
        alt="Back to top"
        className="w-12 h-12 object-contain rocket-impulse"
      />
    </button>
  );
}
