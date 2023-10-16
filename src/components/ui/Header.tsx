import { Button, Dropdown, Row, Space } from "antd";
import React from "react";
import {
  DownOutlined,
  SmileOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { getUserInfo, removeUserFromStore } from "@/service/auth.service";

import { RedirectType, redirect, useRouter } from "next/navigation";
import { Router } from "next/router";
// eslint-disable-next-line react-hooks/rules-of-hooks

export default function Header() {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button
          onClick={() => {
            removeUserFromStore();
            router.push("/login");
          }}
        >
          logOut
        </Button>
      ),
    },
  ];
  return (
    <Row
      justify="end"
      align="middle"
      style={{ background: "darkgray", padding: "10px" }}
    >
      {" "}
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <UserOutlined></UserOutlined>
          </Space>
        </a>
      </Dropdown>
    </Row>
  );
}
