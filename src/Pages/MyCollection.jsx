import React, { use } from "react";
import useData from "../Hooks/useData";
import { AuthContext } from "../Context/AuthContext";
import CollectionCard from "../Components/MyCollection/CollectionCard";
import { Link } from "react-router";

const MyCollection = () => {
  const { user } = use(AuthContext);
  // console.log(user)
  const { datas, loading } = useData(
    `https://movie-master-server-six.vercel.app/my-collection?email=${user.email}`,{
      authorization: `Bearer ${user.accessToken}`
    }
  );
  // console.log(datas);
  if (loading) {
    return <h1>loading....</h1>;
  }
  return (
    <div>
      <Link to={"/movies/add"} className="btn">Add a movie</Link>
      {datas.map((data) => (
        <CollectionCard key={data._id} data={data}></CollectionCard>
      ))}
    </div>
  );
};

export default MyCollection;
