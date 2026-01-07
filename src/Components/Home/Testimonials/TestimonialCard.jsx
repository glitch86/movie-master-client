import React from "react";
import { FaThumbsUp } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  const { imgUrl, username, date, comment, usefulCount } = testimonial;
  // console.log(testimonial);

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="card-body gap-4">
        {/* user Info */}
        <div className="flex items-center gap-4">
          <img
            src={imgUrl}
            alt={username}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold ">{username}</h3>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>

        {/* comment */}
        <p className=" text-sm leading-relaxed">“{comment}”</p>

        {/* footer */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">
            <FaThumbsUp></FaThumbsUp> {usefulCount} people found this helpful
          </span>
          <button className="btn btn-sm btn-outline">Helpful</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
