import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const toSlug = (input: string) =>
  input
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const otherGames = [
    {
      id: 101,
      title: "Coin Volcano 2",
      image: "/games/bng/coin_volcano_2.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=0699d4f6-df18-11f0-899c-2ec3350c7994&game=846&lang=en&sound=1&platform=desktop&ts=1766395473&title=Coin+Volcano+2%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fcoin_volcano_2%2F&cashier_url=",
      description:'Filling the middle row with symbols triggers three respins in the BONUS GAME. If a STICKY COIN lands, it stays on the reels until the bonus is triggered. During the respins, gamers can land Coin BONUS SYMBOLS with various values, which may include fixed MINI, MINOR and MAJOR JACKPOTS. Other special symbols add to the fun: the MYSTERY JACKPOT SYMBOL can reveal a JACKPOT prize, the MYSTERY SYMBOL may transform into a BONUS or JACKPOT SYMBOL, and the COLLECT SYMBOL gathers all current symbol values. Filling all reel positions may award the GRAND JACKPOT. At any moment, the VOLCANO MULTIPLIER FEATURE can erupt, dropping up to nine MULTIPLIERS onto the reels. If several MULTIPLIERS land on the same spot, they combine their values. For an extra molten twist, the ULTRA BONUS GAME can trigger at random with guaranteed VOLCANO MULTIPLIERS. Additionally, in the BOOST BONUS GAME, VOLCANO MULTIPLIERS are not only guaranteed but also start at an increased x5 value. This mode can be accessed only via the BUY BONUS option, available in select regions. With the game’s vivid graphics, energetic play and great reward potential, Coin Volcano 2 rumbles with gaming fun!',
    },
    {
      id: 102,
      title: "Maya Lock",
      image: "/games/bng/maya_lock.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=b0d1fcec-df17-11f0-899c-2ec3350c7994&game=812&lang=en&sound=1&platform=desktop&ts=1766395329&title=Maya+Lock%3A+Break+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fmaya_lock%2F&cashier_url=",
      description:'BONUS SYMBOLS with various values appear locked behind chains. The Mayan King — a vivid WILD and COLLECT SYMBOL — can set them free. When he lands in the center of reel 3, he awards the values of all visible BONUS SYMBOLS, which may contain fixed MINI, MINOR, MAJOR or GRAND JACKPOT prizes. The action deepens in FREE SPINS, triggered by filling 1 or 2 Piggy Bank Meters. Here, the King becomes sticky, staying in place for more chances to unlock prizes and trigger extra spins. Multiple random modifiers can trigger at any time, which adds even more appeal. On any spin, the BONUS REWIND feature can place up to 5 JACKPOT SYMBOLS on the board. The reels can also suddenly ignite, filling the screen with up to 14 BONUS SYMBOLS. Occasionally, the King may scatter extra JACKPOT SYMBOLS across the board. Then, in the main game, after the King tosses coins into the Piggy Banks, the BONUS RICOCHET can trigger, bouncing the coins back onto the reels and placing at least 4 BONUS SYMBOLS in random cells. Plus, the WILD REWIND feature, also in the main game, guarantees the King’s appearance. With its lively pace, vivid visuals and feature-rich gameplay, Maya Lock offers an immersive jungle experience.',
    },
    {
      id: 103,
      title: "4 Pots Riches",
      image: "/games/bng/4_pots_riches.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=b26aa4fa-df17-11f0-899c-2ec3350c7994&game=811&lang=en&sound=1&platform=desktop&ts=1766395331&title=4+Pots+Riches%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2F4_pots_riches%2F&cashier_url=",
      description:'4 Pots Riches: Hold and Win is a new game in BNG’s pot and coins series. The Leprechaun is ready to present the fourth power of the clover! The game is set on a 3x5 grid with 25 paylines. Main Game features Leprechaun as Wild symbol that help form winning combinations. Any violet, blue or red Clover Bonus symbol may trigger Bonus Game with a corresponding Pot feature – Multi, Collect, Mystery or their combination. • Violet Multi Pot gives three multipliers (x2, x3, x5) to enhance payouts. • Blue Collect Pot will gather all visible symbol values, summing them up – to add to its value. • Red Mystery Pot will award Mini, Minor, or Major Jackpots, or random high-value wins. During the Bonus Game the Golden Pot awaits to surprise with additional Clover Bonus symbols to enhance players experience with more features. Do not forget about in-game Jackpots and a chance to win Grand Jackpot in all Bonus modes. And the cherry on top – Super Bonus Game with a bigger grid (5x5) offers even more space for Bonus symbols. It includes the same Pot Features and the exclusive opportunity to win the Super Jackpot of 10,000x by filling all 25 cells. Filling a 5x3 section of the grid can also grant the Grand Jackpot of 3,000x. 4 Pots Riches blends engaging gameplay and generous rewards, delivering an exciting Leprechaun-themed adventure packed with surprises.',
    },
    {
      id: 104,
      title: "Super Pink Joker",
      image: "/games/bng/super_pink_joker.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=b511b0c2-df17-11f0-899c-2ec3350c7994&game=774&lang=en&sound=1&platform=desktop&ts=1766395336&title=Super+Pink+Joker%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fsuper_pink_joker%2F&cashier_url=",
      description:'Super Pink Joker: Hold and Win by BNG is a vibrant 5x3 slot with 5 paylines, set in a dazzling pink world full of energy. With cartoon-style fruits, electrified coins, and a fresh, charismatic Joker, this game brings a bold twist to the Hold and Win mechanic. Main Game is led by Joker as a Wild, helping form winning combinations. Land 6+ Bonus and electrifying Collect symbols to enter the Bonus Game, where Collect gather all coin values, and Jokers act as Multipliers — boosting every symbol that follows in the same cell. The Pile of Gold feature can trigger extra Bonus Games when Bonus or Collect symbols land, adding more excitement to every spin. Fill all positions with Bonus symbols to claim the Grand Jackpot. Bright, fun, and full of energy, Super Pink Joker: Hold and Win is a thrilling blend of charm and features.',
    },
    {
      id: 105,
      title: "Thunder Coins XXL",
      image: "/games/bng/thunder_coins_xxl.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=b6239d9a-df17-11f0-899c-2ec3350c7994&game=813&lang=en&sound=1&platform=desktop&ts=1766395338&title=Thunder+Coins+XXL%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fthunder_coins_xxl%2F&cashier_url=",
      description:'Thunder Coins XXL: Hold and Win immerses players in a high-voltage slot experience, where a deep electric blue background radiates energy, ready to spark with bursts of lightnings. The navy reels glow with a fusion of classic fruit slot aesthetics and modern electrifying elements, creating an atmosphere of thrilling anticipation. Symbols include shiny golden bells, stylized ripe fruits, and fiery red sevens, all enhanced with a polished, neon-like glow. The golden coins serve as Bonus symbols, while the most powerful Thunder Bonus symbol, imprinted with a lightning bolt, ignites the Thunder Coin Feature, collecting all visible Bonus and Jackpot values to supercharge the winnings. Above the reels, a shimmering pile of gold holds the promise of unexpected riches, gathering Bonus symbols with a chance to trigger an additional Bonus game. As Thunder Bonus symbols land, light indicators flash at the bottom of each reel, marking the arrival of electrifying rewards. The sound design masterfully shifts between a tense, suspenseful ambiance during the main game and an explosive rock guitar solo when the Bonus Game ignites, heightening the adrenaline rush. Feel the power of the storm with Thunder Coins XXL: Hold and Win!',
    },
    {
      id: 106,
      title: "Coin Strike 2",
      image: "/games/bng/coin_strike_2.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=b75fb644-df17-11f0-899c-2ec3350c7994&game=809&lang=en&sound=1&platform=desktop&ts=1766395340&title=Coin+Strike+2%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fcoin_strike_2%2F&cashier_url=",
      description:'“Coin Strike 2: Hold and Win” by BNG takes the thrilling experience of the original to new heights with a 3x4 grid, 8 pay lines, and even more electrifying features. Classic fruits return alongside Bonus Coins, Strike Coins, and the powerful Super Strike Coins — all backed by 4 in-game Jackpots and the ever-popular Hold and Win Bonus Game. The Collect Feature activates when Strike or Super Strike Coins land with Bonus Coins, gathering their values and boosting wins. Super Strike Coins add an extra twist in the Bonus Game by collecting Strike Coin values on the same spin. Super Strike Coins can additionally trigger the Strike Boost Feature — available in both game modes — randomly awarding one of three exciting extra rewards: random multipliers, Jackpots, or additional Bonus Coins. During the Main Game, landing Bonus Coins may activate the Pile of Gold Feature, instantly dropping enough special coins to trigger the Bonus Game. Packed with dynamic mechanics and thrilling surprises, “Coin Strike 2” is a supercharged sequel that delivers nonstop coin-collecting action.',
    },
    {
      id: 107,
      title: "Coin Express",
      image: "/games/bng/coin_express.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=e83542e6-e21b-11f0-899c-2ec3350c7994&game=460&lang=en&sound=1&platform=desktop&ts=1766726993&title=Coin+Express%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fcoin_express%2F&cashier_url=",
      description:'Sparkling Gold Coins take centre stage on the reels, acting as BONUS SYMBOLS. Landing six of these triggers three respins for the HOLD & WIN BONUS, where only BONUS SYMBOLS (with random values) and blanks can appear. Coins that trigger the bonus remain fixed while every newly triggered Coin resets the respin count and maintains its position throughout the round. The bonus action picks up steam with the opportunity to land special BONUS SYMBOLS with fixed MINI, MINOR and MAJOR values. Players should also watch out for the COLLECT SYMBOL, which may appear at any time to gather all visible values, including JACKPOT amounts. Filling the entire screen with symbols could potentially lead to the GRAND JACKPOT prize of x5,000 the bet. And there’s more! The game provides an additional way to unlock the HOLD & WIN BONUS — by filling the shiny Coin Metre using BONUS SYMBOLS. Blending the timeless charm of fruit slots with the thrill of an immersive train adventure and dynamic bonus play, Coin Express: Hold and Win transforms a classic game into a first-class slot ride filled with excitement.',
    },
    {
      id: 108,
      title: "Super China Pots",
      image: "/games/bng/super_china_pots.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=12d0897a-e21c-11f0-899c-2ec3350c7994&game=768&lang=en&sound=1&platform=desktop&ts=1766727065&title=Super+China+Pots%3A+Hold+and+Win&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fsuper_china_pots%2F&cashier_url=",
      description:'Filling the Green, Red and Purple Pot Metres with their corresponding Coin BONUS SYMBOLS activates the BONUS GAME. This round launches a series of respins, where players have chances to land fixed MINI, MINOR or MAJOR JACKPOT SYMBOLS. Filling all spots on the bonus screen may also award the GRAND JACKPOT of x2,000 the bet. Once triggered, the Metres unlock their unique FEATURES to boost the bonus potential — each Metre is tied to one specific feature. BOOST increases symbol values, DOUBLE adds a second board for a chance at a doubled GRAND JACKPOT, and MULTI applies a MULTIPLIER to random cells. All three FEATURES can trigger simultaneously, enhancing gameplay possibilities when their powers are combined. And the cherry on top? The fourth Metre, shown as the mighty White Pot, can unlock the SUPER BONUS GAME — an enhanced version of the BONUS GAME with higher value symbols and up to three active FEATURES. Players can buy access to the BONUS GAME or SUPER BONUS, with options to activate a random number of FEATURES or all three together. With stunning looks and dynamic features that work together in exciting ways, the game serves a whole pot of immersive play!',
    },
    {
      id: 109,
      title: "Pig Up",
      image: "/games/bng/pig_up.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=eb79b2f0-e6d2-11f0-899c-2ec3350c7994&game=861&lang=en&sound=1&platform=desktop&ts=1767245401&title=Pig+Up&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fpig_up%2F&cashier_url=",
      description:'Pig Up is a 3x3 Hold and Win slot featuring sticky coins, an Extra Reel, and exciting bonus mechanics. Land Bonus symbols to trigger the Bonus Game, where reels expand and features like Coin Up, Multi Up, and Collect boost your winnings. The Piggy Bank Feature can randomly trigger the Bonus Game, while the Buy Feature lets players jump straight into three Bonus Game options. With fast-paced gameplay and strong win potential, Pig Up delivers nonstop excitement.',
    },
    {
      id: 110,
      title: "Fruits & Sevens: Fever",
      image: "/games/bng/fruits_sevens.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=4b140076-e6d3-11f0-899c-2ec3350c7994&game=697&lang=en&sound=1&platform=desktop&ts=1767245562&title=Fruits+%26+Sevens%3A+Fever&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Ffruits_and_sevens_fever%2F&cashier_url=",
      description:'Fruits & Sevens Fever brings classic fruit slot charm together with modern excitement in a 5-line game packed with vibrant symbols and big win potential. Cherries, lemons, oranges, and watermelons spin alongside powerful Sevens that unlock the game’s biggest rewards. Each win builds your Fever, triggering guaranteed big wins when activated, while Star scatter symbols offer extra payout opportunities from anywhere on the reels. Simple, fast-paced, and thrilling, Fruits & Sevens Fever delivers timeless slot fun with fiery rewards.',
    },
    {
      id: 111,
      title: "King Of The Sky",
      image: "/games/bng/king_of_the_sky.jpg",
      iframe: "https://gate.stage1.bng.games/op/site-bng-games/game.html?wl=demo&token=b05a2a8c-e6d3-11f0-899c-2ec3350c7994&game=699&lang=en&sound=1&platform=desktop&ts=1767245731&title=King+of+the+Sky%3A+Hit+the+Bonus&exit_url=https%3A%2F%2Fbng.games%2Fgame%2Fking_of_the_sky%2F&cashier_url=",
      description:'King of the Sky: Hit the Bonus™ is a visually stunning 5x3 slot featuring two powerful Bonus modes — Golden Bonus and Eagle’s Bonus. Land 6 or more matching Bonus or Eagle symbols to trigger their respective Bonus Games, with lightning indicating Sticky symbols that help lock in your progress. The Golden Bonus Game boosts payouts by collecting symbol values, including Jackpots, while Mystery symbols reveal their rewards at the end. Eagle’s Bonus introduces a payline twist with 10 paylines and Mystery Eagles that transform into winning symbols or Jackpots. Both Bonus modes are enhanced by random Multipliers, and players can unlock an additional Super Bonus Game by landing Bonus or Eagle symbols. Packed with dynamic features and high win potential, King of the Sky: Hit the Bonus™ delivers sky-high excitement.',
    },
  ];

  function ProviderIntroOverlay({
    logo,
    text,
  }: {
    logo: string;
    text: string;
  }) {
    return (
      <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center animate-intro-fadeout">
        <div className="flex flex-col items-center">
          {/* LOGO CONTAINER */}
          <div className="relative w-[200px] h-[80px] md:w-[260px] md:h-[100px] animate-logo-breathe">
            <div className="absolute inset-0 pointer-events-none">
              <div className="logo-shine" />
            </div>

            <LogoPiece logo={logo} position="top-left" />
            <LogoPiece logo={logo} position="top-right" />
            <LogoPiece logo={logo} position="bottom-left" />
            <LogoPiece logo={logo} position="bottom-right" />
          </div>

          {/* WELCOME TEXT */}
          <AnimatedWelcomeText text={text} />
        </div>
      </div>
    );
  }

  function LogoPiece({
    logo,
    position,
  }: {
    logo: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }) {
    const base =
      'absolute w-1/2 h-1/2 bg-no-repeat bg-[length:200%_200%]';

    const map = {
      'top-left':
        'top-0 left-0 bg-[position:0%_0%] animate-logo-in-tl',
      'top-right':
        'top-0 right-0 bg-[position:100%_0%] animate-logo-in-tr',
      'bottom-left':
        'bottom-0 left-0 bg-[position:0%_100%] animate-logo-in-bl',
      'bottom-right':
        'bottom-0 right-0 bg-[position:100%_100%] animate-logo-in-br',
    };

    return (
      <div
        className={`${base} ${map[position]}`}
        style={{
          backgroundImage: `url('${logo}')`,
        }}
      />
    );
  }

  function AnimatedWelcomeText({ text }: { text: string }) {
    return (
      <div className="mt-4 flex justify-center">
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="welcome-char"
            style={{
              animationDelay: `${i * 0.06}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    );
  }

export default function BngSource() {
  const normalizedGames = otherGames.map((game) => ({
    ...game,
    slug: toSlug(game.title),
  }));

  const navigate = useNavigate();
  const { slug } = useParams();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const activeGame = useMemo(() => {
    if (!slug) return null;

    return (
      normalizedGames.find((game) => game.slug === slug) ?? null
    );
  }, [slug, normalizedGames]);


  const bngGameImages = import.meta.glob(
    "@/assets/games/bng/*.{png,jpg,jpeg,webp}",
    { eager: true }
  );

  const gameList = Object.values(bngGameImages).map(
    (module: any) => module.default
  );

  const ITEMS_PER_LOAD = 24;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const visibleGames = gameList.slice(0, visibleCount);

  const [mobilePage, setMobilePage] = useState(0);
  const MOBILE_PAGE_SIZE = 6;

  const mobileTotalPages = Math.ceil(otherGames.length / MOBILE_PAGE_SIZE);

  const mobileGames = normalizedGames.slice(
    mobilePage * MOBILE_PAGE_SIZE,
    mobilePage * MOBILE_PAGE_SIZE + MOBILE_PAGE_SIZE
  );

  return (
    <>
    {showIntro && (
      <ProviderIntroOverlay
        logo="/other/bng/bng-logo.png"
        text="Let’s explore BNG"
      />
    )}

    {!showIntro && (
    <section className="space-y-4 md:space-y-10 py-[75px] md:py-16">
      {/* ================= HERO FULL WIDTH ================= */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div
          className="
            relative
            w-full
            py-20 md:py-52
            bg-[url('/other/bng/bng-bg.jpg')]
            bg-cover
            bg-center
            overflow-hidden
          "
        >
        </div>

        <img
          src="/other/bng/bng-logo.png"
          alt="BNG Games Logo"
          className="mx-auto mb-2 md:mb-4 mt-6 md:mt-10 w-40 md:w-56 lg:w-64 h-auto"
          loading="eager"
        />

          {/* content container */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 mt-2 md:mt-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white px-2">
              BNG Slot Casino Gaming Australia
            </h1>
          </div>


        {/* ===== HERO PARAGRAPHS ===== */}
        <div
          className="
            max-w-6xl mx-auto
            px-4 md:px-0
            mt-6 md:mt-10
            mb-10 md:mb-16
            text-center
            space-y-4 md:space-y-6
          "
        >
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            BNG games are developed in collaboration with established partner studios, with strong attention to gameplay quality, 
            mathematical balance, and long-term player engagement. Each title is designed to deliver stable performance, immersive 
            game atmosphere, and well-structured game mechanics that support high player retention and sustainable casino revenue. 
            The development process brings together experienced designers, developers, and mathematicians to ensure optimized bet 
            structures, attractive volatility profiles, and extended gameplay cycles.
          </p>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            These elements contribute to games that appeal to both casual players and VIP audiences, while maintaining consistency 
            and reliability across platforms. In addition to in-house development, BNG collaborates with external studios through 
            the BNG Developer Program, enabling independent art studios and development teams to create their own titles using 
            BNG’s technology framework, supported by server infrastructure, technical interfaces, market access, and ongoing 
            operational assistance.
          </p>
        </div>
      </section>

      {/* DEMO + MORE GAMES CONTAINER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1.2fr] gap-6">
          
          {/* ================= LEFT: DEMO PLAYER ================= */}
          <div>
            <h2 className="text-xl md:text-4xl font-bold mb-4 text-[#00ffbf]">
              BNG Slot: Demo Play
            </h2>

            <div className="w-full rounded-2xl overflow-hidden border border-[#606060] bg-[#010a1fd9]">
              <div className="relative w-full aspect-[16/9]">
                {activeGame ? (
                  <iframe
                    key={activeGame.id}
                    src={activeGame.iframe}
                    title={activeGame.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                    Please select a game on the right
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* ================= RIGHT: MORE GAMES (DESKTOP) ================= */}
          <div className="hidden md:flex md:flex-col">
            <h3 className="text-xl font-semibold mb-6 text-[#00ffbf]">
              More Slot Games: Try it
            </h3>

            {/* SCROLL CONTAINER */}
            <div
              className="
                flex-1
                max-h-[470px]
                overflow-y-auto
                pr-1
                rounded-xl
                border border-[#606060]
                bg-[#010a1fd9]
                dark-scrollbar
              "
            >

              <div className="space-y-3 p-2">
                {normalizedGames.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => {
                      navigate(`/bng-ewallet-slots/${game.slug}`, {
                        replace: true,
                      });
                    }}
                    className={`
                      relative
                      w-full
                      flex items-center gap-3
                      rounded-xl
                      p-1
                      transition
                      ${
                        activeGame?.id === game.id
                          ? "bg-gray-400"
                          : "hover:bg-gray-600"
                      }
                    `}
                  >
                    
                    {activeGame?.id === game.id && (
                      <span className="absolute left-1 top-2 bottom-2 w-1 rounded-full bg-red-600" />
                    )}

                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-24 aspect-[3/2] object-cover rounded-lg"
                    />

                    <span className="text-sm font-medium text-gray-200">
                      {game.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* ================= MOBILE: MORE GAMES CAROUSEL ================= */}
        <div className="md:hidden mt-6 mb-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-[#00ffbf]">More Games To Try it</h3>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  setMobilePage((p) => Math.max(p - 1, 0))
                }
                disabled={mobilePage === 0}
                className="px-2 py-1 rounded bg-gray-100 disabled:opacity-40"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setMobilePage((p) => Math.min(p + 1, mobileTotalPages - 1))
                }
                disabled={mobilePage === mobileTotalPages - 1}
                className="px-2 py-1 rounded bg-gray-100 disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {mobileGames.map((game) => (
              <button
                key={game.id}
                onClick={() => {
                  navigate(`/bng-ewallet-slots/${game.slug}`, {
                    replace: true,
                  });
                }}
                className={`
                  rounded-xl
                  overflow-hidden
                  transition
                  ${
                    activeGame?.id === game.id
                      ? "ring-2 ring-emerald-400"
                      : "hover:scale-[1.05]"
                  }
                `}
              >
                <div className="aspect-[16/9] bg-black">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ================= NOW PLAYING DETAILS ================= */}
        {activeGame && (
          <section className="max-w-7xl mx-auto md:px-0 mt-2 md:mt-6">
            <div className="bg-[#010a1fd9] border border-[#606060] rounded-2xl p-6 md:p-8 space-y-4">

              {/* Title Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  Current Playing:
                </h3>

                <span className="text-lg md:text-xl font-semibold text-[#00ffbf]">
                  {activeGame.title}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-600" />

              {/* Description */}
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {activeGame.description}
              </p>
            </div>
          </section>
        )}
      </section>

      {/* WHAT IS BNG */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 space-y-4 md:space-y-6 py-4 md:py-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#00ffbf]">
          What is BNG? How does it works?
        </h2>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          With nearly a decade of industry experience, BNG has established itself as a leading participant in the global iGaming market. 
          The company is recognized as a reliable technology and content partner, dedicated to supporting casino operators with high-quality gaming products and stable system infrastructure.
        </p>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          BNG’s team consists of experienced industry professionals focused on delivering scalable gaming solutions, combining technical expertise with strong market insight. 
          Through comprehensive system support and ongoing operational assistance, BNG enables operators to grow their platforms efficiently and sustainably in a competitive gaming landscape.
        </p>
      </section>

      {/* BNG CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-16">

          {/* SLOT GAMES */}
          <div className="bg-[#010a1fd9] border rounded-2xl p-6 space-y-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:border-emerald-300">
            <h3 className="text-xl font-bold text-white text-center">
              Slot Game Development
            </h3>

            <img
              src="/other/bng/slot-games.jpg"
              alt="BNG Slot Game Development"
              className="w-full h-40 md:h-44 object-cover rounded-xl"
              loading="lazy"
            />

            <ul className="list-disc pl-5 space-y-3 text-sm text-gray-200 marker:text-white marker:text-lg">
              <li>Stunning 2D & 3D graphics designed for immersive gameplay</li>
              <li>Fully mobile and tablet adaptive across devices</li>
              <li>High-performing mathematical models to optimize engagement</li>
              <li>Game spectator mode for live tournament experiences</li>
              <li>Available in multiple languages with global theme support</li>
              <li>Asian and Western themes to suit diverse player markets</li>
            </ul>
          </div>

          {/* RGS */}
          <div className="bg-[#010a1fd9] border rounded-2xl p-6 space-y-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:border-emerald-300">
            <h3 className="text-xl font-bold text-white text-center">
              RGS Platform & Integration
            </h3>

            <img
              src="/other/bng/api-integration.webp"
              alt="BNG RGS Platform"
              className="w-full h-40 md:h-44 object-cover rounded-xl"
              loading="lazy"
            />

            <ul className="list-disc pl-5 space-y-3 text-sm text-gray-200 marker:text-white marker:text-lg">
              <li>Robust and reliable infrastructure with 24/7 stability</li>
              <li>Simple API for seamless and fast platform integration</li>
              <li>Flexible architecture for rapid feature deployment</li>
              <li>Industry-compliant systems with certified RNG</li>
              <li>Optimized for worldwide accessibility and performance</li>
            </ul>
          </div>

          {/* BACKOFFICE */}
          <div className="bg-[#010a1fd9] border rounded-2xl p-6 space-y-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:border-emerald-300">
            <h3 className="text-xl font-bold text-white text-center">
              Backoffice & Operator Tools
            </h3>

            <img
              src="/other/bng/data-visualization.jpg"
              alt="BNG Backoffice System"
              className="w-full h-40 md:h-44 object-cover rounded-xl"
              loading="lazy"
            />

            <ul className="list-disc pl-5 space-y-3 text-sm text-gray-200 marker:text-white marker:text-lg">
              <li>Centralized game management and player support tools</li>
              <li>Real-time data analytics with detailed reporting</li>
              <li>Optimized UI / UX for efficient daily operations</li>
              <li>Advanced free-bet and promotion management</li>
              <li>Cross-platform compatibility with global currency support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* GAME LIST */}
      <section className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex items-center justify-center gap-6 mb-8 md:mb-10 mt-16 md:mt-24">
          <span className="h-[2px] md:w-14 bg-emerald-400" />
          <h3 className="text-2xl md:text-4xl text-center font-bold tracking-wide text-[#00ffbf]">
            BNG Slot Games Library 
          </h3>
          <span className="h-[2px] md:w-14 bg-emerald-400" />
        </div>

        {/* GAME GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {visibleGames.map((img, index) => (
            <Link
              key={index}
              to="/ewallet-casino-providers"
              className="group block"
            >
              <div
                className="
                  rounded-xl
                  overflow-hidden
                  bg-white
                  border
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(16,185,129,0.25)]
                  hover:bg-gradient-to-br
                hover:from-emerald-50
                hover:to-white
                hover:border-emerald-300
                  
                "
              >
                <div className="relative w-full aspect-[16/9]">
                  <img
                    src={img}
                    alt={`BNG Slot Game ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Hover Overlay - DESKTOP ONLY */}
                  <div
                    className="
                      hidden
                      md:flex
                      absolute inset-0
                      bg-black/70
                      opacity-0
                      md:group-hover:opacity-100
                      transition
                      items-center
                      justify-center
                    "
                  >
                    <span
                    className="
                        px-6 py-2
                        border border-emerald-400
                        text-emerald-400
                        text-sm
                        font-bold
                        tracking-widest
                    "
                    >
                    Get Free Bonus
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* LOAD MORE */}
        {visibleCount < gameList.length && (
          <div className="flex justify-center mt-10 mb-10">
            <button
              onClick={() => setVisibleCount(v => v + ITEMS_PER_LOAD)}
              className="
                px-6 py-2
                rounded-full
                bg-emerald-400
                text-white
                text-sm
                font-medium
                hover:bg-emerald-500
                transition
              "
            >
              Load More Games
            </button>
          </div>
        )}
      </section>

    </section>
    )}
  </>
  );
}