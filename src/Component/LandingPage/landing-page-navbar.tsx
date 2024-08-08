"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Tambahkan import framer-motion
import { logodonggala } from "../../../public/index";

const Navbar = () => {
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleProfilDropdown = () => {
    setIsProfilOpen(!isProfilOpen);
  };

  const handleMouseLeave = () => {
    setIsProfilOpen(false); // Menyembunyikan dropdown saat mouse meninggalkan area
  };
  const handleMouseEnter = () => {
    setIsProfilOpen(true); // Menampilkan dropdown saat mouse berada di area
  };
  

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { 
        setShowNavbar(false);
      } else { // Scroll ke atas
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };



  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  

  return (
    <motion.nav 
      className="navbar fixed z-20 w-full bg-white shadow-md"
      initial={{ opacity: 0, y: -50 }} // Animasi awal
      animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -50 }} // Animasi saat muncul dan menghilang
      transition={{ duration: 0.5 }} // Durasi animasi
    >
 <div className="container mx-auto px-4 py-2 flex justify-between items-center md:px-10"> {/* Ubah padding untuk responsif */}
  <div className="flex items-center">
    <img src={logodonggala} alt="Logo Donggala" className="w-14 h-15 mr-4" />
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-[#1A4D2E]">DESA TOSALE</h1>
      <p className="text-sm font-bold text-[#1A4D2E]">Kecamatan Banawa Selatan</p>
    </div>
  </div>

  <div className="hidden md:flex items-center"> {/* Sembunyikan pada layar kecil */}
    <ul className="flex space-x-14">
      <li><a href="/" className="text-[#1A4D2E] hover:text-gray-700">Beranda</a></li>
      <li className="relative" onMouseEnter={handleMouseEnter}>
        <button onClick={toggleProfilDropdown} className="text-[#1A4D2E] hover:text-gray-700">Profil Desa</button>
        {isProfilOpen && (
          <motion.ul 
            className="absolute bg-white shadow-md mt-2 space-y-2 w-44"
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }}  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li><a href="/sejarahdesa" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Sejarah</a></li>
            <li><a href="/strukturdesa" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Struktur Desa</a></li>
            <li><a href="/visimisi" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Visi Misi</a></li>
            <li><a href="#arah-kebijakan" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Arah & Kebijakan</a></li>
          </motion.ul>
        )}
      </li>
      <li><a href="#potensi" className="text-[#1A4D2E] hover:text-gray-700">Potensi Desa</a></li>
      <li><a href="#galeri" className="text-[#1A4D2E] hover:text-gray-700">Galeri</a></li>
      <li><a href="/blog" className="text-[#1A4D2E] hover:text-gray-700">Berita</a></li>
      <li><a href="#kontak" className="text-[#1A4D2E] hover:text-gray-700">Kontak</a></li>
    </ul>
  </div>

  <div className="md:hidden flex items-center"> {/* Sembunyikan tombol login di layar kecil */}
    <button className="text-[#1A4D2E] hover:text-gray-700" onClick={toggleProfilDropdown}>
      {/* Icon hamburger */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>

  <div className="hidden md:block"> {/* Sembunyikan tombol login di layar kecil */}
    <button className="bg-[#1A4D2E] text-white px-4 py-2 rounded ml-4">Login</button>
  </div>
</div>
    </motion.nav>
  );
};

export default Navbar;