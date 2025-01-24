import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const uploadImageToS3 = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://s3.lynk2.co/api/s3/test",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    const fotoUrl = response.data?.data?.url_file;
    if (fotoUrl) {
      console.log("Respons S3:", response.data);
      return fotoUrl;
    } else {
      console.error("Respons tidak valid:", response);
      return null;
    }
  } catch (error) {
    console.error("Upload ke S3 gagal:", error);
    return null;
  }
};

const AddKue = () => {
  const navigate = useNavigate();
  const [kueData, setKueData] = useState({ namaKue: "", hargaKue: "" });
  const [foto, setFoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idAdmin, setIdAdmin] = useState("");

  useEffect(() => {
    const adminData = localStorage.getItem("adminData");
    if (adminData) {
      const parsedAdminData = JSON.parse(adminData);
      setIdAdmin(parsedAdminData?.id || "");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKueData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kueData.namaKue || !kueData.hargaKue || !foto) {
      Swal.fire({
        icon: "error",
        title: "Form tidak lengkap",
        text: "Harap lengkapi semua kolom dan unggah foto!",
      });
      return;
    }

    setLoading(true);

    try {
      const fotoUrl = await uploadImageToS3(foto);
      if (!fotoUrl) {
        Swal.fire({
          icon: "error",
          title: "Upload Gagal",
          text: "Tidak dapat mengunggah foto ke S3.",
        });
        setLoading(false);
        return;
      }

      const kueWithFoto = { ...kueData, fotoUrl };

      const response = await axios.post(
        `http://localhost:8080/api/admin/toko/tambah/${idAdmin}`,
        kueWithFoto
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Kue berhasil ditambahkan.",
      }).then(() => navigate("/dashboard"));

      setKueData({ namaKue: "", hargaKue: "" });
      setFoto(null);
    } catch (error) {
      console.error("Error dari server:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Menambahkan Kue",
        text: error.response?.data?.error || "Terjadi kesalahan.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-100 text-center mb-8">Tambah Kue Baru</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="namaKue" className="block text-lg font-semibold text-gray-100 mb-2">
              Nama Kue
            </label>
            <input
              type="text"
              id="namaKue"
              name="namaKue"
              value={kueData.namaKue}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="hargaKue" className="block text-lg font-semibold text-gray-100 mb-2">
              Harga Kue
            </label>
            <input
              type="number"
              id="hargaKue"
              name="hargaKue"
              value={kueData.hargaKue}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="foto" className="block text-lg font-semibold text-gray-100 mb-2">
              Foto Kue
            </label>
            {foto && (
              <img
                src={URL.createObjectURL(foto)}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
            )}
            <input
              type="file"
              id="foto"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500"
            >
              {loading ? "Memuat..." : "Tambah Kue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddKue;
