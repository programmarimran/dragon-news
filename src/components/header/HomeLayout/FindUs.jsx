import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className=" font-bold">Find Us</h1>
      <div className="join join-vertical w-full">
        <button className="btn bg-gray-50 justify-start join-item"><FaFacebook></FaFacebook> FaceBook</button>
        <button className="btn bg-gray-50 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn bg-gray-50 justify-start join-item"><FaInstagram></FaInstagram> Instragram</button>
      </div>
    </div>
  );
};

export default FindUs;
