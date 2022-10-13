import React from "react";
import { Device } from "./device";

export const Navbar = () => {
  return (
    <div className="tabs  flex justify-center mt-2 text-2xl">
      <a href="/devices">
        <button className="tab tab-lifted focus:tab-active focus:shadow-inner tab-lg">
          Devices
        </button>
      </a>

      <a href="/stats">
        <button className="tab tab-lifted focus:tab-active tab-lg focus:shadow-inner ">
          Statistic
        </button>
      </a>

      <a href="/prices">
        <button className="tab tab-lifted focus:tab-active tab-lg focus:shadow-inner ">
          Prices
        </button>
      </a>
    </div>
  );
};
