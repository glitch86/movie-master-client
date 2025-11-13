import React from "react";

const TopMovie = ({ data }) => {
  // console.log(data);
  const { posterUrl, title } = data;

  return (
    <div className="flex">
        <div className="rotate-90 origin-top-left align-text-top text-nowrap ">
            <span>{title}</span>
        </div>
      <div className="h-60">
        <img className="h-full" src={posterUrl} alt="" />
      </div>
    </div>
  );
};

export default TopMovie;
