import { Device } from "../device";

export const DevicePage = () => {
  return (
    <>
      <Device Name="Smartcharger" chargedNumber={35} fullchargeTime={0} />
      <Device Name="Carcharger" chargedNumber={95} fullchargeTime={0} />
    </>
  );
};
