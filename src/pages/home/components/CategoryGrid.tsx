export default function CategoryGrid() {
  const pokerChipIcon = "/poker-chip.png";

  const categories = [
    { 
      name: 'Popular Real Money Online Casinos',
      link: 'https://ipay9aud.com/register/SMSRegister',
    },
    { 
      name: 'Casinos with High Payout Potential',
      link: 'https://www.kingbet9aus.com/register/SMSRegister',
    },
    { 
      name: 'Mobile-Friendly & App-Optimised Casinos',
      link: 'https://www.bigpay77.net/register/SMSRegister',
    },
    { 
      name: 'Fast Payout Online Casinos',
      link: 'https://me99aud.com/register/SMSRegister',
    },
    { 
      name: 'Live Dealer Casino Games',
      link: 'https://rolex9.net/register/SMSRegister',
    },
    { 
      name: 'Casinos Offering Free Credit Bonuses',
      link: 'https://www.gucci9.me/register/SMSRegister',
    },
    { 
      name: 'VIP & High Roller Casinos',
      link: 'https://www.winnie13.net/register/SMSRegister',
    },
    { 
      name: 'Low Minimum Deposit Casinos',
      link: 'https://www.micky13.com/register/SMSRegister',
    },
    { 
      name: 'High-Volatility Slot Casinos',
      link: 'https://www.queen13.net/register/SMSRegister',
    },
    { 
      name: 'Progressive Jackpot Casino Games',
      link: 'https://bybid9.com/register/SMSRegister',
    },
    { 
      name: 'Popular Online Casino Platforms',
      link: 'https://www.pokemon13.com/register/SMSRegister',
    },
    { 
      name: 'Casinos with Popular Game Titles',
      link: 'https://www.spongebob13.net/register/SMSRegister',
    },
    { 
      name: 'Feature-Rich Online Casino Platforms',
      link: 'https://www.mrbean9.com/register/SMSRegister',
    },
    { 
      name: 'Themed Online Casino Experiences',
      link: 'https://ipay9aud.com/register/SMSRegister',
    },
  ];


  return (
    <section id="popular-casino" className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center">
          Popular Australia Online eWallet Casino Categories
        </h1>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group p-4 md:p-5 flex items-center justify-between
                  hover:bg-gray-50 transition-all cursor-pointer border-b border-gray-200
                  ${index % 2 === 0 ? "md:border-r" : ""}
                  ${index >= categories.length - 2 ? "border-b-0" : ""}
                `}
              >
                {/* Left Section */}
                <div className="flex items-center gap-3 md:gap-4">
                  
                  {/* 🎨 Color Poker Chip Icon */}
                  <img
                    src={pokerChipIcon}
                    alt="poker chip"
                    className="
                      w-5 h-5 md:w-7 md:h-7
                      object-contain
                      transition-transform
                      group-hover:scale-110
                    "
                  />

                  {/* Name */}
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    {category.name}
                  </span>
                </div>

                {/* Arrow */}
                <i
                  className="
                    ri-arrow-right-s-line 
                    text-gray-400 text-xl
                    transition-transform 
                    group-hover:translate-x-1
                  "
                />
              </a>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
