import React from "react";
import logo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img className="w-44" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
