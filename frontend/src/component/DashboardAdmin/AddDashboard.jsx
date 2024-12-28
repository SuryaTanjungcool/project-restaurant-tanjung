import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      setError('Nama dan harga kue harus diisi!');
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

      // Payload yang dikirim ke Backend
      const newDessert = {
        namaMakanan: name,
        harga: parseFloat(price),
      };

      const response = await axios.post(
        `http://localhost:8080/api/admin/toko/tambah/${idAdmin}`,
        newDessert
      );

      if (response.status === 200) {
        navigate('/dashboard'); // Redirect ke halaman dashboard
      }
    } catch (error) {
      setError('Gagal menambah kue. Silakan coba lagi.');
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
              htmlFor="name"
              className="block text-lg font-semibold text-gray-100 mb-2"
            >
              Nama Kue
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-lg font-semibold text-gray-100 mb-2"
            >
              Harga
            </label>
            <input
              type="number"
              id="price"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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

export default AddDashboard;
