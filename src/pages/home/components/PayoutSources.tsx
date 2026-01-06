import React from "react";
import { useState } from "react";

export default function PayoutSources() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
    {
        q: "What is a fastpay casino in Australia?",
        a: "A fastpay casino is an online ewallet casino that processes withdrawals instantly or within hours. These Australian fast payout casinos use rapid payment options such as PayID, Osko, Speedpay, e-wallets, or Amopay (crypto) to ensure players receive real-money winnings without delays.",
    },
    {
        q: "Are fastpay casinos safe for Australian players?",
        a: "Yes. Legitimate Australian fast payout casinos operate under reputable licences and use encrypted banking, fraud protection, and independent auditing. These safeguards help ensure fast withdrawals are both secure and reliable for real-money gaming.",
    },
    {
        q: "Which payment methods offer instant withdrawals?",
        a: "Popular instant payout methods include PayID, Osko, crypto wallets, and instant bank transfers. These methods allow Australian players to receive their casino winnings within minutes instead of waiting days.",
    },
    {
        q: "How fast can I expect my withdrawals in fast payout casinos?",
        a: "Most withdrawals at instant payout casinos are processed within minutes to a few hours. The exact speed depends on your chosen payment method, verification status, and the casino’s internal payout team.",
    },
    {
        q: "Why should I use instant payout casinos in Australia?",
        a: "Instant payout casinos offer quicker access to winnings, fewer pending delays, and smoother gameplay. They are ideal for players wanting fast cashouts, reliable banking, and modern payment options like Amopay, Osko, PayID or e-wallets.",
    },
    {
        q: "Do fastpay casinos charge withdrawal fees?",
        a: "Most fast payout casinos do not charge withdrawal fees. However, certain e-wallets, crypto networks, or banks may apply small processing charges depending on the transaction type.",
    },
    {
        q: "How can I speed up my casino withdrawal process?",
        a: "To maximise withdrawal speed, verify your casino account early, use instant-friendly payment methods like PayID or crypto, ensure your banking details are accurate, and avoid submitting multiple withdrawal requests at once.",
    },
    ];


  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-0 py-10 text-gray-800">

      {/* ---------------- TOP BANNER IMAGE ---------------- */}
      <div className="w-full max-w-7xl mx-auto mb-6">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg overflow-hidden">
          <img
            src="/2025153710001.png"
            alt="Regulations & Licensing Online Casino Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* ---------------- SECTION A: REGULATIONS ---------------- */}
      <section className="mb-12">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Regulations & Licensing for Australian Fast Payout eWallet Casinos
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-4">
          Australian fast payout casinos must operate under reputable offshore
          licenses such as the Curacao Gaming License or Malta Gaming Authority (MGA).
          These licensing bodies ensure secure processing, fair gaming standards, and
          strong player protection. All essential for reliable instant withdrawal casinos.
        </p>

        <p className="leading-relaxed text-base md:text-md text-gray-700">
          Licensed fastpay casinos also implement encrypted banking, strict auditing
          rules, and verified payout systems, giving Australian players safe and fast
          access to their real-money winnings without delays.
        </p>
      </section>

      {/* ---------------- SECTION B: POPULAR POKIES ---------------- */}
      <section id="popular-pokies" className="mb-12">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
          Instant Payout Pokies Games for Australian Players
        </h2>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block w-full max-w-5xl border rounded-lg overflow-hidden shadow-sm bg-white">
          <div className="grid grid-cols-4 bg-black text-white font-semibold text-base md:text-md">
            <div className="p-4">Pokie Name</div>
            <div className="p-4">Type</div>
            <div className="p-4">Feature</div>
            <div className="p-4">RTP %</div>
          </div>

          {[
            ["Coin Volcano", "Progressive Jackpot", "Volcano Bonus + Massive Jackpots", "92.17%"],
            ["Maya Lock", "Classic Slot", "Expanding Wilds, Re-spins", "96.67%"],
            ["Coin Strike", "Bonus Feature Slot", "Avalanche Multipliers", "95.57%"],
            ["Thunder Coins", "Jackpot Pokies", "Money Respin", "96.91%"],
            ["Mayan Blaze", "Video Slot", "Lightning Reels + Multiplier Boosts", "95.19%"],
            ["Super Powerful", "Feature Buy Slot", "Multiplier Wins", "97.78%"],
            ["Dragon Destiny", "High Volatility", "Free Spins, Expanding Symbols", "96.14%"],
            ["Magic Apple", "Hold & Win Slot", "Bonus Rounds, Multipliers", "96.89%"],
            ["Triple Supreme Olympus", "Tumbling Reels", "Unlimited Multipliers", "96.57%"],
            ["Super Ace", "Classic Slot", "Re-spins, Multiplier Wheel", "96.25%"],
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 border-t">
              {row.map((cell, j) => (
                <div key={j} className="p-4 text-gray-800">
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* MOBILE MINIMALIST CARDS */}
        <div className="md:hidden space-y-6">
          {[
            {
              pokie: "Coin Volcano",
              type: "Progressive Jackpot",
              feature: "Volcano Bonus + Massive Jackpots",
              rtp: "92.17%",
            },
            {
              pokie: "Maya Lock",
              type: "Classic Slot",
              feature: "Expanding Wilds, Re-spins",
              rtp: "96.67%",
            },
            {
              pokie: "Coin Strike",
              type: "Bonus Feature Slot",
              feature: "Avalanche Multipliers",
              rtp: "95.57%",
            },
            {
              pokie: "Thunder Coins",
              type: "Jackpot Pokies",
              feature: "Money Respin",
              rtp: "96.91%",
            },
            {
              pokie: "Mayan Blaze",
              type: "Video Slot",
              feature: "Lightning Reels + Multiplier Boosts",
              rtp: "95.19%",
            },
            {
              pokie: "Super Powerful",
              type: "Feature Buy Slot",
              feature: "Multiplier Wins",
              rtp: "97.78%",
            },
            {
              pokie: "Dragon Destiny",
              type: "High Volatility",
              feature: "Free Spins, Expanding Symbols",
              rtp: "96.14%",
            },
            {
              pokie: "Magic Apple",
              type: "Hold & Win Slot",
              feature: "Bonus Rounds, Multipliers",
              rtp: "96.89%",
            },
            {
              pokie: "Triple Supreme Olympus",
              type: "Tumbling Reels",
              feature: "Unlimited Multipliers",
              rtp: "96.57%",
            },
            {
              pokie: "Super Ace",
              type: "Classic Slot",
              feature: "Re-spins, Multiplier Wheel",
              rtp: "96.25",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-gray-50 shadow-sm space-y-2"
            >
              <p className="text-lg font-semibold text-gray-900">{item.pokie}</p>
              <p className="text-gray-700 text-sm">
                <strong>Type:</strong> {item.type}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Feature:</strong> {item.feature}
              </p>
              <p className="text-gray-900 font-semibold">
                <strong>RTP:</strong> {item.rtp}
              </p>
            </div>
          ))}
        </div>
      </section>

        {/* ---------------- SECTION C: FAQ ---------------- */}
        <section id="payout-faqs" className="mb-12 text-left">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8">
            Instant Withdrawal Casinos in Australia – FAQ Guide
        </h2>

        <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border ml-0">

            {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
                <div
                key={i}
                className="border-b px-6 py-5 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                    <span
                    className={`text-base md:text-md font-semibold transition-colors ${
                        isOpen ? "text-blue-600" : "text-gray-900"
                    }`}
                    >
                    {i + 1}. {item.q}
                    </span>

                    <span
                    className={`text-xl text-gray-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    >
                    ⌄
                    </span>
                </div>

                {/* Answer */}
                {isOpen && (
                    <p className="text-gray-700 mt-4 leading-relaxed">
                    {item.a}
                    </p>
                )}
                </div>
            );
            })}
            </div>
        </section>

    </div>
  );
}
