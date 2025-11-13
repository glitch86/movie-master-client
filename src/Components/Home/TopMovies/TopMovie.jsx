import React from "react";

const TopMovie = ({ data }) => {
  // console.log(data);
  const { posterUrl, title } = data;

  return (
    <div className="text-center hover:-translate-y-3 transition-transform ">
      <div className="h-60">
        <img className="h-full" src={posterUrl} alt="" />
      </div>
      <div className="">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TopMovie;
