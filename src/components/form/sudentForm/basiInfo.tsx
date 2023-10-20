import React from "react";
import Form from "../Form";
import { Button, Col, Row } from "antd";
import FormInput from "../FormInput";
import FormSelectInput from "../FormSelectInput";
import { gender } from "@/constants/global";
import ImageUpload from "../imageUpload";
import DatePickerforUM from "../datePicker";

export default function StudentBasiInfo() {
  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <FormInput label="First Name" name="admin.name.firstName"></FormInput>
        </Col>
        <Col className="gutter-row" span={8}>
          <FormInput label="Last Name" name="admin.name.lastName"></FormInput>
        </Col>
        <Col className="gutter-row" span={8}>
          <FormInput
            label="Middle Name"
            name="admin.name.middleName"
          ></FormInput>
        </Col>
        <Col className="gutter-row" span={8}>
          <FormInput
            type="password"
            label="password"
            name="password"
          ></FormInput>
        </Col>
        <Col className="gutter-row" span={8}>
          <FormSelectInput
            name="admin.gender"
            options={gender}
            label="gender"
          ></FormSelectInput>
        </Col>
        <Col className="gutter-row" span={8}>
          <ImageUpload />
        </Col>

        <Col className="gutter-row" span={8}>
          <DatePickerforUM
            name="admin.dateOfBirt"
            label="Date of Birth"
            size="large"
          ></DatePickerforUM>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit"></Button>
    </>
  );
}
