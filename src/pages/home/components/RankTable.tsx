export default function RankTable() {
  const casinos = [
    {
      logo: '/bestPayout/ipay9.png',
      games: 'Top RTP Pokies (97.2% RTP), Progressive Jackpot Pokies (96.4% RTP), Megaways Pokies (96.1% RTP)',
      payoutTime: '0 – 24 hours',
      methods: 'Visa/Mastercard, Apple/Google Pay, Amopay, PayID, Osko, Speedpay',
      url: 'https://ipay9aud.com/register/SMSRegister',
    },
    {
      logo: '/bestPayout/kingbet9.png',
      games: 'Live Dealer Roulette (97.3% RTP), Live Baccarat Speed Tables (98.1% RTP), Live Game Show Tables (96.8% RTP)',
      payoutTime: '1 – 24 hours',
      methods: 'Visa/Mastercard, Apple/Google Pay, Amopay, PayID, Osko, Speedpay',
      url: 'https://www.kingbet9aus.com/register/SMSRegister',
    },
    {
      logo: '/bestPayout/bp77.png',
      games: 'Classic Pokies (96.7% RTP), Roulette Live (97.1% RTP), Progressive Pokies (96.0% RTP)',
      payoutTime: '0 – 24 hours',
      methods: 'Visa/Mastercard, Apple/Google Pay, Amopay, PayID, Osko, Speedpay',
      url: 'https://www.bigpay77.net/register/SMSRegister',
    },
    {
      logo: '/bestPayout/me99.png',
      games: 'High RTP Pokies (97.0% RTP), Jackpot Megaways (96.3% RTP), Live Lightning Roulette (97.1% RTP)',
      payoutTime: '0 – 24 hours',
      methods: 'Visa/Mastercard, Apple/Google Pay, Amopay, PayID, Osko, Speedpay',
      url: 'https://me99aud.com/register/SMSRegister',
    }
  ];

  return (
    <section id="top-rank-casino" className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center">
          Popular & Trusted Australian Online eWallet Casinos
        </h1>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                  Casino Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                  Best Paying Games
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                  Average Payout Times
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                  Payment Methods Available
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                  Casino Link
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {casinos.map((casino, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 border-b">
                    <img src={casino.logo} alt="casino logo" className="h-8 w-auto" />
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600 border-b">
                    {casino.games}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600 border-b">
                    {casino.payoutTime}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600 border-b">
                    {casino.methods}
                  </td>

                  <td className="px-6 py-4 border-b text-center">
                    <button
                      onClick={() => window.open(casino.url, '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2 rounded-md transition"
                    >
                      Play
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-4">
          {casinos.map((casino, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4"
            >
              <img src={casino.logo} alt="casino logo" className="h-10 mb-3" />

              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-sm text-black font-bold mb-1">Best Paying Games</p>
                  <p className="text-sm text-gray-700">{casino.games}</p>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-black font-bold">Payout Time</span>
                  <span className="text-gray-700">{casino.payoutTime}</span>
                </div>

                <div>
                  <p className="text-sm text-black font-bold mb-1">Payment Methods Available</p>
                  <p className="text-sm text-gray-700">{casino.methods}</p>
                </div>
              </div>

              <button
                onClick={() => window.open(casino.url, '_blank')}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md text-sm transition"
              >
                Play Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
