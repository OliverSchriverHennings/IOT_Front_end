import { SubmitHandler, useForm } from "react-hook-form";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface props {
  hoursToCharge: number;
  hoursAvailable: timeNumber[];
}

interface timeNumber {
  value: number;
  label: number;
}

interface input {
  id: number;
}

const timeData: timeNumber[] = [
  { value: 0, label: 0 },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
  { value: 11, label: 11 },
  { value: 12, label: 12 },
  { value: 13, label: 13 },
  { value: 14, label: 14 },
  { value: 15, label: 15 },
  { value: 16, label: 16 },
  { value: 17, label: 17 },
  { value: 18, label: 18 },
  { value: 19, label: 19 },
  { value: 20, label: 20 },
  { value: 21, label: 21 },
  { value: 22, label: 22 },
  { value: 23, label: 23 },
];
const animatedComponents = makeAnimated();

export const DeviceForm = ({ id }: input) => {
  const { register, handleSubmit } = useForm<props>();
  const onSubmit: SubmitHandler<props> = (data) => {
    axios
      .patch(`http://127.0.0.1:5000/device/${id}`, {
        hoursAvailable: timeChosen,
        hoursToCharge: data.hoursToCharge,
      })
      .then((res) => {
        if (res.status === 200) {
          showToastMessage();
        }
      })
      .catch(() => {
        showToastMessageError();
      });
  };

  const [timeChosen, setTimeChosen] = useState<number[]>([]);

  const handleChange = (selectedOptions: any) => {
    console.log("handleChange", selectedOptions);
    const times = selectedOptions.map((t: any) => t.value);
    setTimeChosen(times);
  };

  const showToastMessage = () => {
    toast.success("Success your device is now updated!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastMessageError = () => {
    toast.error("something went wrong :(", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <label htmlFor="my-modal-3" className="btn">
        Edit DeviceS
      </label>
      <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-1/2 ">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle  absolute right-2 top-2"
            >
              x
            </label>
            <h3 className="text-lg font-bold">Edit device</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid flex-row-3 grid-flow-row gap-4 justify-center"
            >
              <label className="mt-4">Full charge time in hours</label>
              <input className="text-black" {...register("hoursToCharge")} />
              <label>which charge hours are avaible?</label>

              <Select
                {...register("hoursAvailable")}
                className="text-black"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={timeData}
                onChange={handleChange}
              />

              <input type="submit" className="btn rounded-xl" />
            </form>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </>
  );
};
