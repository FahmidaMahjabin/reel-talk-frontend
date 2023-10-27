"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import DatePickerforUM from "@/components/form/datePicker";
import ImageUpload from "@/components/form/imageUpload";
import ButtonForRellTalk from "@/components/ui/ButtonForRellTalk";
import { Button, Col, Flex, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Rowdies } from "next/font/google";
import React from "react";
const onSubmit = (data: any) => {
  console.log(data);
};
export default function ProfilePage() {
  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "#112a45",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Edit your profile
      </h2>
      <Form submitHandler={onSubmit}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Flex justify="center" align="center">
              <div>
                <ImageUpload></ImageUpload>
              </div>
            </Flex>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <FormInput name="name" label="Display name"></FormInput>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <FormInput name="location" label="Location"></FormInput>
          </Col>
          <Col sm={24} md={12} lg={12}>
            <div>Bio</div>
            <TextArea rows={4} placeholder="enter bio" maxLength={6} />
          </Col>
          <Col sm={24} md={12} lg={12}>
            <p>Birthday</p>
            <Row>
              <DatePickerforUM
                name="month"
                picker="month"
                label="Month"
              ></DatePickerforUM>
              <DatePickerforUM
                name="day"
                picker="date"
                label="Day"
              ></DatePickerforUM>
              <DatePickerforUM
                name="year"
                picker="year"
                label="Year"
              ></DatePickerforUM>
            </Row>
          </Col>
        </Row>
        <Flex justify="center" align="center" style={{ margin: "20px" }}>
          <ButtonForRellTalk name="Done"></ButtonForRellTalk>
        </Flex>
      </Form>
    </div>
  );
}
