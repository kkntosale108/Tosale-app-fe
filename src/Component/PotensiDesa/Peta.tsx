"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const Peta = () => {
  return (
    <div className="w-full h-full container mx-auto">
      <div className="mt-24 px-10 w-full h-full flex flex-col justify-start items-start">
        <h1 className="text-[#1A4D2E] text-[40px] font-bold">Peta Desa</h1>
        <p className="text-[20px]">
          Menampilkan titik lokasi wisata yang ada di Desa Tosale
        </p>
        {/* <div className="w-full h-96 bg-blue-400 my-2 rounded-xl"></div> */}
        <Map />
      </div>
    </div>
  );
};

export default Peta;
