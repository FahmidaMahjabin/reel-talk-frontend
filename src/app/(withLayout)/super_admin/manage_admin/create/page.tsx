"use client";
import { adminSchema } from "@/app/schema/adminSchema";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectInput from "@/components/form/FormSelectInput";
import DatePickerforUM from "@/components/form/datePicker";
import ImageUpload from "@/components/form/imageUpload";
import { gender } from "@/constants/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

export default function createAdmin() {
  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={8}>
            <FormInput
              label="First Name"
              name="admin.name.firstName"
            ></FormInput>
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
      </Form>
    </div>
  );
}
