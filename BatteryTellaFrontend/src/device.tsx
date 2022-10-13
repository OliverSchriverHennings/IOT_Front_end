import { BsBatteryCharging, BsFillGearFill } from "react-icons/bs";
import { Toggle } from "./toogle";

export const Device = () => {
  return (
    <div className="card flex bg-neutral text-primary-content  p-2">
      <div className="card-body">
        <h2 className="card-title">
          Smartcharger <BsBatteryCharging />
        </h2>
        <progress
          className="progress progress-primary bg-slate-50 w-56"
          value="30"
          max="100"
        ></progress>
        this device is 30% charged remaning time: 2.5 hours
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium inline-flex align-bottom justify-end items-center pr-2">
          <BsFillGearFill className="text-right " />
        </div>
        <div className="collapse-content">
          <Toggle text="Notify me when fully charged" />
          <Toggle text="Disable charing" />
        </div>
      </div>
    </div>
  );
};
