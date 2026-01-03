import React from "react";
import { Link } from "react-router";

const TopMovie = ({ data }) => {
  // console.log(data);
  const { posterUrl, title, _id } = data;

  return (
    <div className="text-center hover:-translate-y-3 transition-transform ">
      <Link to={`/movies/details/${_id}`}>
        <div className="h-60">
          <img className="h-full" src={posterUrl} alt="" />
        </div>
        <div className="">
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default TopMovie;
