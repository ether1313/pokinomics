// PayoutDescription.tsx
import React from "react";

export default function PayoutDescription() {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-0 py-2 text-gray-800">

      {/* SECTION 1 — What is Fast Payout Online Casino */}
      <section id="quick-review" className="mb-8 md:mb-16">

        {/* TITLE */}
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          What Is a Fast Payout Online eWallet Casino?
        </h2>

        {/* IMAGE BLOCK — perfectly aligned like your sample */}
        <div className="w-full max-w-7xl mx-auto mb-6">
          <div className="w-full rounded-xl overflow-hidden">
            <img 
              src="/202512177174219.png"
              alt="Fast payout casino concept"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* PARAGRAPH 1 */}
        <p className="leading-relaxed text-base md:text-md text-gray-700">
          A fast payout online casino allows Australian players to receive their 
          real-money withdrawals within minutes or just a few hours. These fast withdrawal casinos 
          support instant banking methods such as PayID, Osko, Amopay (crypto), e-wallets, and instant bank transfers, 
          ensuring smooth, secure, and delay-free transactions.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="leading-relaxed mt-4 text-base md:text-md text-gray-700">
          Many fast payout platforms also offer high-RTP pokies, fast verification steps, and a seamless 
          cashout system, making them ideal for players who want the fastest possible online casino payouts.
        </p>

      </section>


      {/* SECTION 2 — Legal */}
      <section className="mb-8 md:mb-16">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Is It Legal to Play Fast Payout Casinos for Real Money?
        </h2>

        <p className="leading-relaxed text-base md:text-md text-gray-700">
          Yes. Australian players can legally enjoy fast payout online casinos as long as the platforms 
          are licensed offshore and meet international gaming standards. These casinos provide secure banking, 
          real-money pokies, encrypted payments, and fast withdrawal processing without violating Australian laws.
        </p>

        <p className="leading-relaxed mt-4 text-base md:text-md text-gray-700">
          Always choose licensed and reputable casinos to ensure safe and reliable cashouts.
        </p>
      </section>

      {/* SECTION 3 — Key Facts */}
      <section className="mb-8 md:mb-16">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Key Facts About Fast Payout Casinos in Australia
        </h2>

        <ul className="space-y-6">
          {[
            {
              title: "Fast Withdrawals",
              desc: "Receive winnings in minutes to hours — ideal for players seeking fast payout casino performance."
            },
            {
              title: "Multiple Instant Banking Methods",
              desc: "Support for Osko, Speedpay, PayID, e-wallets, Amopay (crypto support), and instant transfers ensures smooth and fast real-money cashouts."
            },
            {
              title: "Generous Bonuses for Pokies Players",
              desc: "Enjoy free spins, deposit bonuses, and cashback offers designed for Australian pokies and online casino players."
            },
            {
              title: "Huge Pokies & Online Casino Game Selection",
              desc: "Play thousands of pokies, jackpots, and live dealer games with fast withdrawal options for all players."
            },
            {
              title: "Low Minimum Deposits",
              desc: "Perfect for new real-money players wanting fast and affordable entry into online casino gaming."
            },
            {
              title: "VIP Rewards & Priority Support",
              desc: "High-value players enjoy faster cashouts, exclusive bonuses, and dedicated customer service."
            },
            {
              title: "Licensed & Secure Platforms",
              desc: "All recommended casinos are encrypted, regulated, and safe for fast real-money withdrawals."
            }
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">

              {/* Symbol */}
              <span className="text-red-500 text-xl md:text-2xl leading-none">⌯⌲</span>

              {/* Text */}
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 text-base md:text-lg">{item.title}</p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>

            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 4 — Ranking Criteria */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          How Do We Rank Fast Payout Casinos?
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "Step 1 — Withdrawal Speed",
              desc: "Casinos must support instant or same-day withdrawals using fast methods like crypto, e-wallets, PayID, Osko, and Speedpay."
            },
            {
              title: "Step 2 — Payment Methods",
              desc: "Top casinos offer multiple instant cashout options including Amopay, Osko, PayID, Speedpay, debit/credit cards, and e-wallets."
            },
            {
              title: "Step 3 — Wagering Requirements",
              desc: "We prioritise casinos with low playthrough rules so players can withdraw winnings faster."
            },
            {
              title: "Step 4 — Customer Support",
              desc: "Fast payout casinos must offer 24/7 live chat and quick issue resolution for withdrawal concerns."
            },
            {
              title: "Step 5 — Casino Reputation",
              desc: "We only recommend casinos with strong payout histories, real player reviews, and verified licenses."
            }
          ].map((item, i) => (
            <div key={i} className="pl-1 border-l-4 border-blue-500">
              <h3 className="text-md md:text-lg font-semibold mb-2">{item.title}</h3>
              <p className="leading-relaxed text-base md:text-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — Best Withdrawal Methods */}
      <section className="max-w-6xl mb-12 md:mb-16">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-6">
          eWallet Casino Withdrawal Methods for Fast & Secure Cashouts
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Here is a clean comparison table showing the pros and cons of the most common
          withdrawal methods used by Australian players.
        </p>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block w-full border rounded-lg overflow-hidden shadow-sm">

          {/* TABLE HEADER */}
          <div className="grid grid-cols-3 bg-black text-white font-semibold text-base">
            <div className="p-4">Method</div>
            <div className="p-4 text-green-300">Pros</div>
            <div className="p-4 text-red-300">Cons</div>
          </div>

          {/* TABLE ROWS */}
          {[
            {
              method: "Cryptocurrencies",
              pros: [
                "Instant withdrawals with no banking delays",
                "High security and anonymity",
                "Low or zero transaction fees",
                "No bank restrictions or third-party interference"
              ],
              cons: [
                "Not all casinos support crypto withdrawals",
                "Crypto volatility may affect value",
                "Requires knowledge of digital wallets"
              ]
            },
            {
              method: "E-Wallets",
              pros: [
                "Fast processing (usually within minutes)",
                "User-friendly and widely accepted",
                "Secure transactions with fraud protection",
                "No need to share bank details"
              ],
              cons: [
                "Some casinos exclude e-wallets from bonuses",
                "Possible small withdrawal fees",
                "May require identity verification steps"
              ]
            },
            {
              method: "Credit & Debit Cards",
              pros: [
                "Widely accepted at most online casinos",
                "Easy to use for deposits & withdrawals",
                "No third-party apps required"
              ],
              cons: [
                "Withdrawals may take 2–5 business days",
                "Banks may block gambling-related payments",
                "Higher bank processing fees"
              ]
            },
            {
              method: "Bank Transfers",
              pros: [
                "Ideal for large real-money withdrawals",
                "No third-party involvement",
                "Available at nearly all online casinos"
              ],
              cons: [
                "Slowest method (3–7 business days)",
                "Higher bank fees",
                "May require additional identity checks"
              ]
            }
          ].map((row, index) => (
            <div key={index} className="grid grid-cols-3 border-t bg-gray-50">

              {/* METHOD */}
              <div className="p-4 font-semibold text-gray-900 border-r">
                {row.method}
              </div>

              {/* PROS */}
              <div className="p-4 space-y-2 border-r">
                {row.pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-green-600 text-lg leading-none">✓</span>
                    <span className="text-gray-800">{p}</span>
                  </div>
                ))}
              </div>

              {/* CONS */}
              <div className="p-4 space-y-2">
                {row.cons.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-red-600 text-lg leading-none">✘</span>
                    <span className="text-gray-800">{c}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* MOBILE CARDS — Minimalist Version */}
        <div className="md:hidden space-y-6">

          {[
            {
              method: "Cryptocurrencies",
              pros: [
                "Instant withdrawals with no banking delays",
                "High security and anonymity",
                "Low or zero transaction fees",
                "No bank restrictions or third-party interference"
              ],
              cons: [
                "Not all casinos support crypto withdrawals",
                "Crypto volatility may affect value",
                "Requires knowledge of digital wallets"
              ]
            },
            {
              method: "E-Wallets",
              pros: [
                "Fast processing (usually within minutes)",
                "User-friendly and widely accepted",
                "Secure transactions with fraud protection",
                "No need to share bank details"
              ],
              cons: [
                "Some casinos exclude e-wallets from bonuses",
                "Possible small withdrawal fees",
                "May require identity verification steps"
              ]
            },
            {
              method: "Credit & Debit Cards",
              pros: [
                "Widely accepted at most online casinos",
                "Easy to use for deposits & withdrawals",
                "No third-party apps required"
              ],
              cons: [
                "Withdrawals may take 2–5 business days",
                "Banks may block gambling-related payments",
                "Higher bank processing fees"
              ]
            },
            {
              method: "Bank Transfers",
              pros: [
                "Ideal for large real-money withdrawals",
                "No third-party involvement",
                "Available at nearly all online casinos"
              ],
              cons: [
                "Slowest method (3–7 business days)",
                "Higher bank fees",
                "May require additional identity checks"
              ]
            }
          ].map((row, index) => (
            <div
              key={index}
              className="border rounded-lg p-5 bg-gray-50 shadow-sm"
            >
              {/* METHOD TITLE */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {row.method}
              </h3>

              {/* PROS */}
              <p className="font-semibold text-green-700 mb-2">Pros</p>
              <ul className="space-y-2 mb-4">
                {row.pros.map((p, i) => (
                  <li key={i} className="flex gap-2 text-gray-800">
                    <span className="text-green-600 text-lg leading-none">✓</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* CONS */}
              <p className="font-semibold text-red-700 mb-2">Cons</p>
              <ul className="space-y-2">
                {row.cons.map((c, i) => (
                  <li key={i} className="flex gap-2 text-gray-800">
                    <span className="text-red-600 text-lg leading-none">✘</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>


      {/* SECTION 6 — Deposit */}
      <section className="mb-10 md:mb-16">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          How to Deposit at a Fast Payout Casino?
        </h2>

        <p className="text-base md:text-md text-gray-700 mb-6">
          Depositing at a fast payout online casino is simple, secure, and designed to help Australian real-money players start quickly. 
          Follow these steps to fund your casino account using instant payment methods such as Osko, PayID, Speedpay, e-wallets, crypto, and other fast banking options.
        </p>

        <div className="space-y-4 text-gray-800">
          <p><strong>Step 1:</strong> Pick a licensed fast payout casino that offers instant withdrawals.</p>
          <p><strong>Step 2:</strong> Create a new account and verify your casino login details.</p>
          <p><strong>Step 3:</strong> Deposit using your preferred fast payment method (Osko, PayID, Speedpay, e-wallets, crypto, etc.).</p>
          <p><strong>Step 4:</strong> Start playing pokies, table games, or live dealers instantly.</p>
          <p><strong>Step 5:</strong> Withdraw winnings anytime through the casino’s quick withdrawal system.</p>
        </div>
      </section>

      {/* SECTION 7 — Withdraw */}
      <section className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          How to Withdraw from a Fastpay Casino?
        </h2>

        <p className="text-base md:text-md text-gray-700 mb-6">
          Withdrawing from a fastpay casino is quick and hassle-free. 
          These platforms are designed for instant or same-day cashouts, making them ideal for players who value fast withdrawals and smooth real-money gaming. 
          Follow these steps for a streamlined payout experience:
        </p>

        <div className="space-y-4 text-gray-800">
          <p><strong>Step 1:</strong> Go to the withdrawal section in the cashier or banking menu.</p>
          <p><strong>Step 2:</strong> Choose a fast withdrawal method such as cryptocurrency, PayID, or an e-wallet.</p>
          <p><strong>Step 3:</strong> Enter your withdrawal amount and confirm the details.</p>
          <p><strong>Step 4:</strong> Submit your request and enjoy fast payouts. (some methods process within minutes)</p>
        </div>
      </section>

    </div>
  );
}
