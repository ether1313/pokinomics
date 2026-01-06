import { useEffect, useState } from "react";

/* ===========================
   DATA
=========================== */

const CASINOS = [
  {
    rank: 2,
    logo: "/overlay/kingbet9.png",
    bonus: "Welcome Bonus 100%",
    link: "https://kingbet9aus.com/register",
  },
  {
    rank: 1,
    logo: "/overlay/ipay9.png",
    bonus: "Daily Easy Step A$100",
    link: "https://ipay9aud.com/register",
    featured: true,
  },
  {
    rank: 3,
    logo: "/overlay/bp77.png",
    bonus: "Register Free A$87.77",
    link: "https://www.bigpay77.com/register/SMSRegister",
  },
];

/* ===========================
   OVERLAY
=========================== */

export default function GlobalCasinoOverlay() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (docHeight > 0 && scrollTop / docHeight >= 0.5) {
        setMounted(true);
        setVisible(true);
        document.body.style.overflow = "hidden";
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setVisible(false);
    document.body.style.overflow = "";
    setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

      {/* Backdrop */}
      <div
        className={`
          absolute inset-0
          bg-black/60 backdrop-blur-md
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Close Button */}
      <button
        onClick={close}
        aria-label="Close"
        className="
          absolute top-4 right-4 z-20
          w-10 h-10
          rounded-full
          bg-white text-black
          flex items-center justify-center
          shadow-lg
          hover:bg-gray-100
          transition
        "
      >
        ✕
      </button>

      {/* Content */}
      <div
        className={`
          relative z-10 w-full max-w-6xl
          transition-all duration-300 ease-out
          ${visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-[0.98]"}
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end">
          {CASINOS.map((casino) => (
            <CasinoCard key={casino.rank} {...casino} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===========================
   CARD
=========================== */

function CasinoCard({
  rank,
  logo,
  bonus,
  link,
  featured = false,
}: {
  rank: number;
  logo: string;
  bonus: string;
  link: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`
        relative bg-white rounded-xl shadow-xl
        p-4 md:p-6
        text-center
        transition
        ${featured ? "md:-translate-y-6 md:scale-105" : ""}
      `}
    >
      {/* Rank Badge */}
      <img
        src={`/overlay/rank-${rank}.png`}
        alt={`Rank ${rank}`}
        className="absolute -top-3 left-3 w-12 md:w-16"
      />

      {/* Logo */}
      <img
        src={logo}
        alt="Casino Logo"
        className="mx-auto h-10 md:h-12 object-contain mt-4"
      />

      {/* Stars */}
      <div className="flex justify-center gap-0.5 my-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="text-yellow-400 text-sm md:text-base"
          >
            ★
          </span>
        ))}
      </div>

      {/* Bonus */}
      <p className="text-[#011223] font-semibold text-sm md:text-lg mb-3">
        {bonus}
      </p>

      {/* CTA */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block
          bg-yellow-400 hover:bg-yellow-500
          text-black font-bold
          py-2 md:py-2.5
          rounded-md
          transition
          text-sm md:text-base
        "
      >
        REGISTER NOW
      </a>

      {/* Country Flag */}
      <img
        src="/overlay/au.png"
        alt="Australia"
        className="absolute bottom-2 right-2 w-8 md:w-10"
      />
    </div>
  );
}
