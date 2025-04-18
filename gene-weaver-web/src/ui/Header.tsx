
import { navbarLinks } from "../data/data";
import geneWeaver from "../assets/logo_geneweaver 1.png";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-20 w-screen flex justify-around   z-50 items-center bg-[#1E5949]">
      <div
        onClick={() => navigate("/")}
        className="flex items-center text-white font-semibold cursor-pointer"
      >
        <img className="cursor-pointer " src={geneWeaver} width={40} />
        <span>GeneWeaver</span>
      </div>
      <img />
      <div className="flex space-x-6">
        {navbarLinks.map((navBar, index) => (
          <Popover key={index} className="relative ">
            <PopoverButton className="flex  items-center gap-x-1 text-sm/6 text-white focus:outline-none">
              {navBar.name}
              <ChevronDownIcon className="size-5 flex-none text-white" />
            </PopoverButton>
            <PopoverPanel
              transition
              className=" border mt-4  text-sm absolute top-full  py-2 px-2 w-56 rounded-xl bg-white transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in "
            >
              {navBar.subMenu.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem?.link}
                  className="block rounded-lg px-3 py-2 text-sm/6 font-semibold hover:bg-gray-50"
                >
                  {subItem.name}
                </NavLink>
              ))}
            </PopoverPanel>
          </Popover>
        ))}
      </div>
    </nav>
  );
};

export default Header;
