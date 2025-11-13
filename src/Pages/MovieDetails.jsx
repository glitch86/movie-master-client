import React, { use } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useData from "../Hooks/useData";
import { FaClock, FaPlay, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { AuthContext } from "../Context/AuthContext";

const MovieDetails = () => {
  const { user, deleteMovie } = use(AuthContext);

  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const { datas, loading } = useData(`http://localhost:3000/movies/${id}`);
  // console.log(datas);
  if (loading) {
    return <h1>loading....</h1>;
  }

  const {
    title,
    posterUrl,
    addedBy,
    cast,
    duration,
    country,
    director,
    genre,
    language,
    plotSummary,
    rating,
    releaseYear,
  } = datas;

  const handleDelete = () => {
    deleteMovie(id).then(() => {
      navigate("/movies");
    });
  };
  const owner = addedBy === user.email ? true : false;
  // console.log(owner);
  return (
    <div>
      <div>
        <div className="card lg:card-side ">
          <figure>
            <img className="h-96 rounded-lg" src={posterUrl} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="text-5xl font-semibold py-4">{title}</h2>
            <div className="flex items-center ">
              <div className="bg-white rounded-l-lg px-4 text-black">
                <span>HD</span>
              </div>
              <div className="bg-violet-500 px-4 text-black">
                <span>PG-13</span>
              </div>
              <div className="flex items-center gap-1 bg-blue-300 text-black px-4 rounded-r-lg">
                <FaClock />
                <span>{duration}</span>
              </div>
            </div>
            <div className="badge badge-outline">{genre}</div>

            <div className="py-2 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <button className="btn wfi flex items-center gap-1">
                <FaPlay />
                <span>Watch now</span>
              </button>

              <button className="btn flex items-center gap-1">
                <FaPlus />
                <span>Add to List</span>
              </button>
              <Link
                to={`/movies/details/update/${id}`}
                className={`btn flex items-center gap-1 ${
                  !owner ? "hidden" : ""
                }`}
              >
                <RiPencilFill />

                <span>Edit</span>
              </Link>
              <button
                className={`btn delete flex items-center gap-1 ${
                  !owner ? "hidden" : ""
                }`}
                onClick={handleDelete}
              >
                <FaRegTrashAlt />

                <span>Delete</span>
              </button>
            </div>

            <div className="bg-black/10 p-3 rounded-xl backdrop-blur-sm">
              <p>
                <span className="font-semibold">Plot Summary: </span>
                {plotSummary}
              </p>
              <p>
                <span className="font-semibold">Added by: </span>
                {addedBy}
              </p>
              <p>
                <span className="font-semibold">Duration: </span>
                {duration} mins
              </p>
              <p>
                <span className="font-semibold">Country: </span>
                {country}
              </p>
              <p>
                <span className="font-semibold">Director: </span>
                {director}
              </p>
              <p>
                <span className="font-semibold">Language: </span>
                {language}
              </p>
              <p>
                <span className="font-semibold">Casts: </span>
                {cast}
              </p>
              <p>
                <span className="font-semibold">Relaese Year: </span>
                {releaseYear}
              </p>
              <p>
                <span className="font-semibold">Rating: </span> {rating}
              </p>
            </div>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Listen</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
