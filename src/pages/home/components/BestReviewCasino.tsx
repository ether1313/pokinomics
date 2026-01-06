export default function BestReviewCasino() {
  const newCasinos = [
    {
      name: 'iPay9 Casino',
      description:
        'iPay9 Casino stands out as one of the best-reviewed online casinos in Australia for its smooth mobile-first design, fast withdrawal processing, and consistently reliable customer support. Our review highlights its balanced gameplay experience, strong performance stability, and transparent banking system. New players are welcomed with a 100% Welcome Bonus plus a Daily Easy Step reward of A$100. The platform supports trusted Australian payment methods including Amopay, PayID, Osko, Visa, and Mastercard, ensuring secure and efficient transactions.',
    },
    {
      name: 'KINGBET9 Casino',
      description:
        'KINGBET9 Casino earns high review ratings for its reward-driven ecosystem and dependable platform performance. During our evaluation, Kingbet9 impressed with consistent bonus availability, smooth live gaming functionality, and fast banking turnaround times. New members can access A$199.99 Free Credit alongside enhanced daily rewards. The casino supports Amopay, PayID, Osko, Visa, and Mastercard, making it a solid choice for Australian players seeking both value and reliability.',
    },
    {
      name: 'BIGPAY77 Casino',
      description:
        'BIGPAY77 Casino is a strong contender in our best online casino reviews due to its diverse game portfolio, stable platform speed, and user-friendly mobile optimisation. Our review found its live dealer section and pokies selection particularly well-balanced for both casual and experienced players. New users receive an A$187.77 registration offer, complemented by daily reward boosts. Secure payment options include Amopay, PayID, Osko, Visa, and Mastercard.',
    },
    {
      name: 'ME99 Casino',
      description:
        'ME99 Casino performs well in expert reviews for its clean interface, quick access to games, and efficient transaction handling. Our assessment highlights its suitability for players who value simplicity, speed, and predictable payouts. New players can claim an A$101 Starter Pack together with a Free A$99.99 Registration Bonus. With fast deposits and withdrawals via Amopay, PayID, Osko, Visa, and Mastercard, Me99 delivers a dependable online casino experience for Australian users.',
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center leading-tight">
          Popular eWallet Casinos for Australian Players
        </h1>

        {/* White Card Container */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">

          {/* Intro Paragraph */}
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 md:mb-8">
            Our expert team has carefully reviewed and compared the popular online casinos available to Australian players in the year. Each platform listed below has been evaluated based on gameplay quality, payout reliability, user experience, banking efficiency, and overall performance to help you choose with confidence.
          </p>

          {/* Casino List */}
          <div className="space-y-6">
            {newCasinos.map((casino, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4"
              >
                {/* Number Circle */}
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ff2706] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-md">
                    {index + 1}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 leading-snug">
                    {casino.name}
                  </h3>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {casino.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
