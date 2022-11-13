import { SubmitHandler, useForm } from "react-hook-form";
import makeAnimated from "react-select/animated";
import React from "react";
import Select from "react-select";

interface props {
  hoursToCharge: number;
  hoursAvailable: number[];
}

interface timeNumber {
  readonly value: number;
  readonly label: number;
}

const timeData: readonly timeNumber[] = [
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
  { value: 24, label: 24 },
];
const animatedComponents = makeAnimated();

export const DeviceForm = () => {
  const { register, handleSubmit } = useForm<props>();
  const onSubmit: SubmitHandler<props> = (data) => console.log(data);

  return (
    <>
      <label htmlFor="my-modal-3" className="btn">
        Edit DeviceS
      </label>
      <>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-1/3 overflow-hidden">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
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
                className="text-black"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={timeData[1]}
                isMulti
                options={timeData}
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </>
    </>
  );
};
