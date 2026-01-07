import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const gameImages = Object.values(
  import.meta.glob('/src/assets/games/richGaming/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
) as string[];

const toSlug = (input: string) =>
  input
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* GAME DATA */
type Game = {
  id: number;
  name: string;
  thumbnail: string;
  demoUrl: string;
  description: string;
  type: string;
  volatility: string;
  multiplier: string;
  reelSize: string;
  paylines: string;
  rtp: string;
};

const games: Game[] = [
  {
    id: 1,
    name: 'BBQ Delight',
    thumbnail: '/other/richGaming/bbq-delight.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/3600',
    description:
      'Feast your eyes to BBQ Delight, with symbol-splitting feature for delicious rewards! Players may hunt for payout scatter while increasing the multiplier win up to x5 with continuous wins. Get in line to cook your hearts out!',
    type: 'Slots',
    volatility: 'Low',
    multiplier: 'X3,650',
    reelSize: '3x5',
    paylines: '15 Lines',
    rtp: '96.50%',
  },
  {
    id: 2,
    name: 'Bank Fever 3',
    thumbnail: '/other/richGaming/bank-fever-3.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/4500',
    description:
      'With the third installment of Bank Fever, the game features a unique symbol split mechanism. Players will have a chance to win big as each Symbol has a chance to split up to 3 times, coupled with the win multiplier, every spin will keep you wanting for more!',
    type: 'Slots',
    volatility: 'Medium',
    multiplier: 'X8,100',
    reelSize: '3x3',
    paylines: '5 Lines',
    rtp: '96.50%',
  },
  {
    id: 3,
    name: 'Bank Mania',
    thumbnail: '/other/richGaming/bank-mania.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/3900',
    description:
      'Race yourself to Bank Mania and cash out as a big winner! Bank Mania is a slick three-reel slot game that is designed to imitate the infamous US greenback that carries multipliers of up to 50x. Once the player presses the spin button, the middle reel may reveal either a Bank symbol, a Multiplier symbol ranging from x2 to x50, or a Free Spin symbol of up to 20 free Games.',
    type: 'Slots',
    volatility: 'Medium',
    multiplier: 'X500',
    reelSize: '1x3',
    paylines: '1 Line',
    rtp: '96.50%',
  },
  {
    id: 4,
    name: 'Bubble Bliss',
    thumbnail: '/other/richGaming/bubble-bliss.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/2200',
    description:
      'Bubble Bliss will blow you a mermaid kiss of fortune. The slot features Payout bubble and a Free game with sticky Wild. Many Riches await you under the sea!',
    type: 'Slots',
    volatility: 'Low',
    multiplier: 'X500',
    reelSize: '3x5',
    paylines: '50 Lines',
    rtp: '96.50%',
  },
  {
    id: 5,
    name: 'Burning Heroes',
    thumbnail: '/other/richGaming/burning-heroes.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/1102',
    description:
      'Joining the Burning heroes putting out a big fire for big rewards! Collect as many medals as possible and multiply your winnings up to x3!',
    type: 'Slots',
    volatility: 'Medium',
    multiplier: 'X1000',
    reelSize: '3x5',
    paylines: '25 Lines',
    rtp: '97.00%',
  },
  {
    id: 6,
    name: 'Buzz Bunny',
    thumbnail: '/other/richGaming/buzz-bunny.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/500',
    description:
      'Follow the adventures of Buzz Bunny, as he gets amazing wins when he explores the galaxy with booster rocket triggers, but be careful of the Blackhole!',
    type: 'Slots',
    volatility: 'Medium High',
    multiplier: 'X2,500',
    reelSize: '6x6',
    paylines: 'Connecting Cluster Coins',
    rtp: '96.50%',
  },
  {
    id: 7,
    name: 'Crystal Veins',
    thumbnail: '/other/richGaming/crystal-veins.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/2500',
    description:
      'Make your way to the mysterious Crystal Veinz and mine your way to riches as there are plenty of colorful diamonds the be found. Players might also stumble upon bomb multipliers up to x10 while digging around Crystal Veins!',
    type: 'Slots',
    volatility: 'Medium High',
    multiplier: 'X12000',
    reelSize: '3x4',
    paylines: 'Connecting Cluster',
    rtp: '96.50%',
  },
  {
    id: 8,
    name: 'Dance Dance Lion',
    thumbnail: '/other/richGaming/dance-dance-lion.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/2300',
    description:
      'Usher in the new year with Dance Dance Lion! Winnings ranging from x8 to x88 to be won!',
    type: 'Slots',
    volatility: 'Low',
    multiplier: 'X88',
    reelSize: '1x3',
    paylines: '1 Line',
    rtp: '96.50%',
  },
  {
    id: 9,
    name: 'Fa Fa Lion',
    thumbnail: '/other/richGaming/fafa-lion.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/2601',
    description:
      'Fafa lion is an easy to play game which feature win multiplier of up to 15x and combine that with the chance to hit full page symbols for a mega big win. Dont miss your chance to chase the lion!',
    type: 'Slots',
    volatility: 'Medium',
    multiplier: 'X1,500',
    reelSize: '3x3',
    paylines: '5 Lines',
    rtp: '96.50%',
  },
  {
    id: 10,
    name: 'Fortune Creatures',
    thumbnail: '/other/richGaming/fortune-creatures.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/1101',
    description:
      'Fortune Creatures is an Asian-style coin collecting Slot. Win an immense amount of wealth in free game when player hit multiple coins with x3 collect symbol. Player also have a chance to enter the jackpot bonus game and win up to 1000x total bet.',
    type: 'Slots',
    volatility: 'Medium',
    multiplier: 'X1,000',
    reelSize: '1x5',
    paylines: '25 Lines',
    rtp: '96.50%',
  },
  {
    id: 11,
    name: 'Hydra Attack',
    thumbnail: '/other/richGaming/hydra-attack.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/2100',
    description:
      'Those that dare to venture into the Hydra’s Lair will find it’s great riches. The Hydra’s 3 elemental breath will shower the reel with random Wilds! Not only that, players have a chance to trigger up to 20 Free Games to win a big bounty!',
    type: 'Slots',
    volatility: 'Low',
    multiplier: 'X200',
    reelSize: '3x5',
    paylines: '40 Lines',
    rtp: '96.50%',
  },
  {
    id: 12,
    name: 'Lady Hades',
    thumbnail: '/other/richGaming/lady-hades.png',
    demoUrl: 'https://cdn.dsgmetas.com/EasyGame987/E1/M1/0/100',
    description:
      'Welcome to the realm of the dead, Lady Hades” invites you for a chance at winning unlimited riches in the Free Game with crazy Stacked Wild.',
    type: 'Slots',
    volatility: 'Medium',
    multiplier: 'X500',
    reelSize: '3x5',
    paylines: '25 Lines',
    rtp: '96.50%',
  },
];

/* MAIN COMPONENT */
export default function RichGamingSource() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!slug) return;

    const matchedGame = games.find(
        (g) => toSlug(g.name) === slug
    );

    if (matchedGame) {
        setActiveGame(matchedGame);
    }
  }, [slug]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('game');

    if (!slug) return;

    const matchedGame = games.find(
        (g) => toSlug(g.name) === slug
    );

    if (matchedGame) {
        setActiveGame(matchedGame);
    }
  }, []);


  return (
    <section className="bg-white text-black">

      {/* HERO / BRAND INTRO */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <img
            src="/other/richGaming/rich-gaming-logo.png"
            alt="Rich Gaming"
            className="h-32 md:h-40 mb-6"
          />

          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-6">
            RICH GAMING FREE SPIN AUSTRALIA CASINO
          </h1>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            Thanks to an expert team with limitless energy and over 10 years of
            experience in iGaming, Rich Gaming produces games that perfectly
            balance visual appeal, mathematical design, and rich gameplay
            mechanics.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Rich Gaming focuses on player-centric innovation, building a
            portfolio of Provably Fair games with stable operation, exciting
            features, and long-term retention.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/other/richGaming/rich_gaming_about-img.png"
            alt="Rich Gaming Characters"
            className="max-h-[320px] md:max-h-[460px] w-auto"
          />
        </div>
      </div>

        {/* STATS + DESCRIPTION */}
        <section className="bg-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-0">

            {/* ===== TOP STATS ===== */}
            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-3 gap-10 text-center mb-16">
            <Stat value="50+" label="Highly Engaging Games" />
            <Stat value="100%" label="Gambling Fairness" />
            <Stat value="10+" label="Languages Supported" />
            </div>

            {/* MOBILE - CARD STYLE */}
            <div className="grid grid-cols-3 gap-3 md:hidden mb-12">
            <div className="bg-white rounded-xl shadow-md border border-yellow-300/40 px-3 py-5 text-center">
                <div className="text-3xl font-extrabold text-black mb-2">
                50+
                </div>
                <div className="text-xs font-semibold text-gray-800 leading-snug">
                Featured Games
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-yellow-300/40 px-3 py-5 text-center">
                <div className="text-3xl font-extrabold text-black mb-2">
                100%
                </div>
                <div className="text-xs font-semibold text-gray-800 leading-snug">
                Gambling Fairness
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-yellow-300/40 px-3 py-5 text-center">
                <div className="text-3xl font-extrabold text-black mb-2">
                10+
                </div>
                <div className="text-xs font-semibold text-gray-800 leading-snug">
                Languages Supported
                </div>
            </div>
            </div>


            {/* ===== CONTENT AREA ===== */}
            <div
            className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-10 md:gap-12
                items-center
            "
            >

            {/* CENTER IMAGE */}
            <div className="flex justify-center order-1 md:order-2">
                <img
                src="/other/richGaming/rich_gaming_about-dragonhead.png"
                alt="Rich Gaming Feature"
                className="w-40 md:w-56 drop-shadow-xl"
                />
            </div>

            {/* LEFT DESCRIPTION */}
            <div className="text-gray-800 text-sm md:text-base leading-relaxed order-2 md:order-1">
            <p className="mb-4">
                Our games are crafted with precise attention to every detail of the gameplay
                experience, maximizing players’ retention and casino profitability.
            </p>

            <p className="mb-4">
                Our game designers, producers, and mathematicians work closely to deliver
                high-bet engagement, attract VIP players, and maximize round counts —
                creating games that truly stick.
            </p>

            <p className="font-medium">
                Stable operation, rich atmosphere, exciting game features, and continuous innovation.
            </p>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="text-gray-800 text-sm md:text-base leading-relaxed order-3 md:order-3">
            <p className="mb-4">
                Our slot games are crafted by seasoned developers and artists.
                Installation-free by design, each title delivers a strong balance
                between excitement and gorgeous visuals.
            </p>

            <p>
                Our portfolio spans a wide variety of themes — from legendary folklore
                and popular works to trending hot model slots.
            </p>
            </div>

            </div>
        </div>
        </section>


        {/* DEMO PLAY */}
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-2 md:py-10 mb-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Demo Play: Try Your Luck
        </h2>

        {/* ===================== */}
        {/* STATE 1: NO GAME SELECTED */}
        {/* ===================== */}
        {!activeGame && (
            <>
            {/* TOP GAME SELECTOR (horizontal) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                {games.map((game) => (
                <button
                    key={game.id}
                    onClick={() => {
                    const slug = toSlug(game.name);
                    setActiveGame(game);
                    navigate(`/rich-gaming-ewallet-games/${slug}`);

                    const url = new URL(window.location.href);
                    url.searchParams.set('game', slug);
                    window.history.pushState({}, '', url.toString());
                    }}
                    className="rounded-xl border border-gray-200 hover:border-yellow-400 transition"
                >
                    <img
                    src={game.thumbnail}
                    alt={game.name}
                    className="rounded-lg"
                    />
                </button>
                ))}
            </div>

            {/* EMPTY / INTRO STATE */}
            <div className="flex items-center justify-center h-[360px] rounded-2xl border border-dashed text-gray-400">
                <div className="text-center">
                <p className="font-semibold mb-2">
                    Select a game to start demo
                </p>
                <p className="text-sm">
                    Try any game instantly — no login required
                </p>
                </div>
            </div>
            </>
        )}

        {/* ===================== */}
        {/* STATE 2: GAME SELECTED */}
        {/* ===================== */}
        {activeGame && (
            <div className="grid lg:grid-cols-[260px_1fr] gap-8">

            {/* LEFT: GAME SELECTOR (desktop scrollable) */}
            <div
            className="
                md:border-2 lg:border-yellow-400
                md:rounded-2xl
                md:p-3
                md:bg-yellow-50/40
                md:max-h-[555px]
                md:overflow-y-auto
                light-scrollbar
            "
            >
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
                {games.map((game) => (
                <button
                    key={game.id}
                    onClick={() => {
                    const slug = toSlug(game.name);
                    setActiveGame(game);
                    navigate(`/rich-gaming-ewallet-games/${slug}`);

                    const url = new URL(window.location.href);
                    url.searchParams.set('game', slug);
                    window.history.pushState({}, '', url.toString());
                    }}
                    className={`
                    rounded-lg border transition bg-white
                    ${activeGame.id === game.id
                        ? 'border-yellow-500 shadow-md'
                        : 'border-gray-200 hover:border-yellow-400'}
                    `}
                >
                    <img
                    src={game.thumbnail}
                    alt={game.name}
                    className="rounded-md"
                    />
                </button>
                ))}
            </div>
            </div>


            {/* RIGHT: IFRAME + INFO */}
            <div className="space-y-6">
                {/* IFRAME */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden border">
                <iframe
                    src={activeGame.demoUrl}
                    title={activeGame.name}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                />
                </div>

                {/* GAME INFO */}
                <div className="bg-[#FFF8D6] rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-2">
                    {activeGame.name}
                </h3>

                <p className="text-gray-700 mb-6 text-sm md:text-base">
                    {activeGame.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base md:text-lg">
                    <Info label="Game Type" value={activeGame.type} />
                    <Info label="Volatility" value={activeGame.volatility} />
                    <Info label="Multiplier" value={activeGame.multiplier} />
                    <Info label="Reel Size" value={activeGame.reelSize} />
                    <Info label="Paylines" value={activeGame.paylines} />
                    <Info label="RTP" value={activeGame.rtp} />
                </div>
                </div>
            </div>

            </div>
        )}
        </div>

        {/* WHAT YOU GET */}
        <section
        className="relative py-16 md:py-20 bg-cover bg-center text-white"
        style={{
            backgroundImage: "url('/other/richGaming/imgi_28_rich_gaming_about-wyg_bg.png')",
        }}
        >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-0">
            <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-16">
            What You Ger From RichGaming
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-10">

            {/* LEFT FEATURES */}
            <div className="space-y-10 text-center md:text-left">
                <Feature
                title="EASY API INTEGRATION"
                desc="All our gaming content can be integrated seamlessly into your platform to enrich your game library."
                />

                <Feature
                title="JUICY THEMES"
                desc="Explore creative themes and eye-catching designs that bring fresh excitement to every game."
                />

                <Feature
                title="FAIR BUSINESS"
                desc="We believe in fair cooperation and long-term partnerships that benefit both sides."
                />
            </div>

            {/* CENTER IMAGE */}
            <div className="flex justify-center">
                <img
                src="/other/richGaming/rich_gaming_about-caishen.png"
                alt="Rich Gaming Character"
                className="w-60 md:w-96 drop-shadow-2xl"
                />
            </div>

            {/* RIGHT FEATURES */}
            <div className="space-y-10 text-center md:text-right">
                <Feature
                title="GREAT SERVICE"
                desc="We provide responsive and reliable support whenever you need assistance."
                />

                <Feature
                title="MULTI-LANGUAGE"
                desc="Our games support multiple languages and currencies for global players."
                />
            </div>

            </div>
        </div>
        </section>

        {/* GAME LIBRARY */}
        <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-0">

            {/* TITLE */}
            <div className="text-center mb-6 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-4">
                RichGaming Game Collection
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
                Explore 100+ high-quality slot games ready for integration
            </p>
            </div>

            {/* GRID */}
            <div
            className="
                grid
                grid-cols-3
                md:grid-cols-4
                gap-4 md:gap-6
            "
            >
            {gameImages.map((img, index) => (
                <GameCard key={index} img={img} />
            ))}
            </div>
        </div>
        </section>


    </section>
  );
}

/* SMALL COMPONENTS */
function Stat({ value, label }: { value: string; label: string }) {
  const numericValue = parseInt(value.replace('+', ''));
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      <div className="text-5xl font-extrabold text-black mb-2">
        {inView ? (
          <CountUp end={numericValue} duration={2} />
        ) : (
          0
        )}
        {value.includes('+') && '+'}
        {value.includes('%') && '%'}
      </div>
      <div className="text-lg font-semibold">
        {label}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-yellow-200">
      <div className="text-xs text-gray-500 mb-1">
        {label}
      </div>
      <div className="font-semibold">
        {value}
      </div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-xl md:text-3xl text-yellow-400 font-bold mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-lg leading-relaxed text-white/90">
        {desc}
      </p>
    </div>
  );
}

function GameCard({ img }: { img: string }) {
  const navigate = useNavigate();

  return (
    <div
      className="
        group
        relative
        rounded-xl
        overflow-hidden
        border
        border-gray-200
        bg-white
        cursor-pointer
      "
      onClick={() => navigate('/ewallet-casino-providers')}
    >
      {/* GAME IMAGE */}
      <img
        src={img}
        alt="Game Thumbnail"
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-300
          md:group-hover:scale-110
        "
      />

      {/* DESKTOP HOVER OVERLAY */}
      <div
        className="
          hidden md:flex
          absolute inset-0
          bg-black/60
          opacity-0
          group-hover:opacity-100
          transition
          items-center
          justify-center
        "
      >
        <button
          className="
            px-6 py-2
            bg-yellow-400
            text-black
            font-bold
            rounded-full
            shadow-lg
            hover:bg-yellow-300
            transition
          "
        >
          Play Now
        </button>
      </div>
    </div>
  );
}
