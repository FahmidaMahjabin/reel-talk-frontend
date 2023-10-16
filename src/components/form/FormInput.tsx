"use client";
import { Input } from "antd";
import { valueType } from "antd/es/statistic/utils";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
type IInput = {
  type?: string;
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  size?: "large" | "small";
  placeholder?: string;
  validation?: object;
  label?: string;
};
export default function FormInput({
  name,
  type,
  value,
  id,
  size,
  placeholder,
  validation,
  label,
}: IInput) {
  const { control } = useFormContext();
  return (
    <>
      <div>{label ? label : null}</div>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type || "password"}
              size={size || "middle"}
              placeholder={placeholder}
              {...field}
              value={value ? value : undefined}
            ></Input.Password>
          ) : (
            <Input
              type={type || "text"}
              size={size || "middle"}
              placeholder={placeholder}
              {...field}
              value={value ? value : undefined}
            ></Input>
          )
        }
      />
    </>
  );
}
