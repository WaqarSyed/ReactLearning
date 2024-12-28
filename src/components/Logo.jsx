import React from "react";
import logo from "../assets/logo.png";
function Logo({ width = "200" }) {
  return (
    <div className="text-white text-xl border-sky-800 border-solid border-2 p-1 text-center">
      <span>PostClub</span>
      {/* <img src={logo} width="100px" height="50" className="rounded-full" /> */}
    </div>
  );
}

export default Logo;
