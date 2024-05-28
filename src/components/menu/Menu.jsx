import React, { useState } from 'react';
import { RiArrowDownWideFill } from "react-icons/ri";

const Menu = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownClose, setIsDropdownClose] = useState(false);

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setIsDropdownClose(true);
      setTimeout(() => {
        setIsDropdownOpen(false);
        setIsDropdownClose(false);
      }, 500);
    } else {
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className='h-full w-full md:hidden bg-[#bfe8a6] flex items-center justify-center'>
      <div>
        <ul className='m-auto w-fit h-fit text-2xl leading-[50px]'>
          <li>Home</li>
          <li 
            className='relative flex gap-1 items-center cursor-pointer' 
            onClick={toggleDropdown}
          >
            Services <RiArrowDownWideFill />
          </li>
          {isDropdownOpen && (
            <ul className={`menu-container absolute bg-[#bfe8a6] w-full ${isDropdownClose ? 'slide-up' : 'slide-down'}`}>
                <li>Hospital</li>
                <li>Hotel</li>
                <li>Gym</li>
            </ul>
          )}
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;
