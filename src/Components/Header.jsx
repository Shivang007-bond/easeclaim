import React from "react";
import logo from "./Assets/Images/navbar.svg";

const Header = () => {
  return (
    <div className="flex justify-around p-2">
      <div className="w-32">
        <img src={logo} />
      </div>
      <div className="">
        <ul className="flex justify-evenly p-2">
          <li className="p-2">Home</li>
          <li className="p-2">Service</li>
          <li className="p-2">Pricing</li>
          <li className="p-2">Join us</li>
          <li className="p-2">Blog</li>
        </ul>
      </div>
      <div>
        <button className="border border-[#FB7369] text-[#FB7369] px-2 py-1 rounded-md m-2">
          Claim Now
        </button>
        <button className="border bg-[#FB7369] text-white px-2 py-1 rounded-md">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
