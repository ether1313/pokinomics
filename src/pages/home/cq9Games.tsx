import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import CQ9Source from './components/CQ9Source';

export default function BnGames() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== Background Image ===== */}
      <div
        className="
          fixed inset-0
          bg-[url('/other/cq9/cq9-bg.jpg')]
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CQ9Source />

        </div>
        
        <BackToTop />
        <Footer />
      </div>
    </div>
  );
}
