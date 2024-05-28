import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='mt-40 bg-[#153403] text-[#bfe8a6] m-auto  py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 border-b pb-10 border-[#bfe8a6]  text-center'>
            <div className='mt-10 md:border-e border-[#bfe8a6]'>
                <p className='text-3xl font-bold transform space-y-[1.5]'>We are best in industry <br/> for your success story.</p>
                <p className='text-lg mt-10 tracking-widest'>Follow us</p>
                <div className='mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-center w-[80%] m-auto'>
                  <p className='flex gap-1 items-center'><BsArrowRight />Instagram.</p>
                  <p className='flex gap-1 items-center'><BsArrowRight />Facebook.</p>
                  <p className='flex gap-1 items-center'><BsArrowRight />LinkedIn.</p>
                  <p className='flex gap-1 items-center'><BsArrowRight />Twitter.</p>
                </div>
            </div>
            <div className='mt-10 text-start px-10 sm:px-20 md:px-10 lg:px-20 leading-8'>
            <p className='text-3xl font-bold text-center mb-5'>CONTACT US</p>
            <p className='flex items-center gap-2'><IoIosCall />8590 506 573</p>
            <p className='flex items-center gap-2'><IoIosMail />contact@cybozom.com</p>
            <p className='flex items-baseline gap-2'><FaLocationDot />4th Floor, CD TOWER, Mini Bypass Rd, Arayidathupalam, Kozhikode, Kerala 673004</p>
            </div>
        </div>
        <h1 className='text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 pb-5 tracking-wide font-bold transform scale-y-[1.5] text-center'>
  VIRTUAL REVOLUTION
</h1>

    </div>
  )
}

export default Footer
