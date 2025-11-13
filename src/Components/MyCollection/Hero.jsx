import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="my-8">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold">Your Movies</h1>
        <p className="text-gray-400">
          <Link to={"/movies/add"} className="btn">
            Add more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
