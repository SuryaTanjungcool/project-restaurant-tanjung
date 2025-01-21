import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_Toko } from "../../util/BaseUrl";

const AddKue = () => {
  const navigate = useNavigate();
  const [namaKue, setNamaKue] = useState('');
  const [hargaKue, setHargaKue] = useState('');
  const [foto, setFoto] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!namaKue || !hargaKue || !foto || isNaN(hargaKue) || parseFloat(hargaKue) <= 0) {
      setError('Semua kolom wajib diisi dengan benar!');
      return;
    }

    setLoading(true);
    try {
      const adminData = JSON.parse(localStorage.getItem('adminData'));
      const idAdmin = adminData ? adminData.id : null;

      if (!idAdmin) {
        setError('ID Admin tidak ditemukan. Silakan login kembali.');
        setLoading(false);
        return;
      }

      // Membuat FormData untuk mengirim data kue dan file
      const formData = new FormData();
      const kueData = JSON.stringify({
        namaKue,
        hargaKue: parseFloat(hargaKue),
      });

      formData.append('kue', kueData);
      formData.append('file', foto);

      // Kirim permintaan ke backend
      const response = await axios.post(`${API_Toko}/admin/toko/${idAdmin}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        navigate('/dashboard'); // Redirect ke halaman dashboard
      } else {
        setError('Gagal menambah kue. Silakan coba lagi.');
      }
    } catch (error) {
      setError('Terjadi kesalahan. Gagal menambah kue.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-100 text-center mb-8">Tambah Kue Baru</h1>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="namaKue"
              className="block text-lg font-semibold text-gray-100 mb-2"
            >
              Nama Kue
            </label>
            <input
              type="text"
              id="namaKue"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
              value={namaKue}
              onChange={(e) => setNamaKue(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="hargaKue"
              className="block text-lg font-semibold text-gray-100 mb-2"
            >
              Harga Kue
            </label>
            <input
              type="number"
              id="hargaKue"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
              value={hargaKue}
              onChange={(e) => setHargaKue(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="foto"
              className="block text-lg font-semibold text-gray-100 mb-2"
            >
              Foto Kue
            </label>
            <input
              type="file"
              id="foto"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
              onChange={(e) => setFoto(e.target.files[0])}
            />
          </div>

          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500"
              disabled={loading}
            >
              {loading ? 'Memuat...' : 'Tambah Kue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddKue;
