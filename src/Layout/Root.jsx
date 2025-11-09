import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import MyContainer from "../Components/MyContainer";

const Root = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <NavBar></NavBar>
      </div>
      <div className="min-h-screen py-14">
        <MyContainer>
          <Outlet></Outlet>
        </MyContainer>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
