function Dots({ active }) {
  return (
    <div className="absolute h-3 w-20 rounded-lg left-1/2 bottom-2  bg-[rgba(0,0,0,0.2)] flex justify-center items-center gap-2">
      <div
        className={`opacity-100 h-1.5 w-1.5 ${
          active === 0
            ? " animate-fadeIn duration-1000 ease-in-out bg-white w-2.5 "
            : "bg-gray-400"
        } rounded-full`}
      ></div>
      <div
        className={`opacity-100 h-1.5 w-1.5 ${
          active === 1
            ? " animate-fadeIn duration-1000 ease-in-out bg-white w-2.5 "
            : "bg-gray-400"
        } rounded-full`}
      ></div>
      <div
        className={`opacity-100 h-1.5 w-1.5 ${
          active === 2
            ? " animate-fadeIn duration-1000 ease-in-out bg-white w-2.5 "
            : "bg-gray-400"
        } rounded-full`}
      ></div>
      <div
        className={`opacity-100 h-1.5 w-1.5 ${
          active === 3
            ? " animate-fadeIn duration-800 ease-in-out bg-white w-2.5 "
            : "bg-gray-400"
        } rounded-full`}
      ></div>
      <div
        className={`opacity-100 h-1.5 w-1.5 ${
          active === 4
            ? " animate-fadeIn duration-1000 ease-in-out bg-white w-2.5 "
            : "bg-gray-400"
        } rounded-full`}
      ></div>
    </div>
  );
}

export default Dots;
