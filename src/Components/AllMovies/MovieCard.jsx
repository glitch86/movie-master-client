import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router";

const MovieCard = ({ data }) => {
  // console.log(data);

  const {
    _id,
    title,
    posterUrl,
    plotSummary,
    rating,
    genre,
    releaseYear,
  } = data;

  return (
    <div className="card bg-base-100 w-60  shadow-sm mx-auto hover:-translate-y-3 transition-transform border">
      <figure className="h-48 object-cover">
        <img src={posterUrl} alt="poster" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{plotSummary}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-[10px]">{genre}</div>
          <div className="badge badge-outline text-[10px]">
            <div className="flex items-center gap-1">
              <SlCalender />
              <span>{releaseYear}</span>
            </div>
          </div>
          <div className="badge badge-outline text-[10px]">
            <div className="flex items-center">
              <FaStarHalfStroke />
              <span>{rating}</span>
            </div>
          </div>
        </div>
          <Link className="btn" to={`/movies/details/${_id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
