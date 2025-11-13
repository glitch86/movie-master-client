import React from "react";
import Hero from "../Components/Home/Hero";
import useData from "../Hooks/useData";
import TopMovies from "../Components/Home/TopMovies/TopMovies";
import Stats from "../Components/Home/stats";
import RecenetMovies from "../Components/Home/RecentMovies/RecenetMovies";
import Genres from "../Components/Home/Genres";
import About from "../Components/Home/About";

const users = fetch("https://movie-master-server-six.vercel.app/users").then(
  (res) => res.json()
);

const Home = () => {
  const { datas, loading } = useData(
    "https://movie-master-server-six.vercel.app/movies"
  );
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <Hero datas={datas}></Hero>
      <Stats users={users} datas={datas}></Stats>
      <TopMovies datas={datas}></TopMovies>
      <RecenetMovies datas={datas}></RecenetMovies>
      <Genres></Genres>
      <About></About>
    </div>
  );
};

export default Home;
