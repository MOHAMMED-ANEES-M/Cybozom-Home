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
    <div className='h-full w-full md:hidden bg-[#def5cf] flex items-center justify-center'>
      <div>
        <ul className='m-auto w-fit h-fit text-2xl leading-[50px]'>
          <li className='hover:text-[#153403] transform hover:scale-y-[1.1] transition duration-100'>Home</li>
          <li 
            className='relative flex gap-1 items-center cursor-pointer hover:text-[#153403] transform hover:scale-y-[1.1] transition duration-100' 
            onClick={toggleDropdown}
          >
            Services <RiArrowDownWideFill />
          </li>
          {isDropdownOpen && (
            <ul className={`menu-container absolute bg-[#def5cf] w-full z-50 ${isDropdownClose ? 'slide-up' : 'slide-down'}`}>
                <li>Hospital</li>
                <li>Hotel</li>
                <li>Gym</li>
            </ul>
          )}
          <li className='hover:text-[#153403] transform hover:scale-y-[1.1] transition duration-100'>Portfolio</li>
          <li className='hover:text-[#153403] transform hover:scale-y-[1.1] transition duration-100'>About</li>
          <li className='hover:text-[#153403] transform hover:scale-y-[1.1] transition duration-100'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;
