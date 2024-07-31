'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import ButtonNextLeft from '../../../public/aset/ButtonNextLeft.svg';
import ButtonNextRight from '../../../public/aset/ButtonNextRight.svg';

const GalleryPage = () => {
  const [images, setImages] = useState<{ Image: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    axios.get('https://669f7bc6b132e2c136fe00ff.mockapi.io/news')
      .then(response => {
        console.log('Fetched images:', response.data);
        setImages(response.data.slice(0, 5)); // Batasi data hanya 5
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const handlePrevClick = () => {
    console.log('Previous button clicked');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    console.log('Next button clicked');
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    console.log('Current index:', currentIndex);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-14 text-[#1A4D2E] mt-7 ">Galeri</h1>
      <div className="relative w-full h-5/6 flex items-center justify-center mb-10">
        {images.length > 0 && (
          <img src={images[currentIndex].Image} alt="Gallery" className="object-cover object-bottom w-full h-full " />
        )}
        <button
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <Image src={ButtonNextLeft} alt="Previous" width={90} height={90} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <Image src={ButtonNextRight} alt="Next" width={90} height={90} />
        </button>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              aria-current={currentIndex === index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;