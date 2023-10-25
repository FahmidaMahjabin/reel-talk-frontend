import React, { useState } from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Button, Input, Tooltip, Flex } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { removeUserFromStore } from "@/service/auth.service";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "Service",
      key: "service",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Category",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
    {
      type: "group",
      label: (
        <Flex justify="flex-end">
          <Input placeholder="search......... " size="small" />
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
        </Flex>
      ),
      key: "searchbar",
    },
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
  const router = useRouter();
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        items={items}
      />
    </div>
  );
};

export default Navbar;
