import React from "react";

export default function CryptoSources() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 text-gray-800">
      {/* ================== SECTION 1: WHAT IS A BITCOIN CASINO ================== */}
      <section id="crypto-general" className="mb-14">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
          What Is a Crypto Casino? How Does it Works?
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-4">
          Crypto casinos are online gambling platforms that allow players to
          deposit, play, and withdraw using digital currencies such as Bitcoin,
          Ethereum, USDT, and Tron. These casinos often feature
          blockchain-powered systems, provably fair gaming technology, instant
          crypto deposits, and fast, secure withdrawals, making them highly
          appealing to Australian players who prefer modern, private, and
          efficient payment methods.
        </p>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-4">
          In terms of gameplay, crypto casinos operate similarly to traditional
          online casinos, but they provide several major advantages:
          lightning-fast transactions, low fees, enhanced anonymity, and fewer
          restrictions compared to bank-based payment methods. Because crypto
          payments bypass conventional financial institutions, many crypto
          casinos are able to offer bigger welcome bonuses, smoother payouts,
          and a more flexible overall gaming experience for real-money
          Australian players.
        </p>

        <div className="w-full mt-8">
          <img
            src="/casino-resouce-bg.png"
            alt="Crypto Casinos Australia"
            className="w-full rounded-md object-cover shadow-sm"
          />
        </div>
      </section>

      {/* ================== QUOTE BOX ================== */}
      <section className="mb-14">
        <div className="border border-blue-400 rounded-xl p-6 md:p-10 bg-white shadow-sm">
          <div className="text-blue-500 text-3xl mb-4">❝</div>

          <p className="text-base md:text-md font-semibold text-gray-900 leading-relaxed mb-4">
            Cryptocurrencies are highly volatile. To minimize risk, consider
            using stablecoins (e.g., USDT/BTC/TRX) or ensure you fully understand the
            potential fluctuations before gambling with digital assets.
          </p>

          <p className="text-gray-700">– William S.</p>
        </div>
      </section>

      {/* ================== SECTION 2: HOW WE TEST CRYPTO CASINOS ================== */}
      <section className="max-w-7xl mb-14">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
          How We Review Australia eWallet Casinos That Accept Crypto
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-8">
          Our review team evaluates Crypto casinos using a strict ranking
          methodology that analyses licensing, crypto transaction speed,
          platform security, fee structure, and overall gaming quality. Here’s
          the criteria we use to rate crypto casinos for Australian players:
        </p>

        <div className="space-y-6">
          {[
            {
              step: "Step 1 - Secure crypto payments",
              desc: "We verify the casino’s reputation, legitimacy, and wallet-level encryption to ensure safe crypto transactions.",
            },
            {
              step: "Step 2 - Fast deposits & withdrawals",
              desc: "We test deposit and withdrawal speeds using major coins like BTC, ETH, and USDT with minimum deposit thresholds.",
            },
            {
              step: "Step 3 - Low crypto banking fees",
              desc: "We examine gas fees, network charges, and exchange fees to recommend casinos with low-cost crypto transfers.",
            },
            {
              step: "Step 4 - Fair deposit & withdrawal limits",
              desc: "We check whether casinos allow reasonable withdrawal caps—some allow A$10,000 or more per transaction in crypto.",
            },
            {
              step: "Step 5 - Crypto casino software",
              desc: "We evaluate software providers, game fairness, live dealer quality, and pokie variety from major studios.",
            },
            {
              step: "Step 6 - Crypto bonuses & promotions",
              desc: "We review sign-up bonuses, reload offers, prize pools, and loyalty rewards specific to crypto depositors.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="text-blue-600 text-2xl">⃝</div>
              <div>
                <p className="text-md md:text-lg font-semibold text-gray-900">
                  {item.step}
                </p>
                <p className="text-base md:text-md text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== SECTION 3: HOW TO DEPOSIT ================== */}
      <section className="max-w-7xl mb-14">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Deposit Crypto and Play at Australia eWallet Casino
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-6">
          All major crypto casinos support BTC deposits, and many also accept
          ETH, Binance, USDT, and TRX. Here are the simple steps for depositing at an
          Australian crypto-friendly casino:
        </p>

        <div className="space-y-6">
          {[
            "Choose a crypto casino that fits your playstyle.",
            "Create a new account, many casinos let you sign up using a crypto wallet.",
            "Deposit with Bitcoin or other supported crypto assets at the cashier page.",
            "Start playing once your deposit is confirmed (usually within seconds).",
          ].map((step, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="text-blue-600 font-bold text-xl">
                {i + 1}
              </div>
              <p className="text-gray-800 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== SECTION 4: HOW TO WITHDRAW ================== */}
      <section className="max-w-7xl mb-14">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Withdraw from Crypto Casinos?
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-6">
          Withdrawing crypto is just as easy and often much faster than
          traditional cashouts. Here’s how Australian players can cash out
          using BTC or other cryptocurrencies:
        </p>

        <div className="space-y-6">
          {[
            "Go to the withdrawal page and choose a crypto withdrawal option.",
            "Select your preferred cryptocurrency such as BTC, ETH, or USDT.",
            "Enter the withdrawal amount and your wallet address.",
            "Confirm and wait a few minutes for the blockchain confirmation.",
          ].map((step, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="text-blue-600 font-bold text-xl">
                {i + 1}
              </div>
              <p className="text-gray-800 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          * Tip: Some{" "}
          <span className="text-blue-600 underline">
            no KYC casinos Australia
          </span>{" "}
          allow faster crypto withdrawals with fewer verification steps.
        </p>
      </section>

      {/* ================== SECTION 5: BENEFITS OF USING BITCOIN ================== */}
      <section className="max-w-7xl mb-10">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
          Benefits of Using Crypto at Australia eWallet Casinos
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-4">
          Using Bitcoin and other cryptocurrencies for online gambling offers
          several clear advantages compared to traditional payment methods.
          Many Australia online casinos now support crypto payments to provide
          players with a safer, faster, and more private gaming experience.
        </p>

        <p className="leading-relaxed text-base md:text-md text-gray-700 mb-4">
          One major benefit of Crypto casinos is speed. Crypto deposits are
          usually processed instantly, and withdrawals are often completed
          within minutes rather than days. This makes crypto online casinos
          especially attractive to players who value fast payouts and smooth
          banking.
        </p>

        <p className="leading-relaxed text-base md:text-md text-gray-700">
          Crypto gambling platforms also tend to offer higher bonus limits,
          flexible deposit and withdrawal caps, and access to exclusive crypto
          casino games that are not available on traditional online casinos.
          Combined with enhanced privacy and provably fair gaming systems,
          Crypto casinos provide a modern and efficient way for Australian
          players to enjoy real-money online casino gaming.
        </p>
      </section>
    </div>
  );
}
