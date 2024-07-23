import React from 'react';

interface NewsCardProps {
    image: string;
    title: string;
    highlight: string;
  }

const NewsCard = ({ image, title, highlight }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-black mb-4">{highlight}</p>
        <a href="#" className="text-[#1A4D2E] hover:underline">Lihat Selengkapnya..</a>
      </div>
    </div>
  );
};

export default NewsCard;
