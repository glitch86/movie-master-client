import React from "react";
import Hero from "../Components/Home/Hero";
import useData from "../Hooks/useData";
import TopMovies from "../Components/Home/TopMovies/TopMovies";
import Stats from "../Components/Home/stats";
import RecenetMovies from "../Components/Home/RecentMovies/RecenetMovies";
import Genres from "../Components/Home/Genres";
import About from "../Components/Home/About";
import Faq from "../Components/Home/FAQ/Faq";
import Testimonials from "../Components/Home/Testimonials/Testimonials";

const users = fetch("http://localhost:3000/users").then(
  (res) => res.json()
);

const Home = () => {
  const { datas, loading } = useData(
    "http://localhost:3000/movies"
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
      <TopMovies></TopMovies>
      <RecenetMovies datas={datas}></RecenetMovies>
      <Genres></Genres>
      <About></About>
      <Faq></Faq>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
