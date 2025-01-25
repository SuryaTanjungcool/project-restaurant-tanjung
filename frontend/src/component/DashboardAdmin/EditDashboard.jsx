import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditToko = ({ onEditToko, onClose }) => {
  const [toko, setToko] = useState({
    namaToko: "",
    hargaToko: "",
    fotoUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [idAdmin, setIdAdmin] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData) {
      setIdAdmin(adminData.id);
    }

    const fetchTokoDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/admin/toko/getById/${id}`
        );
        setToko({
          namaToko: response.data.namaToko,
          hargaToko: response.data.hargaToko,
          fotoUrl: response.data.fotoUrl,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Toko tidak ditemukan.",
          confirmButtonText: "OK",
        });
        navigate("/datatoko");
      }
    };

    fetchTokoDetails();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToko((prevToko) => ({
      ...prevToko,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleEditToko = async () => {
    if (!toko.namaToko || !toko.hargaToko || parseFloat(toko.hargaToko) <= 0) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap lengkapi semua kolom dengan benar!",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!idAdmin) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "ID Admin tidak ditemukan. Harap login terlebih dahulu.",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append(
      "toko",
      JSON.stringify({ namaToko: toko.namaToko, hargaToko: toko.hargaToko })
    );
    if (image) {
      formData.append("file", image);
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/admin/toko/edit/${id}/${idAdmin}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const updatedToko = response.data;

      setToko({
        namaToko: updatedToko.namaToko,
        hargaToko: updatedToko.hargaToko.toString(),
        fotoUrl: updatedToko.fotoUrl,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Toko!",
        text: "Toko berhasil diperbarui.",
        confirmButtonText: "OK",
      }).then(() => {
        onEditToko?.(updatedToko);
        onClose?.();
        navigate("/dashboard");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal Mengedit Toko!",
        text: error.response?.data?.error || "Terjadi kesalahan, coba lagi.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-8">
        <div
          className="w-full text-center py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl mb-6"
        >
          <h3 className="text-2xl font-bold">Edit Toko</h3>
        </div>
        <div className="max-h-[400px] overflow-y-auto"> {/* Tambahkan max-height dan overflow */}
          <div>
            <label htmlFor="namaToko" className="text-gray-700 font-medium">
              Nama Toko
            </label>
            <input
              type="text"
              id="namaToko"
              name="namaToko"
              className="w-full border-2 border-gray-300 p-3 rounded-lg mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={toko.namaToko}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="hargaToko" className="text-gray-700 font-medium">
              Harga Toko
            </label>
            <input
              type="number"
              id="hargaToko"
              name="hargaToko"
              className="w-full border-2 border-gray-300 p-3 rounded-lg mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={toko.hargaToko}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="foto" className="text-gray-700 font-medium">
              Foto Toko
            </label>
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              className="w-full border-2 border-gray-300 p-3 rounded-lg mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleImageChange}
            />
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview Gambar"
                  className="w-full h-auto rounded-lg border"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition"
          >
            Batal
          </button>
          <button
            onClick={handleEditToko}
            disabled={loading}
            className={`py-2 px-6 rounded-lg text-white ${
              loading ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"
            } transition`}
          >
            {loading ? "Memproses..." : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditToko;
