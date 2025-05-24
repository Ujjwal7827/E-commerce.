import React, { useState, useEffect } from 'react';
import First from '../assets/c955a6d703b17e61.webp';
import Second from '../assets/BeardoFire.webp';
import Third from '../assets/Laptop.webp';
import Fourth from '../assets/Nothing1.webp';
import Fifth from '../assets/Samsung.webp'
import Sixth from '../assets/Beardonew.webp'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const images = [First, Second, Third, Fourth, Fifth, Sixth];

const Front = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col bg-white items-center  justify-center mt-10">
      <div className="relative w-full max-w-7xl h-[300px]">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-4xl shadow-lg transition duration-700 ease-in-out" />

        <button onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-5 rounded-full hover:bg-opacity-70 transition duration-300">
          <IoIosArrowBack />
        </button>

        <button onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition duration-300">
          <IoIosArrowForward />
        </button>

        <div className="flex justify-center mt-5 h-5  gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 mt-2 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-gray-400 '}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Front;
