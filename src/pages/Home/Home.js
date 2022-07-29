import React from "react";
import { Carousel, Efficiency, Filter, Navbar } from "../../components";

const Home = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-10/12">
        <Navbar />
        <div className="h-16" />
        <Carousel />
        <Filter />
        <Efficiency />
      </div>
    </div>
  );
};

export default Home;
