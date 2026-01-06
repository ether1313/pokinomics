import LiveDealerHeader from './components/LiveDealerHeader';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import PlaytechSource from './components/PlaytechSource';

export default function Playtech() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <ScrollProgressBar />
      <LiveDealerHeader />

      <main className="w-full">
        <PlaytechSource />
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
