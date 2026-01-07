const licences = [
  {
    country: 'Belgium',
    authority: 'Kansspel Commissie (Belgium Gaming Commission)',
    license: 'Vergunning klasse E',
  },
  {
    country: 'Bulgaria',
    authority: 'National Revenue Agency',
    license:
      'Licence for producing, distributing, and servicing gaming equipment',
  },
  {
    country: 'Denmark',
    authority: 'Danish Gambling Authority',
    license: 'Supplier License',
  },
  {
    country: 'Gibraltar',
    authority: 'The Gibraltar Gambling Commission',
    license:
      'Remote Gambling License B2B Gaming Operator’s License – RNG',
  },
  {
    country: 'Gibraltar',
    authority: 'The Gibraltar Gambling Commission',
    license:
      'Remote Gambling License B2B Gaming Operator’s License – Live',
  },
  {
    country: 'Greece',
    authority: 'Hellenic Gaming Commission (HGC)',
    license: 'Manufacturer’s Suitability License',
  },
  {
    country: 'Greece',
    authority: 'Hellenic Gaming Commission (HGC)',
    license: 'Suitability D License',
  },
  {
    country: 'Georgia',
    authority: 'The Revenue Services',
    license: 'Studio Streaming License',
  },
  {
    country: 'Isle of Man',
    authority: 'Gambling Supervision Commission (GSC)',
    license: 'B2B OGRA Software Provision License',
  },
  {
    country: 'Latvia',
    authority:
      'The Lotteries and Gambling Supervisor Inspection of Latvia',
    license: 'License for rendering gambling service',
  },
  {
    country: 'Malta',
    authority: 'Malta Gaming Authority',
    license: 'Critical Gaming Supply License, B2B',
  },
  {
    country: 'Romania',
    authority: 'Romania National Gambling Office',
    license: 'Class 2 License (Studio streaming)',
  },
  {
    country: 'Romania',
    authority: 'Romania National Gambling Office',
    license:
      'Class 2 License (Produce / Distribute Specialized Software for Gambling)',
  },
  {
    country: 'Spain',
    authority:
      'Directorate General for the Regulation of Gambling',
    license: 'General License for Other Games',
  },
  {
    country: 'Spain',
    authority:
      'Directorate General for the Regulation of Gambling',
    license: 'Singular License for Slots',
  },
  {
    country: 'Sweden',
    authority: 'Swedish Gambling Authority',
    license: 'Gaming Software Licence',
  },
  {
    country: 'United Kingdom',
    authority: 'United Kingdom Gambling Commission',
    license: 'Remote Operating License',
  },
  {
    country: 'South Africa',
    authority: 'Western Cape Gambling and Racing Board',
    license: 'National Manufacturer License',
  },
  {
    country: 'Uganda',
    authority:
      'National Lotteries and Gaming Regulatory Board',
    license:
      'Manufacture, supply, install or adapt gambling software',
  },
  {
    country: 'Bahamas',
    authority: 'The Gaming Board for the Bahamas',
    license: 'Supplier License',
  },
  {
    country: 'Canada – Alberta',
    authority: 'Alberta Gaming Commission',
    license:
      'Finding of Suitability (Gaming Terminal Dealer and Gaming Supplier)',
  },
  {
    country: 'Canada – British Columbia',
    authority:
      'Gaming Policy and Enforcement Branch (British Columbia)',
    license: 'Gaming Services Provider (Class B Supplier)',
  },
  {
    country: 'Canada – Atlantic Lotteries',
    authority:
      'Alcohol, Gaming, Fuel and Tobacco Division (Nova Scotia)',
    license:
      'Lottery Equipment (for Atlantic Lottery Corporation)',
  },
];

export default function EvolutionSource() {
  return (
    <section className="space-y-14 md:space-y-20 px-4 md:px-0">

      {/* ================= Logo Hero ================= */}
      <div className="flex justify-center pt-20">
        <img
          src="/evolution/evolution-logo.png"
          alt="Evolution Gaming"
          className="h-12 md:h-20 object-contain"
        />
      </div>

      {/* ================= Mission / Vision / Values ================= */}
      <section className="space-y-14 md:space-y-20">

        {/* Title & Intro */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
            Mission · Vision · Values
          </h2>

          <div className="w-16 h-[2px] bg-sky-300 mx-auto" />

          <p className="max-w-4xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed px-4">
            Working alongside more top-tier operators than any other provider,
            Evolution delivers enterprise-grade live casino solutions across
            multiple platforms and devices. Through innovative technology,
            scalable infrastructure, and experienced teams, we help our partners
            build sustainable and successful gaming businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto px-4">

          {/* Vision */}
          <div className="
            bg-white rounded-2xl
            shadow-sm hover:shadow-lg
            transition
            p-8 md:p-10
            text-center space-y-6
          ">
            <div className="mx-auto w-20 h-20 rounded-full border border-sky-600 flex items-center justify-center">
              <img
                src="/evolution/vision.png"
                alt="Vision Icon"
                className="w-9 h-9"
              />
            </div>

            <h3 className="text-sm font-semibold tracking-widest text-gray-900">
              OUR VISION
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To set the global standard for live casino entertainment by combining
              trust, innovation, and immersive real-time experiences.
            </p>
          </div>

          {/* Mission */}
          <div className="
            bg-white rounded-2xl
            shadow-sm hover:shadow-lg
            transition
            p-8 md:p-10
            text-center space-y-6
          ">
            <div className="mx-auto w-20 h-20 rounded-full border border-sky-600 flex items-center justify-center">
              <img
                src="/evolution/mission.png"
                alt="Mission Icon"
                className="w-9 h-9"
              />
            </div>

            <h3 className="text-sm font-semibold tracking-widest text-gray-900">
              OUR MISSION
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              To empower operators with world-class live dealer technology that
              enhances player engagement and delivers outstanding user experiences.
            </p>
          </div>

          {/* Culture */}
          <div className="
            bg-white rounded-2xl
            shadow-sm hover:shadow-lg
            transition
            p-8 md:p-10
            text-center space-y-6
          ">
            <div className="mx-auto w-20 h-20 rounded-full border border-sky-600 flex items-center justify-center">
              <img
                src="/evolution/culture.png"
                alt="Culture Icon"
                className="w-9 h-9"
              />
            </div>

            <h3 className="text-sm font-semibold tracking-widest text-gray-900">
              OUR CULTURE
            </h3>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We value openness, respect, creativity, and integrity — fostering
              long-term relationships with partners, communities, and our people
              across the globe.
            </p>
          </div>

        </div>
      </section>


      {/* ================= Live Dealer Games ================= */}
      <section className="space-y-0 md:space-y-16">

        <h2 className="text-2xl md:text-4xl font-bold text-center">
           Live Dealer Offering by Evolution
        </h2>

        {/* Each game block */}
        {[
          {
            title: 'Live Roulette',
            img: '/evolution/live_roulette_banner.jpg',
            desc: (
              <>
                Evolution Live Roulette delivers one of the most authentic and exciting live dealer Roulette experiences online, featuring multiple game variants and the world’s widest selection of generic, VIP and native-speaking dealer tables. 
                Licensees benefit from dedicated tables and Dual Play Roulette, connecting land-based and online players at the same tables. Innovation remains central, with formats such as Lightning Roulette, XXXtreme Lightning Roulette, Immersive Roulette, 
                Speed Roulette, Instant Roulette and Double Ball Roulette enhancing player engagement. A multi-camera immersive view, rich in-game features and flawless HD streaming ensure a world-class experience for thousands of concurrent players 
                across all devices.
              </>
            ),
          },
          {
            title: 'Live Blackjack',
            img: '/evolution/live_blackjack_banner.jpg',
            reverse: true,
            desc: (
              <>
                Evolution Live Blackjack is the fastest, slickest and richest-featured online Blackjack game available, optimised perfectly for the best possible playing experience on both desktop and mobile devices. 
                Players can choose from the largest selection of live tables or dedicated tables created exclusively for any operator, while numerous Blackjack variants meet the needs of both experienced and new players. 
                Additional choice and variety are delivered through unique formats such as fast-paced Speed Blackjack and the Infinite Blackjack games. Most Blackjack tables are based on the regular seven-seat Blackjack 
                with the option to Bet Behind, while all games in the Infinite family offer unlimited seats at the table, ensuring accessibility, scalability and smooth gameplay across all sessions.
              </>
            ),
          },
          {
            title: 'Live Baccarat',
            img: '/evolution/live_baccarat_banner.jpg',
            desc: (
              <>
                Evolution Live Baccarat delivers a world-class, Macau-like gaming experience for all player types, from first-timers to high rollers. 
                With authentic gameplay across multiple variants, including Live Baccarat Squeeze, No Commission Baccarat, Speed Baccarat, Lightning Baccarat, 
                and VIP & Salon Privé tables, players enjoy rich features, live betting statistics, interactive roads and flexible side bets. 
                Optimised for all devices, Evolution Live Baccarat offers multi-camera shared tables, custom-branded dedicated tables and Baccarat Multiplay 
                for seamless, immersive play.
              </>
            ),
          },
          {
            title: 'Live Poker',
            img: '/evolution/live_poker_banner.jpg',
            reverse: true,
            desc: (
              <>
                Evolution offers a wide range of Poker variants, including exclusive titles not available from any other Live Casino provider through partnerships with Scientific Games and Games Marketing.
                With the added excitement of slots-style Progressive Jackpots, Evolution’s Poker portfolio offers the ultimate Poker selection.
              </>
            ),
          },
        ].map((game, idx) => (
          <div
            key={idx}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <img
              src={game.img}
              alt={game.title}
              className={`rounded-xl mt-10 md:mt-0 w-full object-cover ${
                game.reverse ? 'md:order-2' : ''
              }`}
            />

            <div className={`space-y-4 ${game.reverse ? 'md:order-1' : ''}`}>
              <h3 className="text-xl md:text-2xl font-semibold">
                {game.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {game.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ================= Compliance & Licences ================= */}
      <section className="bg-white rounded-3xl px-6 py-10 md:px-12 md:py-16 border border-gray-100">

        <div className="max-w-7xl mb-10">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            Licences, Certification & Accreditations
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Evolution is licensed and regulated across multiple jurisdictions,
            operating under established gambling authorities to ensure compliance,
            integrity and responsible gaming standards worldwide.
          </p>
        </div>

        {/* Headers (desktop) */}
        <div className="hidden md:grid md:grid-cols-3 text-xs font-semibold uppercase tracking-wide text-gray-900 pb-3 border-b border-gray-200">
          <div>Jurisdiction</div>
          <div>Regulatory Authority</div>
          <div>License Type</div>
        </div>

        {/* List */}
        <div className="space-y-6 mt-6">
          {licences.map((item, index) => (
            <div
                key={`${item.country}-${index}`}
                className="grid gap-2 md:grid-cols-3 border-b border-gray-100 pb-4"
            >
                {/* Jurisdiction */}
                <div className="text-base font-semibold text-gray-900 md:text-sm md:font-medium">
                {item.country}
                </div>

                {/* Regulatory Authority */}
                <div className="text-sm text-gray-700 md:text-sm">
                {item.authority}
                </div>

                {/* License Type */}
                <div className="text-xs text-gray-400 md:text-sm md:text-gray-700">
                {item.license}
                </div>
            </div>
            ))}
        </div>
      </section>

      {/* ================= Multi-Platform Support ================= */}
      <section className="space-y-8 md:space-y-12">

      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">
           Built for Seamless Multi-Platform Deployment
        </h2>

        <div className="w-16 h-[2px] bg-sky-300 mx-auto" />

        <p className="max-w-4xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed">
            Evolution’s live casino solutions are built for seamless deployment across
            desktop, mobile, tablet and native applications, ensuring consistent
            performance, stability and user experience across all supported platforms.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <img
        src="/evolution/multiplatform.jpg"
        alt="Evolution Multi-Platform Support"
        className="w-full rounded-2xl object-cover"
        />
      </div>
    </section>

    {/* ================= Responsible Gaming & Awareness ================= */}
    <section className="space-y-8 md:space-y-10">

    {/* Title */}
    <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-semibold mt-10">
        Responsible Gambling & Industry Awareness
        </h2>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed">
        Evolution actively supports responsible gaming initiatives and works
        alongside recognised industry organisations to promote safe, transparent
        and sustainable gaming environments worldwide.
        </p>
    </div>

    {/* Icons */}
    <div className="max-w-6xl mx-auto">
    <div
        className="
        grid grid-cols-4 gap-6 justify-items-center
        md:flex md:flex-wrap md:justify-center md:gap-10 mb-16
        "
    >
        {[
        { name: 'Gambling Commission', src: '/evolution/gambling-commission.png' },
        { name: 'BeGambleAware', src: '/evolution/begambleaware.png' },
        { name: 'Game Stop', src: '/evolution/gamestop.png' },
        { name: 'Game Check', src: '/evolution/gamecheck.png' },
        { name: 'eCOGRA', src: '/evolution/ecogra.png' },
        { name: 'MGA', src: '/evolution/mga-logo.png' },
        ].map((icon, index) => (
        <div
            key={index}
            className={`
            flex items-center justify-center
            transition duration-300

            md:grayscale md:opacity-70
            md:hover:grayscale-0 md:hover:opacity-100

            ${
                index === 4
                ? 'col-start-2'
                : index === 5
                ? 'col-start-3'
                : index === 6
                ? 'col-start-4'
                : ''
            }
            `}
        >
            <img
            src={icon.src}
            alt={icon.name}
            className="h-8 md:h-10 object-contain"
            />
        </div>
        ))}
    </div>
    </div>

    </section>


    </section>
  );
}
