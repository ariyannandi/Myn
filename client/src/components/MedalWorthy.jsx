import React from "react";
import Slider from "react-slick";
import { images } from "../assets/medalWorthy";

const medalWorthy = () => {
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
        MEDAL WORTHY BRANDS TO BAG
      </h1>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div className="flex w-full bg-red-200">
            <img key={index} src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default medalWorthy;
