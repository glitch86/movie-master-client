import React from "react";
import TopMovie from "./TopMovie";

const TopMovies = ({ datas }) => {
  const filtered = [...datas].sort((a, b) => b.rating - a.rating).slice(0, 5);
  // console.log(datas);

  // console.log(filtered);
  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="flex justify-between overflow-x-auto space-x-4">
        {filtered.map((data) => (
          <div key={data._id} className="min-w-[150px] shrink-0">
            <TopMovie  data={data}></TopMovie>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
