import Button from "./Button";
import ButtonHover from "./ButtonHover";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

import { AiOutlineShop } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { PiDotsThreeVertical, PiUserBold } from "react-icons/pi";
import { GrFormDown } from "react-icons/gr";

function NavBar() {
  return (
    <nav className="h-16 bg-white flex flex-row justify-evenly gap-2 items-center sticky top-0 z-40">
      <Logo />
      <SearchBar />
      <Button icon={<AiOutlineShop />}>Become a Seller</Button>
      <ButtonHover icon1={<PiUserBold />} icon2={<GrFormDown />}>
        Sign in
      </ButtonHover>
      <Button icon={<BsCart3 />}>Cart</Button>
      <button className="text-xl">
        <PiDotsThreeVertical />
      </button>
    </nav>
  );
}

export default NavBar;
