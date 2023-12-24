import React from "react";
import { Header, Main, Footer } from "./home/";
import { Slider } from "../components";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
