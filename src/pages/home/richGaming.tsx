import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import RichGamingSource from './components/RichGamingSource';

export default function RichGaming() {
  return (
    <div className="relative z-10 bg-white">
      <ScrollProgressBar />
      <Header />

      <main className="w-full">
        <RichGamingSource />
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
