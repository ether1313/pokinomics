"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="w-full text-gray-900">

      {/* ================= HERO ================= */}
      <div
        className="
          relative overflow-hidden
          bg-slate-900 text-white
          bg-[url('/machines-tyiNyFMz6z8.jpg')]
          bg-cover bg-center
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-0 mt-10 md:mt-18 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-2 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Independent Reviews of{" "}
                <span className="text-blue-500">
                  Online eWallet Casino Gaming Australia
                </span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                Pokinomics is an independent, data-driven review platform focused on
                analysing <strong>online eWallet Casino Gaming Australia</strong>.
                Our research evaluates real-money gameplay behaviour, high RTP slot
                games, fast payout eWallet casino gaming performance, and technical
                reliability — without promotional bias or affiliate influence.
              </p>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <img
                src="/highest_rtp_slot_machine.png"
                alt="High RTP eWallet Casino Slot Games Australia"
                className="
                  w-full max-w-lg mx-auto
                  object-contain
                  opacity-95
                  drop-shadow-2xl
                "
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-0 py-16 md:py-24 grid gap-12 md:grid-cols-2">

          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-5">
              A Neutral, Data-Focused eWallet Casino Review Platform
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
              Pokinomics does not operate, own, manage, or promote any online casino.
              We exist solely as an independent review and comparison platform for
              eWallet casino gaming in Australia, assessing how platforms perform
              under real gameplay and real withdrawal conditions.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Every review follows a consistent framework that prioritises RTP
              accuracy, volatility behaviour, payline structures, payment reliability,
              and user experience across desktop and mobile environments.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 shadow-sm">
            <ul className="space-y-4 text-sm md:text-base text-gray-700">
              {[
                "Independent third-party casino analysis",
                "Australia-focused eWallet and crypto testing",
                "High RTP slot game behaviour evaluation",
                "No gambling operations or payment handling",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-900 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ================= STATS ================= */}
      <StatsSection />

      {/* ================= REVIEW METHODOLOGY ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-16 md:py-20">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
            How We Review eWallet Casino Gaming in Australia
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Volatility Behaviour", "Measuring payout variance across extended sessions."],
              ["RTP Verification", "Comparing published RTP against observed results."],
              ["Game Mechanics", "Evaluating paylines, features, and bonus logic."],
              ["eWallet Withdrawals", "Testing speed, reliability, and failure rates."],
              ["Platform Stability", "Assessing mobile and desktop performance."],
              ["Transparency", "Reviewing licensing, disclosures, and player terms."],
            ].map(([title, text], idx) => (
              <div
                key={idx}
                className="
                  rounded-2xl border border-gray-200 bg-slate-50 p-6
                  hover:-translate-y-1 hover:shadow-md transition
                "
              >
                <h3 className="text-base md:text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm md:text-base text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RNG vs RTP ================= */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/chosen-soul-FnGZcsmeD2U.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-0 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 items-start">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                RNG vs RTP — Understanding Fairness in eWallet Casino Games
              </h2>

              <p className="text-white/80 leading-relaxed mb-4">
                <strong>RNG (Random Number Generator)</strong> governs every outcome
                in online casino games, ensuring each spin or result is independent,
                unpredictable, and free from manual interference.
              </p>

              <p className="text-white/80 leading-relaxed">
                <strong>RTP (Return to Player)</strong> reflects long-term statistical
                payout behaviour calculated across millions of simulated outcomes,
                helping players understand expected performance rather than short-term results.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 grid gap-6">
              <div>
                <h3 className="text-sm md:text-base font-semibold mb-3 text-white">
                  RNG Outcome Generation Structure
                </h3>

                <div className="rounded-xl overflow-hidden bg-white border border-white/10 mb-3">
                  <img
                    src="/rng-structure.svg"
                    alt="RNG structure in online eWallet casino games"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  Each game result is mapped from continuously generated random sequences,
                  ensuring independence, fairness, and resistance to prediction.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm md:text-base font-semibold mb-3 text-white">
                  RTP Statistical Calculation Model
                </h3>

                <div className="rounded-xl bg-black/30 border border-white/10 p-4 font-mono text-xs md:text-sm text-white/80">
                  <pre className="whitespace-pre-wrap leading-relaxed">
{`total_wagered = sum(all_bets_over_time)
total_returned = sum(all_winnings_over_time)

RTP = (total_returned / total_wagered) * 100`}
                  </pre>
                </div>

                <p className="mt-3 text-white/70 text-xs md:text-sm leading-relaxed">
                  Short-term variance is expected. Over extended play, results converge
                  toward the theoretical RTP value.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-0 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Explore Australia eWallet Casino Reviews & Guides
          </h2>

          <p className="text-white/80 mb-8">
            Compare platform performance, payment behaviour, and gameplay mechanics
            using our independent review framework.
          </p>

          <Link
            to="/ewallet-casino-providers"
            className="
              inline-flex items-center justify-center
              rounded-lg bg-yellow-400 text-black font-semibold
              px-7 py-3
              hover:bg-yellow-300 transition
            "
          >
            View Review Guides
          </Link>
        </div>
      </div>

    </section>
  );
}


function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Casino eWallet Platforms Reviewed", value: 120, suffix: "+" },
    { label: "Gameplay Variables Analysed", value: 30, suffix: "+" },
    { label: "eWallet Methods Tested", value: 15, suffix: "+" },
    { label: "Review Updates Status", value: null, suffix: "Ongoing" },
  ];

  return (
    <div ref={sectionRef} className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`
                rounded-2xl bg-white border border-gray-200 p-6
                shadow-sm transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="text-3xl font-extrabold text-slate-900">
                {stat.value !== null ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    visible={visible}
                    suffix={stat.suffix}
                  />
                ) : (
                  stat.suffix
                )}
              </div>

              <div className="mt-2 text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function CountUp({
  start,
  end,
  visible,
  suffix = "",
}: {
  start: number;
  end: number;
  visible: boolean;
  suffix?: string;
}) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!visible) return;

    let startTime: number | null = null;
    const duration = 1000; // 1s

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [visible, start, end]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}
