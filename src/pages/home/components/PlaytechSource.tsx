import {
  Globe,
  Users,
  LayoutGrid,
  Layers,
  MonitorSmartphone,
  Shuffle,
  Gift,
  Activity,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Proven Industry Expertise",
    desc: "Years of experience delivering stable, compliant poker solutions across regulated global markets.",
  },
  {
    icon: Users,
    title: "Global Player Liquidity",
    desc: "A large-scale international poker network supporting consistent traffic and healthy table activity.",
  },
  {
    icon: LayoutGrid,
    title: "Omnichannel Platform Coverage",
    desc: "Optimised gameplay across web, mobile, and desktop for a seamless multi-device experience.",
  },
  {
    icon: Layers,
    title: "Extensive Game Variants",
    desc: "A wide range of formats, stakes, and buy-ins designed for both casual and high-value players.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Client",
    desc: "Fast-loading, intuitive interface built for smooth onboarding and uninterrupted gameplay.",
  },
  {
    icon: Shuffle,
    title: "Cross-Vertical Integration",
    desc: "Native tools enabling seamless promotion of side games, shared wallets, and brand ecosystems.",
  },
  {
    icon: Gift,
    title: "Advanced Promotion Tools",
    desc: "Flexible bonus engines, gamification mechanics, and reward systems that improve retention.",
  },
  {
    icon: Activity,
    title: "Player Engagement Suite",
    desc: "Built-in engagement systems supporting long-term activity and meaningful player journeys.",
  },
  {
    icon: Award,
    title: "Industry-Recognised Platform",
    desc: "Award-winning poker technology recognised for excellence in performance and player experience.",
  },
];


export default function PlaytechSource() {
  return (
    <section>

        {/* ================= SECTION 1 : HERO ================= */}
        <section
            className="
                relative w-full min-h-[60vh] md:min-h-screen
                overflow-hidden
                bg-[url('/playtech/home-bg_final.svg')]
                bg-cover bg-center
            "
            >
            <div className="absolute inset-0 bg-gradient-to-r from-[#07153d]/95 via-[#0b2f7a]/75 to-transparent" />

            <div
                className="
                relative z-10
                max-w-7xl mx-auto
                px-6 md:px-8
                h-full
                flex items-center
                mt-36 md:mt-48
                "
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">

                {/* Left: Text */}
                <div className="text-white space-y-6 md:space-y-8 max-w-xl">
                    <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
                    POWERING INNOVATION AND<br />
                    SAFER GAMBLING TECHNOLOGY
                    </h1>

                    <p className="text-sm md:text-lg text-white/80 leading-relaxed">
                    Playtech is a global technology leader within the gambling industry,
                    delivering more than two decades of experience through secure,
                    scalable and forward-looking digital solutions worldwide.
                    </p>
                </div>

                {/* Right: Visual breathing space */}
                <div className="hidden md:block" />
                </div>
            </div>
        </section>

      {/* ================= SECTION 2 : WHY CHOOSE PLAYTECH ================= */}
        <section className="bg-[#f5f7fb] mt-10">
        <div
            className="
            max-w-7xl mx-auto
            px-6 md:px-10
            "
        >
            {/* Container Card */}
            <div
            className="
                bg-white
                rounded-2xl
                shadow-sm
                p-8 md:p-14
            "
            >
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                {/* Visual */}
                <div className="flex justify-center">
                <img
                    src="/playtech/Live_choose-us_new.svg"
                    alt="Why Choose Playtech"
                    className="w-full max-w-md"
                />
                </div>

                {/* Content */}
                <div className="space-y-6 text-gray-800">
                <h2 className="text-xl md:text-4xl font-bold tracking-tight">
                    Why Top Operators Partner with Playtech
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    Playtech leads the evolution of live casino technology, operating
                    world-class studio facilities across Europe, North America, and Latin America.
                    Our focus is on delivering premium live experiences built to perform at global scale.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    Through proprietary platforms, innovative game concepts, and enterprise-grade
                    infrastructure, we help operators drive deeper engagement, improve retention,
                    and achieve sustainable long-term growth.
                </p>
                </div>

            </div>
            </div>
        </div>
        </section>


        {/* ================= SECTION 3 : CONTENT BLOCKS ================= */}
        <section className="bg-[#f5f7fb] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Container Card */}
            <div className="
            bg-white
            rounded-2xl
            shadow-sm
            px-6 md:px-16
            py-10 md:py-16
            space-y-6 md:space-y-10
            ">

            {/* ===== BLOCK 1 ===== */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center">
                <div>
                <img
                    src="/playtech/Live_Bespoke-Solutions-1.svg"
                    alt="Bespoke Solutions"
                    className="w-full"
                />
                </div>

                <div className="space-y-6 max-w-xl">
                <h3 className="text-xl md:text-4xl font-bold tracking-tight">
                    Bespoke Live Casino Solutions Tailored to Each Operator
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Innovation sits at the core of Playtech’s approach. By combining advanced
                    technology with refined visual design, we create customised live casino
                    environments that align seamlessly with operator branding.
                </p>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    From traditional table formats to large-scale interactive game shows,
                    every solution is carefully engineered to deliver immersion, stability,
                    and consistent performance across all devices.
                </p>
                </div>
            </div>

            {/* ===== BLOCK 2 ===== */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center">
                <div className="order-2 md:order-1 space-y-6 max-w-xl">
                <h3 className="text-xl md:text-4xl font-bold tracking-tight">
                    Globally Recognised Brands Paired with Proprietary Innovation
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Playtech collaborates with internationally recognised entertainment brands
                    while continuing to expand its portfolio of original in-house concepts.
                    This balanced approach delivers immediate player recognition alongside
                    lasting brand value.
                </p>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Our internal studios continuously evolve original titles, ensuring a fresh
                    and engaging catalogue that adapts to changing player expectations across
                    global markets.
                </p>
                </div>

                <div className="order-1 md:order-2">
                <img
                    src="/playtech/2025_major-brands.svg"
                    alt="Playtech Brands"
                    className="w-full"
                />
                </div>
            </div>

            {/* ===== BLOCK 3 ===== */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center">
                <div>
                <img
                    src="/playtech/2025_device_collage.svg"
                    alt="Playtech Content Range"
                    className="w-full"
                />
                </div>

                <div className="space-y-6 max-w-xl">
                <h3 className="text-xl md:text-4xl font-bold tracking-tight">
                    A Broad Content Portfolio Designed Around Player Experience
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Playtech’s live casino portfolio covers timeless table games, modernised
                    classics, and immersive game-show formats. From innovative roulette mechanics
                    to engaging blackjack variants, each title is built to perform at scale.
                </p>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Operators can also deploy customised versions of flagship games, creating
                    distinct environments that reinforce brand identity and market positioning.
                </p>
                </div>
            </div>

            </div>
        </div>
        </section>



      {/* ================= SECTION 4 : LIVE CASINO VIDEO ================= */}
      <section className="w-full">
        <div className="relative w-full aspect-video">
          <video
            className="w-full h-full object-cover"
            src="/playtech/G2E-Video-Banner-V02_1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

        {/* ================= SECTION 5 : PLATFORM FEATURES ================= */}
        <section className="bg-[#1a1e2a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
            <h2 className="text-sm md:text-md tracking-widest text-sky-400 uppercase">
                Why Playtech Poker
            </h2>

            <h1 className="text-xl md:text-4xl font-bold text-white leading-tight">
                Built on Technology. <br/>Designed for Scalable Poker Operations.
            </h1>

            <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Playtech delivers a technology-driven poker ecosystem engineered to support
                global liquidity, seamless player experiences, and long-term operator growth
                across regulated markets.
            </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {features.map((item, i) => {
                const Icon = item.icon;
                return (
                <div key={i} className="space-y-4">
                    <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-sky-400" />
                    </div>

                    <h3 className="text-base md:text-lg font-semibold text-white">
                    {item.title}
                    </h3>

                    <p className="text-sm md:text-md text-white/65 leading-relaxed">
                    {item.desc}
                    </p>
                </div>
                );
            })}
            </div>
        </div>
        </section>



    </section>
  );
}
