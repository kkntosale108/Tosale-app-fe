"use client";

import React, { useState } from "react";
import {
  statisticElement,
  computerElement,
  userElement,
  teamWorkElemen1,
  healthElement,
  teamElemen,
} from "../../../public";
import CardKebijakan from "./CardKebijakan";
import visiMisiData from "./_db/visiMisiData";

const Misi = () => {
  const [openNext, setOpenNext] = useState(0);

  const toggleOpenNext = (cardNumber: number) => {
    setOpenNext(cardNumber);
  };

  const toggleClose = () => {
    setOpenNext(0);
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[#1A4D2E] text-4xl md:text-4xl font-semibold mb-8">
          Misi
        </h1>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[1000px] h-[360px] flex flex-row justify-between items-center">
          <div className="relative w-screen h-36">
            <p className="w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal">
              Mewujudkan tata kelola pemerintahan yang mengacu pada
              prinsip-prinsip penyelenggaraan pemerintahan yang bersih dan baik{" "}
              <button
                className="italic text-blue-600"
                onClick={() => toggleOpenNext(1)}
              >
                Selengkapnya...
              </button>
            </p>
            <div
              className={openNext === 1 ? "absolute left-96 top-0" : "hidden"}
            >
              <CardKebijakan
                list1={visiMisiData.kebijakan_1.list_1}
                list2={visiMisiData.kebijakan_1.list_2}
                close={toggleClose}
              />
            </div>
          </div>
          <img width={470} src={userElement} alt="" />
        </div>
        <div className="w-[1000px] h-[360px] flex flex-row justify-between items-center">
          <img width={470} src={computerElement} alt="" />
          <div className="relative h-36">
            <p className="w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal">
              Penguatan Ekonomi Desa melalui Bumdes dan ekonomi kerakyatan
              sesuai dengan potensi sumber daya alam dan sumber daya manusia.{" "}
              <button
                className="italic text-blue-600"
                onClick={() => toggleOpenNext(2)}
              >
                Selengkapnya...
              </button>
            </p>
            <div
              className={openNext === 2 ? "absolute right-96 top-0" : "hidden"}
            >
              <CardKebijakan
                list1={visiMisiData.kebijakan_2.list_1}
                list2={visiMisiData.kebijakan_2.list_2}
                list3={visiMisiData.kebijakan_2.list_3}
                list4={visiMisiData.kebijakan_2.list_4}
                list5={visiMisiData.kebijakan_2.list_5}
                list6={visiMisiData.kebijakan_2.list_6}
                close={toggleClose}
              />
            </div>
          </div>
        </div>
        <div className="w-[1000px] h-[360px] flex flex-row justify-between items-center">
          <div className="relative h-36 w-screen">
            <p className="w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal">
              Mewujudkan pembangunan Desa yang merata, berkeadilan dan
              berkelanjutan.{" "}
              <button
                className="italic text-blue-600"
                onClick={() => toggleOpenNext(3)}
              >
                Selengkapnya...
              </button>
            </p>
            <div
              className={
                openNext === 3 ? "absolute left-52 top-0 z-50" : "hidden"
              }
            >
              <CardKebijakan
                title1={visiMisiData.kebijakan_3.title_1}
                title2={visiMisiData.kebijakan_3.title_2}
                title3={visiMisiData.kebijakan_3.title_3}
                list1={visiMisiData.kebijakan_3.list_1}
                list2={visiMisiData.kebijakan_3.list_2}
                list3={visiMisiData.kebijakan_3.list_3}
                list7={visiMisiData.kebijakan_3.list_4}
                list8={visiMisiData.kebijakan_3.list_5}
                list11={visiMisiData.kebijakan_3.list_6}
                list12={visiMisiData.kebijakan_3.list_7}
                list13={visiMisiData.kebijakan_3.list_8}
                large="true"
                close={toggleClose}
              />
            </div>
          </div>
          <img width={470} src={statisticElement} alt="" />
        </div>
        <div className="w-[1000px] h-[360px] flex flex-row justify-between items-center">
          <img width={470} src={healthElement} alt="" />
          <div className="relative h-36">
            <p className="w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal">
              Peningkatan kualitas hidup sumber daya manusia melalui pendidikan
              dan kesehatan{" "}
              <button
                className="italic text-blue-600"
                onClick={() => toggleOpenNext(4)}
              >
                Selengkapnya...
              </button>
            </p>
            <div
              className={
                openNext === 4 ? "absolute right-52 top-0 z-50" : "hidden"
              }
            >
              <CardKebijakan
                title1={visiMisiData.kebijakan_4.title_1}
                title2={visiMisiData.kebijakan_4.title_2}
                list1={visiMisiData.kebijakan_4.list_1}
                list2={visiMisiData.kebijakan_4.list_2}
                list3={visiMisiData.kebijakan_4.list_3}
                list4={visiMisiData.kebijakan_4.list_4}
                list11={visiMisiData.kebijakan_4.list_5}
                list12={visiMisiData.kebijakan_4.list_6}
                list13={visiMisiData.kebijakan_4.list_7}
                list14={visiMisiData.kebijakan_4.list_8}
                list15={visiMisiData.kebijakan_4.list_9}
                large="true"
                close={toggleClose}
              />
            </div>
          </div>
        </div>
        <div className="w-[1000px] h-[360px] flex flex-row justify-between items-center">
          <div className="relative h-36">
            <p className="w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal">
              Mewujudkan dan Mengembangkan ruang kreativitas masyarakat melalui
              kepemimpinan yang melibatkan dan menggerakan{" "}
              <button
                className="italic text-blue-600"
                onClick={() => toggleOpenNext(5)}
              >
                selengkapnya...
              </button>
            </p>
            <div
              className={
                openNext === 5 ? "absolute left-52 top-0 z-50" : "hidden"
              }
            >
              <CardKebijakan
                title1={visiMisiData.kebijakan_5.title_1}
                title2={visiMisiData.kebijakan_5.title_2}
                list1={visiMisiData.kebijakan_5.list_1}
                list2={visiMisiData.kebijakan_5.list_2}
                list3={visiMisiData.kebijakan_5.list_3}
                list4={visiMisiData.kebijakan_5.list_4}
                list7={visiMisiData.kebijakan_5.list_5}
                list8={visiMisiData.kebijakan_5.list_6}
                list9={visiMisiData.kebijakan_5.list_7}
                large="true"
                close={toggleClose}
              />
            </div>
          </div>
          <img width={470} src={teamWorkElemen1} alt="" />
        </div>
        <div className="w-[1000px] h-[360px] flex flex-row justify-between items-center mb-20">
          <img width={470} src={teamElemen} alt="" />
          <div className="relative h-36">
            <p className="w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal">
              Meningkatkan kesiapsiagaan dan ketangguhan masyarakat terhadap
              bencana Desa{" "}
              <button
                className="italic text-blue-600"
                onClick={() => toggleOpenNext(6)}
              >
                Selengkapnya...
              </button>
            </p>
            <div
              className={
                openNext === 6 ? "absolute right-52 top-0 z-50" : "hidden"
              }
            >
              <CardKebijakan
                list1={visiMisiData.kebijakan_6.list_1}
                list2={visiMisiData.kebijakan_6.list_2}
                list3={visiMisiData.kebijakan_6.list_3}
                close={toggleClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misi;
