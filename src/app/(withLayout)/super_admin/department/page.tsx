"use client";
import FormInput from "@/components/form/FormInput";
import Table from "@/components/ui/Table";
import { useGetAllDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input } from "antd";
import Link from "next/link";
import React, { useState } from "react";

export default function Department() {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;
  console.log("query:", query);
  const { data, isLoading } = useGetAllDepartmentsQuery({ ...query });
  // const { departments, meta } = data;
  console.log("data:", data, isLoading);

  const onPaginationChange = (page: number, limit: number) => {
    setPage(page);
    setSize(limit);
  };

  const onTableChange = (pagination: any, sorter: any, filter: any) => {};
  const columns = [
    {
      key: "Title",
      title: "title",
      dataIndex: 1,
    },
    {
      key: "Faculty",
      title: "faculty",
      dataIndex: 2,
    },
  ];
  const dataSource = [
    {
      key: 1,
      title: "CSE",
      department: "EEE",
    },
    {
      key: 2,
      title: "CE",
      department: "CE",
    },
    {
      key: 3,
      title: "WRE",
      department: "CE",
    },
  ];
  return (
    <div>
      <Input
        placeholder="search"
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></Input>
      <Link href={`/super_admin/department/create`}>
        <Button type="primary">create Department</Button>
      </Link>
      {/* <Table columns={columns} dataSource={data}></Table> */}
    </div>
  );
}
