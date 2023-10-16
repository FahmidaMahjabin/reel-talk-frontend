import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Manage_Admin() {
  return (
    <div>
      <Link href={`manage_admin/create`}>
        <Button type="primary">create Admin</Button>
      </Link>
    </div>
  );
}
