import React from "react";
import Slider from "react-slick";
import Product1 from "../assets/sliderImages/topProduct1.png";
import Product2 from "../assets/sliderImages/topProduct2.png";
import Product3 from "../assets/sliderImages/topProduct3.png";
import Product4 from "../assets/sliderImages/topProduct4.png";

const TopOffers = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <Slider {...sliderSettings} className="mt-6 ">
      <div>
        <img src={Product1} alt="sliderImg1" className="w-full m-3 h-[500]" />
      </div>
      <div>
        <img src={Product2} alt="sliderImg2" className="w-full m-3" />
      </div>
      <div>
        <img src={Product3} alt="sliderImg3" className="w-full m-3" />
      </div>
      <div>
        <img src={Product4} alt="sliderImg4" className="w-full m-3" />
      </div>
    </Slider>
  );
};

export default TopOffers;
