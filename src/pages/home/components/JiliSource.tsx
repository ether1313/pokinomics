import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useRef, useState } from 'react';
import CoreConnections from './CoreConnections';

type Service = {
  title: string;
  desc: string;
  image: string;
};

function TrapezoidServiceStack({ services }: { services: Service[] }) {
  const [queue, setQueue] = useState(services);

  function bringToFront(index: number) {
    if (index === 0) return;

    const next = [
      queue[index],
      ...queue.slice(0, index),
      ...queue.slice(index + 1),
    ];
    setQueue(next);
  }

  return (
    <div className="relative h-[500px] flex justify-center items-end">
      {queue.slice(0, 5).map((service, i) => {
        const translateY = -i * 80;
        const scale = 1 - i * 0.02;
        const opacity = 1 - i * 0;
        const z = 50 - i;

        return (
          <div
            key={service.title}
            onClick={() => bringToFront(i)}
            className="absolute cursor-pointer transition-all duration-500 ease-out"
            style={{
              transform: `
                translateY(${translateY}px)
                scale(${scale})
              `,
              opacity,
              zIndex: z,
            }}
          >
            <TrapezoidCard {...service} active={i === 0} />
          </div>
        );
      })}
    </div>
  );
}

function TrapezoidCard({
  title,
  desc,
  image,
  active,
}: {
  title: string;
  desc: string;
  image: string;
  active: boolean;
}) {
  return (
    <div
      className={`
        w-[320px]
        rounded-3xl
        overflow-hidden
        bg-white
        shadow-xl
        border
        transition
        ${active ? 'border-[#e7d6a5]' : 'border-gray-200'}
      `}
    >
      {/* 图片区 */}
      <div className="h-[160px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 内容区 */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-900 leading-relaxed">
          {desc}
        </p>

        {active && (
          <div className="mt-4 text-xs text-gray-500">
            Tap another card to explore
          </div>
        )}
      </div>
    </div>
  );
}

/* MAIN EXPORT */
export default function JiliSource() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <JiliIntroOverlay />}

      {!showIntro && (
        <>
          <JiliSlideshow />
          <JiliHero />
          <JiliDemoPlay />
          <JiliAbout />
          <JiliUnique />
          <JiliGameGallery /> 
          <JiliService />
        </>
      )}
    </>
  );
}

function JiliIntroOverlay() {
  return (
    <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center animate-intro-fadeout">
      <div className="flex flex-col items-center">

        {/* ===== LOGO CONTAINER ===== */}
        <div className="relative w-[200px] h-[80px] md:w-[260px] md:h-[100px] animate-logo-breathe overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="logo-shine" />
          </div>

          <LogoPiece position="top-left" />
          <LogoPiece position="top-right" />
          <LogoPiece position="bottom-left" />
          <LogoPiece position="bottom-right" />
        </div>

        <AnimatedWelcomeText />

      </div>
    </div>
  );
}

function AnimatedWelcomeText() {
  const text = "Let’s explore JILI";

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

type LogoPieceProps = {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

function LogoPiece({ position }: LogoPieceProps) {
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
        backgroundImage: "url('/other/jili/jili-logo.png')",
      }}
    />
  );
}

/* AUTOPLAY SLIDESHOW */
function JiliSlideshow() {
  const slides = [
    '/other/jili/jili-slide-1.jpg',
    '/other/jili/jili-slide-2.jpg',
    '/other/jili/jili-slide-3.jpg',
    '/other/jili/jili-slide-4.jpg',
    '/other/jili/jili-slide-5.jpg',
    '/other/jili/jili-slide-6.jpg',
    '/other/jili/jili-slide-7.jpg',
  ];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-12">
      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 2000,
          arrows: false,
          pagination: true,
        }}
      >
        {slides.map((src, i) => (
          <SplideSlide key={i}>
            <img
              src={src}
              alt="JILI Games"
              className="w-full h-[200px] md:h-[600px] object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

/* HERO (Logo + Title) */
function JiliHero() {
  return (
    <section className="text-center mb-4 md:mb-8">
      <img
        src="/other/jili/jili-logo.png"
        alt="JILI Games"
        className="h-10 md:h-24 mx-auto mb-2 md:mb-8"
      />
      <h1 className="text-2xl md:text-4xl px-4 md:px-0 py-2 md:py-0 font-bold text-black">
        JILI eWallet Casino Pokies Australia
      </h1>
      <p className="max-w-6xl mx-auto text-sm md:text-base text-gray-900 leading-relaxed px-2 md:px-0 mb-10 md:mb-16 mt-2 md:mt-6">
        JILI Games is an experienced online casino games provider delivering a large collection of
        HTML5 slot and casino games. With certified game systems, support for multiple currencies
        and languages, and fast platform integration, JILI focuses on innovation, stability, and
        high-quality gameplay for modern online casinos.
      </p>
    </section>
  );
}

/* DEMO PLAY (IFRAME) */
type DemoGame = {
  id: number;
  name: string;
  thumbnail: string;
  demoUrl: string;
  note?: string;
};

function JiliDemoPlay() {
  const demos: DemoGame[] = [
    {
      id: 1,
      name: 'Super Ace: Joker',
      thumbnail: '/games/jili/superace.png',
      demoUrl: 'https://jiligames.com/PlusIntro/409?showGame=true',
      note: 'Demo availability may vary by region',
    },
    {
      id: 2,
      name: '3 Coin Treasures',
      thumbnail: '/games/jili/3-coin-treasures.png',
      demoUrl: 'https://jiligames.com/PlusIntro/399?showGame=true',
      note: 'Demo availability may vary by region',
    },
    {
      id: 3,
      name: 'Circus Joker 4096',
      thumbnail: '/games/jili/circus-joker.png',
      demoUrl: 'https://jiligames.com/PlusIntro/518?showGame=true',
      note: 'Demo availability may vary by region',
    },
    {
      id: 4,
      name: '3 Coin Wild Horse',
      thumbnail: '/games/jili/3-coin-wild-horse.png',
      demoUrl: 'https://jiligames.com/PlusIntro/485?showGame=true',
      note: 'Demo availability may vary by region',
    },
    {
      id: 5,
      name: 'Posedon',
      thumbnail: '/games/jili/posedon.png',
      demoUrl: 'https://jiligames.com/PlusIntro/375?showGame=true',
      note: 'Demo availability may vary by region',
    },
    {
      id: 6,
      name: 'Zeus',
      thumbnail: '/games/jili/zeus.png',
      demoUrl: 'https://jiligames.com/PlusIntro/252?showGame=true',
      note: 'Demo availability may vary by region',
    },
  ];

  return (
    <section className="px-2 md:px-0 mb-16 md:mb-20">
      <h2 className="text-xl md:text-3xl font-bold text-black mb-2">
        JILI Games Demo: Try Your Luck
      </h2>

      <p className="text-sm md:text-base text-gray-900 mb-6 max-w-7xl">
        Game previews and demo versions are provided by JILI. Some demos may be
        restricted in certain regions or require specific network access (VPN).
        Previews open in a new tab for security reasons.
      </p>

      {/* Demo Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {demos.map((game) => (
          <a
            key={game.id}
            href={game.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#ffffff9f] border border-gray-200 rounded-xl p-2 hover:shadow-md transition block hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={game.thumbnail}
                alt={game.name}
                className="rounded-lg mb-2"
              />

              {/* Badge */}
              <span className="absolute top-2 left-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded">
                Preview
              </span>
            </div>

            <div className="text-center">
              <span className="block text-xs font-semibold text-gray-900">
                {game.name}
              </span>

              {game.note && (
                <span className="block text-[11px] text-gray-600 mt-1">
                  {game.note}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-900 mt-6 leading-relaxed max-w-7xl">
        * Demo and preview availability depends on your location, network
        environment, and JILI platform policies. If a demo cannot be accessed,
        please visit a supported casino platform to play the full version.
      </p>
    </section>
  );
}

/* ABOUT JILI (LEFT / RIGHT) */
function JiliAbout() {
  return (
    <section className="grid md:grid-cols-2 gap-12 mb-12 md:mb-20 px-2 md:px-0 items-center">
      <img
        src="/other/jili/about-jili-01.png"
        alt="About JILI Games"
        className="rounded-2xl"
      />

      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          About JILI
        </h2>
        <p className="text-gray-900 text-sm md:text-base leading-relaxed">
          JILI Gaming is a game development company composed of experienced professionals, focused on creating high-quality and original games. 
          The company places strong emphasis on excellence and innovation as its core values. JILI Gaming develops a wide range of online products, 
          including video slots, bingo, table games, and fishing games, and continues to maintain a competitive edge through regular releases of innovative titles.
        </p>
      </div>
    </section>
  );
}

/* JILI UNIQUE (THEME MATCHED VERSION) */
function JiliUnique() {
  const items = [
  {
    title: 'Tournament',
    logo: '/other/jili/tournament.png',
    desc: 'Designed for operators to easily set up and update tournaments, enabling more player interaction while keeping engagement levels high.',
  },
  {
    title: 'Missions & Rich Card',
    logo: '/other/jili/mission.png',
    desc: 'Customized missions and Win Cards are created based on player behavior, with tiered objectives that encourage progression. Designed to be fun, engaging, and rewarding.',
  },
  {
    title: 'Sign-in',
    logo: '/other/jili/signin.png',
    desc: 'Daily sign-in events reward different player groups, encouraging regular participation and enhancing overall enjoyment of the game.',
  },
  {
    title: 'Must Hit By',
    logo: '/other/jili/musthitby.png',
    desc: 'The “Must Hit By” feature is a unique JILI mechanic that adds excitement to jackpots, ensuring they are triggered once the target amount is reached.',
  },
  {
    title: 'Linking Jackpot',
    logo: '/other/jili/jackpot.png',
    desc: 'Through the Linking Jackpot system, players across multiple games share a common goal of pursuing major prizes, increasing interaction and excitement.',
  },
  {
    title: 'AI & Datamining',
    logo: '/other/jili/ai.png',
    desc: 'Utilizes operational data to analyze betting behavior and player retention on a daily basis, optimizing performance tailored to player preferences.',
  },
];

  return (
    <section className="bg-[#eaeaea9f] rounded-2xl p-8 md:p-14 mb-12 md:mb-10">
      <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-8">
        JILI&apos;s Unique
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative h-[220px] md:h-[260px] flip-perspective group"
          >
            {/* ===== DESKTOP FLIP ===== */}
            <div className="hidden md:block w-full h-full">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front bg-[#eaeaea9f] border border-[#e7d6a5] rounded-2xl flex flex-col items-center justify-center">
                  <img src={item.logo} className="w-20 h-20 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* BACK */}
                <div className="flip-back rounded-2xl bg-gradient-to-br from-[#2c2b29] to-[#10100f] flex items-center justify-center p-6">
                  <p className="text-white text-md text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* ===== MOBILE NO FLIP ===== */}
            <div className="md:hidden bg-[#eaeaea9f] border border-[#e7d6a5] rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
              <img src={item.logo} className="w-16 h-16 mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-xs md:text-md text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export function JiliGameGallery() {
  const imageMap = import.meta.glob(
    '/src/assets/games/jili/*.{png,jpg,jpeg,webp}',
    { eager: true, as: 'url' }
  );

  const images = Object.values(imageMap) as string[];

  const INITIAL_COUNT = 20;
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll
    ? images
    : images.slice(0, INITIAL_COUNT);

  return (
    <section className="px-2 md:px-0 mt-12 md:mt-20 mb-12 md:mb-10">
      {/* ===== Title ===== */}
      <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-3">
        JILI Slot Game Collection
      </h2>

      <p className="text-center text-sm md:text-base text-gray-700 mb-8">
        Explore JILI’s diverse slot portfolio — featuring classic favorites and
        modern high-performing titles.
      </p>

      {/* ===== Gallery ===== */}
      <div
        className="
          grid grid-cols-3 md:grid-cols-6
          auto-rows-[100px] md:auto-rows-[200px]
          gap-3 md:gap-5
        "
      >
        {visibleImages.map((src, i) => {
          const isLargeDesktop = i % 7 === 0 || i % 11 === 0;

          return (
            <a
              key={src}
              href="/ewallet-casino-providers"
              className={`
                relative overflow-hidden rounded-2xl bg-black
                group block
                transition
                ${isLargeDesktop ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              {/* Image */}
              <img
                src={src}
                alt="JILI Slot Game"
                className="
                  w-full h-full object-fill
                  transition-transform duration-500
                  md:group-hover:scale-105
                "
              />

              {/* ===== Desktop Hover Overlay ===== */}
              <div
                className="
                  absolute inset-0
                  bg-black/50
                  opacity-0
                  md:group-hover:opacity-100
                  transition
                  hidden md:flex
                  items-center justify-center
                "
              >
                <span
                  className="
                    px-6 py-2
                    rounded-sm
                    border b-white
                    text-white
                    text-sm
                    font-semibold
                    shadow-lg
                    transition
                    md:group-hover:scale-105
                  "
                >
                  View Guide
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* ===== Show More ===== */}
      {images.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="
              px-6 py-2 rounded-full
              bg-[#ffe605]
              text-base font-medium
              text-gray-700
              hover:bg-yellow-400
              transition
            "
          >
            {showAll ? 'Show Less' : 'Show More Games'}
          </button>
        </div>
      )}
    </section>
  );
}

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function JiliService() {
  const { ref, visible } = useInView(0.25);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: 'Multi-Platform Delivery',
      desc: 'All games are developed in HTML5, ensuring smooth performance across desktop, tablet, and mobile devices.',
      image: '/other/jili/cross-platform.jpg',
    },
    {
      title: 'Operator Back Office',
      desc: 'A secure and intuitive back-office system built for efficient management and customization.',
      image: '/other/jili/back-office.jpg',
    },
    {
      title: 'Player Engagement Systems',
      desc: 'Advanced tools such as tournaments, missions, jackpots, and promotions to increase retention.',
      image: '/other/jili/player-engagement.jpg',
    },
    {
      title: '24/7 Technical Support',
      desc: 'Dedicated support teams available around the clock to maintain platform stability.',
      image: '/other/jili/technical-support.jpg',
    },
    {
      title: 'Global & Multilingual Ready',
      desc: 'Supports multiple languages and currencies, designed for global deployment.',
      image: '/other/jili/multilingual.jpg',
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#eaeaea9f] rounded-2xl relative p-8 md:p-14 mb-8 md:mb-10 overflow-hidden"
    >
    
    {/* 连线层（桌面端） */}
    <div className="hidden md:block">
      <CoreConnections
        coreRef={coreRef}
        cardRefs={cardRefs}
        visible={visible}
      />
    
    </div>  
    {/* 标题层 */}
    <div className="relative z-10 mb-16">
      <h2 className="text-2xl md:text-4xl font-bold text-black text-center">
        JILI Service Capabilities
      </h2>
    </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:grid grid-cols-3 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          {services.slice(0, 2).map((s, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <ServiceCard
                {...s}
                animate={visible}
                direction="left"
                delay={i * 100}
              />
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div
          ref={coreRef}
          className={`
            relative bg-white rounded-3xl p-10 border border-[#e7d6a5] text-center
            transition-all duration-700
            ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          `}
        >
          <div className="mb-4 flex justify-center">
            <img
              src="/other/jili/platform-core.png"
              alt="JILI Platform Core"
              className="h-16 w-auto"
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-black-900">
            JILI Platform Core
          </h3>
          <p className="text-gray-900 text-sm leading-relaxed">
            A complete, scalable, and reliable gaming ecosystem designed for modern online casino operators.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {services.slice(2).map((s, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i + 2] = el;
              }}
            >
              <ServiceCard
                {...s}
                animate={visible}
                direction="right"
                delay={i * 100}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden pt-24">
        <TrapezoidServiceStack services={services} />
      </div>

    </section>
  );
}

function ServiceCard({
  title,
  desc,
  image,
  animate,
  direction,
  delay,
}: {
  title: string;
  desc: string;
  image: string;
  animate: boolean;
  direction: 'left' | 'right';
  delay: number;
}) {
  const offset = direction === 'left' ? '-translate-x-10' : 'translate-x-10';

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        bg-white rounded-2xl overflow-hidden
        border border-[#e7d6a5] shadow-md
        transition-all duration-700
        ${animate ? 'opacity-100 translate-x-0' : `opacity-0 ${offset}`}
      `}
    >
      {/* 上半部图片 */}
      <div className="h-[140px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 下半部文字 */}
      <div className="p-5">
        <h3 className="font-semibold text-black mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-900 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
