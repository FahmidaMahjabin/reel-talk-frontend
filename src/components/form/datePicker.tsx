"use client";
import { DatePicker, Input } from "antd";
import dayjs, { Dayjs } from "dayjs";

import { Controller, useForm, useFormContext } from "react-hook-form";
import type { DatePickerProps } from "antd";
type IInput = {
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "middle" | "large";
  picker?: "date" | "month" | "year";
  onChange?: (value1: Dayjs | null, value2: string) => void;
};
export default function DatePickerforUM({
  name,
  size,
  value,
  label,
  picker,
  onChange,
}: IInput) {
  const { control, setValue } = useFormContext();
  const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log("date:", date, "dateString:", dateString);
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <>
      <div>
        {label ? (
          <h4 style={{ margin: "4px", display: "block" }}>{label} </h4>
        ) : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            onChange={handleChange}
            // value={dayjs(field.value)}
            size={size}
            picker={picker}
          />
        )}
      />
    </>
  );
}
