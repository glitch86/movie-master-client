import React from 'react';
import Hero from '../Components/Home/Hero';
import useData from '../Hooks/useData';
import TopMovies from '../Components/Home/TopMovies/TopMovies';



const Home = () => {
    const { datas, loading } = useData("https://movie-master-server-six.vercel.app/movies");
    if(loading){
        return<h1>loading....</h1>
    }
    return (
        <div>
            <Hero datas={datas}></Hero>
            <TopMovies datas={datas}></TopMovies>
        </div>
    );
};

export default Home;