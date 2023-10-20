"use client";
import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { steps } from "@/constants/global";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
  getFromLocalStorage,
  setToLoaclStorage,
} from "@/service/service.store";
import { useRouter } from "next/navigation";
type stepperForm = {
  submitHandler: (value: any) => void;
  navigationLink: string;
};
export const StepsforUM = ({ submitHandler, navigationLink }: stepperForm) => {
  const router = useRouter();
  const [current, setCurrent] = useState(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string))
      : 0
  );

  useEffect(() => {
    setToLoaclStorage("step", current.toString());
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  // const contentStyle: React.CSSProperties = {
  //   lineHeight: "260px",
  //   textAlign: "center",
  //   color: token.colorTextTertiary,
  //   backgroundColor: token.colorFillAlter,
  //   borderRadius: token.borderRadiusLG,
  //   border: `1px dashed ${token.colorBorder}`,
  //   marginTop: 16,
  // };

  const handleSubmitonChange = (data: any) => {
    console.log("data:", data);
    submitHandler(data);
    reset();
    setToLoaclStorage("step", (0).toString());
    navigationLink && router.push(navigationLink);
  };
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitonChange)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Steps;
