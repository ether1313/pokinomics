import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProviderOpen, setIsProviderOpen] = useState(false);
  const location = useLocation();

  const baseLink =
    'relative text-white text-sm font-medium transition-colors';
  const activeUnderline =
    'after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#b7b7b73f] after:rounded-full';

  const isProviderActive =
    location.pathname.startsWith('/provider-guide') ||
    location.pathname.startsWith('/bngames') ||
    location.pathname.startsWith('/jili-games') ||
    location.pathname.startsWith('/live-dealer');

  return (
    <>
      {/* ================= Header ================= */}
      <header className="fixed top-0 left-0 w-full z-[9999] bg-[#0d1226] border-b-2 border-b-[#5a5a5a48]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between overflow-visible">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/pokinomics-logo.png"
              alt="Site logo"
              className="h-7"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className =
                  'w-40 h-8 bg-[#1e3a8a] rounded flex items-center justify-center text-white font-bold text-sm';
                fallback.textContent = 'Site Logo';
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden lg:flex items-center space-x-8 overflow-visible">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
              }
            >
              eWallet Casinos
            </NavLink>

            <NavLink
              to="/fastpayout-ewallet-gaming-casino"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
              }
            >
              Payout Casinos
            </NavLink>

            <NavLink
              to="/crypto-ewallet-casino-australia"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
              }
            >
              Crypto Casinos
            </NavLink>

            {/* ================= Game Providers Dropdown ================= */}
            <div className="relative overflow-visible">
              <div className="group inline-flex flex-col overflow-visible">
                <span
                  className={`${baseLink} cursor-pointer flex items-center gap-1 ${
                    isProviderActive
                      ? activeUnderline
                      : 'hover:text-gray-300'
                  }`}
                >
                  Game Providers
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>

                <div className="absolute left-0 top-full pt-2 z-[10000]">
                  <div className="hidden group-hover:block bg-white rounded-md shadow-lg min-w-[220px]">
                    <Link
                      to="/ewallet-casino-providers"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Provider Guide
                    </Link>
                    <Link
                      to="/bng-ewallet-slots"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      BNG Games
                    </Link>
                    <Link
                      to="/jili-slot-games"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      JILI Games
                    </Link>
                    <Link
                      to="/cq9-ewallet-casino-games"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      CQ9 Gaming
                    </Link>
                    <Link
                      to="/pegasus-ewallet-games"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Pegasus Games
                    </Link>
                    <Link
                      to="/joker-online-slots"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Joker Games
                    </Link>
                    <Link
                      to="/rich-gaming-ewallet-games"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Rich Gaming
                    </Link>
                    <Link
                      to="/live-dealer-australia-casino"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Live Dealer
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
              }
            >
              About Us
            </NavLink>
          </nav>

          {/* ================= Mobile Hamburger ================= */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isMenuOpen && (
          <nav
            className="lg:hidden bg-[#0d1226] border-t border-gray-700 relative z-[9999]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                className="block text-white text-sm font-medium"
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                eWallet Casinos
              </Link>

              <Link
                className="block text-white text-sm font-medium"
                to="/fastpayout-ewallet-gaming-casino"
                onClick={() => setIsMenuOpen(false)}
              >
                Payout Casinos
              </Link>

              <Link
                className="block text-white text-sm font-medium"
                to="/crypto-ewallet-casino-australia"
                onClick={() => setIsMenuOpen(false)}
              >
                Crypto Casinos
              </Link>

              {/* Mobile Game Providers Accordion */}
              <button
                onClick={() => setIsProviderOpen(!isProviderOpen)}
                className="w-full flex items-center justify-between text-white text-sm font-medium pt-2"
              >
                Game Providers
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isProviderOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProviderOpen && (
                <div className="pl-4 pt-2 space-y-2 border-l border-gray-600">
                  <Link
                    className="block text-white text-sm"
                    to="/ewallet-casino-providers"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Provider Guide
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/bng-ewallet-slots"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BNG Games
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/jili-slot-games"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    JILI Games
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/cq9-ewallet-casino-games"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CQ9 Gaming
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/pegasus-ewallet-games"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pegasus Games
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/joker-online-slots"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Joker Games
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/rich-gaming-ewallet-games"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Rich Gaming
                  </Link>
                  <Link
                    className="block text-white text-sm"
                    to="/live-dealer-australia-casino"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Live Dealer
                  </Link>
                </div>
              )}

              <Link
                className="block text-white text-sm font-medium pt-2"
                to="/about-us"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* ================= Backdrop (Click anywhere to close) ================= */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[9980]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
