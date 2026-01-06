import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";
import AboutUs from './components/AboutUs';

export default function AboutUsPage() {
  return (
    <div className="relative z-10 bg-white">
      <ScrollProgressBar />
      <Header />

      <main className="w-full">
        <AboutUs />
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}
