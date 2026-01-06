import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import BlogTitle from './components/BlogTitle';
import BlogIntro from './components/BlogIntro';
import HeroInfoSection from './components/HeroInfoSection';
import RankingList from './components/RankingList';
import CasinoReviewSection from './components/CasinoReviewSection';
import IllustrationSection from './components/IllustrationSection';
import LegalSection from './components/LegalSection';
import BestReviewCasino from './components/BestReviewCasino';
import CategoryGrid from './components/CategoryGrid';
import RankTable from './components/RankTable';
import HowToPlaySection from './components/HowToPlaySection';
import ProsConsSection from './components/ProsConsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollProgressBar from '../../components/feature/ScrollProgressBar';
import BackToTop from "../../components/feature/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      <Breadcrumb />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 mt-4 md:mt-8">
        <BlogTitle />
        <BlogIntro />
        <HeroInfoSection />
        <RankingList />
        <CasinoReviewSection />
        <IllustrationSection />
        <LegalSection />
        <BestReviewCasino />
        <CategoryGrid />
        <RankTable />
        <HowToPlaySection />
        <ProsConsSection />
        <FAQSection />
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}
