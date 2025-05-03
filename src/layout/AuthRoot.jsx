import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar/Navbar";

const AuthRoot = () => {
  return (
    <>
    <div className=" bg-base-200 min-h-screen">
    <header className="  w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <div className=" w-11/12 mx-auto my-5">
        <Outlet></Outlet>
      </div>
    </div>
    </>
  );
};

export default AuthRoot;
