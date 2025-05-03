import React, { use } from "react";
import userImg from "../../../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
  const user=use(AuthContext)
  return (
    <div className=" grid grid-cols-3 items-center">
      <div>{user.email}</div>
      <div className=" flex gap-3 justify-center">
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'/about'}>About </NavLink>
        <NavLink to={'/career'}>Career </NavLink>
      </div>
      <div className=" flex justify-end gap-2  ">
        <img className=" rounded-full" src={userImg} alt="" />
        <Link to={'/auth/login'} className=" btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
