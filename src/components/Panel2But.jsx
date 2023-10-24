import { HiChevronRight } from "react-icons/hi2";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PanelFI from "./PanelFI";

function Panel2But() {
  return (
    <div
      className="h-80
       rounded-sm bg-white my-3 mx-4 
      grid grid-rows-[67px_1fr]  px-4 py-2
  "
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Top Deals</h1>
        <button className="bg-blue-700 text-md flex justify-center items-center rounded-full h-6 w-6 text-white">
          <HiChevronRight />
        </button>
      </div>
      <div className="h-full overflow-x-hidden relative  ">
        <PanelFI />
        <button
          className="absolute rounded-tr-md rounded-br-md  bg-white h-24 w-10 top-1/2 -translate-y-1/2 left-0
      flex justify-center shadow-md shadow-slate-600 items-center text-sm
      "
        >
          <AiOutlineLeft />
        </button>
        <button className="absolute rounded-tl-md rounded-bl-md  bg-white h-24 w-10 top-1/2 -translate-y-1/2 right-0 flex justify-center shadow-md shadow-slate-600 items-center text-sm">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

export default Panel2But;
