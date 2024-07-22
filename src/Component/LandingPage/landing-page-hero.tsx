import React from 'react';
import { hero } from "../../../public/index"; 


const LandingPageHero = () => {
  return (
    <div className="relative z-10 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">SELAMAT DATANG</h1>
        <h1 className="text-4xl md:text-4xl font-bold">DI SISTEM INFORMASI DESA TOSALE</h1>
      </div>
    </div>
  );
};



export default LandingPageHero;