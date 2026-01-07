'use client';

import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

/* ================= utils ================= */
const toSlug = (input: string) =>
  input
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ================= types ================= */
type JokerGame = {
  id: number;
  title: string;
  image: string;
  volatility: string;
  isNew: boolean;
  jackpot: boolean;
  rtp: string;
  slug?: string;
};

const DEMO_LOBBY_URL = "https://jokerofficial.net/en/game/slot";

/* ================= demo games ================= */
const demoGames: JokerGame[] = [
  {
    id: 1,
    title: "Gods Of Asgard",
    image: "/other/joker/gods_of_asgard.png",
    volatility: "3",
    isNew: true,
    jackpot: true,
    rtp: "-",
  },
  {
    id: 2,
    title: "Jiang Shi Night",
    image: "/other/joker/jiang_shi_night.png",
    volatility: "3",
    isNew: true,
    jackpot: false,
    rtp: "-",
  },
  {
    id: 3,
    title: "Maya Ways",
    image: "/other/joker/maya_ways.png",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "97",
  },
  {
    id: 4,
    title: "Super Seven Seas",
    image: "/other/joker/super_seven_seas.png",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "97",
  },
  {
    id: 5,
    title: "Fire Master Hold And Win",
    image: "/other/joker/fire_master_hold_and_win.png",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "97",
  },
  {
    id: 6,
    title: "Hawaii Vacay",
    image: "/other/joker/hawaii_vacay.jpg",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "95",
  },
  {
    id: 7,
    title: "Dragon Ball",
    image: "/other/joker/dragon_ball.png",
    volatility: "-",
    isNew: true,
    jackpot: false,
    rtp: "97",
  },
  {
    id: 8,
    title: "Fortune Crown Gold Gift",
    image: "/other/joker/fortune_crown_gold_gift.png",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "97",
  },
  {
    id: 9,
    title: "Savage Frontier Hold And Win",
    image: "/other/joker/savage_frontier_hold_and_win.jpg",
    volatility: "1",
    isNew: true,
    jackpot: true,
    rtp: "97",
  },
  {
    id: 10,
    title: "Black Knight",
    image: "/other/joker/black_knight.jpg",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "95",
  },
  {
    id: 11,
    title: "Fortune Crown",
    image: "/other/joker/fortune_crown.jpg",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "95",
  },
{
    id: 12,
    title: "Hot Wheels",
    image: "/other/joker/hot_wheels.png",
    volatility: "-",
    isNew: true,
    jackpot: true,
    rtp: "95",
  },
];

/* ================= main ================= */
export default function JokerSource() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const gamesWithSlug = useMemo(
    () => demoGames.map(g => ({ ...g, slug: toSlug(g.title) })),
    []
  );

  const [activeGame, setActiveGame] =
    useState<(typeof gamesWithSlug)[0] | null>(null);

  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  useEffect(() => {
    if (!slug) {
        setActiveGame(null);
        return;
    }

    const matched = gamesWithSlug.find(g => g.slug === slug);
    setActiveGame(matched || null);
  }, [slug, gamesWithSlug]);


  const isMobile = useMemo(
    () => typeof window !== "undefined" && window.innerWidth < 768,
    []
  );


  /* ================= mobile paging ================= */
  const PER_PAGE = 6;
  const [mobilePage, setMobilePage] = useState(0);
  const totalPages = Math.ceil(gamesWithSlug.length / PER_PAGE);

  const mobileGames = useMemo(
    () =>
      gamesWithSlug.slice(
        mobilePage * PER_PAGE,
        mobilePage * PER_PAGE + PER_PAGE
      ),
    [mobilePage, gamesWithSlug]
  );

  const statsRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);

  /* ================= dynamic stats ================= */
  const targets = {
    games: 200,
    years: 8,
    countries: 30,
    operators: 5000,
  };

  const [stats, setStats] = useState({
    games: 0,
    years: 0,
    countries: 0,
    operators: 0,
  });

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            let start: number | null = null;
            const duration = 2800;

            const animate = (t: number) => {
            if (!start) start = t;
            const progress = Math.min((t - start) / duration, 1);

            setStats({
                games: Math.floor(progress * targets.games),
                years: Math.floor(progress * targets.years),
                countries: Math.floor(progress * targets.countries),
                operators: Math.floor(progress * targets.operators),
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
            };

            requestAnimationFrame(animate);
        }
        },
        {
        threshold: 0.35,
        }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
    }, []);


  /* ================= auto load images ================= */
  const jokerImages: string[] = Object.values(
    import.meta.glob(
      "@/assets/games/joker/*.{png,jpg,jpeg,webp}",
      { eager: true, query: "?url", import: "default" }
    )
  );

  const INITIAL_MOBILE_COUNT = 24;
  const [showCount, setShowCount] = useState(INITIAL_MOBILE_COUNT);

  const mobileVisibleGames = jokerImages.slice(0, showCount);
  const hasMore = showCount < jokerImages.length;



  return (
    <>
      {/* ================= HERO ================= */}
      <section className="w-full">
        <img
          src="/other/joker/hero-bg.png"
          className="w-full h-[28vh] md:h-[70vh] object-cover"
        />
      </section>

      {/* ================= JOKER H1 + DESCRIPTION ================= */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 mt-16 md:mt-20 mb-6 md:mb-12 text-center space-y-6 md:space-y-10">
        <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
          Joker Australia Casino Pokies Gaming
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-6xl mx-auto">
          Joker is recognized as one of Asia’s leading online game providers, offering a diverse catalogue 
          of products including slots, fishing games, bingo, funky titles, and various e-games. Players can 
          enjoy seamless gameplay across both H5 platforms and mobile applications, making it highly adaptable 
          to different gaming habits and preferences.
        </p>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-6xl mx-auto">
          In addition, Joker operates both an app and a web platform with a user-friendly interface, supported 
          by 24/7 customer service to meet players’ needs at any time. The platform accommodates multiple currencies 
          and frequently hosts festive in-game events to cater to different cultures around the world. Joker continues 
          to update and refine its systems and game portfolio to meet the expectations of its rapidly expanding global player base.
        </p>
      </section>


      {/* ================= DEMO PLAY ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-xl md:text-4xl font-bold text-white">
          Joker Demo Play
        </h2>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0b1c33] border border-blue-900">
        {/* CTA 状态 */}
        {!isDemoPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button
                onClick={() => {
                if (isMobile) {
                    window.open(DEMO_LOBBY_URL, "_blank");
                } else {
                    setIsDemoPlaying(true);
                }
                }}
                className="
                px-10 py-4
                rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black font-bold text-lg
                shadow-[0_0_35px_rgba(0,200,255,0.65)]
                hover:scale-105
                transition
                "
            >
                ▶ Demo Play
            </button>

            <div className="mt-3 text-blue-200 text-sm opacity-80">
                {isMobile
                ? "Opens in a new tab for better experience"
                : "Click to lauch Joker demo lobby"}
            </div>
            </div>
        )}

        {/* 桌面端 iframe */}
        {isDemoPlaying && !isMobile && (
            <iframe
            src={DEMO_LOBBY_URL}
            className="w-full h-full rounded-xl"
            allow="autoplay; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            referrerPolicy="no-referrer"
            />
        )}
        </div>
      </section>

      {/* ================= HOT DEMO GAMES ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-6">
          Joker Hot Slot Game
        </h3>

        {/* ===== GAME INFO BAR ===== */}
        {activeGame && (
        <div
            key={activeGame.id}
            className="
            mt-4 md:mt-6
            mb-6 md:mb-10
            relative
            overflow-hidden
            rounded-2xl
            border border-cyan-400/20
            bg-gradient-to-br from-[#0b2447] via-[#071a33] to-[#040e1f]
            p-5 md:p-6
            transition-all duration-300
            shadow-[0_0_30px_rgba(0,180,255,0.15)]
            animate-fadeIn
            "
        >
            {/* subtle glow layer */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.18),transparent_60%)]" />

            {/* ===== TOP: Title + Tags ===== */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
            <div>
                <h4 className="text-lg md:text-2xl font-bold text-white tracking-wide">
                {activeGame.title}
                </h4>

                <div className="flex gap-2 mt-2">
                {activeGame.isNew && (
                    <span className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-xs md:text-sm">
                        <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                        </span>

                        NEW
                    </span>
                )}
                {activeGame.jackpot && (
                    <span className="px-3 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 text-xs md:text-sm">
                    JACKPOT
                    </span>
                )}
                </div>
            </div>

            {/* Desktop hint */}
            <div className="hidden md:block text-lg text-gray-400 opacity-60">
                Game Category
            </div>
            </div>

            {/* ===== STATS ===== */}
            <div className="relative z-10 grid grid-cols-4 gap-3 md:gap-6 text-center">
            {/* Volatillity */}
            <div className="rounded-xl bg-white/5 p-3 md:p-4">
                <div className="text-[11px] md:text-sm text-blue-200 opacity-70">
                Volatility
                </div>
                <div className="text-lg md:text-2xl font-bold text-white mt-1">
                {activeGame.volatility}
                </div>
            </div>

            {/* RTP */}
            <div className="rounded-xl bg-white/5 p-3 md:p-4">
                <div className="text-[11px] md:text-sm text-blue-200 opacity-70">
                RTP
                </div>
                <div className="text-lg md:text-2xl font-bold text-white mt-1">
                {activeGame.rtp}%
                </div>
            </div>

            {/* Jackpot */}
            <div className="rounded-xl bg-white/5 p-3 md:p-4">
                <div className="text-[11px] md:text-sm text-blue-200 opacity-70">
                Jackpot
                </div>
                <div
                className={`text-lg md:text-2xl font-bold mt-1 ${
                    activeGame.jackpot ? "text-yellow-300" : "text-white"
                }`}
                >
                {activeGame.jackpot ? "YES" : "NO"}
                </div>
            </div>

            {/* Status */}
            <div className="rounded-xl bg-white/5 p-3 md:p-4">
                <div className="text-[11px] md:text-sm text-blue-200 opacity-70">
                Status
                </div>
                <div className="text-lg md:text-2xl font-bold text-cyan-300 mt-1">
                {activeGame.isNew ? "NEW" : "LIVE"}
                </div>
            </div>
            </div>
        </div>
        )}

        <div className="hidden md:grid grid-cols-5 gap-6">
          {gamesWithSlug.map(game => (
            <button
              key={game.id}
              onClick={() => {
                navigate(`/joker-online-slots/${game.slug}`);
              }}
              className={`rounded-2xl overflow-hidden transition ${
                activeGame?.id === game.id
                  ? "ring-2 ring-cyan-400 scale-[1.03]"
                  : "hover:scale-105 hover:ring-1 hover:ring-blue-400/40"
              }`}
            >
              <img src={game.image} className="w-full aspect-[3/4] object-cover" />
            </button>
          ))}
        </div>

        {/* ===== Mobile Pager ===== */}
        <div className="md:hidden flex justify-between items-center mb-3">
        <span className="text-blue-200 text-sm">
            Page {mobilePage + 1} / {totalPages}
        </span>

        <div className="flex gap-2">
            <button
            onClick={() => setMobilePage(p => Math.max(p - 1, 0))}
            disabled={mobilePage === 0}
            className="px-3 py-1 rounded bg-blue-900 text-white disabled:opacity-40"
            >
            ←
            </button>

            <button
            onClick={() =>
                setMobilePage(p => Math.min(p + 1, totalPages - 1))
            }
            disabled={mobilePage === totalPages - 1}
            className="px-3 py-1 rounded bg-blue-900 text-white disabled:opacity-40"
            >
            →
            </button>
        </div>
        </div>
        
        {/* Mobile */}
        <div className="md:hidden mt-6 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {mobileGames.map(game => (
              <button
                key={game.id}
                onClick={() => {
                  navigate(`/joker-online-slots/${game.slug}`);
                }}
                className={`rounded-xl overflow-hidden ${
                  activeGame?.id === game.id ? "ring-2 ring-cyan-400" : ""
                }`}
              >
                <img src={game.image} className="aspect-[3/4] object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-12 bg-[#010b1bc1]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            ABOUT OUR COMPANY
          </h2>

          {/* stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Games" value={stats.games} />
            <Stat label="Year of Experience" value={stats.years} />
            <Stat label="Available Country" value={stats.countries} />
            <Stat label="Operator" value={stats.operators} />
          </div>

          {/* cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            {[
              ["01", "MORE THAN 200 GAMES", "There are more than 200 games available on our game platform from Slots. We have got all your favourite games covered!"],
              ["02", "OUR VISION", "To be the supreme and sustainable company in the gaming industry and related business."],
              ["03", "OUR MISSION", "To provide games that enrich life with positive energy and committed to develop new technology to achieve competitive advantage among the industry."],
              ["04", "OUR SLOGAN", "Earn more than joy; Why So Serious; Step up your game; Level up your game; Ultimate gaming experience."],
            ].map(([no, title, desc]) => (
              <div
                key={no}
                className="bg-gradient-to-br from-[#0b2b52] to-[#071b33] rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,200,255,0.25)]"
              >
                <div className="text-blue-300 text-xl mb-3">{no}</div>
                <h4 className="text-white font-semibold text-xl md:text-2xl mb-2">
                  {title}
                </h4>
                <p className="text-blue-200 text-sm md:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* ================= GAMES COLLECTION ================= */}
        <section className="py-12 bg-[#050f24]">
        <h3 className="text-center text-2xl md:text-4xl font-bold text-white">
            Joker Slot Games Collection
        </h3>

        <p className="text-center text-sm md:text-base text-blue-200 mt-3 mb-10 opacity-80">
            Pick a game you like and give today’s luck a spin.
        </p>


        {/* ================= DESKTOP: MARQUEE ================= */}
        <div className="hidden md:block">
            <Marquee pauseOnHover speed={100} gradient={false}>
            {jokerImages.map((img, i) => (
                <div
                key={i}
                className="relative group mx-2 mb-20 rounded-xl overflow-hidden"
                >
                <img
                    src={img}
                    className="
                    h-24 md:h-56
                    rounded-xl
                    transition
                    duration-300
                    group-hover:scale-105
                    "
                />

                {/* Hover CTA */}
                <div
                    className="
                    absolute inset-0
                    bg-black/50
                    flex items-center justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-300
                    "
                >
                    <a
                    href="/ewallet-casino-providers"
                    className="
                        px-6 py-2
                        rounded-full
                        bg-white
                        text-black
                        font-semibold
                        text-sm
                        shadow-lg
                        hover:scale-105
                        transition
                    "
                    >
                    Free Spin
                    </a>
                </div>
                </div>
            ))}
            </Marquee>
        </div>

        {/* ================= MOBILE: GRID WITH SHOW MORE ================= */}
        <div className="md:hidden mt-6 px-4">
        <div className="grid grid-cols-3 gap-3">
            {mobileVisibleGames.map((img, i) => (
            <a
                key={i}
                href="/ewallet-casino-providers"
                className="
                relative
                rounded-xl
                overflow-hidden
                bg-[#0b1c33]
                border border-white/10
                shadow-[0_6px_18px_rgba(0,0,0,0.45)]
                transition
                active:scale-95
                "
            >
                <img
                src={img}
                className="w-full h-auto object-cover bg-black"
                />
            </a>
            ))}
        </div>

        {hasMore && (
            <div className="flex justify-center mt-6">
            <button
                onClick={() => setShowCount(c => c + 24)}
                className="
                px-8 py-3
                rounded-full
                bg-white/90
                text-black
                font-semibold
                text-sm
                shadow-md
                active:scale-95
                transition
                "
            >
                Show More Games
            </button>
            </div>
        )}
        </div>
        </section>

        {/* ================= JOKER BRAND CHARACTER ================= */}
        <section className="relative py-10 md:py-16 bg-gradient-to-b from-[#050f24] to-[#020814] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">

            {/* ===== LEFT: JOKER CHARACTER ===== */}
            <div className="relative flex justify-center md:justify-start">
                <img
                src="/other/joker/api_joker.png"
                alt="Joker Character"
                className="
                    w-100 md:w-[1220px]
                    drop-shadow-[0_0_40px_rgba(0,200,255,0.25)]
                    animate-float
                "
                />
            </div>

            {/* ===== RIGHT: LOGO + COPY ===== */}
            <div className="text-center md:text-left space-y-6">
                <img
                src="/other/joker/joker-logo.png"
                alt="Joker Gaming"
                className="h-14 md:h-20 mx-auto md:mx-0"
                />

                <p className="text-blue-200 text-sm md:text-base max-w-md mx-auto md:mx-0 opacity-90">
                Enter the world of Joker Gaming — where classic slots meet modern
                innovation, high RTP, and unforgettable gameplay experiences.
                </p>

                {/* optional divider */}
                <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent mx-auto md:mx-0" />
            </div>
            </div>
        </div>

        {/* subtle background glow */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px]" />
        </section>

    </>
  );
}

/* ================= stat component ================= */
function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-2xl md:text-4xl font-bold text-white mb-2">{value}+</div>
      <div className="md:text-xl text-blue-200">{label}</div>
    </div>
  );
}