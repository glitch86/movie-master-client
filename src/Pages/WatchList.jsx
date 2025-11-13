import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import useData from "../Hooks/useData";

const WatchList = () => {
  const { user } = use(AuthContext);
  // console.log(user)
  const { datas, loading } = useData(
    `http://localhost:3000/watchlist?email=${user.email}`,
    {
      authorization: `Bearer ${user.accessToken}`,
    }
  );
  console.log(datas);
  if (loading) {
    return <h1>loading....</h1>;
  }
  return <div>watchlist</div>;
};

export default WatchList;
