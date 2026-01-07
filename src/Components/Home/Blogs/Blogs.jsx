import React from "react";
import useData from "../../../Hooks/useData";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { datas: blogs, loading } = useData("http://localhost:3000/blogs");

//   console.log(blogs);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="heading">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {blogs.map((blog) => {
          // return <h1>h</h1>
          return <BlogCard key={blog._id} blog={blog}></BlogCard>;
        })}
      </div>
    </div>
  );
};

export default Blogs;
