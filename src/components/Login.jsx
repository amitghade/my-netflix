import React from "react";
import Header from "./Header";
import bgimage from "../assets/netflix-bgimage.jpg";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgimage} alt="movies-banner" />
      </div>
      <form className="w-3/12 relative bg-black p-12">
        <input
          type="text"
          placeholder="Email address"
          className=" bg-white m-2 p-2"
        />
        <input
          type="text"
          placeholder="Password "
          className="  bg-white m-2 p-2"
        />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
