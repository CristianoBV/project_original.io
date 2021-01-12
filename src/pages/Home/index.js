import React from "react";
import { Provider } from "react-redux";

import store from "../../store";

import Header from "../../components/Header";
import TimeLine from "../../components/Timeline";
import ProductSingle from "../../components/ProductSingle";
import Carolseu from "../../components/Carolseu";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <TimeLine />
        <ProductSingle />
        <Carolseu />
        <Footer />
      </Provider>

      {/* <Shelf /> */}
    </>
  );
};

export default Home;
