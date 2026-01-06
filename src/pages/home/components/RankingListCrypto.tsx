import { useState } from 'react';

export default function RankingListCrypto() {
  const [showMore, setShowMore] = useState(false);

  const initialCasinos = [
    {
      rank: 1,
      name: '🎲 IPAY9',
      logo: '/casinoLogo/ipay9.png',
      bonus: 'Up to 100% Welcome Bonus',
      rating: '5.0',
      url:'https://ipay9aud.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Licensed under Pagcor & Curaçao eGaming (Licence No. 8048/JAZ). Min deposit A$10. Extra Bonus up to A$113 with no fees. Deposit A$30 to earn a chance on the Fortune Wheel. Please Gamble Responsibly – full T&Cs apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 2,
      name: '🎲 KINGBET9',
      logo: '/casinoLogo/kingbet9.png',
      bonus: 'Up to A$199.99 Free Credit New Register',
      rating: '4.7',
      url:'https://www.kingbet9aus.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Available for Australian players. Operated under Pagcor & Curaçao licence No. 8048/JAZ. Min deposit A$10. New register can get welcome bonus 100% and daily rebate up to 5%. Play responsibly. Full T&Cs apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 3,
      name: '🎲 BIGPAY77',
      logo: '/casinoLogo/bp77.png',
      bonus: 'Up to A$187.77 New Registration',
      rating: '4.9',
      url:'https://www.bigpay77.net/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Available for Australia-based users. Licensed by Pagcor & Curaçao eGaming (8048/JAZ). Extra bonus up to A$43 with no fees. Daily check-ins earn points for big prizes. Responsible gaming policy in effect. Full terms and conditions apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 4,
      name: '🎲 ME99',
      logo: '/casinoLogo/me99.png',
      bonus: 'Up to A$101 Starter Pack',
      rating: '4.8',
      url:'https://me99aud.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Available to new players from Australia. Licensed and regulated by Pagcor & Curaçao eGaming. Min deposit A$10. 40x wagering applies to bonus and spin winnings. Play responsibly.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 5,
      name: '🎲 ROLEX9',
      logo: '/casinoLogo/rolex9.png',
      bonus: 'Register Free Credit A$99.99 + $10',
      rating: '4.7',
      url:'https://rolex9.net/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Australian players welcome. Operated under Pagcor & Curaçao licence. Deposit minimum A$10 applies. Random second withdraw bonus. Responsible play encouraged. Full bonus terms apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    }
  ];

  const additionalCasinos = [
    {
      rank: 6,
      name: '🎲 GUCCI9',
      logo: '/casinoLogo/gucci9.png',
      bonus: 'New Register Free A$109.99',
      rating: '4.6',
      url:'https://www.gucci9.me/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Licensed under Pagcor & Curaçao eGaming. Min deposit A$10. Slot welcome bonus 50% & 20% daily bonus. Responsible gaming applies. Full T&Cs apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 7,
      name: '🎲 WINNIE13',
      logo: '/casinoLogo/winnie13.png',
      bonus: 'Up to A$122 + 3 Free Spins',
      rating: '4.9',
      url:'https://www.winnie13.net/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Available for Australian players. Operated under Pagcor & Curaçao licence No. 8048/JAZ. Min deposit A$10. Bonus funds subject to 45× wagering. Play responsibly.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 8,
      name: '🎲 MICKY13',
      logo: '/casinoLogo/micky13.png',
      bonus: 'Up to A$365 Daily Free Bonus',
      rating: '4.7',
      url:'https://www.micky13.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Available for Australia-based users. Licensed by Pagcor & Curaçao eGaming. Bonus and spin winnings subject to 35x wagering. Responsible gaming policy in effect and T&C apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 9,
      name: '🎲 MRBEAN9',
      logo: '/casinoLogo/mrbean9.png',
      bonus: 'Up to A$209.99 + 50% Welcome Bonus',
      rating: '4.9',
      url:'https://www.mrbean9.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Available to new players from Australia. Licensed and regulated by Pagcor & Curaçao eGaming. Min deposit A$10. Deposit A$30 get 1 lucky wheel token. Responsible gaming applies. Full T&Cs apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 10,
      name: '🎲 SPONGEBOB13',
      logo: '/casinoLogo/spongebob13.png',
      bonus: 'Up to A$113 Free Credit Bonus',
      rating: '4.8',
      url:'https://www.spongebob13.net/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Australian players welcome. Operated under Pagcor & Curaçao licence. More share can get more bonus. Every deposit random bonus available. Play responsibly and terms & conditions apply',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 11,
      name: '🎲 BYBID9',
      logo: '/casinoLogo/bybid9.png',
      bonus: 'Welcome Bonus 50% + A$70 Share Tasks',
      rating: '4.7',
      url:'https://bybid9.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Licensed under Pagcor & Curaçao eGaming. Min deposit A$10. Grand jackpot up to A$5088. Deposit A$30 can get one spin whel token. Play responsibly. Full terms apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 12,
      name: '🎲 POKEMON13',
      logo: '/casinoLogo/pokemon13.png',
      bonus: 'Up to A$199.99 + 80% Welcome Bonus',
      rating: '4.7',
      url:'https://www.pokemon13.com/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Licensed under Pagcor & Curaçao eGaming. Min deposit A$8. Bonus funds and free spin winnings subject to 40× wagering. Responsible gaming applies. Full T&Cs apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    },
    {
      rank: 13,
      name: '🎲 QUEEN13',
      logo: '/casinoLogo/queen13.png',
      bonus: 'Up to A$1825 Daily Free Bonus',
      rating: '4.8',
      url:'https://www.queen13.net/register/SMSRegister',
      disclaimer: 'Approved ✅ | 18+. Licensed under Pagcor & Curaçao eGaming. Min deposit A$10. Bonus funds and free spin winnings subject to 45× wagering. Responsible gaming applies. Full T&Cs apply.',
      paymentMethods: ['bitcoin', 'ethereum', 'binance', 'tether', 'tron']
    }
  ];

  const displayedCasinos = showMore ? [...initialCasinos, ...additionalCasinos] : initialCasinos;

  const paymentIcons: Record<string, string> = {
    bitcoin: '/cryptoLogo/bitcoin.png',
    ethereum: '/cryptoLogo/ethereum.png',
    binance: '/cryptoLogo/binance.png',
    tether: '/cryptoLogo/tether.png',
    tron: '/cryptoLogo/tron.png',
  };

  return (
    <section id="recommended-crypto-casino" className="py-8 md:py-10 mb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12 text-center">
          Amopay-Supported Crypto eWallet Casinos for Australian Players
        </h1>

        <div className="space-y-4">
          {displayedCasinos.map((casino) => (
            <div
              key={casino.rank}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Desktop Layout with Column Separators */}
              <div className="hidden md:flex items-center p-6">
                {/* Column 1: Logo with Badge + Name */}
                <div className="flex items-center space-x-4 pr-6 border-r border-gray-200" style={{ width: '28%' }}>
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                      <img src={casino.logo} alt={casino.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-[#ffd900] rounded-full flex items-center justify-center text-black font-bold text-sm shadow-md">
                      {casino.rank}
                    </div>
                  </div>
                  <span className="font-bold text-gray-800 text-xl">{casino.name}</span>
                </div>

                {/* Column 2: Bonus Info */}
                <div className="px-6 border-r border-gray-200" style={{ width: '28%' }}>
                  <p className="text-lg text-gray-800 font-bold">{casino.bonus}</p>
                </div>

                {/* Column 3: Rating */}
                <div className="px-6 border-r border-gray-200 text-center" style={{ width: '16%' }}>
                  <div className="inline-flex items-center space-x-1">
                    <span className="text-2xl font-bold text-[#1e3a8a]">{casino.rating}</span>
                    <span className="text-gray-500">/5</span>
                  </div>
                </div>

                {/* Column 4: CTA Button & Payment Methods */}
                <div className="pl-6 flex flex-col items-center space-y-3" style={{ width: '28%' }}>
                  <button 
                    onClick={() => window.open(casino.url, '_blank')}
                    className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3 rounded-md font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer w-full max-w-[200px]"
                  >
                    Play Now
                  </button>
                  <div className="flex items-center space-x-2">
                    {casino.paymentMethods.map((method) => (
                      <img
                        key={method}
                        src={paymentIcons[method]}
                        alt={method}
                        className="w-8 h-8 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden p-4">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                      <img src={casino.logo} alt={casino.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="absolute -top-1 -left-1 w-7 h-7 bg-[#ffd900] rounded-full flex items-center justify-center text-black font-bold text-xs shadow-md">
                      {casino.rank}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{casino.name}</h3>
                    <p className="text-sm text-gray-800 font-bold mb-2">{casino.bonus}</p>
                    <div className="flex items-center space-x-1">
                      <span className="text-xl font-bold text-[#1e3a8a]">{casino.rating}</span>
                      <span className="text-gray-500 text-sm">/5</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('about:blank', '_blank')}
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-md font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer w-full mb-3"
                >
                  Play Now
                </button>

                <div className="flex items-center space-x-2 mb-4">
                  {casino.paymentMethods.map((method) => (
                    <img
                      key={method}
                      src={paymentIcons[method]}
                      alt={method}
                      className="w-8 h-8 object-contain"
                    />
                  ))}
                </div>
              </div>

              {/* Disclaimer (Both Desktop & Mobile) */}
              <div className="px-6 pb-4">
                <p className="text-xs text-gray-500 leading-relaxed">{casino.disclaimer}</p>
              </div>
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowMore(true)}
              className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-md font-semibold transition-colors cursor-pointer"
            >
              Show More Casinos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
