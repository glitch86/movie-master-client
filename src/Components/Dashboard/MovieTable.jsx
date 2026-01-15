import React, { useContext } from "react";
import useData from "../../Hooks/useData";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const MovieTable = () => {
  const { user } = useContext(AuthContext);
  const { datas, loading } = useData("http://localhost:3000/movies");

  //   console.log(datas)

  const myMovie = datas.filter((data) => data.addedBy === user.email);

  console.log(myMovie);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Director</th>
            <th>Duration(min)</th>
            <th>Language</th>
            <th>Details</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myMovie.length > 0 ? (
            myMovie.map((movie) => (
              <tr key={movie._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={movie.posterUrl} alt="movie banner" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{movie.title}</div>
                      <div className="text-sm opacity-50">{movie.genre}</div>
                    </div>
                  </div>
                </td>
                <td>{movie.director}</td>
                <td>{movie.duration}</td>
                <td>{movie.language}</td>
                <th>
                  <Link to={`/movies/details/${movie._id}`} className="btn">
                    details
                  </Link>
                </th>
                <th>
                  <Link
                    to={`/movies/details/update/${movie._id}`}
                    className="btn"
                  >
                    Edit
                  </Link>
                </th>
              </tr>
            ))
          ) : (
            <div>
              <h1 className="heading text-gray-400">You don't have any movies</h1>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
