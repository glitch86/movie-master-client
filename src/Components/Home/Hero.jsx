import React from "react";
import Slider from "react-slick/lib/slider";
import MovieSlider from "./MovieSlider";

const Hero = ({ datas }) => {
  // console.log(datas, posterUrl);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="max-w-4xl max-h-fit mx-auto mt-8">
      <Slider {...settings}>
        {datas.map((data) => (
         <MovieSlider data={data}></MovieSlider>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
