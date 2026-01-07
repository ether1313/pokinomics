import React from "react";
import ScrollProgressBar from "../../components/feature/ScrollProgressBar";
import Header from "./components/Header";
import BreadcrumbCrypto from "./components/BreadcrumbCrypto";
import BlogTitleCrypto from "./components/BlogTitleCrypto";
import RankingListCrypto from "./components/RankingListCrypto";
import CryptoSources from "./components/CryptoSources";
import CasinoReviewSectionCrypto from "./components/CasinoReviewSectionCrypto";
import CryptoCasinoTable from "./components/CryptoCasinoTable";
import CryptoConclusion from "./components/CryptoConclusion";
import BackToTop from "../../components/feature/BackToTop";
import Footer from "./components/Footer";

export default function CryptoCasino() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      <BreadcrumbCrypto />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 mt-2 md:mt-4">
        <BlogTitleCrypto />

        <div className="py-4 md:py-8 px-2">
          <p className="text-gray-700 text-base leading-relaxed mb-10">
            Looking for the best cryptocurrency online casinos in Australia?
            Our expert team has reviewed the top crypto-friendly platforms that support 
             Bitcoin (BTC), Ethereum (ETH), Tron (TRX), USDT and other digital assets.
            These trusted online casinos offer instant crypto withdrawals, 
            fast blockchain payouts, and highly secure payment processing—perfect for players who prefer 
            fast, anonymous, and borderless transactions.
            <br /><br />
            We compare each Australian crypto casino based on crypto banking acceptance, 
            withdrawal confirmation times, wallet compatibility, game variety, bonuses for crypto users, 
            and platform security. Whether you prefer betting with Bitcoin, depositing with USDT, or enjoying 
            low-fee Ethereum transactions, this guide highlights the top crypto casinos that accept 
            cryptocurrency in Australia and deliver safe, fast, and seamless real-money gaming experiences in 2025.
          </p>
        </div>

        <RankingListCrypto />
        <CryptoSources />
        <CasinoReviewSectionCrypto />
        <CryptoCasinoTable />
        <CryptoConclusion />


      </div>

      <BackToTop />
      <Footer />
    </div>
  );
}
