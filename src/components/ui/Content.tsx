"use client";
import React from "react";
import { Layout } from "antd";
import Breadcrum from "./Breadcrum";
import Header from "./Header";
const { Content } = Layout;
export default function ContentMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = "super-admin";
  const base = `${role}`;
  return (
    <Content style={{ minHeight: "100vh" }}>
      <Header></Header>
      <Breadcrum
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "student",
            link: `/${base}/student`,
          },
        ]}
      />

      {children}
    </Content>
  );
}
