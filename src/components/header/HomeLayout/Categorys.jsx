import React, { use } from "react";
import { NavLink } from "react-router";
const categorysPromise = fetch("/categories.json").then((res) => res.json());
const Categorys = () => {
  const categorys = use(categorysPromise);
  return (
    <>
      <h1 className=" font-bold">Total category ({categorys.length})</h1>
      <div className=" grid grid-cols-1 gap-3">
        {categorys.map((category) => (
          <NavLink to={`/category/${category.id}`} className='btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-gray-500' key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </>
  );
};

export default Categorys;
