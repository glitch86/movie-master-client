import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router";
import useData from "../../Hooks/useData";

const WatchListCard = ({ data }) => {
  const { datas } = useData(
    `https://movie-master-server-six.vercel.app/movies/${data.movie_id}`
  );

  const { _id, title, posterUrl, plotSummary, rating, genre, releaseYear } =
    datas;

  return (
    <div className="card bg-base-100 w-72 shadow-sm mx-auto hover:-translate-y-3 transition-transform border">
      <figure className="h-80 object-cover">
        <img src={posterUrl} alt="Shoes" />
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
        <Link className="btn" to={`/movies/details/${_id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};
export default WatchListCard;
