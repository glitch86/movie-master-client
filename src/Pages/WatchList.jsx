import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import useData from "../Hooks/useData";
import WatchListCard from "../Components/WatchList/WatchListCard";

const WatchList = () => {
  const { user } = use(AuthContext);
  // console.log(user)
  const { datas, loading } = useData(
    `https://movie-master-server-six.vercel.app/watchlist?email=${user.email}`
  );
  console.log(datas);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="heading">Your Watch List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-4">
        {datas.map((data) => (
          <WatchListCard key={data._id} data={data}></WatchListCard>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
