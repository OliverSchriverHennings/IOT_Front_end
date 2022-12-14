import { BsBatteryCharging, BsFillGearFill } from "react-icons/bs";
import { DeviceForm } from "./deviceForm";
import { Toggle } from "../toogle";

interface props {
  Name: string;
  chargedNumber: number;
  chargeTimeLeft: number;
  id: number;
  hoursAvailable: number[];
  fullChargeTime: number;
}

export const Device = ({
  Name,
  chargedNumber,
  chargeTimeLeft,
  hoursAvailable,
  id,
  fullChargeTime,
}: props) => {
  let formattedAvailableHours: any[];
  formattedAvailableHours = [];
  if (hoursAvailable != null) {
    hoursAvailable.forEach((data) => {
      formattedAvailableHours.push(<div>{data}</div>);
    });
  }

  return (
    <div className="card flex justify-center bg-neutral text-primary-content shadow-xl p-2 m-2">
      <div className="card-body">
        <h2 className="card-title flex justify-center">
          {Name} <BsBatteryCharging />
        </h2>
        <progress
          className="progress progress-primary bg-slate-50 flex justify-center"
          value={chargedNumber}
          max="100"
        ></progress>
        This device is {chargedNumber}% charged <br /> Remaining time:{" "}
        {chargeTimeLeft} minutes
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium inline-flex align-bottom justify-end items-center pr-2">
          <BsFillGearFill className="text-right " />
        </div>
        <div className="collapse-content">
          <Toggle text="Notify me when fully charged" />
          <Toggle text="Disable charging" />
          <p>Full Charge Time: {fullChargeTime}</p>
          <p>Available Hours: {formattedAvailableHours}</p>
          <DeviceForm id={id} />
        </div>
      </div>
    </div>
  );
};
