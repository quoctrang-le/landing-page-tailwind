import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import img1 from "../../assets/images/01.jpg";
import img2 from "../../assets/images/02.jpg";
import img3 from "../../assets/images/03.jpg";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      className="rounded-2xl"
      style={{ margin: "0 -2rem" }}
      autoplay={true}
      effect="fade"
    >
      <SwiperSlide
        style={{ height: "500px", backgroundImage: `url(${img1})` }}
        className="bg-cover bg-no-repeat bg-center overflow-hidden "
      >
        <div className="w-full h-full bg-black opacity-60">
          <div>
            <h1 className="text-white ">
              We will help you find your Wonderful home
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ height: "500px", backgroundImage: `url(${img2})` }}
        className="bg-cover bg-no-repeat bg-center overflow-hidden "
      >
        <div className="w-full h-full bg-black opacity-60">
          <div>
            <h1 className="text-white ">
              We will help you find your Wonderful home
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{ height: "500px", backgroundImage: `url(${img3})` }}
        className="bg-cover bg-no-repeat bg-center overflow-hidden "
      >
        <div className="w-full h-full bg-black opacity-60">
          <div>
            <h1 className="text-white ">
              We will help you find your Wonderful home
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
