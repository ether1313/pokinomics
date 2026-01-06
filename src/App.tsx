import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import GlobalBottomBanner from "./pages/home/components/GlobalBottomBanner";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import GlobalCasinoOverlay from "./pages/home/components/GlobalCasinoOverlay";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
        <GlobalBottomBanner />
        <GlobalCasinoOverlay />

      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
