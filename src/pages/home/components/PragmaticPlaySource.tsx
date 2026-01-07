import { useState } from 'react';
import {MonitorPlay, Zap, ShieldCheck, Layers, Crown, ChevronLeft, ChevronRight} from 'lucide-react';

const techSlides = [
  {
    icon: MonitorPlay,
    text:
      'State-of-the-art video streaming architecture, built in-house, with high scalability, reliability, and glass-to-glass latency as low as 1.5–2 seconds.',
  },
  {
    icon: Layers,
    text:
      'An Angular-based, recently refactored and highly secure UI framework designed for stability and scale.',
  },
  {
    icon: Crown,
    text:
      'Premium professional video, audio and lighting equipment from leading brands in the market.',
  },
  {
    icon: Zap,
    text:
      'Advanced green screen technology enabling fully branded or semi-branded casino environments.',
  },
  {
    icon: ShieldCheck,
    text:
      'Fail-safe systems engineered to minimise downtime and ensure uninterrupted gameplay.',
  },
];

export function TechnologySlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* ===== CARDS STAGE ===== */}
      <div className="relative w-full h-full flex items-center justify-center">
        {techSlides.map((slide, i) => {
          const offset = i - index;

          // 只保留前后 1 张（桌面 & 手机一致）
          if (Math.abs(offset) > 1) return null;

          const Icon = slide.icon;

          return (
            <div
              key={i}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `
                  translateX(${
                    // 手机位移更小，桌面更大
                    offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 260)
                  }px)
                  scale(${
                    offset === 0
                      ? 1
                      : typeof window !== 'undefined' && window.innerWidth < 768
                      ? 0.88
                      : 0.9
                  })
                `,
                opacity:
                  offset === 0
                    ? 1
                    : typeof window !== 'undefined' && window.innerWidth < 768
                    ? 0.25
                    : 0.45,
                zIndex: offset === 0 ? 20 : 10,
              }}
            >
              <div
                className="
                  w-[240px] md:w-[300px]
                  h-[300px] md:h-[320px]
                  rounded-3xl
                  px-6 md:px-8
                  flex flex-col items-center justify-center
                  text-center
                  backdrop-blur-xl
                  border border-white/10
                  bg-gradient-to-br
                  from-white/20 via-white/12 to-white/5
                "
              >
                <Icon className="h-10 md:h-12 w-10 md:w-12 mb-5 md:mb-6 text-orange-400" />

                <p className="text-xs md:text-base text-gray-100 leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== ARROWS ===== */}
      <div className="absolute bottom-4 md:bottom-6 flex items-center gap-10">
        <button
          onClick={() =>
            setIndex((prev) =>
              prev === 0 ? techSlides.length - 1 : prev - 1
            )
          }
          className="text-orange-400 hover:opacity-80 transition"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() =>
            setIndex((prev) => (prev + 1) % techSlides.length)
          }
          className="text-orange-400 hover:opacity-80 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}


export default function PragmaticPlaySource() {
  return (
    <section className="space-y-10 px-4 md:px-0">

        {/* ================= Section 1: Logo Hero ================= */}
        <section className="pt-12 flex justify-center">
            <img
            src="/pragmaticPlay/pragmaticplay-logo.png"
            alt="Pragmatic Play"
            className="h-24 md:h-36 object-contain"
            />
        </section>

        {/* ================= Section 2: Who is Pragmatic Play ================= */}
        <section className="max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
            <h1 className="text-xl md:text-4xl font-semibold">
            Who are Pragmatic Play. We are.
            </h1>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Headquartered in Gibraltar, Pragmatic Play is a leading content provider
            delivering player-favourite games to some of the most successful operator
            brands worldwide. Through a single, powerful API, the company offers a
            diverse multi-product portfolio including slots, live casino, bingo,
            virtual sports and more — available across regulated markets, languages
            and currencies.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Focused on immersive experiences and responsible entertainment, Pragmatic
            Play creates games that players return to time and time again, supported
            by a scalable and reliable delivery framework.
            </p>
        </section>

        {/* ================= Section 3: Live Casino Showcase ================= */}
        <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-4xl font-semibold mt-0 md:mt-6">
                Curated: Live Dealer Studio
            </h2>
        </div>

        <p className="text-gray-700 max-w-7xl text-sm md:text-base mt-2 md:mt-4">
            Broadcast from state-of-the-art studios, Pragmatic Play Live Casino
            features a wide range of premium titles including Baccarat, Roulette
            and Blackjack.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mt-4 md:mt-6">
            {[
            {
                title: 'Blackjack X',
                img: '/pragmaticPlay/blackjack.png',
                desc:
                'Blackjack X offers the full live Blackjack experience with multiplayer gameplay, chat, multiple camera views, eight decks, cutting-card tracking and shoe reshuffle.',
            },
            {
                title: 'Fortune Roulette',
                img: '/pragmaticPlay/fortune-roulette.png',
                desc:
                'A dazzling live roulette game show featuring multipliers on inside bets, a slots bonus game, and wins of up to 9,000x, streamed 24/7 from a glittering studio.',
            },
            {
                title: 'Bet Behind Pro Blackjack',
                img: '/pragmaticPlay/bet-behind-pro-blackjack.jpg',
                desc:
                'A classic live blackjack game with a twist, no players seated at the table, bots occupy all seven seats, allowing players to bet behind them while enjoying fast, decisive gameplay.',
            },
            ].map((game, i) => (
            <div
                key={i}
                className="relative rounded-xl overflow-hidden bg-white shadow-sm min-h-[440px] md:min-h-[480px]"
            >
                {/* image */}
                <img
                src={game.img}
                alt={game.title}
                className="w-full object-cover"
                />

                {/* bottom overlay content */}
                <div className="
                absolute bottom-0 left-0 w-full
                bg-white/95
                px-4 py-4
                space-y-1
                ">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {game.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {game.desc}
                </p>
                </div>
            </div>
            ))}
        </div>
        </section>

        {/* ================= Section 4: Video ================= */}
        <section className="max-w-7xl mx-auto">
            <div className="aspect-video w-full rounded-2xl overflow-hidden mt-10 md:mt-16">
            <iframe
                className="w-full h-full"
                src="/pragmaticPlay/Money-Time_Promo-Video_Desktop_EN-1080.mp4"
                title="Pragmatic Play Live Casino"
                frameBorder="0"
                allowFullScreen
            />
            </div>
        </section>

        {/* ================= Section 5: Technology & Platform ================= */}
        <section
        className="
            relative
            left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            w-screen
            bg-[#1b1324]
            py-10 md:py-16
            overflow-hidden
        "
        >
        <div
            className="
            max-w-7xl mx-auto
            flex flex-col md:flex-row
            items-start md:items-center
            gap-4 md:gap-10
            px-6 md:px-4
            "
        >
            {/* ===== LEFT TEXT ===== */}
            <div className="w-full md:w-[32%] text-white text-center space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-4xl font-bold">Pragmatic Play's Technology & Platform Architecture</h2>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                The back-end platform delivers market-leading control and visibility through a single, centralised system. 
                Licensees can manage table ranges, game settings, VIP limits and client features, supported by powerful 
                customisation tools, reporting and real-time operational, fraud and product notifications.
                </p>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                An intuitive customisation tool allows real-time updates to live environments, including banners, fonts 
                and colour schemes, using simple controls and a drag-and-drop interface.
                </p>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Built as a standalone, scalable platform, the system is agile and flexible, enabling rapid response to 
                licensee needs while continuously enhancing product quality and performance.
                </p>

            </div>

            {/* ===== RIGHT SLIDER STAGE ===== */}
            <div className="relative w-full md:flex-1 h-[440px] md:h-[480px]">
                <TechnologySlider />
            </div>
        </div>
        </section>


        {/* ================= Section 6: Responsible Gaming ================= */}
        <section className="relative py-6 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-0 grid gap-10 md:gap-12 md:grid-cols-2 items-center">

            {/* ===== LEFT: LOGO GRID ===== */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
                '/pragmaticPlay/mga.png',
                '/pragmaticPlay/gambling-comm.png',
                '/pragmaticPlay/ohin.png',
                '/pragmaticPlay/gaming-associates.png',
            ].map((logo, i) => (
                <div
                key={i}
                className="
                    group
                    relative
                    rounded-2xl
                    bg-white/90
                    backdrop-blur
                    border border-gray-200/60
                    flex items-center justify-center
                    h-[90px] md:h-[110px]
                    transition
                    hover:shadow-lg
                "
                >
                <img
                    src={logo}
                    alt="Responsible Gaming"
                    className="
                    h-8 md:h-10
                    object-contain
                    transition
                    group-hover:scale-105
                    "
                />
                </div>
            ))}
            </div>

            {/* ===== RIGHT: TEXT CONTENT ===== */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900">
                Responsible Gaming & Regulatory Bodies
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Pragmatic Play works closely with regulators and licensees to ensure a safe,
                transparent and responsible live casino environment.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                By proactively adapting to regulatory requirements and industry standards,
                the platform consistently delivers compliant, secure and trusted gaming
                experiences across global markets.
            </p>
            </div>

        </div>
        </section>


    </section>
  );
}
