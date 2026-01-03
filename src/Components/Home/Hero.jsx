import React from "react";
import Slider from "react-slick/lib/slider";
import MovieSlider from "./MovieSlider";

const Hero = ({ datas }) => {
  // console.log(datas, posterUrl);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="max-w-4xl max-h-3/5 mx-auto">
      <Slider {...settings}>
        {datas.map((data) => (
         <MovieSlider data={data}></MovieSlider>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
