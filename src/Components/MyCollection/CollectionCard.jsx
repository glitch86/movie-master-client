import React from "react";
import { Link } from "react-router";

const CollectionCard = ({ data }) => {
  const { posterUrl, title, _id } = data;
  console.log(data);
  return (
    <div>
      <div className="flex items-center rounded-xl bg-base-100 shadow-sm my-6 p-4">
        <figure className=" h-[60px]">
          <img className="rounded-lg h-full" src={posterUrl} alt={title} />
        </figure>

        <div className="flex-1">
          <div>
            <div className="mx-2">
              <h2 className=" text-md">{title}</h2>
              <div className="flex gap-1"></div>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            to={`/movies/details/update/${_id}`}
            className="btn bg-green-400 text-white"
          >
            Edit
          </Link>
          <button className="btn bg-green-400 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
