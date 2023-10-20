"use client";
import { StepsforUM } from "@/components/form/steps";
import { useRouter } from "next/router";
import React from "react";
const handleStudentSubmit = async (data: any) => {
  try {
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export default function CreateStudent() {
  const router = useRouter();

  return (
    <StepsforUM
      navigationLink={router.route}
      submitHandler={(value) => handleStudentSubmit(value)}
    ></StepsforUM>
  );
}
