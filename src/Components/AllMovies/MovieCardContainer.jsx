import React, { useEffect, useState } from "react";
import useData from "../../Hooks/useData";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieCardContainer = ({ searchText, sort, genre, language }) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://movie-master-server-six.vercel.app/movies", {
        params: {
          searchText,
          genre,
          language,
        },
      })
      .then((res) => {
        // console.log(res.data)
        setDatas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [searchText, genre, language]);


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
      {sorted.length > 0 ? (
        sorted.map((data) => <MovieCard key={data._id} data={data}></MovieCard>)
      ) : (
        <div>
          <h1 className="heading text-gray-400">No results</h1>
        </div>
      )}
    </div>
  );
};

export default MovieCardContainer;
