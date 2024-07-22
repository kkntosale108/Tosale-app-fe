import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#1A4D2E]">DESA TOSALE</h1>
          <p className="text-sm text-[#1A4D2E]">Kecamatan Banawa Selatan</p>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#beranda" className="text-[#1A4D2E] hover:text-gray-700">Beranda</a></li>
          <li><a href="#profil" className="text-[#1A4D2E] hover:text-gray-700">Profil Desa</a></li>
          <li><a href="#potensi" className="text-[#1A4D2E] hover:text-gray-700">Potensi Desa</a></li>
          <li><a href="#galeri" className="text-[#1A4D2E] hover:text-gray-700">Galeri</a></li>
          <li><a href="#berita" className="text-[#1A4D2E] hover:text-gray-700">Berita</a></li>
          <li><a href="#kontak" className="text-[#1A4D2E] hover:text-gray-700">Kontak</a></li>
        </ul>
        <button className="bg-[#1A4D2E] text-white px-4 py-2 rounded">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;