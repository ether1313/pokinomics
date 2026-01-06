export default function Footer() {
  return (
    <footer className="bg-[#0d1226] text-gray-300 pt-12 pb-10 px-6 border-t-2 border-t-[#bebebe]">

      {/* LOGO */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <img
          src="/pokinomics-logo.png"
          alt="Australia Logo"
          className="h-7 mx-auto md:h-10"
        />
      </div>

      {/* NAVIGATION LINKS — Wider on Desktop */}
      <div className="
        max-w-5xl mx-auto text-center mb-10 
        text-sm flex flex-wrap justify-center gap-2 md:gap-4
        text-gray-300
      ">
        <a href="/" className="hover:text-white transition">eWallet Casinos</a>
        <span className="opacity-40">|</span>

        <a href="/fastpayout-ewallet-gaming-casino" className="hover:text-white transition">Payout Casinos</a>
        <span className="opacity-40">|</span>

        <a href="/crypto-ewallet-casino-australia" className="hover:text-white transition">Crypto Casinos</a>
        <span className="opacity-40">|</span>

        <a href="/ewallet-casino-providers" className="hover:text-white transition">Provider Guide</a>
        <span className="opacity-40">|</span>

        <a href="/about-us" className="hover:text-white transition">About Us</a>
      </div>


      {/* RESPONSIBLE GAMBLING TEXT — Wider */}
      <div className="
        border-t border-gray-700 pt-6 text-center 
        text-[13px] leading-relaxed opacity-80 
        max-w-3xl mx-auto mb-12
      ">
        <p>
          If you or someone you know shows signs of gambling addiction, please do not hesitate 
          to contact Gambler Anonymous at 
          <span className="font-semibold"> +61 2 9727 5519</span>. Practice responsible gambling 
          by setting limits and recognizing risks. Underage gambling is strictly prohibited in 
          Australia. Availability of listed casino sites may vary by region.
        </p>
      </div>


      {/* ICONS — Responsive sizing */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10 mb-10">

        <a href="https://www.gamblinghelponline.org.au/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/responsible/gambling-help-online.svg"
            alt="Gambling Help Online"
            className="h-5 md:h-7 opacity-70 hover:opacity-100 transition"
          />
        </a>

        <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/responsible/gambling-therapy.svg"
            alt="Gambling Therapy"
            className="h-5 md:h-7 opacity-70 hover:opacity-100 transition"
          />
        </a>

        <a href="https://www.gamblersanonymous.org.au/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/responsible/gambler-anonymous.webp"
            alt="Gamblers Anonymous"
            className="h-5 md:h-7 opacity-70 hover:opacity-100 transition"
          />
        </a>

        <a href="https://gamblershelp.com.au/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/responsible/gamblers-help.svg"
            alt="Gambler's Help"
            className="h-5 md:h-7 opacity-70 hover:opacity-100 transition"
          />
        </a>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-[12px] opacity-50">
        © 2026 Pokinomics. All rights reserved.
      </div>

    </footer>
  );
}
