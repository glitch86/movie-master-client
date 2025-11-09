import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const MovieSlider = ({ data }) => {
  const { title, plotSummary, posterUrl, rating, duration, releaseYear } = data;
//   console.log(data);
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={posterUrl}
          className="max-w-sm rounded-lg shadow-2xl max-h-[300px]"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{plotSummary}</p>
          <div className="flex items-center gap-6">
            <div className="flex text-lg items-center">
              <CiClock2 />
              <span>{duration}</span>
            </div>
            <div className="flex text-lg items-center">
              <FaArrowTrendUp />
              <span>{duration}</span>
            </div>
            <div className="flex text-lg items-center">
              <SlCalender />
              <span>{releaseYear}</span>
            </div>
          </div>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
