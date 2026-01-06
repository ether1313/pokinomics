import { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Users,
  ShieldCheck,
  Headset,
  Smartphone,
  Globe,
  Rocket,
  Languages,
  Coins,
  RefreshCcw,
} from "lucide-react";


type PegasusGame = {
  id: number;
  title: string;
  image: string;
  description: string;
  maxWin: string;
};

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


const PEGASUS_LOBBY_URL =
  "https://demo.888star.xyz/";
  

const pegasusDemoGames: PegasusGame[] = [
  {
    id: 1,
    title: "Pirate Treasure",
    image: "/other/pegasus/pirate-treasure.png",
    description:
      "Pirate Treasure sets off on a treasure hunt! 3X5 reels, 25 lines, double the Treasure WILD, SCATTER bursts are super exciting! FREE GAME Pirates hook up the Treasure WILD in every round, burst gameplay, refreshing connections, and endless treasures!",
    maxWin: "x3262",
  },
  {
    id: 2,
    title: "Lucky Witch",
    image: "/other/pegasus/lucky-witch.png",
    description:
      "Hop on a broomstick, cast some spells; it's a magical journey filled with luck. In the Lucky Witch game, magic is right before your eyes. Unleash the Lucky Magic to transform symbols into magical rewards. Trigger Fusion Magic in the Bonus Game to combine crystal balls and double your scores. Join Lucky Witch and witness miracles and magic in action!",
    maxWin: "x2175",
  },
  {
    id: 3,
    title: "Fortune Panda",
    image: "/other/pegasus/fortune-panda.png",
    description:
      "Fortune Panda comes with gold! 4X6 reels, 4096 ways to win, open the Bamboo Mysterious Symbol, winning continuously! FREE GAME Panda rolls up ingots! The Ingots WILD extend, and multiply according to the number, let Fortune Panda let You make a fortune!",
    maxWin: "x1824",
  },
  {
    id: 4,
    title: "Mystery Show",
    image: "/other/pegasus/mystery-show.png",
    description:
      "The Mystery Show is grandly launched! The magician shows off his tricks, and the hat changes Symbol to connect a large number of connections! The golden hat gives out a grand prize of multiple stacks with gold coins and copper coins! FREE GAME collects SCATTER, the small prize disappears, and the golden hat multiplies again! The grand prize is exciting!",
    maxWin: "x2328",
  },
  {
    id: 5,
    title: "Foxy Heist",
    image: "/other/pegasus/foxy-heist.png",
    description:
      "WILD appears randomly in each round, getting rich overnight is no longer a dream! FREE GAME Foxy Thief steals diamonds, collects Diamond Symbol, expands WILD, and aims to win big prizes!",
    maxWin: "x1962",
  },
  {
    id: 6,
    title: "Fortune Boy",
    image: "/other/pegasus/fortune-boy.png",
    description:
      "Fortune Boy brings blessings! Two bonus games bring double blessings! FREE GAME collects multipliers too Get multipliers X bets by wins, BONUS GAME collects multipliers and earn Total Multipliers X bets, and beats the Drum Symbol to get extra games! Two ways to play, multiple prizes! Fortune Boy brings you good luck!",
    maxWin: "x4384",
  },
  {
    id: 7,
    title: "Gold Toad",
    image: "/other/pegasus/gold-toad.png",
    description:
      "Golden Toad is a one-sided prize game with a 4X6 reels. It is another masterpiece of super explosive combos!With 4096 ways, plus free games and multipliers that double and double, Golden Toad offers you a lot of prizes, making it a great time to make money!",
    maxWin: "x5000",
  },
  {
    id: 8,
    title: "Goblin Gold",
    image: "/other/pegasus/goblin-gold.png",
    description:
      "Goblin's Gold - Join the thrilling mining adventure with gold, explosives, and big explosions! In the world of (Goblin's Gold), you'll find a 3x5 reels with 50 paylines as your digging tools. As you explore further and reach the Free Games, you'll experience the charm of Sticky WILD and the craziness of a full reel of WILD with an 8x multiplier! If you love Sticky WILD, you'll definitely love (Goblin's Gold).",
    maxWin: "x1300",
  },
  {
    id: 9,
    title: "Fortune Lions 2",
    image: "/other/pegasus/fortune-lion-2.png",
    description:
      "The twin lions return with great fortune! Get 3 BONUS symbols as a free gift for an easy chance to win in Bingo. Gather coins to play, and when a Bingo line passes through a BONUS, spin the Bingo slot for a chance to win up to 1000x your prize! In the FREE GAME, any winning line with a WILD will be multiplied by the WILD multiplier!",
    maxWin: "x2060",
  },
  {
    id: 10,
    title: "Lion Legend",
    image: "/other/pegasus/lion-legend.png",
    description:
      "Lion Legend is a 3X5 reels, 243Ways game,each round of betting can activate up to three columns of gold ingots depending on the level, triggering the reappearance of the Lion WILD. Let your winning points be multiplied to earn more!",
    maxWin: "x11518",
  },
  {
    id: 11,
    title: "Pirate Bar",
    image: "/other/pegasus/pirate-bar.png",
    description:
      "Kick open the wooden door of the bar and break into the (Pirate Bar0 to get the hidden treasures! Special Swirly Spin and prize matching rules, fight on the chaotic 5X5 reels, eliminate consecutive explosions to win Gold Coins, and accumulate multiples of Gold Coins to increase the value of the treasures! Fight for the only Treasure Box in the bar, which contains key clues to the FREE GAME treasure house! Enter FREE GAME, accumulate Gold Coin multipliers that are not reset, and make your jackpots endless!",
    maxWin: "x13253",
  },
  {
    id: 12,
    title: "Penguin Expedition",
    image: "/other/pegasus/penguin-expedition.png",
    description:
      "The super cute (Penguin Expedition) is here! Set sail to the distant polar regions to find buried treasures. The tumbling gameplay is to continuously blast the broken ice, and a large number of gold coins WILD fall from the sky and tumbling continuously! FREE GAME Arrive at the buried treasure place, and the gold coins WILD are crazy. Emerge, and the winning points will be doubled again! Discover treasures and make a fortune with the Penguin Expedition!",
    maxWin: "x1142",
  },
];

const pegasusFeatures = [
  {
    icon: Users,
    title: "Best Game Development Team In Asia",
    desc: "Has the most experienced technical and art team, specializing in internet and numerical engineering, providing the best gaming experience.",
  },
  {
    icon: ShieldCheck,
    title: "Stable And Safety Technology",
    desc: "PGS provides the most stable and secure game content to prevent losses caused by attacks or disconnections.",
  },
  {
    icon: Headset,
    title: "All Around the Clock Customer Service",
    desc: "Our online customer service team is available 24/7 to resolve any issues promptly.",
  },
  {
    icon: Smartphone,
    title: "Multi-Terminal Platform, Complete Support",
    desc: "Fully supports computers, mobile devices, browsers, and operating systems to meet global market needs.",
  },
  {
    icon: Globe,
    title: "International Platform, Multilingual Play",
    desc: "Multilingual support with regional network optimization for smooth global operations.",
  },
  {
    icon: Rocket,
    title: "Expansive Game Selection",
    desc: "Explore a growing collection of 52 games with regular new releases.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    desc: "Enjoy seamless gaming in up to 12 supported languages worldwide.",
  },
  {
    icon: Coins,
    title: "Global Currency Compatibility",
    desc: "Play and transact effortlessly using over 60 supported currencies.",
  },
  {
    icon: RefreshCcw,
    title: "Frequent Game Updates",
    desc: "Discover fresh new games every two weeks to keep gameplay exciting.",
  },
];


export default function PegasusSource() {
  const games = useMemo(() => pegasusDemoGames, []);
  const [activeGame, setActiveGame] = useState<PegasusGame | null>(null);

  const navigate = useNavigate();
  const { slug } = useParams();

  const [isDemoStarted, setIsDemoStarted] = useState(false);


  useEffect(() => {
    if (!slug) return;

    const matched = games.find(
        (game) => toSlug(game.title) === slug
    );

    if (matched) {
        setActiveGame(matched);
    } else {
        navigate("/pegasus-games", { replace: true });
    }
  }, [slug, games, navigate]);

  const pegasusGameImages: string[] = Object.values(
    import.meta.glob(
      "@/assets/games/pegasus/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        query: "?url",
        import: "default",
      }
    )
  );


  return (
    <div className="w-full text-white">

      {/* ================= HERO VIDEO ================= */}
      <section className="relative w-full h-[28vh] md:h-[100vh] overflow-hidden mt-16 md:mt-14">
        <video
          src="/other/pegasus/collection.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
        />
      </section>

      {/* ================= LOGO ================= */}
      <section className="max-w-5xl mx-auto px-6 py-6 md:py-14 text-center">
        <img
          src="/other/pegasus/pegasus-logo.png"
          alt="Pegasus Gaming"
          className="mx-auto h-14 md:h-20 mb-5 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        />

        {/* H1 TITLE */}
        <h1 className="text-xl md:text-4xl font-extrabold text-white mt-10 mb-6">
          Pegasus Australian Casino Slots Gaming
        </h1>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
          Welcome to Pegasus, where innovation meets excitement in the world of slots gaming. With our expertise 
          and dedication to delivering the best gaming experience, we’ve crafted a platform that redefines what 
          it means to play slots. World-class experts in slot machines, chess and cards, leading international 
          popular game manufacturers.
        </p>
      </section>


      {/* ================= DEMO ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">

        {/* 外层玻璃卡片（高级感核心） */}
        <div
          className="
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            p-5 md:p-8
          "
        >
          <h2 className="text-lg md:text-3xl font-bold mb-6">
            Pegasus Slot Game Demo
          </h2>

          <div className="grid md:grid-cols-[3fr_1.2fr] gap-6">

            {/* ===== LOBBY PLAYER ===== */}
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 hidden md:block">

                {/* DEMO 标签 */}
                <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/70 border border-yellow-400/40 text-yellow-300">
                    DEMO LOBBY
                </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 hidden md:block">
                <div className="relative aspect-[16/9] flex items-center justify-center">

                    {!isDemoStarted ? (
                    /* ===== Start Demo Button ===== */
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
                        <p className="text-sm text-gray-300 mb-4">
                        Click to start demo play
                        </p>

                        <button
                        onClick={() => setIsDemoStarted(true)}
                        className="
                            px-6 py-3
                            rounded-xl
                            bg-gradient-to-r from-yellow-400 to-yellow-300
                            text-black
                            font-semibold
                            shadow-lg
                            hover:scale-105
                            active:scale-95
                            transition
                        "
                        >
                        ▶ Start Demo Play
                        </button>

                        <p className="text-xs text-gray-500 mt-3">
                        Demo will load inside this page
                        </p>
                    </div>
                    ) : (
                    /* ===== IFRAME (Loaded only after click) ===== */
                    <iframe
                        src={PEGASUS_LOBBY_URL}
                        title="Pegasus Demo Lobby"
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen"
                    />
                    )}
                </div>
                </div>
            </div>

            {/* ===== Mobile: Play Now CTA ===== */}
            <div className="block md:hidden">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-6 text-center space-y-4">

                <p className="text-sm text-gray-300 leading-relaxed">
                    For the best mobile experience, demo play will open in a new tab.
                </p>

                <a
                    href={PEGASUS_LOBBY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex items-center justify-center
                    w-full
                    rounded-xl
                    bg-gradient-to-r from-yellow-400 to-yellow-300
                    text-black
                    font-semibold
                    py-3
                    shadow-lg
                    active:scale-95
                    transition
                    "
                >
                    ▶ Play Demo Now
                </a>

                <p className="text-xs text-gray-500">
                    You will be redirected to the demo lobby
                </p>
                </div>
            </div>

              {/* ===== INFO ===== */}
              <div className="mt-5 space-y-3">

                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Game Info
                </p>

                {activeGame ? (
                <>
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                    {activeGame.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl">
                    {activeGame.description}
                    </p>

                    <div className="flex items-center gap-3">
                    <span className="text-sm md:text-base text-[#f00]">
                        Maximum Win
                    </span>
                    <span className="text-lg font-bold text-emerald-400">
                        {activeGame.maxWin}
                    </span>
                    </div>
                </>
                ) : (
                <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-6 text-sm text-gray-400">
                    Select a game from the list to view details and start demo play.
                </div>
                )}
              </div>
            </div>

            <div>
                {/* ===== GAME LIST HEADER ===== */}
                <div className="mb-4 px-1">
                <h3 className="text-lg md:text-xl font-bold tracking-wide mb-2">
                    Hot Games
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    Explore the latest popular games and view detailed game information.
                </p>
                </div>


                {/* ===== GAME LIST ===== */}
                <div className="space-y-1 max-h-[520px] overflow-y-auto pr-1 dark-scrollbar">
                    {games.map((game) => {
                        const isActive = activeGame?.id === game.id;

                        return (
                        <button
                            key={game.id}
                            onClick={() => {
                            setActiveGame(game);

                            navigate(`/pegasus-ewallet-games/${toSlug(game.title)}`, {
                                replace: true,
                            });
                            }}

                            className={`
                            w-full flex items-center gap-4 p-1 rounded-xl
                            transition
                            ${
                                isActive
                                ? `
                                    bg-emerald-500/15
                                    border border-emerald-400/40
                                    shadow-[0_0_25px_rgba(16,185,129,0.25)]
                                `
                                : `
                                    bg-white/0
                                    hover:bg-white/10
                                    hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
                                `
                            }
                            `}
                        >
                            <img
                            src={game.image}
                            alt={game.title}
                            className={`
                                w-20 aspect-[1/1] object-cover rounded-lg border
                                ${
                                isActive
                                    ? "border-emerald-400/60"
                                    : "border-white/10"
                                }
                            `}
                            />

                            <div className="text-left">
                            <p
                                className={`
                                text-sm font-semibold
                                ${isActive ? "text-emerald-300" : ""}
                                `}
                            >
                                {game.title}
                            </p>

                            <p
                                className={`
                                text-xs
                                ${isActive ? "text-emerald-200/80" : "text-gray-400"}
                                `}
                            >
                                Max Win {game.maxWin}
                            </p>
                            </div>
                        </button>
                        );
                    })}
                    </div>
                </div>
            </div>
        </div>

        {/* ================= PEGASUS FEATURES PROVIDED ================= */}
        <section className="mt-20">
            
        <div className="flex items-center justify-center gap-6 mb-10 mt-12">
          <span className="h-[2px] w-10 md:w-16 bg-white" />
          <h3 className="text-xl md:text-4xl text-center font-bold tracking-wide">
            Pegasus Features
          </h3>
          <span className="h-[2px] w-10 md:w-16 bg-white" />
        </div>

        {/* ===== Desktop: Grid Layout ===== */}
        <div
            className="
            hidden md:grid
            grid-cols-2 lg:grid-cols-3
            gap-6
            "
        >
            {pegasusFeatures.map((feature, idx) => {
            const Icon = feature.icon;

            return (
                <div
                key={idx}
                className="
                    rounded-2xl
                    bg-white/5
                    backdrop-blur
                    border border-white/10
                    p-6
                    transition
                    hover:bg-white/10
                    hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]
                "
                >
                {/* Icon */}
                <div className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-emerald-500/10
                    mb-4
                ">
                    <Icon className="w-6 h-6 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.desc}
                </p>
                </div>
            );
            })}
        </div>

        {/* ===== Mobile: Capability Timeline ===== */}
        <div className="md:hidden mt-8 space-y-6">
        {pegasusFeatures.map((feature, idx) => {
            const Icon = feature.icon;

            return (
            <div key={idx} className="relative pl-10">
                {/* Vertical line */}
                <span className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

                {/* Dot / Icon */}
                <div
                className="
                    absolute left-0 top-1
                    w-8 h-8
                    rounded-full
                    bg-emerald-500/15
                    flex items-center justify-center
                "
                >
                <Icon className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold mb-1">
                {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                {feature.desc}
                </p>
            </div>
            );
        })}
        </div>
        </section>

        {/* ================= PEGASUS GAME WALL ================= */}
        <section className="mt-24">

          {/* ===== Section Title ===== */}
          <div className="text-center mb-8 md:mb-12 px-4">
            <h3 className="text-2xl md:text-4xl font-bold tracking-wide mb-3">
              Pegasus Game Collection
            </h3>
            <p className="text-sm md:text-base text-gray-400 max-w-7xl mx-auto">
              Explore a massive collection of Pegasus slot games.  
              Discover popular titles and start your journey instantly.
            </p>
          </div>

          {/* ===== Game Grid ===== */}
          <div
            className="
              max-w-7xl mx-auto px-4
              grid grid-cols-3 md:grid-cols-6
              gap-4 md:gap-6
            "
          >
            {pegasusGameImages.map((img, idx) => (
              <a
                key={idx}
                href="/ewallet-casino-providers"
                className="
                  group
                  relative
                  rounded-2xl
                  overflow-hidden
                  bg-white/5
                  border border-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                  transition-all duration-300
                  md:hover:-translate-y-1
                md:hover:border-white/40
                  md:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_45px_rgba(255,255,255,0.25)]
                "
              >
                {/* Image */}
                <img
                  src={img}
                  alt="Pegasus Game"
                  loading="lazy"
                  className="
                    w-full
                    aspect-[3/4]
                    object-contain
                    transition-transform
                    duration-500
                    md:group-hover:scale-110
                  "
                />

                {/* ===== Desktop Hover Overlay ===== */}
                <div
                  className="
                    hidden md:flex
                    absolute inset-0
                    items-center justify-center
                    bg-black/60
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <span
                    className="
                      px-5 py-2
                      rounded-xl
                      bg-gradient-to-r from-gray-300 to-gray-100
                      text-black
                      font-semibold
                      text-sm
                      shadow-lg
                    "
                  >
                    ▶ Free Spin
                  </span>
                </div>

                {/* ===== Mobile CTA Bar ===== */}
                <div
                  className="
                    md:hidden
                    absolute bottom-0 left-0 right-0
                    bg-[#ffffffd5]
                    text-center
                    py-1
                    text-xs
                    font-semibold
                    text-black
                  "
                >
                  Free Spin
                </div>
              </a>
            ))}
          </div>
        </section>



      </section>
    </div>
  );
}
