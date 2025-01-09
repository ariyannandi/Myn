import React from "react";
import Slider from "react-slick";
import { images } from "../assets/globalBrands";

const GlobalBrands = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className="mt-6">
      <h1 className="my-10 mx-5 font-bold text-2xl text-gray-800">
        GRAND GLOBAL BRANDS
      </h1>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div className="flex w-full ">
            <img key={index} src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GlobalBrands;
