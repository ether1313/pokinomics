import React, { useState } from "react";

export default function CryptoConclusion() {
  const cryptos = [
    {
      logo: "/cryptoLogo/bitcoin.png",
      name: "Bitcoin (BTC)",
      year: "2009",
      description:
        "The first and most widely accepted cryptocurrency. Commonly supported by almost all crypto casinos.",
      stability: "Medium",
      speed: "Slow",
      useCase: "High-value deposits & withdrawals",
    },
    {
      logo: "/cryptoLogo/ethereum.png",
      name: "Ethereum (ETH)",
      year: "2015",
      description:
        "A popular smart contract platform offering faster transactions than Bitcoin and wide casino support.",
      stability: "Medium",
      speed: "Medium",
      useCase: "General gameplay & withdrawals",
    },
    {
      logo: "/cryptoLogo/tether.png",
      name: "Tether (USDT)",
      year: "2014",
      description:
        "A stablecoin pegged to the US dollar, designed to minimize price volatility.",
      stability: "High",
      speed: "Fast",
      useCase: "Stable deposits & bankroll control",
    },
    {
      logo: "/cryptoLogo/tron.png",
      name: "Tron (TRX)",
      year: "2017",
      description:
        "A high-throughput blockchain known for ultra-fast transactions and extremely low network fees, widely used in crypto casinos.",
      stability: "Medium",
      speed: "Very Fast",
      useCase: "Low-fee deposits & rapid withdrawals",
    },
    {
      logo: "/cryptoLogo/binance.png",
      name: "Binance Coin (BNB)",
      year: "2017",
      description:
        "A utility token with fast transaction speeds and low network fees.",
      stability: "Medium",
      speed: "Very Fast",
      useCase: "Low-fee gaming & fast payouts",
    },
  ];

  const faqs = [
    {
      question: "What is a Crypto Casino?",
      answer:
        "A crypto casino is an online gambling platform that allows players to wager using cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), USDT, Tron (TRX), and Binance Coin (BNB). Crypto casinos often offer faster transactions, improved privacy, and flexible bonuses compared to traditional casinos.",
    },
    {
      question: "What is the best Crypto Casino in Australia?",
      answer:
        "The best crypto casino depends on your priorities — fast withdrawals, strong bonuses, supported cryptocurrencies, or game variety. This guide ranks the top crypto casinos based on security, payout speed, and overall player experience.",
    },
    {
      question: "Are Crypto casinos legal in Australia?",
      answer:
        "Crypto casinos operate in a legal grey area. Australian players typically access offshore platforms with international licenses. Always choose reputable sites with strong security standards.",
    },
    {
      question: "Are winnings from Crypto casinos taxable in Australia?",
      answer:
        "Casual gambling winnings are generally not taxable. However, crypto-related activities may have tax implications depending on usage. Always consult a tax professional.",
    },
    {
      question: "How do I deposit at Australian Crypto casinos?",
      answer:
        "You deposit by sending cryptocurrency from your wallet or exchange to the casino’s wallet address. Most deposits are confirmed within minutes.",
    },
    {
      question: "Can I play at Crypto casinos on a smartphone?",
      answer:
        "Yes. Most crypto casinos are fully mobile-optimized and can be played directly in your browser.",
    },
    {
      question: "How secure are Crypto online casinos?",
      answer:
        "Top crypto casinos use SSL encryption, secure wallet systems, and provably fair technology to protect players.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  return (
    <div className="w-full max-w-5xl ml-0 mr-auto px-4 md:px-0 mb-16 text-gray-800">
      {/* ================= CRYPTO COMPARISON ================= */}
      <section className="mb-14">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          Cryptocurrency Comparison for Crypto Casino Gaming
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Asset</th>
                <th className="px-4 py-3">Launched</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Stability</th>
                <th className="px-4 py-3">Speed</th>
                <th className="px-4 py-3">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {cryptos.map((c, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3 flex items-center gap-2 font-semibold">
                    <img src={c.logo} className="w-5 h-5" />
                    {c.name}
                  </td>
                  <td className="px-4 py-3">{c.year}</td>
                  <td className="px-4 py-3 text-sm">{c.description}</td>
                  <td className="px-4 py-3">{c.stability}</td>
                  <td className="px-4 py-3">{c.speed}</td>
                  <td className="px-4 py-3 text-sm">{c.useCase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {cryptos.map((c, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img src={c.logo} className="w-5 h-5" />
                <span className="font-semibold">{c.name}</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">{c.description}</p>
              <div className="flex justify-between text-xs font-bold text-black">
                <span>Stability: {c.stability}</span>
                <span>Speed: {c.speed}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW CRYPTO CASINOS WORK ================= */}
      <section id="how-cryptoCasino-work" className="mb-10">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          How Crypto Casinos Work for Australian Players
        </h2>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-bold text-gray-900">
                  Topic
                </th>
                <th className="px-5 py-4 text-left text-sm font-bold text-gray-900">
                  Explanation
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr className="border-t">
                <td className="px-5 py-4 font-semibold text-gray-900 w-1/3">
                  How to Deposit at Crypto Casinos
                </td>
                <td className="px-5 py-4 text-gray-700 leading-relaxed">
                  Depositing at a crypto casino involves sending cryptocurrency such as
                  Bitcoin, Ethereum, USDT, Tron, or Binance Coin from your personal wallet
                  or exchange account to the casino’s designated wallet address. Once the
                  transaction is confirmed on the blockchain, your casino balance is
                  updated, often within minutes. This process removes the need for banks
                  or payment processors and allows for faster, borderless deposits.
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-5 py-4 font-semibold text-gray-900">
                  How to Withdraw from Crypto Casinos
                </td>
                <td className="px-5 py-4 text-gray-700 leading-relaxed">
                  Withdrawals at crypto casinos are typically processed by sending your
                  winnings directly back to your crypto wallet. After a brief internal
                  review, payouts are broadcast to the blockchain, allowing players to
                  receive funds much faster than traditional withdrawal methods.
                  Stablecoins such as USDT or BTC are commonly used for predictable payout
                  values.
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-5 py-4 font-semibold text-gray-900">
                  Are Crypto Casinos Legal and Safe?
                </td>
                <td className="px-5 py-4 text-gray-700 leading-relaxed">
                  Crypto casinos generally operate under international licenses and are
                  accessible to Australian players through offshore platforms. Reputable
                  crypto casinos implement SSL encryption, secure wallet integrations,
                  and provably fair systems to ensure game integrity. Choosing established,
                  well-reviewed platforms is essential for maintaining a safe and secure
                  gaming experience.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              How to Deposit at Crypto Casinos
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Depositing at a crypto casino involves sending cryptocurrency such as
              Bitcoin, Ethereum, USDT, Tron, or Binance Coin from your personal wallet
              or exchange account to the casino’s designated wallet address. Once the
              transaction is confirmed on the blockchain, your casino balance is
              updated, often within minutes. This process removes the need for banks
              or payment processors and allows for faster, borderless deposits.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              How to Withdraw from Crypto Casinos
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Withdrawals at crypto casinos are typically processed by sending your
              winnings directly back to your crypto wallet. After a brief internal
              review, payouts are broadcast to the blockchain, allowing players to
              receive funds much faster than traditional withdrawal methods.
              Stablecoins such as USDT or BTC are commonly used for predictable payout
              values.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              Are Crypto Casinos Legal and Safe?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Crypto casinos generally operate under international licenses and are
              accessible to Australian players through offshore platforms. Reputable
              crypto casinos implement SSL encryption, secure wallet integrations,
              and provably fair systems to ensure game integrity. Choosing established,
              well-reviewed platforms is essential for maintaining a safe and secure
              gaming experience.
            </p>
          </div>
        </div>
      </section>


      {/* ================= CONCLUSION ================= */}
      <section className="mb-10">
        <h2 className="text-xl md:text-4xl font-bold mb-4">
          Conclusion: Choosing Best Crypto Casino in Australia
        </h2>
        <p className="leading-relaxed mb-4">
          Crypto casinos have established themselves as a leading alternative to
          traditional online gambling platforms in 2025. For Australian players,
          they offer faster payouts, global accessibility, flexible banking options,
          and a growing selection of games powered by blockchain technology.
        </p>
        <p className="leading-relaxed">
          By understanding how crypto casinos work and selecting platforms that
          prioritize security, transparency, and responsible gaming, players can
          enjoy a more efficient and modern gambling experience. All casinos featured
          in this guide have been carefully reviewed to help you make informed and
          confident choices.
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <section id="crypto-faqs">
        <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>

        <div className="border border-gray-200 rounded-xl bg-white">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isLast={i === faqs.length - 1}
              open={activeIndex === i}
              onToggle={() =>
                setActiveIndex(activeIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================= FAQ ITEM ================= */

function FAQItem({
  question,
  answer,
  isLast,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  isLast: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`px-5 py-4 ${!isLast ? "border-b" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold">{question}</span>
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="mt-3 text-sm leading-relaxed text-gray-700">
          {answer}
        </p>
      )}
    </div>
  );
}

