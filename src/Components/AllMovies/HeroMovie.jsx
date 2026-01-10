import React from "react";

const HeroMovie = ({ handleSearch, setSort }) => {
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
        <div>
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
          {/* <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter by Category
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
