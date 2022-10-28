import axios from "axios";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import internal from "stream";
import { Device } from "../device";

interface device {
  charge: number;
  name: string;
}

export const DevicePage = () => {
  const [devices, setDevices] = useState<device[]>([
    { name: "", charge: 0 },
    { name: "", charge: 0 },
  ]);

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/device", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain",
        },
      })
      .then((response) => {
        setDevices(response.data);
        console.log(devices);
      });
  }, []);

  return (
    <>
      <Device
        Name={devices[0].name}
        chargedNumber={devices[0].charge}
        fullchargeTime={0}
      />
      <Device
        Name={devices[1].name}
        chargedNumber={devices[1].charge}
        fullchargeTime={0}
      />
    </>
  );
};
