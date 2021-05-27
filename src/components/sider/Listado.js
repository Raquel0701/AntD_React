import React from "react";
import { Cascader } from "antd";
const options = [
  {
    value: "zhejiang",
    label: "Home",
    children: [
      {
        value: "hangzhou",
        label: "Información",
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Nosotros",
    children: [
      {
        value: "nanjing",
        label: "Historia",
      },
    ],
  },
];
function onChange(value) {
  console.log(value);
}

export default function Listado() {
  return (
    <div>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />
    </div>
  );
}
