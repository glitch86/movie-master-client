import React from "react";
import TopMovie from "../TopMovies/TopMovie";

const RecenetMovies = ({ datas }) => {
  const filtered = [...datas]
    .sort((a, b) => b.releaseYear - a.releaseYear)
    .slice(0, 5);
//   console.log(filtered);
  return (
    <div>
      <h1 className="heading">Recently Added</h1>
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

export default RecenetMovies;
