import React from "react";

const Main = () => {
  return (
    <div>
      <div className="h-screen bg-[#2F3045] rounded-b-3xl flex flex-col justify-center align-middle">
        <div className="w-11/12 h-5/6 m-auto flex justify-between mt-16 bg-[#FFFFFF] p-4 rounded-xl">
          <span className="font-semibold text-2xl">Plans Description</span>
          <span className="text-md">Basic</span>
          <span className="text-md">Standard</span>
          <span className="text-md">Premium</span>
        </div>
        <button className="bg-white w-24 m-auto text-[#476BC7] rounded-md p-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
