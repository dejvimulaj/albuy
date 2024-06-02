import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import slides from '../assets/slides';
import Carousel from '../components/Carousel';
import ImageGallery from '../components/ImageGallery';
import './MainPage.css'
import { useAuthContext } from '../hooks/useAuthContext';

const MainPage = () => {
  const { user } = useAuthContext();

return(
  <>
    <Carousel></Carousel>
    <h1 className='flex justify-center pt-20 text-3xl font-bold text-gray-500'>Product Categories</h1>
    <hr className="mt-4 mb-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-black to-transparent opacity-25 dark:via-neutral-400" />
    <ImageGallery></ImageGallery>
  { !user?
    <h1 className='flex justify-center pt-20 pb-28 text-3xl font-extrabold text-gray-800'>Sign Up or Login to Start Shopping</h1>:<></>
  }
  </>
  
)
}

export default MainPage
