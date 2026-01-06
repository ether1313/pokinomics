"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    // Listen to scroll to decide show/hide
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setShow(scrollPercent > 25);
    };

    window.addEventListener("scroll", handleScroll);

    // Listen to banner visibility event
    const handleBannerVisibility = (event) => {
      setBannerVisible(event.detail);
    };

    window.addEventListener("bannerVisible", handleBannerVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("bannerVisible", handleBannerVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 移动底部距离：手机端才移动
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const bottomPosition = bannerVisible && isMobile ? 90 : 24; // 110px 为安全高度

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed right-6 z-[100]
        transition-all duration-300 
        hover:scale-110
        ${show ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-3"}
      `}
      style={{
        bottom: bottomPosition,
        background: "transparent",
      }}
    >
      <img
        src="/rocket.png"
        alt="Back to top"
        className="w-12 h-12 object-contain rocket-impulse"
      />
    </button>
  );
}
