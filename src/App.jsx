import "./index.scss";

import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import { Outlet} from "react-router";
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

export const App = () => {
  return (
    <>
    {/* <ScrollRestoration /> */}
    <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
