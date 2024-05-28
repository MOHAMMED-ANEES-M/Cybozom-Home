import React from 'react';
import img1 from '../../assets/360_image1.jpg';
import img2 from '../../assets/360_image2.jpg';
import './Main.css';
import Carousal from '../../layouts/carousal/Carousal';

const Main = () => {

  const images = [
    { src: img1, alt: 'Image 1' },
    { src: img2, alt: 'Image 2' },
  ];

  return (
    <div className=' mt-28 md:mt-40'>
      <h1 className='text-xl min-[350px]:text-2xl min-[450px]:text-3xl sm:text-4xl md:text-5xl lg:text-7xl  sm:tracking-wide text-[#153403] font-bold transform scale-y-[2] text-center'>
        UNLOCK YOUR WORLD WITH US
      </h1>
      <div className='mx-[5%] m-auto mt-12 min-[450px]:mt-16 md:mt-20'>
      <Carousal images={images}/>
      </div>
      <div className='mt-16 sm:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 mx-[5%] items-center'>
        <div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl tracking-widest font-semibold text-[#153403]'>GET IN TOUCH</h1>
          <p className='mt-5 sm:mt-10'>4th Floor, CD TOWER, Mini Bypass Rd, Arayidathupalam, Kozhikode, Kerala 673004</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0013680810134!2d75.79039777398808!3d11.261309050064966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b3fd86b08c9%3A0xe2c7f5edfff5f359!2sCybozom%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1716885484139!5m2!1sen!2sin"  
            style={{ border: "0", borderRadius: "10px" }}
            className='w-full rounded-xl h-80 '
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Main;
