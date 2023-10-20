"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import Breadcrum from "@/components/ui/Breadcrum";
import { useCreateDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

export default function CreateDepartment() {
  const [addDepartment] = useCreateDepartmentMutation();
  const base = "super_admin";
  const onSubmit = async (data: any) => {
    message.loading("loading");
    try {
      await addDepartment(data);
      message.success("department added successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Breadcrum
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
}
