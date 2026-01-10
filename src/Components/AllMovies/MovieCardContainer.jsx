import React from "react";
import useData from "../../Hooks/useData";
import MovieCard from "./MovieCard";

const MovieCardContainer = ({ searchText, sort }) => {
  const { datas, loading } = useData(
    `http://localhost:3000/movies?searchText=${searchText || ""}`
  );

  const sorted = [...datas];
  if (sort === "new") {
    sorted.sort((a, b) => b.releaseYear - a.releaseYear);
  } else if (sort === "old") {
    sorted.sort((a, b) => a.releaseYear - b.releaseYear);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5">
      {sorted.map((data) => (
        <MovieCard key={data._id} data={data}></MovieCard>
      ))}
    </div>
  );
};

export default MovieCardContainer;
