import React, { use } from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";


const Stats = ({ datas, users }) => {
  // console.log(users)
  const user = use(users)
  return (
    <div className="my-7 text-center flex flex-col justify-center items-center py-4 rounded-xl bg-black/10 backdrop-blur-sm shadow-sm">
      <h2 className="heading md:text-4xl my-6 p-4">
        Trusted by Millions, Built for You
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-evenly my-8">
        <div className="text-center my-6 hover:-translate-y-3 transition-transform ">
          <p>Total Movies</p>
          <div className="text-6xl justify-center flex items-baseline font-semibold">
            <h1>{datas.length}</h1>
            <IoIosDownload></IoIosDownload>
          </div>

          <p>21% more than last month</p>
        </div>
        <div className="text-center my-6 hover:-translate-y-3 transition-transform ">
          <p>Active Users</p>
          <div className="text-6xl flex justify-center items-center gap-2 font-semibold">
            <h1>{user.length}</h1>
            <FaUserAstronaut />
          </div>
          <p>Join Us Today</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
