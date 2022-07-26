import React from "react";
import { Carousel, Navbar } from "../../components";

const Home = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="md:w-6/12 w-10/12">
        <Navbar />
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
