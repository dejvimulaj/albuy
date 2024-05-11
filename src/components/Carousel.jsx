import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import slides from '../assets/slides';
import '../pages/MainPage.css'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide(); // Move to next slide every 3 seconds
        }, 4000); // Change 3000 to whatever time interval in milliseconds you prefer
        
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, [currentIndex]);
  
  
    return (
      <div className='h-[780px] w-[97%] pt-2 m-auto relative group'>
    <div className='neon absolute z-10 left-1/2 bottom-[430px]  transform -translate-x-1/2 text-white text-8xl font-bold '>
        Welcome to
        </div>  

        <div className='neon absolute z-10 left-1/2 bottom-80  transform -translate-x-1/2 text-white text-8xl font-bold '>
        ALBuy 
        </div> 
        <div className='neon absolute z-10 left-1/2 bottom-40  transform -translate-x-1/2 text-white text-5xl font-extrabold '>
        Start Shopping At The First
        </div> 
        <div className='neon absolute z-10 left-1/2 bottom-20  transform -translate-x-1/2 text-white text-5xl font-bold '>
         Albanian Marketplace 
        </div> 

        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-3xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        </div>
        <div className='flex top-4 justify-center py-2'>
        </div>
      </div>
    );
  }

export default Carousel
