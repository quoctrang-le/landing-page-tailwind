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
  const swiperSlide = [
    {
      title: "We will help you find",
      description:
        "A great plateform to buy, sell and rent your properties without any ",
      img: img1,
    },
    {
      title: "We will help you find",
      description:
        "A great plateform to buy, sell and rent your properties without any ",
      img: img2,
    },
    {
      title: "We will help you find",
      description:
        "A great plateform to buy, sell and rent your properties without any ",
      img: img3,
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      className="rounded-2xl"
      style={{ margin: "0 -2rem", zIndex: "-1", marginTop: "8px" }}
      autoplay={true}
      effect="fade"
    >
      {swiperSlide.map((item, key) => {
        return (
          <SwiperSlide
            key={key}
            style={{
              height: "500px",
              backgroundImage: `url(${item.img})`,
            }}
            className="bg-cover bg-no-repeat bg-center overflow-hidden"
          >
            <div className="w-full h-full tracking-wide relative bg-slate-900 bg-opacity-60 ">
              <div className=" top-1/4 absolute  left-10 ">
                <h1 className="text-white text-3xl font-bold ">{item.title}</h1>
                <h1 className="text-white text-3xl font-bold mt-2 ">
                  your <span className="text-green-500">Wonderful</span> home{" "}
                </h1>
                <div className="mt-5">
                  <p className="text-white opacity-80 text-sm">
                    {item.description}
                  </p>
                  <p className="text-white opacity-80 text-sm">
                    agent or commisions.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
