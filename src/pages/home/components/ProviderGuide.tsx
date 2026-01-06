'use client';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { companies } from '@/data/companies';
import { companyProviders } from '@/data/companyProviders';
import {
  getProviderGames,
  ProviderId,
} from '@/data/providerGames';
import { companyPromotions } from '@/data/companyPromotions';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ProviderGuide() {
  const { companyId, providerId } = useParams<{
    companyId?: string;
    providerId?: ProviderId;
  }>();

  const navigate = useNavigate();

  const activeCompany: string | null = companyId ?? null;
  const activeProvider: ProviderId | null = providerId ?? null;

  const providers = activeCompany
  ? companyProviders[activeCompany] || []
  : [];

  const selectedProvider = activeCompany && activeProvider
    ? providers.find((p) => p.id === activeProvider)
    : null;


  const activeCompanyData = activeCompany
  ? companies.find(c => c.id === activeCompany)
  : null;

  const activeCompanyName = activeCompanyData?.name || '';
  const activeCasinoUrl = activeCompanyData?.casinoUrl || '#';


  return (
    <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-10 md:mt-4">
      {/* ================= HERO（全宽） ================= */}
      <header
        className="
          relative
          w-full
          min-h-[30vh] md:min-h-screen
          flex items-center justify-center
          pt-16 md:pt-20
          overflow-hidden
        "
        style={{
          backgroundImage: "url('/other/casino-platform-banner-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </header>
  
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 md:mb-20">

          {/* ================= LEFT (主内容) ================= */}
          <div className="lg:col-span-3 mt-6 md:mt-12">

          {/* ===== INTRO CONTENT ===== */}
            <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 px-2 md:px-0">
              <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Gaming Casino for Australian Players
              </h1>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                This page features a carefully curated selection of trusted Australia online ewallet 
                casino platforms and their supported game providers. Each ewallet casino is reviewed for 
                platform stability, payment reliability, and overall gameplay experience, allowing players
                to filter, compare, and explore quality casino games with confidence.
              </p>
            </div>


            {/* Select Company */}
            <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">
              Available Casino Platform
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 md:gap-4 mb-10">
              {companies.map((company) => (
                <button
                  key={company.id}
                  onClick={() =>
                    navigate(`/ewallet-casino-providers/${company.id}`, { replace: true })
                  }
                  className={`h-[60px] md:h-[72px] flex items-center justify-center rounded-xl border bg-white transition
                    ${
                      activeCompany === company.id
                        ? 'border-red-500 ring-1 ring-red-500/30'
                        : 'border-gray-200 hover:border-gray-400'
                    }
                  `}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} casino`}
                    className="max-h-8 md:max-h-10 w-auto object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Providers */}
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
              Available Game Providers
            </h2>

            {!activeCompany && (
              <div className="mb-8 p-4 rounded-xl border border-dashed border-gray-300 text-center text-sm text-gray-500">
                Please select a casino platform above to view available game providers.
              </div>
            )}


            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 mb-10">
              {providers.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() =>
                    navigate(
                      `/ewallet-casino-providers/${activeCompany}/${provider.id}`,
                      { replace: true }
                    )
                  }
                  className={`bg-white border rounded-lg md:rounded-2xl
                    p-3 md:p-8
                    flex flex-col items-center transition
                    ${
                      activeProvider === provider.id
                        ? 'border-red-500 shadow-md'
                        : 'border-gray-200 hover:shadow'
                    }
                  `}
                >
                  <img
                    src={provider.icon}
                    alt={`${provider.name} game provider`}
                    className="h-10 md:h-16 w-auto mb-2 md:mb-4"
                  />
                  <span className="text-xs md:text-base font-semibold text-gray-900">
                    {provider.name}
                  </span>
                </button>
              ))}
            </div>

            {/* ================= Provider Detail ================= */}
            {selectedProvider && activeProvider && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8 max-w-4xl">

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  {selectedProvider.name} Casino Games at {activeCompanyName}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 mb-6">
                  {getProviderGames(activeCompany, activeProvider).map((game) => (
                    <div
                      key={game.id}
                      className="border border-gray-200 rounded-md md:rounded-lg bg-white hover:shadow transition"
                    >
                      <img
                        src={game.image}
                        alt=""
                        className="w-full rounded-md md:rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                  <span className="text-sm font-medium text-gray-800">
                    Active Now
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-gray-800 mb-6">
                  <li>• Minimum deposit <strong>A$10 only</strong></li>
                  <li>
                    • Licensed under <strong>PAGCOR</strong> &{' '}
                    <strong>Curaçao</strong> certification
                  </li>
                  <li>• Massive bonuses & rewards available</li>
                </ul>

                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-900 mr-2">
                    Available at:
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">
                    {activeCompanyName}
                  </span>
                </div>

                <a
                  href={activeCasinoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center
                    bg-red-600 text-white font-semibold
                    px-6 md:px-8 py-3 rounded-xl
                    hover:bg-red-700 transition animate-heartbeat"
                >
                  Play Now
                </a>

                <p className="text-xs text-gray-400 mt-4">
                  Secure payments • Mobile friendly • AU players supported
                </p>
              </div>
            )}
          </div>

          {/* ================= RIGHT (侧栏) ================= */}
          <aside className="space-y-6 mt-6 md:mt-12">

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Trusted Game Providers
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All eWallet casino platforms listed on this page support established and
                reputable game providers with stable RTP, smooth gameplay performance,
                and reliable systems across both desktop and mobile devices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                How Game Providers Are Selected
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Game providers are curated based on platform compatibility, live dealer
                stability, and overall performance for Australian players.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Casino Promotions & Offers
              </h3>

              <div className="mb-4">
                <span className="hot-badge-inline">Hot</span>
              </div>

              <Splide
                options={{
                  type: 'loop',
                  autoplay: true,
                  interval: 3000,
                  pauseOnHover: true,
                  arrows: false,
                  pagination: true,
                  speed: 600,
                }}
              >
                {companyPromotions.map((promo) => (
                  <SplideSlide key={promo.id}>
                    <Link to={promo.link} className="block">
                      <p className="text-sm font-bold text-gray-900 mb-1">
                        {promo.companyName}
                      </p>

                      <div
                        className="overflow-hidden rounded-lg border border-gray-200 bg-black"
                        style={{ height: '100px' }}
                      >
                        <img
                          src={promo.image}
                          alt={promo.alt}
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </Link>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
