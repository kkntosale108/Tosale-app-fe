"use client";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";

function SearchSections() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end gap-4 pr-8 pb-5">
      <div className="relative inline-block bg-[#F5F5F5] rounded-md text-left">
        <button
          type="button"
          className="inline-flex justify-center items-center gap-2 w-full rounded-md px-4 py-2 bg-[#F5F5F5] text-sm font-medium text-gray-700"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <CiFilter className="text-xl" />
          Filter Kategori
        </button>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="p-1" role="none">
              <p
                className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-[#F3F3F3]"
                role="menuitem"
              >
                Wisata
              </p>
              <p
                className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-[#F3F3F3]"
                role="menuitem"
              >
                Bola
              </p>
              <p
                className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-[#F3F3F3]"
                role="menuitem"
              >
                Pendidikan
              </p>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="block w-full text-left px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-[#F3F3F3]"
                  role="menuitem"
                >
                  Pemerintah
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center p-2 bg-[#F5F5F5ED] rounded-md">
        <BsSearch className="text-gray-500 text-xl" />
        <input
          className="outline-none bg-[#F5F5F5ED]"
          type="text"
          name=""
          id=""
          placeholder="search"
        />
      </div>
    </div>
  );
}

export { SearchSections };
