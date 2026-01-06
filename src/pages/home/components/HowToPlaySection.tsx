export default function HowToPlaySection() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up at a Casino',
      description: 'Select a reliable online casino from our list and complete the quick registration process.',
      icon: '/howToplay/register.png'
    },
    {
      number: '2',
      title: 'Deposit Funds',
      description: 'Select your preferred secure payment method and make a secure deposit to start playing. (BEWARE SCAM)',
      icon: '/howToplay/wallet.png'
    },
    {
      number: '3',
      title: 'Claim Your Welcome Bonus',
      description: 'Activate your welcome bonus and make sure you meet the wagering requirements and validity period.',
      icon: '/howToplay/gift.png'
    },
    {
      number: '4',
      title: 'Explore the Game Selection',
      description: 'Browse up to thousands of slots, table games, and live dealer options to find your favorites.',
      icon: '/howToplay/games.png'
    },
    {
      number: '5',
      title: 'Play and Cash Out Your Winnings',
      description: 'Meet the wagering requirements, then withdraw your winnings using a fast and secure payment method.',
      icon: '/howToplay/cashout.png'
    }
  ];

  return (
    <section id="play-step" className="py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center">
          How to Play at Gambling Sites from Australia Region?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="
                bg-white rounded-lg p-6 shadow-sm hover:shadow-md 
                transition-shadow border border-gray-200
              "
            >
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-start md:space-x-4">

                {/* Number circle */}
                <div className="flex-shrink-0 flex items-center space-x-3 md:space-x-0">
                  <div className="
                    w-10 h-10 md:w-10 md:h-10 
                    bg-[#1534ff] rounded-full 
                    flex items-center justify-center 
                    text-white font-bold text-base md:text-lg
                  ">
                    {step.number}
                  </div>

                  {/* MOBILE: icon next to number */}
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-10 h-10 md:hidden object-contain"
                  />
                </div>

                <div className="flex-1">
                  {/* DESKTOP: icon above title */}
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="hidden md:block w-8 h-8 mb-2 object-contain"
                  />

                  <h2 className="text-md md:text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-10 text-center">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to start your online casino journey in Australia. Always remember to gamble responsibly and only play at licensed and regulated casinos.
          </p>
        </div>
      </div>
    </section>
  );
}
