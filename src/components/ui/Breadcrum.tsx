import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
type breadcrumbItems = {
  link: string;
  label: string;
};
export default function Breadcrum({ items }: { items: breadcrumbItems[] }) {
  const breadcumbItems = [
    ...items.map((item) => {
      return { title: <Link href={item.link}>{item.label}</Link> };
    }),
  ];
  return <Breadcrumb items={breadcumbItems}></Breadcrumb>;
}
