"use client";
import type { ColumnsType } from "antd/es/table";
type ITable = {
  columns: any;
  dataSource: any;
};

export default function Table({ columns, dataSource }: ITable) {
  return <Table columns={columns} dataSource={dataSource} />;
}
