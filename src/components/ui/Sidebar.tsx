"use client";
import { Menu, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import SidebarItems from "../../constants/SidebarItems";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider
        style={{
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
          overflow: "auto",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Row justify="center" style={{ color: "white", font: "15px" }}>
          UM website
        </Row>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={SidebarItems("super_admin")}
        />
      </Sider>
    </div>
  );
}
