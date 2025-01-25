import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminNavbar from "../Navbarkhusus";
import { API_Toko } from "../../util/BaseUrl";

const AdminDashboard = () => {
  const [dessertData, setDessertData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data admin dari localStorage
  const adminData = JSON.parse(localStorage.getItem("adminData"));
  const idAdmin = adminData ? adminData.id : null;

  useEffect(() => {
    if (idAdmin) {
      axios
        .get(`${API_Toko}/getAllByAdmin/${idAdmin}`)
        .then((response) => {
          console.log("Data Kue:", response.data);
          setDessertData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching desserts:", err);
          setError("Gagal memuat data kue.");
          setLoading(false);
        });
    } else {
      setError("ID Admin tidak ditemukan.");
      setLoading(false);
    }
  }, [idAdmin]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_Toko}/delete/${id}`)
          .then(() => {
            setDessertData(dessertData.filter((item) => item.id !== id));
            Swal.fire({
              icon: "success",
              title: "Berhasil!",
              text: "Data kue berhasil dihapus.",
              confirmButtonText: "OK",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Gagal!",
              text: "Terjadi kesalahan saat menghapus data kue. Silakan coba lagi.",
              confirmButtonText: "OK",
            });
            console.error("Error saat menghapus kue:", err);
          });
      }
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">Dashboard Admin</h2>
          <p className="text-gray-400 mt-2">Kelola daftar kue Anda di sini.</p>
        </div>
        <a
          href="/AddDashboard"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-500 mb-6"
        >
          + Tambah Kue Baru
        </a>

        {loading ? (
          <div className="text-center text-xl text-gray-400">Memuat...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-500">{error}</div>
        ) : (
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md">
            <table className="min-w-full border-collapse text-gray-200">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left">No</th>
                  <th className="px-6 py-3 text-left">Foto</th>
                  <th className="px-6 py-3 text-left">Nama Kue</th>
                  <th className="px-6 py-3 text-left">Harga</th>
                  <th className="px-6 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dessertData.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-8 text-center text-gray-400"
                    >
                      <p className="text-xl">Belum ada data kue.</p>
                      <img
                        src="/images/empty-data.svg"
                        alt="No data"
                        className="mx-auto w-64 mt-4"
                      />
                    </td>
                  </tr>
                ) : (
                  dessertData.map((dessert, index) => (
                    <tr
                      key={dessert.id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                      } border-b border-gray-600 hover:bg-gray-600 transition`}
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        {dessert.fotoUrl ? (
                          <img
                            src={dessert.fotoUrl}
                            alt={dessert.namaMakanan}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <span className="text-gray-400">Tidak ada foto</span>
                        )}
                      </td>
                      <td className="px-6 py-4">{dessert.namaMakanan}</td>
                      <td className="px-6 py-4">
                        {typeof dessert.harga === "number" ? (
                          `Rp ${dessert.harga.toLocaleString()}`
                        ) : (
                          <span className="text-gray-400">
                            Harga tidak tersedia
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center space-x-4">
                        <a
                          href={`/EditDashboard/${dessert.id}`}
                          className="bg-yellow-500 text-gray-900 py-2 px-4 rounded hover:bg-yellow-600"
                        >
                          Ubah
                        </a>
                        <button
                          onClick={() => handleDelete(dessert.id)}
                          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 DessertApp. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
