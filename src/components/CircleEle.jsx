function CircleEle({ image, text }) {
  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      <div className="bg-slate-100 h-16 w-16 rounded-full"></div>
      <p className="font-semibold">{text}</p>
    </div>
  );
}

export default CircleEle;
