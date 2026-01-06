import React from "react";

export default function CryptoCasinoTable() {
  const casinos = [
    {
      name: "IPAY9",
      bonus: "100% Welcome Bonus + Daily Easy Step A$100",
      url: "https://ipay9aud.com/register/SMSRegister",
      logo: "/casinoLogoOri/ipay9.png",
    },
    {
      name: "KINGBET9",
      bonus: "A$199.99 Free Credit + Enhanced Daily Rewards",
      url: "https://www.kingbet9aus.com/register/SMSRegister",
      logo: "/casinoLogoOri/kingbet9.png",
    },
    {
      name: "BIGPAY77",
      bonus: "A$187.77 New Registration Offer + Extra Daily Boosts",
      url: "https://www.bigpay77.net/register/SMSRegister",
      logo: "/casinoLogoOri/bp77.png",
    },
    {
      name: "ME99",
      bonus: "A$101 Starter Pack + Free A$99.99 Registration Bonus",
      url: "https://me99aud.com/register/SMSRegister",
      logo: "/casinoLogoOri/me99.png",
    },
    {
      name: "GUCCI9",
      bonus: "Free A$109.99 Registration Bonus + VIP Reward Boost",
      url: "https://www.gucci9.me/register/SMSRegister",
      logo: "/casinoLogoOri/gucci9.png",
    },
    {
      name: "BYBID9",
      bonus: "50% Welcome Bonus + A$70 Share Tasks",
      url: "https://bybid9.com/register/SMSRegister",
      logo: "/casinoLogoOri/bybid9.png",
    },
    {
      name: "ROLEX9",
      bonus: "Free A$99.99 Credit + Extra A$10 Bonus",
      url: "https://rolex9.net/register/SMSRegister",
      logo: "/casinoLogoOri/rolex9.png",
    },
    {
      name: "WINNIE13",
      bonus: "A$99 Share Bonus + Free A$103.33 Register Reward",
      url: "https://www.winnie13.net/register/SMSRegister",
      logo: "/casinoLogoOri/winnie13.png",
    },
    {
      name: "MICKY13",
      bonus: "Up to A$365 Daily Free Bonus",
      url: "https://www.micky13.com/register/SMSRegister",
      logo: "/casinoLogoOri/micky13.png",
    },
    {
      name: "MRBEAN9",
      bonus: "A$209.99 Bonus + 50% Welcome Boost",
      url: "https://www.mrbean9.com/register/SMSRegister",
      logo: "/casinoLogoOri/mrbean9.png",
    },
    {
      name: "QUEEN13",
      bonus: "Up to A$1825 Daily Free Bonus",
      url: "https://www.queen13.net/register/SMSRegister",
      logo: "/casinoLogoOri/queen13.png",
    },
    {
      name: "POKEMON13",
      bonus: "Up to A$199.99 + 80% Welcome Bonus",
      url: "https://www.pokemon13.com/register/SMSRegister",
      logo: "/casinoLogoOri/pokemon13.png",
    },
    {
      name: "SPONGEBOB13",
      bonus: "Up to A$113 Free Credit Bonus",
      url: "https://www.spongebob13.net/register/SMSRegister",
      logo: "/casinoLogoOri/spongebob13.png",
    }
  ];

  const detectBonusType = (bonus: string) => {
    if (bonus.includes("%") && bonus.includes("Bonus")) return "Welcome Bonus";
    if (bonus.includes("Free Credit")) return "Free Credit Bonus";
    if (bonus.includes("Daily")) return "Daily Bonus";
    if (bonus.includes("Registration")) return "Registration Bonus";
    if (bonus.includes("Share")) return "Share-Based Bonus";
    return "Mixed Bonus";
  };

  return (
    <div id="comparison-table" className="w-full max-w-7xl mx-auto px-4 md:px-0 text-gray-800 my-10">
      {/* TITLE */}
      <section className="mb-10">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-3">
          Understanding Welcome Bonuses at Crypto eWallet Gaming Casinos
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Compare the best crypto casino bonuses in Australia. Fast withdrawals, low minimum deposits, VIP rewards, and high-value promotions.
        </p>
      </section>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Casino</th>
              <th className="px-4 py-3 text-left">Bonus Offer</th>
              <th className="px-4 py-3 text-left">Bonus Type</th>
              <th className="px-4 py-3 text-left">Min Deposit</th>
              <th className="px-4 py-3 text-left">Visit</th>
            </tr>
          </thead>
          <tbody>
            {casinos.map((c, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold">{c.name}</td>
                <td className="px-4 py-3">{c.bonus}</td>
                <td className="px-4 py-3 text-blue-700 font-medium">
                  {detectBonusType(c.bonus)}
                </td>
                <td className="px-4 py-3">A$10</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => window.open(c.url, "_blank")}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-md text-sm"
                  >
                    Play Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-4 md:hidden">
        {casinos.map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm"
            style={{
              backgroundImage: `url(${c.logo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "80%",
            }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-white/80"></div>

            {/* Content */}
            <div className="relative z-10 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">{c.name}</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {detectBonusType(c.bonus)}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3">{c.bonus}</p>

              <button
                onClick={() => window.open(c.url, "_blank")}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md text-sm"
              >
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
