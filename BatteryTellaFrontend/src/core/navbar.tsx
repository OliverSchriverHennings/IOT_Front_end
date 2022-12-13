import React, { useState } from "react";
import { Device } from "../DevicePage/device";

export const Navbar = () => {
  const [count, setCount] = useState(1);
  function clicktab(tabNumberRef: number) {
    setCount(tabNumberRef);
    console.log(count);
  }

  return (
    <div className="tabs  flex justify-center mt-2 text-2xl">
      <a href="/devices">
        {count === 1 ? (
          <button
            className="tab tab-lifted tab-active shadow-inner tab-lg"
            onClick={() => clicktab(1)}
          >
            Devices
          </button>
        ) : (
          <button className="tab tab-lifted tab-lg" onClick={() => clicktab(1)}>
            Devices
          </button>
        )}
      </a>
      <a href="/stats" onClick={() => clicktab(2)}>
        {count === 2 ? (
          <button className="tab tab-lifted tab-active shadow-inner tab-lg">
            Stats
          </button>
        ) : (
          <button className="tab tab-lifted tab-lg">Stats</button>
        )}
      </a>

      <a href="/prices" onClick={() => clicktab(3)}>
        {count === 3 ? (
          <button className="tab tab-lifted tab-active shadow-inner tab-lg">
            Prices
          </button>
        ) : (
          <button className="tab tab-lifted tab-lg">Prices</button>
        )}
      </a>
    </div>
  );
};
