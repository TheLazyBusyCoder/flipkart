import CircleEle from "./CircleEle";

const data = [
  { image: "", text: "Top Offers" },
  { image: "", text: "Mobiles & Tablets" },
  { image: "", text: "Electornics" },
  { image: "", text: "TVs & Apliances" },
  { image: "", text: "Fashion" },
  { image: "", text: "Beauty" },
  { image: "", text: "Home and Kitchen" },
  { image: "", text: "Furniture" },
  { image: "", text: "Flights" },
  { image: "", text: "Grocery" },
];

function CircleBox() {
  return (
    <div className="h-full  w-full flex gap-5 justify-evenly items-center">
      {data.map((e) => {
        return <CircleEle image={e.image} text={e.text} />;
      })}
    </div>
  );
}

export default CircleBox;
