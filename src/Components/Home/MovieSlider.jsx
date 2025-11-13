import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const MovieSlider = ({ data }) => {
  const { title, plotSummary, posterUrl, duration, releaseYear } = data;
  //   console.log(data);
  return (
    <div className="relative hero overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
        style={{ backgroundImage: `url(${posterUrl})` }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative hero-content flex-col lg:flex-row-reverse text-white z-10">
        <img
          src={posterUrl}
          className="max-w-sm rounded-lg shadow-2xl max-h-[300px]"
          alt={title}
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{plotSummary}</p>
          <div className="flex items-center gap-6">
            <div className="flex text-lg items-center gap-1">
              <CiClock2 />
              <span>{duration}</span>
            </div>
            <div className="flex text-lg items-center gap-1">
              <FaArrowTrendUp />
              <span>{duration}</span>
            </div>
            <div className="flex text-lg items-center gap-1">
              <SlCalender />
              <span>{releaseYear}</span>
            </div>
          </div>
          <button className="btn btn-primary mt-4">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
