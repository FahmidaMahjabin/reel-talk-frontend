"use client";
import { Input, Select } from "antd";
import { valueType } from "antd/es/statistic/utils";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
export type IOption = {
  label: string;
  value: string;
};
type IInput = {
  type?: string;
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  size?: "large" | "small";
  options: IOption[];
  label?: string;
  placeholder?: string;
};
export default function FormSelectInput({
  name,
  type,
  value,
  id,
  size,
  options,
  label,
}: IInput) {
  const { control } = useFormContext();
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div>{label ? label : null}</div>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue="lucy"
            onChange={onChange}
            value={value}
            options={options}
          />
        )}
      />
    </>
  );
}
