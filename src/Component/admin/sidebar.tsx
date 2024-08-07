'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoDonggala from "../../../public/aset/logoDonggala.svg";
import { BiSolidDashboard } from "react-icons/bi";
import { ImFilePicture } from "react-icons/im";
import { ImTree } from "react-icons/im";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsClipboard2Data } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-80 fixed z-30 bg-[#1A4D2E] px-4 overflow-y-auto pt-12 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-8">
          <Image src={LogoDonggala} alt="logodonggala" className="w-20 me-3" />
          <p className="pt-2 text-2xl font-semibold whitespace-nowrap text-white">
            DESA TOSALE
          </p>
          <p className="text-white">Kecamatan, Banawa Selatan</p>
        </div>
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center py-2 px-4 text-xl text-gray-900 rounded-lg group ${
                pathname === "/dashboard" ? "bg-[#4F6F528F]" : "hover:bg-[#4F6F528F]"
              }`}
            >
              <BiSolidDashboard className="text-white" />
              <p className="ms-3 text-white">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              href="/galeriadmin"
              className={`flex items-center py-2 px-4 text-xl text-gray-900 rounded-lg ${
                pathname === "/galeriadmin" ? "bg-[#4F6F528F]" : "hover:bg-[#4F6F528F]"
              }`}
            >
              <ImFilePicture className="text-white" />
              <p className="flex-1 ms-3 whitespace-nowrap text-white">Galeri</p>
            </Link>
          </li>
          <li>
            <Link
              href="/strukturdesaadmin"
              className={`flex items-center py-2 px-4 text-xl text-gray-900 rounded-lg ${
                pathname === "/strukturdesaadmin" ? "bg-[#4F6F528F]" : "hover:bg-[#4F6F528F]"
              }`}
            >
              <ImTree className="text-white" />
              <p className="flex-1 ms-3 whitespace-nowrap text-white">Struktur</p>
            </Link>
          </li>
          <li>
            <Link
              href="/blogadmin"
              className={`flex items-center py-2 px-4 text-xl text-gray-900 rounded-lg ${
                pathname === "/blogadmin" ? "bg-[#4F6F528F]" : "hover:bg-[#4F6F528F]"
              }`}
            >
              <IoNewspaperOutline className="text-white" />
              <p className="flex-1 ms-3 whitespace-nowrap text-white">Berita</p>
            </Link>
          </li>
          <li>
            <Link
              href="/dataKemiskinan"
              className={`flex items-center py-2 px-4 text-xl text-gray-900 rounded-lg ${
                pathname === "/dataKemiskinan" ? "bg-[#4F6F528F]" : "hover:bg-[#4F6F528F]"
              }`}
            >
              <BsClipboard2Data className="text-white" />
              <p className="flex-1 ms-3 whitespace-nowrap text-white">Data Kemiskinan</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="pb-5">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href=""
              className="flex items-center py-2 px-4 text-xl text-gray-900 rounded-lg hover:bg-[#4F6F528F]"
            >
              <IoLogOut className="text-white" />
              <p className="flex-1 ms-3 whitespace-nowrap text-white">Logout</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
