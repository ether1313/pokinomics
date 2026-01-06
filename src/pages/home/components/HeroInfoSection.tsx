export default function HeroInfoSection() {
  const infoItems = [
    'Trusted Australian online eWallet casinos for real money play',
    'Current welcome bonuses and player-friendly promotions',
    'eWallet payment options, payout speed, and withdrawal details',
    'Popular casino games including pokies, table games, and live dealers',
    'Safety standards, licensing highlights, and player protection features',
    'Responsible gambling guidance to help you play smarter'
  ];


  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Hero Illustration Block */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-xl md:text-4xl font-bold text-[#070707] text-center mb-4 md:mb-8">
            Explore Trusted Australian Online eWallet Casinos
          </h1>
          <div className="w-full max-w-7xl mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg overflow-hidden">
              <img 
                src="/20251215630821.png" 
                alt="Discover Best Australian Online Casino Sites" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Info Box Block */}
        <div className="max-w-6xl mx-auto px-2 md:px-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            In this article, you'll find:
          </h3>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8">
            <div className="space-y-4 md:space-y-5">
              {infoItems.map((item, index) => (
                <div key={index} className="flex gap-3 md:gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 md:w-6 md:h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm md:text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 md:mt-8 pt-2 md:pt-4 border-t border-gray-200">
              <p className="text-sm md:text-base text-gray-600 italic text-right">
                – Casino Review Expert Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
