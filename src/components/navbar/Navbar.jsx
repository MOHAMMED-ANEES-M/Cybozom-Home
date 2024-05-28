import React, { useState } from 'react';
import logo from '../../assets/Cybozom_logo.png';
import './Navbar.css';
import { RiArrowDownWideFill } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Menu from '../menu/Menu';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleButton = () => {
    if (isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <div className='hidden md:flex justify-between items-center px-5 navbar fixed w-[90%] left-[5%] top-5 z-50'>
        <img src={logo} alt="Cybozom Logo" className='w-auto h-16' />
        <div>
          <ul className='flex gap-7 lg:gap-10 items-center h-16'>
            <li>Home</li>
            <li 
              className='relative h-16 flex gap-1 items-center' 
              onMouseEnter={toggleDropdown} 
              onMouseLeave={toggleDropdown}
            >
              Services <RiArrowDownWideFill />
              {isDropdownOpen && (
                <ul className='dropdown'>
                  <li>Hospital</li>
                  <li>Hotel</li>
                  <li>Gym</li>
                </ul>
              )}
            </li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='fixed md:hidden flex justify-between items-center w-[90%] left-[5%] top-5 navbar p-1 px-2 z-50'>
        <img src={logo} alt="Cybozom Logo" className='w-auto h-10' />
        { isMenuOpen ? (
          <button onClick={toggleButton} className="fade-animation"><TfiClose className='w-7 h-7 '/></button>
        ) : (
          <button onClick={toggleButton} className="fade-animation"><CiMenuBurger className='w-7 h-7 '/></button>
        )}
      </div>
      {(isMenuOpen || isMenuClosing) && 
        <div className={`menu-container fixed inset-0 z-40 ${isMenuClosing ? 'slide-up' : 'slide-down'}`}>
          <Menu />
        </div>
      }
    </>
  );
};

export default Navbar;
