import React from "react";
import { Button, Carousel } from "antd";
import Image from "next/image";
import baner1 from "@/assets/images/baner-1.jpg";
import baner2 from "@/assets/images/baner-2.jpg";
import baner3 from "@/assets/images/baner-3.jpg";
import baner4 from "@/assets/images/baner-4.jpg";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import next from "next";
const contentStyle: React.CSSProperties = {
  objectFit: "cover",
  position: "relative",
  height: "600px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
};

const Banner = () => (
  <Carousel autoplay>
    {/* <div>
      <h3 style={contentStyle}>
        <Image priority={true} src={baner1} alt="baner-1"></Image>
      </h3>
    </div> */}
    <div>
      <h3 style={contentStyle}>
        <Image
          src={baner2}
          alt="baner-2"
          style={{ objectFit: "cover" }}
          fill
        ></Image>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src={baner3}
          alt="baner-3"
          style={{ objectFit: "cover" }}
          fill
        ></Image>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src={baner4}
          alt="baner-4"
          style={{ objectFit: "cover" }}
          fill
        ></Image>
      </h3>
    </div>
  </Carousel>
);

export default Banner;
