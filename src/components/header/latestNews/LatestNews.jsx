import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <>
      <div
        className="  flex gap-3 items-center bg-base-200 p-4
         rounded-lg"
      >
        <p className=" rounded-md text-white bg-secondary p-3 ">Latest</p>
        <Marquee className=" flex flex-col gap-8 text-xl">
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default LatestNews;
