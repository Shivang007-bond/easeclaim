import React from "react";

const Main = () => {
  return (
    <div>
      <div className="h-screen bg-[#2F3045] rounded-b-3xl flex flex-col justify-center align-middle p-8">
        <div className="w-11/12 h-5/6 m-auto flex justify-between bg-[#FFFFFF] p-4 rounded-xl">
          <div className="font-semibold text-2xl">Plans Description</div>
          <div className="text-md">Basic</div>
          <div className="text-md">Standard</div>
          <div className="text-md">Premium</div>
        </div>
        <button className="bg-white w-24 m-auto text-[#476BC7] rounded-md p-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
