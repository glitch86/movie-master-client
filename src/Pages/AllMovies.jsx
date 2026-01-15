import React, { useState } from "react";
import useData from "../Hooks/useData";
import TopMovieCard from "../Components/AllMovies/TopMovieCard";
import MovieCardContainer from "../Components/AllMovies/MovieCardContainer";
import HeroMovie from "../Components/AllMovies/HeroMovie";

const AllMovies = () => {
  const [searchText, setSearchText] = useState();
  const [sort, setSort] = useState();
  const [genre, setGenre] = useState();
  const [language, setLanguage] = useState();
  const { datas, loading } = useData("https://movie-master-server-six.vercel.app/movies");
  const filtered = [...datas].sort((a, b) => b.rating - a.rating).slice(0, 10);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
  };

  // console.log(sort)

  //   console.log(datas);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 mx-auto">
        <div className="flex-1">
          <div>
            <HeroMovie
              handleSearch={handleSearch}
              // handleSort={handleSort}
              setSort={setSort}
              genre={genre}
              setGenre={setGenre}
              language={language}
              setLanguage={setLanguage}
            ></HeroMovie>
          </div>
          <div className="w-full">
            <MovieCardContainer
              searchText={searchText}
              sort={sort}
              genre={genre}
              language={language}
            ></MovieCardContainer>
          </div>
        </div>

        <div className="w-fit">
          <h1 className="heading py-5">Top 10</h1>
          <aside className="bg-base-100/50 p-3 rounded-lg">
            {filtered.map((data) => (
              <TopMovieCard key={data._id} data={data}></TopMovieCard>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
