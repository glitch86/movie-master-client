import React from "react";
import error from "../assets/toppng.com-404-error-error-404-transparent-887x286.png";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center my-8">
        <div>
          <img src={error} alt="" />
          <div className="text-center">
            <p className="text-gray-300 my-4">
              The page you are looking for is not available.
            </p>
            <button className="btn">
              <Link to="/"><div className="flex gap-2 items-center">
                <FaRegArrowAltCircleLeft />
                <span>
                    Go Back Home
                </span>
                </div></Link>
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
