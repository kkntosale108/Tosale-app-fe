// pages/AddImage.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import axios from 'axios';
import GoogleDriveIcon from '../../../../../public/aset/GoogleDriveIcon.svg';
import DropboxIcon from '../../../../../public/aset/DropboxIcon.svg';
import { useRouter } from 'next/navigation'; // Pastikan ini dari next/navigation



const AddImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter(); // Pastikan ini digunakan di dalam komponen klien

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 200) {
        console.log('File uploaded successfully');
        router.push('/gallery');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleGoogleDriveUpload = () => {
    window.open('https://drive.google.com', '_blank');
  };

  const handleDropboxUpload = () => {
    window.open('https://www.dropbox.com', '_blank');
  };

  return (
    <div className="flex flex-col  ml-96 mt-56">
      <h1 className="text-5xl font-bold mb-4">Tambahkan Gambar</h1>
      <p className="mb-6">Admin dapat menambah, mengubah dan menghapus gambar</p>
      <div className="flex flex-col items-center space-y-4 mr-80">
        <div className="flex items-center ">
          <input
            type="file"
            id="file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="file" className="bg-[#1A4D2E] text-white py-3 px-14 rounded-xl cursor-pointer mt">
            Pilih Gambar
          </label>
          <div className="flex flex-col items-center ">
            <button onClick={handleGoogleDriveUpload} className="flex items-center justify-center p-2 rounded cursor-pointer">
              <Image src={GoogleDriveIcon} alt="Google Drive" width={30} height={30} />
            </button>
            <button onClick={handleDropboxUpload} className="flex items-center justify-center p-2 rounded cursor-pointer">
              <Image src={DropboxIcon} alt="Dropbox" width={30} height={30} />
            </button>
          </div>
        </div>
        {file && (
          <button
            onClick={handleUpload}
            className="bg-[#1A4D2E] text-white py-2 px-4 rounded cursor-pointer mt-4"
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default AddImage;