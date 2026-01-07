import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import LiveDealerSource from './components/LiveDealerSource';

export default function LiveDealer() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <ScrollProgressBar />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveDealerSource />


      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}
