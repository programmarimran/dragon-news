import React from "react";
import userImg from "../../../assets/user.png";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className=" grid grid-cols-3 items-center">
      <div></div>
      <div className=" flex gap-3 justify-center">
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'/about'}>About </NavLink>
        <NavLink to={'/career'}>Career </NavLink>
      </div>
      <div className=" flex justify-end gap-2  ">
        <img src={userImg} alt="" />
        <button className=" btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
