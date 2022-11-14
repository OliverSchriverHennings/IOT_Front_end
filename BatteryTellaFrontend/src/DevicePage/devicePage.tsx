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
  hoursAvailable: number[];
  hoursToCharge: number;
}

export const DevicePage = () => {
  const [devices, setDevices] = useState<device[]>([
    { name: "", charge: 404, hoursToCharge: 8, id: 0, hoursAvailable: [] },
    { name: "", charge: 404, hoursToCharge: 8, id: 0, hoursAvailable: [] },
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

  let formattedDevices: any[];
  formattedDevices = [];
  devices.forEach((device) => {
    formattedDevices.push(
      <Device
        Name={device.name}
        chargedNumber={device.charge}
        chargeTimeLeft={timeLeft(device.hoursToCharge, device.charge)}
        hoursAvailable={device.hoursAvailable}
        id={0}
       fullChargeTime={device.hoursToCharge}/>
    );
  });

  return <>{formattedDevices}</>;
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
