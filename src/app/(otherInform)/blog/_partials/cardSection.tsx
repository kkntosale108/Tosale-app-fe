'use client'
import { useState } from "react";
import Image from "next/image";
import PaginationSection from "./paginationSection"; 

function CardSection (){
  const newsData = [
    {
      id: 1,
      title: "Judul Berita 1",
      category: "Kategori 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 2,
      title: "Judul Berita 2",
      category: "Kategori 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 3,
      title: "Judul Berita 3",
      category: "Kategori 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 4,
      title: "Judul Berita 4",
      category: "Kategori 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 5,
      title: "Judul Berita 5",
      category: "Kategori 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 6,
      title: "Judul Berita 6",
      category: "Kategori 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 7,
      title: "Judul Berita 7",
      category: "Kategori 7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 8,
      title: "Judul Berita 8",
      category: "Kategori 8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },,
    {
      id: 9,
      title: "Judul Berita 9",
      category: "Kategori 9",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 10,
      title: "Judul Berita 10",
      category: "Kategori 10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
    {
      id: 11,
      title: "Judul Berita 11",
      category: "Kategori 11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus perspiciatis repellendus dolores incidunt culpa quibusdam eos dignissimos, aut harum sunt nihil optio nisi. Quasi voluptates eaque harum error cupiditate.",
      image: "/aset/hero.png",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:px-8 md:px-6 px-4 gap-14">
        {selectedItems.map((item) => (
          item && (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="rounded-t-lg"
              width={500}
              height={300}
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h5 className="mb-2 text-xl font-bold text-[#32343A]">
                  {item.title}
                </h5>
                <p className="bg-[#1A4D2E] px-4 py-1 text-sm text-[#FEF7FF] rounded-full">
                  {item.category}
                </p>
              </div>
              <p className="mb-3 font-normal text-[#71747B] line-clamp-3">
                {item.description}
              </p>
              <h5 className="text-[#1A4D2E] text-xl">Lihat selengkapnya...</h5>
            </div>
          </div>
        )))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export {CardSection};
