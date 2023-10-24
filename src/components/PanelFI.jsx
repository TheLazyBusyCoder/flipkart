import PanelFI_1 from "./PanelFI_1";

const data = [
  { src: "/img/big-pan/img-1.png", text1: "Sketchers", text2: "Min. 60% Off" },
  {
    src: "/img/big-pan/img-2.png",
    text1: "Earrings, Jewellery Sets..",
    text2: "Flat 70% Off",
  },
  {
    src: "/img/big-pan/img-3.png",
    text1: "Reebok, Campus & More",
    text2: "Under #599",
  },
  { src: "/img/big-pan/img-4.png", text1: "Kurta Sets", text2: "Flat 70% Off" },
  {
    src: "/img/big-pan/img-5.png",
    text1: "Hotselling Sarees",
    text2: "Flat 70% Off",
  },
];

function PanelFI() {
  return (
    <div
      className="rounded-sm h-full w-full bg-white
  flex justify-evenly gap-4 items-center 
  "
    >
      {data.map((e) => {
        return <PanelFI_1 e={e} />;
      })}
    </div>
  );
}

export default PanelFI;
