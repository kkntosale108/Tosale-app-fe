'use client'
import { useState } from "react";
import { FiPlus, FiEdit, FiX } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function TabelStruktur() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [editName, setEditName] = useState("");
  const [editPosition, setEditPosition] = useState("");
  const [editImage, setEditImage] = useState<File | null>(null);
  const [data, setData] = useState([
    { id: 1, name: "Nadya", position: "Kepala Desa", image: "https://via.placeholder.com/150" }
  ]);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [itemToEdit, setItemToEdit] = useState<number | null>(null);

  const handleDelete = () => {
    if (itemToDelete !== null) {
      setData(data.filter(item => item.id !== itemToDelete));
      setDeleteModalOpen(false);
      setItemToDelete(null); // Reset itemToDelete after deletion
    }
  };

  const handleAdd = () => {
    if (newName.trim() === "" || newPosition.trim() === "" || !newImage) {
      alert("Semua input wajib diisi!");
      return;
    }

    const imageUrl = URL.createObjectURL(newImage);
    const newData = {
      id: data.length + 1,
      name: newName,
      position: newPosition,
      image: imageUrl
    };
    setData([...data, newData]);
    setNewName("");
    setNewPosition("");
    setNewImage(null);
    setAddModalOpen(false);
  };

  const handleEdit = () => {
    if (editName.trim() === "" || editPosition.trim() === "" || !editImage) {
      alert("Semua input wajib diisi!");
      return;
    }

    if (itemToEdit !== null) {
      const updatedData = data.map(item =>
        item.id === itemToEdit
          ? { ...item, name: editName, position: editPosition, image: URL.createObjectURL(editImage) }
          : item
      );
      setData(updatedData);
      setEditName("");
      setEditPosition("");
      setEditImage(null);
      setEditModalOpen(false);
      setItemToEdit(null); // Reset itemToEdit after editing
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="pt-10">
      <div className="flex justify-end pb-6">
        <button 
          className="flex items-center gap-2 border border-gray-500 px-8 py-1 rounded-lg"
          onClick={() => setAddModalOpen(true)}
        >
          Tambah
          <FiPlus />
        </button>
      </div>
      <div className="relative overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-center text-gray-700 uppercase bg-[#F1F5F9]">
            <tr>
              <th scope="col" className="px-2 py-3 border border-gray-300">No</th>
              <th scope="col" className="px-3 py-3 border border-gray-300">Nama Lengkap</th>
              <th scope="col" className="px-3 py-3 border border-gray-300">Jabatan</th>
              <th scope="col" className="px-3 py-3 border border-gray-300">Gambar</th>
              <th scope="col" className="px-3 py-3 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="bg-white" key={item.id}>
                <td className="px-2 py-4 text-center border border-gray-300">{index + 1}</td>
                <td className="px-3 py-4 border border-gray-300">{item.name}</td>
                <td className="px-3 py-4 border border-gray-300">{item.position}</td>
                <td className="px-3 py-4 border border-gray-300">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full mx-auto" />
                </td>
                <td className="px-3 py-4 border border-gray-300">
                  <div className="flex gap-3 items-center justify-center">
                    <FiEdit
                      className="text-[#1A4D2E] text-2xl cursor-pointer"
                      onClick={() => {
                        setEditModalOpen(true);
                        setItemToEdit(item.id);
                        setEditName(item.name);
                        setEditPosition(item.position);
                        setEditImage(null);
                      }}
                    />
                    <MdDelete
                      className="text-red-500 text-3xl cursor-pointer"
                      onClick={() => {
                        setDeleteModalOpen(true);
                        setItemToDelete(item.id);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
            <p className="mb-4">Apakah Anda yakin ingin menghapus item ini?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setDeleteModalOpen(false)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleDelete}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setAddModalOpen(false)}
            >
              <FiX className="text-2xl" />
            </button>
            <h2 className="text-xl font-bold mb-4">Tambah Data</h2>
            <div className="mb-4">
              <label className="block mb-2">Nama Lengkap</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Jabatan</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Gambar</label>
              <input
                type="file"
                className="w-full px-3 py-2 border rounded"
                onChange={(e) => handleImageChange(e, setNewImage)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="w-full px-4 py-2 bg-[#1A4D2E] text-white rounded"
                onClick={handleAdd}
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setEditModalOpen(false)}
            >
              <FiX className="text-2xl" />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Data</h2>
            <div className="mb-4">
              <label className="block mb-2">Nama Lengkap</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Jabatan</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={editPosition}
                onChange={(e) => setEditPosition(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Gambar</label>
              <input
                type="file"
                className="w-full px-3 py-2 border rounded"
                onChange={(e) => handleImageChange(e, setEditImage)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="w-full px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleEdit}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { TabelStruktur };
