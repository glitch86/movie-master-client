import React from "react";
import TopMovie from "./TopMovie";
import useData from "../../../Hooks/useData";

const TopMovies = () => {
  const { datas, loading } = useData(
    "https://movie-master-server-six.vercel.app/movies"
  );
  const filtered = [...datas].sort((a, b) => b.rating - a.rating).slice(0, 5);
  // console.log(datas);

  // console.log(filtered);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="my-6">
      <h1 className="heading">Top Rated Movies</h1>
      <div className="flex justify-between overflow-x-auto space-x-4">
        {filtered.map((data) => (
          <div key={data._id} className="min-w-[150px] shrink-0">
            <TopMovie data={data}></TopMovie>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
