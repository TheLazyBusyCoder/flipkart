import { useState } from "react";
import PanelFIV2_1 from "./PanelFIV2_1";

const data = [
  {
    src: "/img/one/one-1.png",
  },
  {
    src: "/img/one/one-2.png",
  },
  {
    src: "/img/one/one-3.png",
  },
  {
    src: "/img/one/one-4.png",
  },
  {
    src: "/img/one/one-5.png",
  },
  {
    src: "/img/one/one-6.png",
  },
  {
    src: "/img/one/one-7.png",
  },
  {
    src: "/img/one/one-8.png",
  },
  {
    src: "/img/one/one-9.png",
  },
];

function PanelFIV2({ cnt }) {
  return (
    <div
      className="rounded-sm h-full w-full bg-white
  grid grid-cols-3 px-2 justify-evenly gap-4 items-center 
    "
    >
      <PanelFIV2_1 src={data[cnt].src} />
      <PanelFIV2_1 src={data[cnt + 1].src} />
      <PanelFIV2_1 src={data[cnt + 2].src} />
    </div>
  );
}

export default PanelFIV2;
