import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import PegasusSource from './components/PegasusSource';

export default function BnGames() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="
          fixed inset-0
          bg-[url('/other/pegasus/pegasus-bg.jpg')]
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

      {/* ===== Page Content ===== */}
      <div className="relative z-10">
        <ScrollProgressBar />
        <Header />

        <main className="w-full">
          <PegasusSource />
        </main>

        <BackToTop />
        <Footer />
      </div>

    </div>
  );
}
