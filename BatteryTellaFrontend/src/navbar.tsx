import React from "react";

export const Navbar = () => {
  return (
    <div className="tabs flex justify-center mt-2 text-2xl">
      <button className="tab tab-lifted focus:tab-active tab-lg">
        Devices
      </button>
      <button className="tab tab-lifted focus:tab-active tab-lg">
        Statistic
      </button>
      <button className="tab tab-lifted focus:tab-active tab-lg">Prices</button>
    </div>
  );
};
