import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the best online casino in Australia?',
      answer: 'While the best online casino depends on personal preferences, iPay9 stands out as the top choice. With a massive 3,888 australian dollars welcome bonus + 133 free spins and an extensive game selection, it offers an unparalleled chance to win real money.'
    },
    {
      question: 'Are Australian online casinos legal?',
      answer: 'Yes, but with restrictions. Legal online casinos exist, but Australian law prevents unlicensed platforms from operating locally. Offshore casinos, however, can legally accept players under Australian Law.'
    },
    {
      question: 'Can I play online casinos for real money?',
      answer: 'Absolutely! Online casino real money platforms allow you to deposit, win and enjoy responsible gambling just like in a land-based casino.'
    },
    {
      question: 'What payment methods can I use?',
      answer: 'The best casino online sites support credit/debit cards, PayID, Osko, Apple pay, Google pay, bank transfers, and also support Amopay, which included cryptocurrencies like Bitcoin and USDT.'
    },
    {
      question: 'How do I know a casino is safe?',
      answer: 'Stick to secure online casinos that have: a valid gaming license, SSL encryption, certifications like eCOGRA or iTech Labs, and responsible gaming tools (self-exclusion, deposit limits).'
    },
    {
      question: 'Do online casinos offer fair games?',
      answer: 'Yes, licensed casinos online use Random Number Generators (RNGs) - software that simulates the randomness of internet games to ensure fairness.'
    },
    {
      question: 'How to verify an account?',
      answer: 'New online ewallet casinos in the era of technology are striving to simplify the registration process. You can verify your account by email or phone. To verify your age, you must always provide a copy of your ID.'
    }
  ];

  return (
    <section id="faqs" className="py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="font-semibold text-gray-800 text-sm md:text-base pr-4">
                  {faq.question}
                </h3>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
