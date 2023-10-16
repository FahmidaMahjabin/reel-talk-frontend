"use client";
import Form from "@/components/form/Form";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import loginImg from "@/assets/Tablet login-rafiki.svg";
import FormInput from "@/components/form/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLogInMutation } from "@/redux/api/authApi";
// import { storeUserInfo } from "@/service/service.store";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/service.store";
import { Metadata } from "next";

type FormValues = {
  id: string;
  password: string;
};
export const metaData: Metadata = {
  title: "UWM | login",
};
export default function Login() {
  const router = useRouter();
  const [logginInUser] = useUserLogInMutation();
  // console.log("loggedInUser:", logginInUser);
  const onsubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // console.log("data from login:", data);
      const res = await logginInUser({ ...data }).unwrap();
      // console.log("res:", res);
      if (res?.data?.accessToken) {
        // console.log("accessToken:", res?.data?.accessToken);
        storeUserInfo({ accessToken: res.data.accessToken });
        router.push("/profile");
      }

      // storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Row justify={"center"}>
        <Col sm={12} md={16} lg={16}>
          <Image src={loginImg} alt="login imageS"></Image>
        </Col>
        <Col sm={12} md={8} lg={8}>
          <Form submitHandler={onsubmit}>
            <FormInput
              name="id"
              type="text"
              placeholder="id"
              label="name"
            ></FormInput>
            <FormInput
              name="password"
              type="password"
              // placeholder="name"
              label="Password"
            ></FormInput>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
