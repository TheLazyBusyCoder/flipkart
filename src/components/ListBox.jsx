import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import FakeImage from "./FakeImage";
import { useEffect, useState } from "react";
import Dots from "./Dots";

const data = [
  <FakeImage bg={"bg-white"} imgs={"/img/banners/atb.png"} />,
  <FakeImage bg={"bg-white"} imgs={"/img/banners/laptop.png"} />,
  <FakeImage bg={"bg-white"} imgs={"/img/banners/laptop2.png"} />,
  <FakeImage bg={"bg-white"} imgs={"/img/banners/tv.png"} />,
  <FakeImage bg={"bg-white"} imgs={"/img/banners/laptop2.png"} />,
];
function ListBox() {
  const [img, setImg] = useState(0);

  useEffect(
    function () {
      const id = setInterval(() => {
        console.log("interval");
        setImg((e) => {
          if (e === 4) return 0;
          else return e + 1;
        });
      }, 3500);
      return () => clearInterval(id);
    },
    [img]
  );

  return (
    <div
      className="h-56 my-3 relative mx-4 
      bg-slate-200
    "
    >
      {data[img]}
      <button
        className="absolute rounded-tr-md rounded-br-md  bg-white h-24 w-10 top-1/2 -translate-y-1/2 left-0
      flex justify-center shadow-sm shadow-slate-600 items-center text-sm
      "
        onClick={() =>
          setImg((e) => {
            if (e === 0) return 4;
            else return e - 1;
          })
        }
      >
        <AiOutlineLeft />
      </button>
      <Dots active={img} />
      <button
        className="absolute rounded-tl-md rounded-bl-md  bg-white h-24 w-10 top-1/2 -translate-y-1/2 right-0 flex justify-center shadow-sm shadow-slate-600 items-center text-sm"
        onClick={() =>
          setImg((e) => {
            if (e === 4) return 0;
            else return e + 1;
          })
        }
      >
        <AiOutlineRight />
      </button>
    </div>
  );
}

export default ListBox;
