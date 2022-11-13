import { BsBatteryCharging, BsFillGearFill } from "react-icons/bs";
import { Toggle } from "./toogle";

interface props {
    price: number;
    time: number;
}

export const Price = ({ price, time }: props) => {
    return (
        <div>
            {time} : {price} kr.
        </div>

    );
};
