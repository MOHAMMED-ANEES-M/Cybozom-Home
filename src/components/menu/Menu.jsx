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
    <div className='h-full w-full md:hidden bg-[#b7e29b] flex items-center justify-center'>
      <div>
        <ul className='m-auto w-fit h-fit text-2xl leading-[50px]'>
          <li className='hover:text-[#153403] transform hover:scale-y-[1.3] transition duration-300'>Home</li>
          <li 
            className='relative flex gap-1 items-center cursor-pointer hover:text-[#153403] transform hover:scale-y-[1.3] transition duration-300' 
            onClick={toggleDropdown}
          >
            Services <RiArrowDownWideFill />
          </li>
          {isDropdownOpen && (
            <ul className={`menu-container absolute bg-[#b7e29b] w-full z-50 ${isDropdownClose ? 'slide-up' : 'slide-down'}`}>
                <li>Hospital</li>
                <li>Hotel</li>
                <li>Gym</li>
            </ul>
          )}
          <li className='hover:text-[#153403] transform hover:scale-y-[1.3] transition duration-300'>Portfolio</li>
          <li className='hover:text-[#153403] transform hover:scale-y-[1.3] transition duration-300'>About</li>
          <li className='hover:text-[#153403] transform hover:scale-y-[1.3] transition duration-300'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;
