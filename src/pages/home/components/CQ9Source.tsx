'use client';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const toSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


type GameItem = {
  id: number;
  name: string;
  image: string;
  demoUrl: string;
  description: string;
  volatility: string;
  maxWin: string;
  rtp: string;
};

const games = [
  {
    id: 1,
    name: 'Rave Jump',
    image: '/other/cq9/rave-jump.png',
    demoUrl: 'https://h5c.cqgame.games/h5/7/?language=en&token=guest123&t=1767081091',
    description:
      '"Rave Jump" is one of the popular CQ9 jump series slot games. Splendid night club style, and the classic element "Golden Ball" stacked on the reels, bring the unstoppable fortune! The number of golden balls determines the free game reward multiplier, the more the merrier!',
    volatility: 'High',
    maxWin: '3000x',
    rtp: '96.18%',
  },
  {
    id: 2,
    name: 'God of War',
    image: '/other/cq9/god-of-war.png',
    demoUrl: 'https://h5c.cqgame.games/h5/31/?language=en&token=guest123&t=1767081040',
    description:
      '"God of War" reproduces the Chinese classic history story. Players become the master of the story, experiencing the thrill of wielding a sword on the battlefield! In the free game, players may choose one of five symbols, and it will only appear selected symbol on the reels, creating supreme glory of rewards!',
    volatility: 'Medium',
    maxWin: '3000x',
    rtp: '96.10%',
  },
  {
    id: 3,
    name: 'Jump High 2',
    image: '/other/cq9/jump-high-2.png',
    demoUrl: 'https://h5c.cqgame.games/h5/179/?language=en&token=guest123&t=1767081008',
    description:
      '"Jump High 2" continues the classic gameplay of CQ9 Jump Series, collect golden balls to win the big prize! In the free game, 5 featured free games that can be chosen, fewer spin times will get a higher starting multiplier.',
    volatility: 'High',
    maxWin: '5000x',
    rtp: '96.07%',
  },
  {
    id: 4,
    name: 'Zeus',
    image: '/other/cq9/zeus.png',
    demoUrl: 'https://h5c.cqgame.games/h5/125/?language=en&token=guest123&t=1767080993',
    description:
      'With the Greek mythology of Zeus as the protagonist, the mobile version of game allows the player to control and operate better while playing with mobile phones. With the 243-way icon connection designs, the WILD icons are frequently stacked. After entering the free game, 1-9 WILD ICONS will appear randomly, with the re-award mechanism, so that players can experience the game with endless excitements!',
    volatility: 'Medium',
    maxWin: '3000x',
    rtp: '96.18%',
  },
  {
    id: 5,
    name: 'Night City',
    image: '/other/cq9/night-city.png',
    demoUrl: 'https://h5c.cqgame.games/h5/229/?language=en&token=guest123&t=1767080978',
    description:
      'Welcome to CQ9 "Night City," where you will experience an unprecedented carnival night! Win the reward as 8 identical patterns appear on the board. Eliminate 30 patterns to get up to a 4000x multiplier! The "Sapphire" icon will randomly appear with an extra multiplier of up to 50x, and the "Golden Diamond" icon will randomly appear up to a 10x additional multiplier. There is also a chance to score 100x on your total bet in free games! This time, you can use "DOUBLE CHANCE" or "BUY FEATURE." Turning on the "DOUBLE CHANCE" can significantly increase the chances of getting to the FG icon, improving your chances of entering the free game. Suppose you do not want to take it slow, you can also buy it directly to enter the free games!',
    volatility: 'High',
    maxWin: '80000x',
    rtp: '96.16',
  },
  {
    id: 6,
    name: 'Black Wukong',
    image: '/other/cq9/black-wukong.png',
    demoUrl: 'https://h5c.cqgame.games/h5/158/?language=en&token=guest123&t=1767080900',
    description:
      'CQ9\'s mythical new game "Black Wukong" makes its grand entrance! Heavy strike from one swing of the Jingu Bang, millions of points goes right in the pouch! Immediate opportunity to receive reward multiplier when "The Destined One" appears, up to 50X! Gold Band WILD line connects, get points to enter FREE GAME. Coupled with the re-trigger function, up to 10 FREE GAMES can be triggered! Join "The Destined One" on this journey full of adventures to the West!',
    volatility: 'High',
    maxWin: '5000x',
    rtp: '95.97%',
  },
  {
    id: 7,
    name: '888',
    image: '/other/cq9/888.png',
    demoUrl: 'https://h5c.cqgame.games/h5/20/?language=en&token=guest123&t=1767080922',
    description:
      'Eight (Ba) is the most auspicious number in Chinese! Snatch a chance of becoming filthy rich by clicking one of the adjacent three "$" symbols on reels 2 to 4 in the featured bonus game!',
    volatility: 'Medium',
    maxWin: '800x',
    rtp: '95.91%',
  },
  {
    id: 8,
    name: 'Fire 777',
    image: '/other/cq9/fire-777.png',
    demoUrl: 'https://h5c.cqgame.games/h5/66/?language=en&token=guest123&t=1767080830',
    description:
      'Surpass the classic and challenge the classic! "Fire 777" brings a brand-new game experience. The super high point bonus and more than 500x payouts are waiting for you at FG! Win big easily in Fire 777!',
    volatility: 'Medium',
    maxWin: '3000x',
    rtp: '97.02%',
  },
  {
    id: 9,
    name: 'Wing Chun',
    image: '/other/cq9/wing-chun.png',
    demoUrl: 'https://h5c.cqgame.games/h5/187/?language=en&token=guest123&t=1767080942',
    description:
      '"Wing Chun" is inspired by traditional Chinese martial arts, allowing players to experience the power of iron fists! When three or more scatter symbols appear on the reels, players can receive rewards up to 100 times.',
    volatility: 'Medium',
    maxWin: '3000x',
    rtp: '96.08%',
  },
  {
    id: 10,
    name: 'Fire Chibi',
    image: '/other/cq9/fire-chibi.png',
    demoUrl: 'https://h5c.cqgame.games/h5/33/?language=en&token=guest123&t=1767080741',
    description:
      '"Fire Chibi" takes players back to the classic battle of the late Eastern Han Dynasty, the Battle of Chibi! End-to-end WILD ship icons are locked on the reels, allowing players to easily win up to 1500x rewards. Get ready to win this legendary battle!',
    volatility: 'High',
    maxWin: '4000x',
    rtp: '96.13%',
  },
  {
    id: 11,
    name: 'Wolf Moon',
    image: '/other/cq9/wolf-moon.png',
    demoUrl: 'https://h5c.cqgame.games/h5/46/?language=en&token=guest123&t=1767241297',
    description:
      'The Wolf Moon gives you a glimpse of the dark gray forest. Not only do you have the opportunity to get a free game for many times, but the high score icon can also be upgraded to WILD! Hold your breath, concentrate, and walk with the Wolf in this bloody moonlight!',
    volatility: 'Medium',
    maxWin: '3000x',
    rtp: '96.27%',
  },
  {
    id: 12,
    name: 'Thor 2',
    image: '/other/cq9/thor-2.png',
    demoUrl: 'https://h5c.cqgame.games/h5/182/?language=en&token=guest123&t=1767241401',
    description:
      '"Thor 2" based on the classic myth history. When the wild symbol appears on the designated combinations, Thor will give the players 5 free games! The most exciting feature is that players may buy 5 free games in the base game, never let the big prize slip through your fingers!',
    volatility: 'High',
    maxWin: '3000x',
    rtp: '96.19%',
  },
];

const aboutPanels = [
  {
    id: 1,
    title: 'Our Team',
    desc:
      'Supported by an experienced and forward-looking professional team, we move beyond traditional thinking and focus on efficient execution. Each product is developed with a clear understanding of market needs and tailored to individual partners, providing long-term and reliable business support.',
    bg: '/other/cq9/about-04.png',
  },
  {
    id: 2,
    title: 'Game Design',
    desc:
      'Driven by player habits and preferences, CQ9 has developed over a hundred uniquely themed HTML5 games. Each title is built with solid mathematics, fair mechanics, optimized return rates, and balanced volatility to deliver engaging and sustainable gameplay experiences.',
    bg: '/other/cq9/about-03.png',
  },
  {
    id: 3,
    title: 'Art Design',
    desc:
      'With strong artistic vision and design expertise, our creative team defines visual styles, composition, and color systems precisely. Through refined characters, immersive scenes, polished UI, and visual effects, each game delivers a rich and memorable visual identity.',
    bg: '/other/cq9/about-02.png',
  },
  {
    id: 4,
    title: 'Sound Design',
    desc:
      'Sound and audio design play a critical role in shaping immersion. Original soundtracks and carefully crafted sound effects enhance atmosphere, guide gameplay flow, and strengthen player interaction for a more engaging overall experience.',
    bg: '/other/cq9/about-01.png',
  },
];

const cq9GameImages = import.meta.glob(
  "@/assets/games/cq9/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

export default function CQ9Source() {
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);
  const [activePanel, setActivePanel] = useState<number>(1);

  const cq9Images = Object.values(cq9GameImages).map(
    (mod: any) => mod.default
  );

  const MOBILE_IMAGE_INITIAL_COUNT = 24;
  const [showAllImages, setShowAllImages] = useState(false);

  const displayImages = showAllImages
    ? cq9Images
    : cq9Images.slice(0, MOBILE_IMAGE_INITIAL_COUNT);

  const navigate = useNavigate();
  const { slug } = useParams();
  
  useEffect(() => {
    if (!slug) {
      setActiveGame(null);
      return;
    }

    const matchedGame = games.find(
      (game) => toSlug(game.name) === slug
    );

    if (matchedGame) {
      setActiveGame(matchedGame);
    } else {
      navigate("/cq9-games", { replace: true });
    }
  }, [slug, navigate]);

  return (
    <section>
        {/* ================= HERO / LOGO SECTION ================= */}
        <section className="relative flex justify-center">
        <div
            className="
            w-full
            max-w-6xl
            text-center
            shadow-sm
            px-4
            "
        >
            {/* Logo */}
            <div className="flex justify-center mb-6 md:mb-8 mt-12 md:mt-16">
            <img
                src="/other/cq9/cq9-logo.png"
                alt="CQ9 Game Provider"
                className="h-20 md:h-32 object-contain"
            />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-8">
                CQ9 Casino Gaming Australia
            </h1>

            <section className="mt-6 md:mt-10 max-w-5xl mx-auto text-center space-y-3">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                CQ9 Gaming has built a strong presence in the Asian casino market by offering
                operators a wide variety of themed games. The company develops online and
                mobile slot games featuring exciting mechanics and engaging, distinctive
                gameplay.
              </p>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                All CQ9 Gaming slot titles are certified by Gaming Laboratories International
                (GLI). In addition, CQ9 provides customised game solutions tailored to the
                needs of its clients and partners. Looking ahead, CQ9 Gaming aims to expand
                its footprint into the U.S. and European gambling markets.
              </p>
            </section>
        </div>
        </section>

        {/* ================= DEMO PLAY + GAME LIST ================= */}
        <section className="space-y-6 px-2">

        <h2 className="text-2xl md:text-4xl font-bold text-[#f5fa00] text-center md:text-left mt-16">
            CQ9 Demo Play
        </h2>

        {/* ===== Desktop Layout ===== */}
        <div className="hidden md:block space-y-8">

          {/* Demo Player */}
          <div className="max-w-7xl mx-auto space-y-4">

            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#333] shadow">
              {activeGame ? (
                <iframe
                  src={activeGame.demoUrl}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 text-lg">
                  Select a game below to start demo play
                </div>
              )}
            </div>

            {/* Game Info */}
            {activeGame && (
              <div className="bg-[#33333387] rounded-xl shadow p-6 space-y-4">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {activeGame.name}
                </h3>

                <p className="text-sm md:text-base text-white leading-relaxed">
                  {activeGame.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#383838b1] rounded-lg p-3 text-center">
                    <p className="text-xs md:text-base text-gray-400">Volatility</p>
                    <p className="text-sm md:text-xl font-semibold text-white">{activeGame.volatility}</p>
                  </div>

                  <div className="bg-[#383838b1] rounded-lg p-3 text-center">
                    <p className="text-xs md:text-base text-gray-400">Max Win</p>
                    <p className="text-sm md:text-xl font-semibold text-white">{activeGame.maxWin}</p>
                  </div>

                  <div className="bg-[#383838b1] rounded-lg p-3 text-center">
                    <p className="text-xs md:text-base text-gray-400">RTP</p>
                    <p className="text-sm md:text-xl font-semibold text-white">{activeGame.rtp}</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ===== Desktop Game List (Below Demo) ===== */}
        <div className="hidden md:block pt-10">

          <div className="max-w-7xl mx-auto space-y-4">

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#f5fa00] mb-6">
              More Games: Hit The Bonus
            </h3>

            {/* Game Grid */}
            <div className="grid grid-cols-6 gap-6">
              {games.map((game) => {
                const isActive = activeGame?.id === game.id;

                return (
                  <button
                  key={game.id}
                  onClick={() => {
                    setActiveGame(game);

                    const slug = toSlug(game.name);
                    navigate(`/cq9-ewallet-casino-games/${slug}`, { replace: true });
                  }}

                    className={`
                      group
                      rounded-xl
                      overflow-hidden
                      transition
                      ring-1 ring-white/10
                      ${isActive
                        ? 'ring-2 ring-green-400'
                        : 'hover:ring-yellow-400/40'}
                    `}
                  >
                    <div className="aspect-[4/3] bg-black">
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <div
                      className={`
                        p-2 text-sm text-center font-semibold
                        ${isActive ? 'text-green-300' : 'text-gray-300'}
                      `}
                    >
                      {game.name}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>


        {/* ===== Mobile Layout ===== */}
        <div className="md:hidden space-y-6">

            {/* Player */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow">
            {activeGame ? (
                <iframe
                src={activeGame.demoUrl}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                />
            ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
                Select a game below to start demo play
                </div>
            )}
            </div>

            {/* Game Info */}
            {activeGame && (
            <div className="bg-[#33333387] rounded-xl shadow p-4 space-y-3">
                <h3 className="text-base font-bold text-white">
                {activeGame.name}
                </h3>

                <p className="text-xs text-white leading-relaxed">
                {activeGame.description}
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#383838b1] rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-400">Volatility</p>
                    <p className="text-xs font-bold text-white">{activeGame.volatility}</p>
                </div>

                <div className="bg-[#383838b1] rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-400">Max Win</p>
                    <p className="text-xs font-bold text-white">{activeGame.maxWin}</p>
                </div>

                <div className="bg-[#383838b1] rounded-lg p-2 text-center">
                    <p className="text-[10px] text-gray-400">RTP</p>
                    <p className="text-xs font-bold text-white">{activeGame.rtp}</p>
                </div>
                </div>
            </div>
            )}

            {/* ===== Mobile Game List ===== */}
            <div className="space-y-3">

              {/* Title */}
              <h3 className="text-base font-bold text-[#f5fa00]">
                More Games To Try
              </h3>

              {/* Game Grid */}
              <div className="grid grid-cols-3 gap-3">
                {games.map((game) => {
                  const isActive = activeGame?.id === game.id;

                  return (
                    <button
                      key={game.id}
                      onClick={() => {
                        setActiveGame(game);

                        const slug = toSlug(game.name);
                        navigate(`/cq9-ewallet-casino-games/${slug}`, { replace: true });
                      }}
                      className={`
                        relative
                        rounded-lg
                        overflow-hidden
                        transition
                        ring-1 ring-white/10
                        ${isActive
                          ? 'ring-2 ring-green-400'
                          : 'active:scale-95'}
                      `}
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] bg-black">
                        <img
                          src={game.image}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name */}
                      <div
                        className={`
                          px-1 py-2
                          text-[11px]
                          text-center
                          font-semibold
                          truncate
                          ${isActive ? 'text-green-300' : 'text-gray-300'}
                        `}
                      >
                        {game.name}
                      </div>

                      {/* Active Overlay */}
                      {isActive && (
                        <div className="absolute inset-0 bg-green-400/10 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

        </div>

        </section>


        {/* ================= ABOUT CQ9 SECTION ================= */}
        <section className="w-full py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4 md:space-y-8">

            {/* ===== SECTION TITLE ===== */}
            <div className="text-center space-y-3 mt-10">
            <h2 className="text-2xl md:text-4xl font-bold text-[#f5fa00] mt-6 md:mt-8 mb-7 md:mb-12">
                About CQ9 iGaming Software Provider
            </h2>
            </div>

            {/* ================= ABOUT – DESKTOP ACCORDION ================= */}
            <div className="hidden md:flex w-full h-[520px] overflow-hidden rounded-2xl">
            {aboutPanels.map((panel) => {
                const isActive = activePanel === panel.id;

                return (
                <button
                    key={panel.id}
                    onClick={() => setActivePanel(panel.id)}
                    className={`
                    relative h-full transition-all duration-500 ease-in-out
                    ${isActive ? 'flex-[3]' : 'flex-[1]'}
                    `}
                >
                    {/* Background */}
                    <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${panel.bg})` }}
                    />
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Content */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-between text-left">
                    {/* Title */}
                    <div>
                        <div className="text-5xl font-extrabold text-yellow-400">
                        {String(panel.id).padStart(2, '0')}
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-yellow-400 uppercase">
                        {panel.title}
                        </h3>
                    </div>

                    {/* Description (only active) */}
                    {isActive && (
                        <p className="text-md leading-relaxed text-white max-w-md">
                        {panel.desc}
                        </p>
                    )}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                    <div className="absolute right-0 top-0 h-full w-1 bg-yellow-400" />
                    )}
                </button>
                );
            })}
            </div>

            {/* ================= ABOUT – MOBILE ACCORDION ================= */}
            <div className="md:hidden space-y-3">
            {aboutPanels.map((panel) => {
                const isActive = activePanel === panel.id;

                return (
                <button
                    key={panel.id}
                    onClick={() => setActivePanel(panel.id)}
                    className={`
                    relative w-full text-left rounded-xl shadow transition-all
                    ${isActive ? 'bg-black text-white' : 'bg-white'}
                    `}
                >

                    <div className="p-4 space-y-3">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <div className="text-xl font-bold text-yellow-400">
                        {String(panel.id).padStart(2, '0')}
                        </div>
                        <h3
                        className={`
                            text-sm font-semibold uppercase
                            ${isActive ? 'text-yellow-400' : 'text-gray-900'}
                        `}
                        >
                        {panel.title}
                        </h3>
                    </div>

                    {/* Description */}
                    {isActive && (
                        <p className="text-sm leading-relaxed text-gray-200">
                        {panel.desc}
                        </p>
                    )}
                    </div>
                </button>
                );
            })}
            </div>

        </div>
        </section>

    {/* ================= SLOT GAMES COLLECTION ================= */}
    <section className="w-full py-4 md:py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4 md:space-y-6">

        {/* ===== Title ===== */}
        <div className="flex items-center justify-center gap-6 md:gap-10">
        <h2 className="text-2xl md:text-4xl text-center font-bold tracking-wide text-[#f5fa00] mb-2 md:mb-4 mt-8 md:mt-0">
            CQ9 Slot Games Collection
        </h2>
        </div>

        {/* ===== Desktop Grid ===== */}
        <div className="hidden md:grid grid-cols-5 gap-6">
        {cq9Images.map((src, index) => (
            <a
            key={index}
            href="/ewallet-casino-providers"
            className="
                group
                relative
                bg-white
                rounded-xl
                border
                border-gray-200
                overflow-hidden
                transition
                hover:-translate-y-1
                hover:border-yellow-200
                hover:shadow-[0_0_0_1px_rgba(250,204,21,0.6),0_15px_40px_rgba(250,204,21,0.35)]
            "
            >
            {/* Image */}
            <div className="aspect-[1/1] bg-[#3e1400]">
                <img
                src={src}
                alt="CQ9 Slot Game"
                className="w-full h-full object-cover"
                loading="lazy"
                />
            </div>

            {/* Hover Overlay */}
            <div
                className="
                absolute inset-0
                bg-black/60
                flex items-center justify-center
                opacity-0
                group-hover:opacity-100
                transition
                "
            >
                <span
                className="
                    px-6 py-2
                    border border-yellow-400
                    text-yellow-400
                    text-sm
                    font-bold
                    tracking-widest
                "
                >
                Try Your Luck
                </span>
            </div>
            </a>
        ))}
        </div>

        {/* ===== Mobile Grid (Minimalist) ===== */}
        <div className="md:hidden grid grid-cols-3 gap-3">
          {displayImages.map((src, index) => (
            <a
              key={index}
              href="/ewallet-casino-providers"
              className="
                bg-white
                rounded-lg
                border
                border-gray-200
                overflow-hidden
                active:scale-95
                transition
              "
            >
              <div className="aspect-[4/3] bg-[#3e1400]">
                <img
                  src={src}
                  alt="CQ9 Slot Game"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>

        {/* ===== Show More (Mobile Only) ===== */}
        {!showAllImages && cq9Images.length > MOBILE_IMAGE_INITIAL_COUNT && (
          <div className="mt-4 text-center md:hidden">
            <button
              onClick={() => setShowAllImages(true)}
              className="
                px-6 py-2
                rounded-full
                bg-[#f5fa00]
                text-sm font-semibold
                text-black
                hover:bg-white/20
                transition
                mt-4
              "
            >
              Show More Games
            </button>
          </div>
        )}



    </div>
    </section>

    </section>
  );
}
