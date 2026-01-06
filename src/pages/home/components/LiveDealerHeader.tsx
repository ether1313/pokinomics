import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function LiveDealerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseLink =
    'relative text-white text-sm font-medium transition-colors';
  const activeUnderline =
    'after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#b7b7b73f] after:rounded-full';

  return (
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
            to="/live-dealer"
            end
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/live-dealer/evolution"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
            }
          >
            ♠ Evolution
          </NavLink>

          <NavLink
            to="/live-dealer/pragmaticplay"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
            }
          >
            ♠ Pragmatic Play
          </NavLink>

          <NavLink
            to="/live-dealer/asiagaming"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
            }
          >
            ♠ Asia Gaming
          </NavLink>

          <NavLink
            to="/live-dealer/playtech"
            className={({ isActive }) =>
              `${baseLink} ${isActive ? activeUnderline : 'hover:text-gray-300'}`
            }
          >
            ♠ Playtech
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
        <nav className="lg:hidden bg-[#0d1226] border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <Link className="block text-white text-sm font-medium" to="/live-dealer">
              Home
            </Link>

            <Link className="block text-white text-sm font-medium" to="/live-dealer/evolution">
              Evolution
            </Link>

            <Link className="block text-white text-sm font-medium" to="/live-dealer/pragmaticplay">
              Pragmatic Play
            </Link>

            <Link className="block text-white text-sm font-medium" to="/live-dealer/asiagaming">
              Asia Gaming
            </Link>

            <Link className="block text-white text-sm font-medium" to="/live-dealer/playtech">
              Playtech
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
