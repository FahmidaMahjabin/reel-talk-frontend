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
  onChange?: (value1: Dayjs | null, value2: string) => void;
};
export default function DatePickerforUM({
  name,
  size,
  value,
  label,
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
      <div>{label ? label : null}</div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            onChange={handleChange}
            value={dayjs(field.value) || null}
            size={size}
          />
        )}
      />
    </>
  );
}
