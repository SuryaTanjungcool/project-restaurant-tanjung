import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditDashboard = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  const [namaMakanan, setNamaMakanan] = useState('');
  const [harga, setHarga] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDessertData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/admin/toko/getById/${id}`);
        setNamaMakanan(response.data.namaMakanan);
        setHarga(response.data.harga);
      } catch (err) {
        setError('Gagal memuat data. Silakan coba lagi.');
      }
    };

    fetchDessertData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!namaMakanan || !harga) {
      setError('Semua field harus diisi!');
      return;
    }

    setLoading(true);
    try {
      const adminData = JSON.parse(localStorage.getItem('adminData'));
      const idAdmin = adminData ? adminData.id : null;

      const updatedDessert = {
        namaMakanan,
        harga: parseFloat(harga),
      };

      await axios.put(`http://localhost:8080/api/admin/toko/editById/${id}?idAdmin=${idAdmin}`, updatedDessert);

      navigate('/dashboard'); // Redirect ke dashboard setelah edit berhasil
    } catch (err) {
      setError('Gagal mengupdate data. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Edit Data Kue</h1>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="namaMakanan" className="block text-lg font-semibold mb-2">
              Nama Kue
            </label>
            <input
              type="text"
              id="namaMakanan"
              className="w-full p-3 border border-gray-700 bg-gray-700 rounded-md text-white"
              value={namaMakanan}
              onChange={(e) => setNamaMakanan(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="harga" className="block text-lg font-semibold mb-2">
              Harga
            </label>
            <input
              type="number"
              id="harga"
              className="w-full p-3 border border-gray-700 bg-gray-700 rounded-md text-white"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>

          <div className="mb-4 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500"
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Simpan Perubahan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDashboard;
