import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditDessert = () => {
  const { id } = useParams();  // Accessing the ID from the URL params
  const navigate = useNavigate();

  // Predefined dessert data (mock data or fetched data)
  const [dessertData, setDessertData] = useState([
    {
      id: 1,
      name: 'Kue Pernikahan',
      price: 250000,
      sold: 150,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Kue Ulang Tahun',
      price: 150000,
      sold: 200,
      rating: 4.0,
    },
    {
      id: 3,
      name: 'Kue Kasih Sayang',
      price: 180000,
      sold: 120,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Kue Romantis',
      price: 220000,
      sold: 180,
      rating: 4.3,
    },
  ]);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    sold: '',
    rating: '',
  });

  // Find the dessert by ID
  useEffect(() => {
    const dessert = dessertData.find(d => d.id === parseInt(id));
    if (dessert) {
      setFormData({
        id: dessert.id,
        name: dessert.name,
        price: dessert.price,
        sold: dessert.sold,
        rating: dessert.rating,
      });
    } else {
      // Handle case where dessert isn't found
      navigate('/');
    }
  }, [id, dessertData, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Simulate save (could be an API call)
    console.log('Updated Dessert Data:', formData);
    navigate('/');  // Redirect back to the dashboard
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-12 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 dark:text-white p-8 rounded-lg shadow-lg w-96">
        <h3 className="text-2xl font-semibold text-center mb-6">Edit Dessert</h3>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nama Kue"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Harga"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="sold"
          value={formData.sold}
          onChange={handleInputChange}
          placeholder="Terjual"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          placeholder="Rating"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />

        <div className="flex justify-center">
          <button
            onClick={handleSave}
            className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark"
          >
            Save
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-400 ml-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDessert;
