import { Button, Flex } from "antd";
import React from "react";
type IButton = {
  name: string;
  onClickFunction?: () => void;
};
export default function ButtonForRellTalk({ name, onClickFunction }: IButton) {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#FFA724",
          color: "white",
        }}
        block
        htmlType="submit"
        onClick={onClickFunction}
      >
        {name}
      </Button>
    </div>
  );
}
