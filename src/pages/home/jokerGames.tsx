import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import JokerSource from './components/JokerSource';

export default function BnGames() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="
          fixed inset-0
          bg-[url('/other/joker/joker-whole-bg.jpg')]
          bg-cover bg-center
          bg-no-repeat
          -z-20
        "
      />

      {/* ===== Overlay ===== */}
      <div
        className="
          fixed inset-0
          bg-black/60
          backdrop-blur-[1px]
          -z-10
        "
      />

      <div className="relative z-10">
        <ScrollProgressBar />
        <Header />

        <main className="w-full">
            <JokerSource />
        </main>

        <BackToTop />
        <Footer />
        </div>
      </div>
  );
}
