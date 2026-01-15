import React, { use } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Context/AuthContext";
import CollectionCard from "../Components/MyCollection/CollectionCard";
import Hero from "../Components/MyCollection/Hero";

const MyCollection = () => {
  const { user } = use(AuthContext);
  // console.log(user)
  const { datas, loading } = useData(
    `https://movie-master-server-six.vercel.app/my-collection?email=${user.email}`,
    {
      authorization: `Bearer ${user.accessToken}`,
    }
  );
  // console.log(datas);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="h-screen">
      <Hero></Hero>
      <div className="">
        {!datas.length ? (
          <div className="flex flex-col justify-center text-center text-xl font-semibold">
            <h3>Your have no movies yet.</h3>
          </div>
        ) : (
          <div>
            {datas.map((data) => (
              <CollectionCard key={data._id} data={data}></CollectionCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCollection;
