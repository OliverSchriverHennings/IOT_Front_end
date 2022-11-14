import axios from "axios";
import { time } from "console";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import internal from "stream";
import { Device } from "../device";

interface device {
  charge: number;
  name: string;
  id: number;
  hoursAvaible: number[];
  hoursToCharge: number;
}

export const DevicePage = () => {
  const [devices, setDevices] = useState<device[]>([
    { name: "", charge: 404, hoursToCharge: 0, id: 0, hoursAvaible: [] },
    { name: "", charge: 404, hoursToCharge: 0, id: 0, hoursAvaible: [] },
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
        if (response.data !== null) {
          setDevices(response.data);
        }
      });
  }, []);

  return (
    <>
      <Device
        Name={devices[0].name}
        chargedNumber={devices[0].charge}
        id={devices[0].id}
        chargeTimeLeft={timeLeft(devices[0].hoursToCharge, devices[0].charge)}
      />
      <Device
        Name={devices[1].name}
        id={devices[1].id}
        chargedNumber={devices[1].charge}
        chargeTimeLeft={timeLeft(devices[1].hoursToCharge, devices[1].charge)}
      />
    </>
  );
};

function timeLeft(fullTimeToCharge: number, charged: number) {
  //find 100% charge time in minutes
  let fullTimeMin = fullTimeToCharge * 60;
  // find 1 procent
  let timeCalc = fullTimeMin / 100;
  // multiply by procents already charges
  let res = charged * timeCalc;
  // take full charge times i min (timeCalc) and subtract what is already charged (res)
  return fullTimeMin - res;
}
