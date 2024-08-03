"use client"
import React from 'react';
import newsData from '../../../(user)/blog/_db/newsData'; // Pastikan path ini sesuai dengan lokasi file Anda
import Image from 'next/image';
import ButtonNextLeft from '../../../../../public/aset/ButtonNextLeft.svg'; // Ganti dengan path yang sesuai
import ButtonNextRight from '../../../../../public/aset/ButtonNextRight.svg'; // Ganti dengan path yang sesuai

const HighlightNews = () => {
  const item = newsData[0]; // Mengambil hanya satu item (misalnya item pertama)

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg mt-6">
      <Image src={item.image} alt={item.title} width={500} height={300} className="w-full h-60 object-cover" />
      <div className="absolute top-0 left-0 p-4 text-white bg-opacity-50">
        <h2 className="text-3xl font-bold">{item.title}</h2>
        <p className="text-2xl ">{item.writer}</p>
        
        <div  className="absolute top-48 ">
            <p className="text-lg font-bold">{item.date}</p>
        </div>
        
      </div>
      <div className="absolute top-0 right-0 p-6 text-white bg-opacity-50">
        <p className="text-lg font-bold">{item.category}</p>
      </div>
      {/* Tombol Navigasi */}
      <button
        onClick={() => console.log('Previous clicked')} // Ganti dengan fungsi yang sesuai
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer"
      >
        <Image src={ButtonNextLeft} alt="Previous" width={70} height={70} />
      </button>
      
      <button
        onClick={() => console.log('Next clicked')} // Ganti dengan fungsi yang sesuai
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer"
      >
        <Image src={ButtonNextRight} alt="Next" width={70} height={70} />
      </button>
    </div>
  );
};

export default HighlightNews;