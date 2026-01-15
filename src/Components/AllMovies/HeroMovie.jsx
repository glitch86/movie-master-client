import React from "react";

const HeroMovie = ({
  handleSearch,
  setSort,
  genre,
  setGenre,
  language,
  setLanguage,
}) => {
  return (
    <div>
      <h1 className="heading py-5">All movies</h1>
      <div className="flex items-center justify-between">
        <div>
          <fieldset className="fieldset">
            <input
              type="text"
              className="input my-5"
              placeholder="Search"
              onChange={handleSearch}
            />
          </fieldset>
        </div>
        <div className="flex">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setSort("new")}>
                <a> Newest First </a>
              </li>
              <li onClick={() => setSort("old")}>
                <a>Oldest First </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 mb-5">
            {/* Genre Filter */}
            <select
              className="select select-bordered"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">All Genres</option>
              <option value="Action">Action</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Drama">Drama</option>
            </select>
            <select
              className="select select-bordered"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              <option value="English">English</option>
              <option value="Korean">Korean</option>
              <option value="Japanese">Japanese</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
