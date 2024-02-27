import React from "react";
import logo from "../Assets/Images/navbar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-around align-middle p-2">
      <div className="w-32 m-2">
        <img src={logo} />
      </div>
      <div className="m-2">
        <ul className="flex justify-between mx-4">
          <li className="mx-4 text-[#476BC7]">Home</li>
          <li className="mx-1">Service</li>
          <FontAwesomeIcon className="w-3 mt-1" icon={faChevronDown} />
          <li className="mx-4">Pricing</li>
          <li className="mx-4">Join us</li>
          <li className="mx-1">Blog</li>
          <FontAwesomeIcon className="w-3 mt-1" icon={faChevronDown} />
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
