import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Manage_Student() {
  return (
    <div>
      <Link href={`manage_student/create`}>
        <Button type="primary">create Student</Button>
      </Link>
    </div>
  );
}
