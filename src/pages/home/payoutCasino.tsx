import React from "react";
import ScrollProgressBar from "../../components/feature/ScrollProgressBar";
import Header from "./components/Header";
import BreadcrumbPayout from "./components/BreadcrumbPayout";
import BlogTitlePayout from "./components/BlogTitlePayout";
import RankingListPayout from "./components/RankingListPayout";
import FastPayoutTable from "./components/FastPayoutTable";
import PayoutDescription from "./components/PayoutDescription";
import CasinoReviewSectionPayout from "./components/CasinoReviewSectionPayout";
import PayoutSources from "./components/PayoutSources"
import BackToTop from "../../components/feature/BackToTop";
import Footer from "./components/Footer";

export default function PayoutCasino() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      <BreadcrumbPayout />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 mt-2 md:mt-4">
        <BlogTitlePayout />

        <div className="py-4 md:py-8 px-2">
          <p className="text-gray-700 text-base leading-relaxed mb-10">
            Looking for the fastest and most reliable real-money online casinos in Australia?
            Our expert team has thoroughly reviewed the top platforms offering instant withdrawals, 
            fast payouts, and secure banking options. We compare each casino based on withdrawal 
            speed, payment reliability, user experience, and overall gaming quality. Whether you prefer rapid 
            cashouts, seamless mobile gameplay, or trusted real-money betting, this guide highlights the 
            best fast payout casinos that ensure smooth, secure, and hassle-free withdrawals in the year.
          </p>
        </div>

        <RankingListPayout />
        <FastPayoutTable />
        <PayoutDescription />
        <CasinoReviewSectionPayout />
        <PayoutSources/>
      </div>

      <BackToTop />
      <Footer />
    </div>
  );
}

