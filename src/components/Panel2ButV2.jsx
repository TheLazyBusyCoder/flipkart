import { HiChevronRight } from "react-icons/hi2";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PanelFI from "./PanelFI";
import PanelFIV2 from "./PanelFIV2";
import { useState } from "react";

function Panel2ButV2() {
  const [cnt, setCnt] = useState(0);

  return (
    <div
      className="h-96
       rounded-sm bg-white my-3 mx-4 
      grid grid-rows-[70px_1fr] gap-3 px-2 py-2
  "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl px-2 font-semibold">Featured Brands</h1>
      </div>
      <div className="h-full overflow-x-hidden relative ">
        <PanelFIV2 cnt={cnt} />
        <button
          className="absolute rounded-tr-md rounded-br-md  bg-white h-24 w-10 top-1/2 -translate-y-1/2 left-0
      flex justify-center shadow-md shadow-slate-600 items-center text-sm
      "
        >
          <AiOutlineLeft />
        </button>
        <button
          className="absolute rounded-tl-md rounded-bl-md  bg-white h-24 w-10 top-1/2 -translate-y-1/2 right-0 flex justify-center shadow-md shadow-slate-600 items-center text-sm"
          onClick={() => {
            if (cnt == 4) {
              setCnt(0);
            } else setCnt((e) => e + 2);
          }}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default Panel2ButV2;
