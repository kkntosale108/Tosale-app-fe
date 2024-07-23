"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isProfilOpen, setIsProfilOpen] = useState(false);

  const toggleProfilDropdown = () => {
    setIsProfilOpen(!isProfilOpen);
  };

  return (
    <nav className="fixed z-20 w-full bg-white shadow-md">
      <div className="container mx-auto px-10 py-2 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-[#1A4D2E]">DESA TOSALE</h1>
          <p className="text-sm font-bold text-[#1A4D2E]">Kecamatan Banawa Selatan</p>
        </div>
        <ul className="flex space-x-14">
          <li><a href="/" className="text-[#1A4D2E] hover:text-gray-700">Beranda</a></li>
          <li className="relative">
            <button onClick={toggleProfilDropdown} className="text-[#1A4D2E] hover:text-gray-700">Profil Desa</button>
            {isProfilOpen && (
              <ul className="absolute bg-white shadow-md mt-2 space-y-2">
                <li><a href="#sejarah" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Sejarah</a></li>
                <li><a href="#struktur" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Struktur Desa</a></li>
                <li><a href="/visimisi" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Visi Misi</a></li>
                <li><a href="#arah-kebijakan" className="block px-4 py-2 text-[#1A4D2E] hover:text-gray-700">Arah & Kebijakan</a></li>
              </ul>
            )}
          </li>
          <li><a href="#potensi" className="text-[#1A4D2E] hover:text-gray-700">Potensi Desa</a></li>
          <li><a href="#galeri" className="text-[#1A4D2E] hover:text-gray-700">Galeri</a></li>
          <li><a href="/blog" className="text-[#1A4D2E] hover:text-gray-700">Berita</a></li>
          <li><a href="#kontak" className="text-[#1A4D2E] hover:text-gray-700">Kontak</a></li>
        </ul>
        <button className="bg-[#1A4D2E] text-white px-4 py-2 rounded ml-4">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;