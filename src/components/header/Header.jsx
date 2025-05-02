import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
// import { data } from 'react-router';
const Header = () => {
  return (
    <>
      <div className=" flex flex-col my-4 items-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <h4>{format(new Date(), "eeee , LLLL dd , yyyy")}</h4>
      </div>
      
    </>
  );
};

export default Header;
