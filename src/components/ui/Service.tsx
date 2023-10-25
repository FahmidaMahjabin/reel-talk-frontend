import { Card } from "antd";
import React from "react";

export default function Service() {
  return (
    <div>
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}
