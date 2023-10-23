import { IoIosSearch } from "react-icons/io";
function SearchBar() {
  return (
    <div className="w-2/5 h-10 rounded-md relative bg-slate-100 flex gap-1 items-center">
      <div className="w-10 text-2xl flex justify-center">
        <IoIosSearch />
      </div>
      <input
        className="h-full rounded-md w-full leading-8 text-lg  focus:outline-none bg-slate-100 flex items-center
          placeholder:text-slate-500
          "
        type="text"
        placeholder="Search for Products, Brands and More"
      />
    </div>
  );
}

export default SearchBar;
