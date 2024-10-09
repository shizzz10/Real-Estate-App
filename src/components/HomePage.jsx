import { lazy, Suspense } from "react";
import { GlobalStyles } from "../styles/Global";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import News from "./News";
// import ProductHead from "./ProductHead";
const ProductHead = lazy(() => import("./ProductHead"));
const News = lazy(() => import("./News"));

const HomePage = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Suspense fallback={<div>Loading</div>}>
        <ProductHead />
      </Suspense>
      <Banner />
      <Suspense fallback={<div>Loading</div>}>
        <News />
      </Suspense>
      <Footer />
    </div>
  );
};

export default HomePage;
