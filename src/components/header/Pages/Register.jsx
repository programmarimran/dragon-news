import React, { use } from "react";

import { Link } from "react-router";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser}=use(AuthContext)
  // console.log(createUser)
  const handleRegister=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const image=e.target.image.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name,image,email,password)
    createUser(email,password)
    .then(result=>
      console.log(result.user)
    )
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <>
   
      <main>
        <div className="card bg-base-100 mx-auto my-6 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-xl text-center font-bold">
              Register Your Account!
            </h1>
            <fieldset className="fieldset">
                {/* name */}
              <label className="label">Name</label>
              <input
                type="text" 
                name="name"
                className="input"
                placeholder="Enter your name"
              />
              {/* image */}
              <label className="label">Image URL</label>
              <input
                type="text" 
                name="image"
                className="input"
                placeholder="Enter your image URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <button type=" submit" className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              Already you have an Account ?{" "}
              <Link to={"/auth/login"} className=" text-blue-600 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
