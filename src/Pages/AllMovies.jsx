import React from "react";
import useData from "../Hooks/useData";
import MovieCard from "../Components/AllMovies/MovieCard";
import TopMovieCard from "../Components/AllMovies/TopMovieCard";

const AllMovies = () => {
  const { datas, loading } = useData("http://localhost:3000/movies");
  const filtered = [...datas].sort((a, b) => b.rating - a.rating).slice(0, 10);
 if(loading){
        return <div className='min-h-screen flex justify-center'><span className="loading loading-spinner loading-xl"></span></div>
    }
  //   console.log(datas);
  return (
    <div >
      <div className="flex flex-col lg:flex-row gap-4 mx-auto">
        <div>
          <h1 className="heading py-5">All movies</h1>

          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5">
            {datas.map((data) => (
              <MovieCard key={data._id} data={data}></MovieCard>
            ))}
          </div>
        </div>
        
        <div className="flex-1">
            <h1 className="heading py-5">Top 10</h1>
          <aside className="bg-base-100/50 p-3 rounded-lg">
            {
                filtered.map(data => <TopMovieCard key={data._id} data={data}></TopMovieCard>)
            }
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
