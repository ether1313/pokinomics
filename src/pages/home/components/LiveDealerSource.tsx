import { Link } from "react-router-dom";

type Provider = {
  id: string;
  slogan?: string;
  logo: string;
  bg: string;
  link: string;
  logoClass?: string;
};

const liveDealerProviders: Provider[] = [
  {
    id: "evolution",
    slogan: "[Innovative solutions in our multi-award winning Live Casino]",
    logo: "/other/liveDealer/evolution.png",
    bg: "/other/liveDealer/evolution-bg.jpg",
    link: "/live-dealer/evolution",
    logoClass: "h-6 md:h-8",
  },
  {
    id: "pragmaticplay",
    slogan: "[Your favourite online casino experience every time]",
    logo: "/other/liveDealer/pragmaticplay.png",
    bg: "/other/liveDealer/pragmaticplay-bg.jpg",
    link: "/live-dealer/pragmaticplay",
    logoClass: "h-12 md:h-12",
  },
  {
    id: "asiagaming",
    slogan: "[The most impressive Live Casino Experiences in Asia]",
    logo: "/other/liveDealer/asiagaming.png",
    bg: "/other/liveDealer/asiagaming-bg.jpg",
    link: "/live-dealer/asiagaming",
  },
  {
    id: "playtech",
    slogan: "[A technology-first approach to casino software solutions]",
    logo: "/other/liveDealer/playtech.png",
    bg: "/other/liveDealer/playtech-bg.jpg",
    link: "/live-dealer/playtech",
    logoClass: "h-6 md:h-8",
  },
];

export default function LiveDealerSource() {
  return (
    <section className=" px-4 md:px-0 mt-20">
      {/* ===== Title ===== */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        eWallet Live Dealer Providers
      </h1>
      <p className="mt-2 text-gray-600 text-sm md:text-base text-center mb-10">
        This page features a curated selection of well-known live dealer game providers, 
        carefully reviewed and organized by industry experts. 
        Each live casino provider listed here is recognized for its game quality, 
        live dealer professionalism, streaming performance, and overall reliability. 
        Players can explore and compare different live dealer game providers based on their 
        personal interests, preferred game types, and playing experience, making it easier 
        to understand the differences and choose the live casino games that best suit their needs.
      </p>

      {/* ===== Provider Grid / Carousel ===== */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
          md:gap-6
          overflow-x-auto
          md:overflow-visible
          snap-x snap-mandatory
          mb-16
        "
      >
        {liveDealerProviders.map((provider) => (
          <Link
            key={provider.id}
            to={`/live-dealer-australia-casino/${provider.id}`}
            className="group snap-start flex-shrink-0 md:flex-shrink"
          >
            {/* ===== CARD ===== */}
            <div
              className="
                rounded-2xl
                overflow-hidden
                bg-white
                transition
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* ===== TOP IMAGE ===== */}
              <div className="relative h-[300px] md:h-[340px] overflow-hidden">
                <img
                  src={provider.bg}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/25" />

                {/* Updated Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <div className="relative">
                    <span
                      className="
                        absolute inset-0
                        rounded-full
                        bg-emerald-300/40
                        animate-ping
                      "
                    />
                    <span
                      className="
                        relative
                        inline-block
                        px-2.5 py-1
                        text-[10px] md:text-xs
                        font-semibold
                        text-emerald-700
                        bg-emerald-100
                        rounded-full
                        shadow-sm
                        tracking-wide
                      "
                    >
                      Updated
                    </span>
                  </div>
                </div>
              </div>

              {/* ===== BOTTOM WHITE INFO ===== */}
              <div className="px-5 py-4">
                {/* ===== Mobile layout ===== */}
                <div className="md:hidden flex flex-col items-center gap-3">
                  {/* Logo */}
                  <img
                    src={provider.logo}
                    className={`object-contain ${
                      provider.logoClass ?? "h-8"
                    }`}
                  />

                  {/* Slogan */}
                  <p className="text-xs text-gray-500 leading-snug text-center line-clamp-2">
                    {provider.slogan}
                  </p>

                  {/* CTA */}
                  <div
                    className="
                      mt-1
                      px-5 py-2
                      text-xs font-medium
                      text-emerald-600
                      border border-emerald-200
                      rounded-full
                      bg-emerald-50
                      animate-heartbeat
                    "
                  >
                    Explore Now →
                  </div>
                </div>

                {/* ===== Desktop layout ===== */}
                <div className="hidden md:flex flex-col gap-3 h-full">
                  {/* Logo */}
                  <div className="flex items-center h-9">
                    <img
                      src={provider.logo}
                      className={`object-contain ${
                        provider.logoClass ?? "h-8 md:h-9"
                      }`}
                    />
                  </div>

                  {/* Slogan */}
                  <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                    {provider.slogan}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <div
                      className="
                        inline-flex
                        items-center
                        px-6 py-2
                        text-sm font-medium
                        text-emerald-600
                        border border-emerald-200
                        rounded-full
                        bg-emerald-50
                        transition
                        group-hover:bg-emerald-100
                        group-hover:scale-[1.02]
                        animate-heartbeat
                      "
                    >
                      Explore →
                    </div>
                  </div>
              </div>
            </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
