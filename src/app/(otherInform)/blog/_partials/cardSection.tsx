'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PaginationSection from "./paginationSection"; 
import newsData from "../_db/newsData";

const CardSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handleReadMore = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:px-8 md:px-6 px-4 gap-14">
        {selectedItems.map((item) => (
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
              <h5
                className="text-[#1A4D2E] text-xl cursor-pointer"
                onClick={() => handleReadMore(item.id)}
              >
                Lihat selengkapnya...
              </h5>
            </div>
          </div>
        ))}
      </div>
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export { CardSection };
