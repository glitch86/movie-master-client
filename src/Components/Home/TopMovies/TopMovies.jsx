import React from "react";
import TopMovie from "./TopMovie";

const TopMovies = ({ datas }) => {
  const filtered = [...datas].sort((a, b) => b.rating - a.rating).slice(0, 5);
  // console.log(datas);

  // console.log(filtered);
  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="flex">
        {filtered.map((data) => (
          <TopMovie key={data._id} data={data}></TopMovie>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
