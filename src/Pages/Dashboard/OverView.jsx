import React from "react";
import { Link } from "react-router";
import MovieTable from "../../Components/Dashboard/MovieTable";

const OverView = () => {
  return (
    <div>
      <Link className="btn" to={"/movies/add"}>Add Movies</Link>
      <h1 className="heading">
        My Movies
      </h1>
      <MovieTable></MovieTable>
    </div>
  );
};

export default OverView;
