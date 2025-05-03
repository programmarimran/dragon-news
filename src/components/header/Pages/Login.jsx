import React from "react";

import { Link } from "react-router";

const Login = () => {
  return (
    <>
   
      <main>
        <div className="card bg-base-100 my-6 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login Your Account!</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>Dont't Have An Account ? <Link to={'/auth/register'} className=" text-blue-600 underline">Register</Link></p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
