import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function FastPayoutTable() {
  const items = [
    { 
      title: "Fast Payout Online Casino for Australian Players", 
      link: "https://ipay9aud.com/register/SMSRegister", 
      label: "iPay9" 
    },
    { 
      title: "Instant Withdrawal Casino with Quick Processing", 
      link: "https://www.kingbet9aus.com/register/SMSRegister", 
      label: "Kingbet9" 
    },
    { 
      title: "Live Casino Games with Fast Payout Options", 
      link: "https://www.bigpay77.net/register/SMSRegister", 
      label: "Bigpay77" 
    },
    { 
      title: "Secure Online Casino with Instant Withdrawals", 
      link: "https://me99aud.com/register/SMSRegister", 
      label: "Me99" 
    },
    { 
      title: "Premium-Style Casino Offering Fast Cashouts", 
      link: "https://rolex9.net/register/SMSRegister", 
      label: "Rolex9" 
    },
    { 
      title: "Fast & Secure Withdrawal Casino Experience", 
      link: "https://www.gucci9.me/register/SMSRegister", 
      label: "Gucci9" 
    },
    { 
      title: "Online Casino with Consistent Fast Payouts", 
      link: "https://www.queen13.net/register/SMSRegister", 
      label: "Queen13" 
    },
    { 
      title: "Real-Money Casino Designed for Australian Players", 
      link: "https://www.winnie13.net/register/SMSRegister", 
      label: "Winnie13" 
    },
    { 
      title: "Themed Online Casino with Fast Withdrawals", 
      link: "https://www.micky13.com/register/SMSRegister", 
      label: "Micky13" 
    },
    { 
      title: "Creative Casino Platform with Quick Cashouts", 
      link: "https://www.mrbean9.com/register/SMSRegister", 
      label: "Mrbean9" 
    },
    { 
      title: "Reputable Online Casino with Fast Payout Options", 
      link: "https://www.pokemon13.com/register/SMSRegister", 
      label: "Pokemon13" 
    },
    { 
      title: "Easy-to-Use AU Casino with Quick Cashouts", 
      link: "https://www.spongebob13.net/register/SMSRegister", 
      label: "Spongebob13" 
    },
    { 
      title: "High Jackpot Casino with Fast Payout Features", 
      link: "https://bybid9.com/register/SMSRegister", 
      label: "Bybid9" 
    },
    { 
      title: "Fast Withdrawal Casino Available to AU Players", 
      link: "https://ipay9aud.com/register/SMSRegister", 
      label: "IPAY9" 
    },
  ];


  return (
    <div id="fastpayout-table" className="w-full">

      {/* intro */}
      <p className="text-gray-700 text-base md:text-md leading-relaxed mb-10 md:mb-12 px-6 md:px-0">
        Fast payout online casinos have become increasingly popular among Australian players who want quick, secure,
        and hassle-free withdrawals. In the year, the top-rated real-money ewallet online casinos offer instant or same-day payouts,
        reliable banking methods, and smooth cashout processes. Below is a curated list of Australia’s best fast
        withdrawal ewallet casinos, ranked by payout speed, trustworthiness, user experience, and overall performance.
      </p>

      {/* table container */}
      <div className="px-4 sm:px-6 md:px-0">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-6 border-b md:border-b md:border-r border-gray-200"
              >
                {/* Left Section */}
                <div className="flex items-center gap-3 w-[70%] md:w-[75%]">
                  <FiArrowRight className="text-red-600 text-lg flex-shrink-0" />

                  <span className="text-gray-900 font-semibold text-sm md:text-base leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right Label */}
                <div className="flex-shrink-0 text-right ml-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold text-sm md:text-base underline decoration-dashed underline-offset-2 hover:text-[#ff3a3a] transition"
                  >
                    {item.label}
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* outro */}
      <p className="text-gray-700 text-base md:text-md leading-relaxed mt-10 md:mt-12 mb-10 px-6 md:px-0">
        Choosing a fast payout online ewallet casino is essential for Australian players who value quick access to their winnings.
        The ewallet casinos listed above offer instant withdrawals, secure payment systems, and smooth real-money gaming
        experiences. Whether you prefer mobile play, live casino games, or high-jackpot slots, these fast withdrawal
        casinos deliver reliable performance and efficient cashout speeds throughout the year.
      </p>

    </div>
  );
}
