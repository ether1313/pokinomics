import LiveDealerHeader from './components/LiveDealerHeader';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import PragmaticPlaySource from "./components/PragmaticPlaySource";

export default function PragmaticPlay() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <ScrollProgressBar />
      <LiveDealerHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <PragmaticPlaySource />
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
