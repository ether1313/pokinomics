import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GlobalBottomBanner() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Reveal banner after scrolling 20%
  useEffect(() => {
    setVisible(false);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight > 0 && scrollTop / docHeight >= 0.2) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Broadcast banner visibility state
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("bannerVisible", { detail: visible }));
  }, [visible]);

  // Close button should also broadcast false
  const closeBanner = () => {
    setVisible(false);
    window.dispatchEvent(new CustomEvent("bannerVisible", { detail: false }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="relative w-full max-w-7xl bg-[#0f172a] text-white shadow-2xl rounded-xl pointer-events-auto">

        {/* Close Button */}
        <button
          onClick={closeBanner}
          className="
            absolute -top-3 -right-3
            w-8 h-8 bg-white text-black rounded-full
            flex items-center justify-center shadow-lg
            hover:bg-gray-100 transition
          "
          aria-label="Close banner"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex items-center px-4 md:px-6 py-3 md:py-4 gap-4 md:gap-6">

          {/* Rank only on desktop */}
          <div className="hidden md:flex w-12 flex-shrink-0 justify-center">
            <img src="/first-rank.png" alt="Rank 1" className="w-10 h-10" />
          </div>

          {/* Logo */}
          <div className="w-24 md:w-28 flex-shrink-0 flex justify-center">
            <img
              src="/overlay/ipay9.png"
              alt="Company Logo"
              className="h-8 md:h-10 object-contain"
            />
          </div>

          {/* Promo Text */}
          <div className="flex-1 text-center text-sm md:text-base font-medium">
            <span className="text-white/80 md:mr-1">
              <span className="md:hidden">Bonus</span>
              <span className="hidden md:inline">Slot Welcome</span>
            </span>
            <span className="font-bold text-yellow-400 text-base md:text-2xl mx-1">
              50%
            </span>
            <span className="hidden md:inline text-white/80">BONUS</span>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="https://ipay9aud.com/register/SMSRegister"
              className="
                bg-yellow-400 text-black font-semibold
                px-4 md:px-5 py-2 rounded-md
                hover:bg-yellow-300 transition
                text-sm md:text-base
              "
            >
              Register Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
