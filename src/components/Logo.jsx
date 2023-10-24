function Logo() {
  return (
    <div className="w-32 text-end flex p-2 flex-wrap">
      <span className="flex-grow basis-96 text-blue-700 italic text-xl font-bold">
        Flipkart
      </span>
      <div className="flex-grow italic">
        <span className="text-slate-400 text-sm font-semibold">Explore </span>
        <span className="text-yellow-400 text-sm font-semibold">Plus #</span>
      </div>
    </div>
  );
}

export default Logo;
