import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import LatestNews from "../components/header/latestNews/LatestNews";
import Navbar from "../components/header/Navbar/Navbar";
import LeftSide from "../components/header/HomeLayout/LeftSide";
import RightSide from "../components/header/HomeLayout/RightSide";

const Root = () => {
  return (
    <>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-8">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <aside className=" col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className=" col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className=" col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </>
  );
};

export default Root;
