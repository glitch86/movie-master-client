import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddMovie = () => {
  const { user } = use(AuthContext);
  // console.log(user.email);
  const navigate = useNavigate();

  const handleAddMovie = (e) => {
    e.preventDefault();
    const form = e.target;

    const newMovie = {
      title: form.title.value,
      genre: form.genre.value,
      releaseYear: form.releaseYear.value,
      director: form.director.value,
      cast: form.cast.value,
      rating: form.rating.value,
      duration: form.duration.value,
      plotSummary: form.plotSummary.value,
      posterUrl: form.posterUrl.value,
      language: form.language.value,
      country: form.country.value,
      addedBy: form.addedBy.value,
    };

    fetch("https://movie-master-server-six.vercel.app/movies/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${user.accessToken}`
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
      })
      .catch((err) => {
        console.log("errorrr", err);
      });

    // console.log(newMovie);
    form.reset();
    navigate("/movies");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-2">
        Add a New Movie
      </h2>
      <form
        onSubmit={handleAddMovie}
        className="card w-full max-w-lg bg-black/10 backdrop-blur-sm shadow-sm p-6 space-y-4 md:grid grid-cols-2 gap-4"
      >
        {/* title */}
        <div>
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Movie title"
            required
          />
        </div>

        {/* genre */}
        <div>
          <label className="label font-medium">Genre</label>
          <select
            defaultValue={""}
            name="genre"
            required
            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
          >
            <option value="" disabled>
              Select genre
            </option>
            <option value="Action">Action</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drama">Drama</option>
          </select>
        </div>

        {/* release Year */}
        <div>
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
          <input
            type="number"
            name="releaseYear"
            className="input input-bordered w-full"
            placeholder="2024"
            required
          />
        </div>

        {/* director */}
        <div>
          <label className="label">
            <span className="label-text">Director</span>
          </label>
          <input
            type="text"
            name="director"
            className="input input-bordered w-full"
            placeholder="Director name"
            required
          />
        </div>

        {/* cast */}
        <div>
          <label className="label">
            <span className="label-text">Cast</span>
          </label>
          <input
            type="text"
            name="cast"
            className="input input-bordered w-full"
            placeholder="Actor1, Actor2..."
          />
        </div>

        {/* rating */}
        <div>
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            className="input input-bordered w-full"
            step="0.1"
            min="0"
            max="10"
            placeholder="7.5"
          />
        </div>

        {/* duration */}
        <div>
          <label className="label">
            <span className="label-text">Duration (in minutes)</span>
          </label>
          <input
            type="number"
            name="duration"
            className="input input-bordered w-full"
            placeholder="110"
          />
        </div>

        {/* poster */}
        <div>
          <label className="label">
            <span className="label-text">Poster URL</span>
          </label>
          <input
            type="url"
            name="posterUrl"
            className="input input-bordered w-full"
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        {/* language */}
        <div>
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <input
            type="text"
            name="language"
            className="input input-bordered w-full"
            placeholder="English"
          />
        </div>

        {/* country */}
        <div>
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <input
            type="text"
            name="country"
            className="input input-bordered w-full"
            placeholder="Canada"
          />
        </div>

        {/* added By */}
        <div>
          <label className="label">
            <span className="label-text">Added By (email)</span>
          </label>
          <input
            type="email"
            name="addedBy"
            defaultValue={user.email}
            readOnly
            className="input input-bordered w-full"
            placeholder="user@example.com"
          />
        </div>
        {/* plot */}
        <div className="col-span-2">
          <label className="label">
            <span className="label-text">Plot Summary</span>
          </label>
          <textarea
            name="plotSummary"
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="A rogue pilot must fight against..."
          ></textarea>
        </div>

        <div className="pt-4 col-span-2">
          <button type="submit" className="btn btn-primary w-full">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
