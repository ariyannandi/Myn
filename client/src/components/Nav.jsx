import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setisFocused] = useState(false);

  const toggleBtn = () => setIsOpen(!isOpen);

  return (
    <nav className="py-4 shadow-md">
      <div className="w-full mx-auto flex items-center justify-between px-2">
        <div className="w-2/3 lg:w-1/2 flex items-center  mx-2 ">
          <img src={Logo} alt="Logo" width={53} height={36} className=" mx-5" />

          <div className="text-black justify-between text-[12px] font-semibold flex gap-8 mx-4">
            <a href="/men" className="hover:text-gray-300">
              MEN
            </a>
            <a href="/women" className="hover:text-gray-300">
              WOMEN
            </a>
            <a href="/kids" className="hover:text-gray-300">
              KIDS
            </a>
            <a href="/lifestyle" className="hover:text-gray-300">
              HOME & LIVING
            </a>
            <a href="/beauty" className="hover:text-gray-300">
              BEAUTY
            </a>
            <a href="/studio" className="hover:text-gray-300 relative">
              STUDIO
              <span className="align-super text-[9px] text-red-500 absolute top-[-0.5rem] left-[100%] ml-1 ">
                NEW
              </span>
            </a>
          </div>
        </div>

        <div className="w-1/3 lg:w-1/2 flex items-center justify-between  gap-3 ">
          <div
            className={`flex items-center space-x-2 ${
              isFocused ? "bg-white" : "bg-gray-100"
            }  text-black rounded-sm px-2 py-1 flex-row-reverse text-sm gap-3 w-[70%]`}
          >
            <input
              type="text"
              placeholder="Searh for products,brands and more"
              className="w-full px-2 py-1 outline-none bg-transparent "
              onFocus={() => setisFocused(true)}
              onBlur={() => setisFocused(false)}
            />
            <div>
              <FontAwesomeIcon
                className="text-gray-500 "
                icon={faMagnifyingGlass}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs mx-2 ">
            <div className="hover:text-gray-300 flex flex-col">
              <FontAwesomeIcon icon={faUser} />
              Profile
            </div>
            <div className="hover:text-gray-300 flex flex-col">
              <FontAwesomeIcon icon={faHeart} /> Wishlist
            </div>
            <div className="hover:text-gray-300 flex flex-col">
              <FontAwesomeIcon icon={faBagShopping} />
              Bag
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
