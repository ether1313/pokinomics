import type { RouteObject } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import PayoutCasino from "../pages/home/payoutCasino";
import CryptoCasino from "../pages/home/cryptoCasino";
import GamesProviders from "../pages/home/gamesProviders";
import BnGames from "../pages/home/bnGames";
import JiliGames from "../pages/home/jiliGames";
import CQ9Games from "../pages/home/cq9Games";
import PegasusGames from "../pages/home/pegasusGames";
import JokerGames from "../pages/home/jokerGames";
import RichGaming from "@/pages/home/richGaming";
import LiveDealer from "../pages/home/liveDealer";
import Evolution from "@/pages/home/evolution";
import PragmaticPlay from "@/pages/home/pragmaticPlay";
import AsiaGaming from "@/pages/home/asiaGaming";
import Playtech from "@/pages/home/playtech";
import AboutUs from "@/pages/home/aboutus";


const routes: RouteObject[] = [
  /* Home Page */
  {
    path: "/",
    element: <Home />,
  },

  /* Payout Casino Page */
  {
    path: "/fastpayout-ewallet-gaming-casino",
    element: <PayoutCasino />,
  },

  /* Crypto Casino Page */
  {
    path: "/crypto-ewallet-casino-australia",
    element: <CryptoCasino />,
  },

  /* Provide Guide Page */
  {
    path: "/ewallet-casino-providers",
    element: <GamesProviders />,
  },
  {
    path: "/ewallet-casino-providers/:companyId",
    element: <GamesProviders />,
  },
  {
    path: "/ewallet-casino-providers/:companyId/:providerId",
    element: <GamesProviders />,
  },

  /* BNG Game Page */
  {
    path: "/bng-ewallet-slots",
    element: <BnGames />,
  },
  {
    path: "/bng-ewallet-slots/:slug?",
    element: <BnGames />,
  },

  /* JILI Game Page */
  {
    path: "/jili-slot-games",
    element: <JiliGames />,
  },

  /* CQ9 Game Page */
  {
    path: "/cq9-ewallet-casino-games",
    element: <CQ9Games />,
  },
  {
    path: "/cq9-ewallet-casino-games/:slug?",
    element: <CQ9Games />,
  },

  /* Pegasus Game Page */
  {
    path: "/pegasus-ewallet-games",
    element: <PegasusGames />,
  },
  {
    path: "/pegasus-ewallet-games/:slug?",
    element: <PegasusGames />,
  },

  /* Joker Game Page */
  {
    path: "/joker-online-slots",
    element: <JokerGames />,
  },
  {
    path: "/joker-online-slots/:slug?",
    element: <JokerGames />,
  },

  /* Rich Gaming Page */
  {
    path: "/rich-gaming-ewallet-games",
    element: <RichGaming />,
  },
  {
    path: "/rich-gaming-ewallet-games/:slug?",
    element: <RichGaming />,
  },


  /* Live Dealer Page */
  {
    path: "/live-dealer-australia-casino",
    element: <LiveDealer />,
  },
  /* Live Dealer - (Evolution, PragmaticPlay, AsiaGaming, Playtech) */
  {
    path: "/live-dealer-australia-casino/evolution",
    element: <Evolution />,
  },
  {
    path: "/live-dealer-australia-casino/pragmaticplay",
    element: <PragmaticPlay />,
  },
  {
    path: "/live-dealer-australia-casino/asiagaming",
    element: <AsiaGaming />,
  },
  {
    path: "/live-dealer-australia-casino/playtech",
    element: <Playtech />,
  },

  /* About Us Page */
  {
    path: "/about-us",
    element: <AboutUs />,
  },



  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
