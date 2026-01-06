import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import JiliSource from './components/JiliSource';

export default function JiliGames() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="
          fixed inset-0
          bg-[url('/other/jili/jili-bg.webp')]
          bg-cover bg-center
          bg-no-repeat
          -z-20
        "
      />

      {/* ===== Overlay ===== */}
      <div
        className="
          fixed inset-0
          bg-white/70
          backdrop-blur-[0px]
          -z-10
        "
      />

      <div className="relative z-10">
        <ScrollProgressBar />
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <JiliSource />
        </main>

        <BackToTop />
        <Footer />
      </div>
    </div>
  );
}
