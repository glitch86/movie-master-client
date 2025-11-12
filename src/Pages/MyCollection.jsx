import React, { use } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Context/AuthContext";
import CollectionCard from "../Components/MyCollection/CollectionCard";

const MyCollection = () => {
  const { user } = use(AuthContext);
  const { datas, loading } = useData(
    `http://localhost:3000/my-movies?email=${user.email}`
  );
  console.log(datas);
  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <div>
      {datas.map((data) => (
        <CollectionCard key={data._id} data={data}></CollectionCard>
      ))}
    </div>
  );
};

export default MyCollection;
