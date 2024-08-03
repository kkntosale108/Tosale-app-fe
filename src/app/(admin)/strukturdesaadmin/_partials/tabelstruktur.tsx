import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function TabelStruktur() {
  return (
    <div className="pt-10">
      <div className="flex justify-end pb-6">
        <button className="flex items-center gap-2 border border-gray-500 px-8 py-1 rounded-lg">Tambah
        <FiPlus />
        </button>
        
      </div>
      <div className="relative overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-xs text-center text-gray-700 uppercase bg-[#F1F5F9]">
            <tr>
              <th scope="col" className="px-2 py-3 border border-gray-300">
                No
              </th>
              <th scope="col" className="px-3 py-3 border border-gray-300">
                Nama Lengkap
              </th>
              <th scope="col" className="px-3 py-3 border border-gray-300">
                Jabatan
              </th>
              <th scope="col" className="px-3 py-3 border border-gray-300">
                Gambar
              </th>
              <th scope="col" className="px-3 py-3 border border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-2 py-4 text-center border border-gray-300">
                1
              </td>
              <td className="px-3 py-4 border border-gray-300">Nadya</td>
              <td className="px-3 py-4 border border-gray-300">Kepala Desa</td>
              <td className="px-3 py-4 border border-gray-300">Gambar</td>
              <td className="flex px-3 py-4 gap-3 item-center justify-center border border-gray-300">
              <FiEdit className="text-[#1A4D2E] text-2xl"/>
              <MdDelete className="text-red-500 text-3xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { TabelStruktur };
