export default function AsiaGamingSource() {
  return (
    <section className="space-y-12 md:space-y-16">

      {/* ===== LOGO & ABOUT ===== */}
      <div className="text-center space-y-8 mt-14 md:mt-20">
        <img
          src="/asiaGaming/asia-gaming-logo.png"
          alt="Asia Gaming"
          className="mx-auto h-16 md:h-24 object-contain mb-10 md:mb-16"
        />

        <h1 className="text-xl md:text-4xl font-semibold">
            About Asia Gaming Software
        </h1>

        <div className="max-w-6xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed space-y-4 text-center px-4 md:px-0">
          <p>
            Asia Gaming was established in 2012 with professional and innovative
            thoughts. Since its inception, Asia Gaming has created a number of
            gaming experiences for the industry, including the world’s first
            Pre-dealing 6 cards, VIP Private Room, Squeeze Baccarat, and
            Interactive Bid Baccarat, bringing surprises to the gaming industry.
          </p>

          <p>
            Asia Gaming renders affordable and comprehensive solutions for gaming
            of any size, helping casino businesses maximize every opportunity.
            This iGaming solution further developed a mobile platform that offers
            casino players a real casino experience every time. Asia Gaming has
            also brought together numerous web celebrities and existing beauty
            anchors to deliver an interactive gaming experience to players.
          </p>

          <p>
            With this initiative, casino operators are able to boost website
            visitors, improve visitor engagement, and increase revenue
            generation. Evidently, Asia Gaming has taken the live streaming craze
            to a different level within the live casino industry. This Asian live
            casino provider is committed to creating a real-time live dealer
            gaming platform based on Fairness, Justice, Transparency, and
            Security.
          </p>

          <p>
            Asia Gaming combines success and skills to grow casino business
            revenue while providing a more rewarding gaming experience for
            casino players. This leading Asia iGaming solution is renowned for
            providing quality and cutting-edge products. Asia Gaming continues
            to make progress by growing, moving forward, and developing
            different types of game to challenge conventional wisdom and keep
            leading the gaming industry.
          </p>

          <p>
            In recent years, Asia Gaming has partnered with AB33, which has become
            its official agent. This company is a leading online casino covering
            the Asian market, specifically Malaysia, and offers and promotes all
            Asia Gaming casino games, live games, and sportsbooks.
          </p>
        </div>
      </div>

      {/* ===== VIDEO SECTION ===== */}
      <section className="max-w-7xl mx-auto">
            <div className="aspect-video w-full rounded-2xl overflow-hidden mt-4 md:mt-16">
            <iframe
                className="w-full h-full"
                src="/asiaGaming/asiaGamingVideo.mp4"
                title="Asia Gaming Live Casino"
                frameBorder="0"
                allowFullScreen
            />
            </div>
        </section>

      {/* ===== FEATURES ===== */}
      <div className="bg-[#f0f2f4] text-gray-900 rounded-xl p-8 md:p-12">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">
          Key Strengths of Asia Gaming Software
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-md md:text-lg">
          {[
            "Luxury live casino studios with professional setups",
            "Dealer interaction that enhances realism",
            "Optimised interface for smooth user experience",
            "HTML5-based games for cross-device compatibility",
            "Consistently polished visual quality",
            "Multi-language dealers including English and Chinese",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-gray-500 rounded-full flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

        {/* ===== LIVE DEALER GAMES ===== */}
        <div className="bg-[#f0f2f4] rounded-xl p-8 md:p-12 space-y-8 md:space-y-14">

            <h2 className="text-xl md:text-4xl font-bold text-gray-900 text-center">
                Live Dealer eWallet Casino Games
            </h2>

            {/* ===== Baccarat (desktop: image right) ===== */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="w-full h-full overflow-hidden rounded-lg md:order-2">
                <img
                    src="/asiaGaming/baccarat.jpg"
                    alt="Live Baccarat"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Text */}
                <div className="space-y-4 md:order-1">
                <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-semibold text-gray-800">
                    <img
                        src="/asiaGaming/casino-chips.png"
                        alt="Baccarat Icon"
                        className="w-4 h-4 md:w-10 md:h-10"
                    />
                    <span>Live Baccarat</span>
                </h3>

                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    This classic casino game allows players to place bets on the
                    Banker, Player, or Tie, with the goal of achieving a hand total
                    closest to 9. Winning bets on the Banker or Player pay out at 1:1.
                    A 5% commission applies to Banker bets, resulting in a 0.95:1
                    payout, while Tie bets offer higher returns at 8:1.
                </p>
                </div>
            </div>

            {/* ===== Three Face (desktop: image left) ===== */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                    src="/asiaGaming/three-face.jpg"
                    alt="Three Face"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Text */}
                <div className="space-y-4">
                <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-semibold text-gray-800">
                    <img
                        src="/asiaGaming/casino-chips.png"
                        alt="Baccarat Icon"
                        className="w-4 h-4 md:w-10 md:h-10"
                    />
                    <span>Three Face</span>
                </h3>

                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    Three Face, also known as San Gong, is a fast-paced card game by
                    Asia Gaming where each player receives three face-down cards.
                    Players aim to achieve the highest hand, with three-of-a-kind being
                    the strongest combination. Bets can be placed on either the
                    player’s hand or the dealer’s hand using a standard 52-card deck.
                </p>
                </div>
            </div>

            {/* ===== Dragon Tiger (desktop: image right) ===== */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="w-full h-full overflow-hidden rounded-lg md:order-2">
                <img
                    src="/asiaGaming/dragon-tiger.jpg"
                    alt="Dragon Tiger"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Text */}
                <div className="space-y-4 md:order-1">
                <h3 className="flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-semibold text-gray-800">
                    <img
                        src="/asiaGaming/casino-chips.png"
                        alt="Baccarat Icon"
                        className="w-4 h-4 md:w-10 md:h-10"
                    />
                    <span>Dragon Tiger</span>
                </h3>

                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                    Dragon Tiger is a simple yet fast-paced card game that challenges
                    players to predict whether the Dragon or the Tiger will receive
                    the higher card. The game uses six to eight decks, offering 1:1
                    payouts on winning bets, while Tie outcomes pay 8:1.
                </p>
                </div>
            </div>
        </div>


        {/* ===== VIDEO POKER ===== */}
        <section className="relative rounded-2xl overflow-hidden">

        {/* Background Image */}
        <div
            className="
            absolute inset-0
            bg-[url('/asiaGaming/apps.4298.14344383800905706.f14c3fef-5e7f-4ca0-a48e-189cfcade964.jpeg')]
            bg-cover bg-center
            "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div
            className="
            relative z-10
            py-10 md:py-20
            max-w-7xl mx-auto
            px-6 md:px-12
            space-y-6 md:space-y-8
            "
        >

            {/* Title */}
            <h2
            className="
                text-xl md:text-4xl
                font-bold
              text-white
                tracking-tight
            "
            >
            Video Poker Selection
            </h2>

            {/* Game List */}
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
            {[
                "Jacks or Better",
                "Deuces Wild",
                "Bonus Deuces Wild",
                "Joker Wild 1H",
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                <span className="w-5 h-[2px] bg-teal-400 rounded-full" />
                <span className="text-white font-medium">
                    {item}
                </span>
                </li>
            ))}
            </ul>

            {/* Description */}
            <p
            className="
                text-white
                text-sm md:text-lg
                leading-relaxed
                max-w-4xl
            "
            >
            In addition, Asia Gaming has launched several leisure games such as Pillar of Fortune, Animal Fun Park, and Lucky Combo. 
            These leisure games provide a break from regular casino games while still offering the chance to relax and win real money. 
            The newest addition to Asia Gaming’s game assortment is a sportsbook. Supported by AB33, the studio delivers a comprehensive 
            sportsbook featuring many popular sports to bet on, including basketball, football (soccer), tennis, and ice hockey. In addition, 
            a selection of niche sports is also covered, such as darts, snooker, Gaelic football, and more. The bookie offers a wide range of 
            betting options along with competitive odds across various sports and events.
            </p>

        </div>
        </section>


    </section>
  );
}
