import React, { useState } from 'react';
import BackgroundImage from "../../assets/png/polygonbiru.png";

import DessertOreo from "../../assets/dessertoreo.png";
import DessertBoxRedVelvet from "../../assets/png/Dessert-Box-Red-Velvet.png";
import Pudding from "../../assets/png/puddingchocolate.png";
import Coklat from "../../assets/png/Coklat.png";

const Banner = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      namaMakanan: "Dessert Oreo",
      deskripsi: "Dessert dengan Oreo dan whipped cream.",
      harga: 25000,
      image: DessertOreo,
    },
    {
      id: 2,
      namaMakanan: "Dessert-Box-Red-Velvet",
      deskripsi: "Mie ayam dengan tambahan bakso kenyal.",
      harga: 20000,
      image: DessertBoxRedVelvet,
    },
    {
      id: 3,
      namaMakanan: "Puding Coklat",
      deskripsi: "Sate ayam dengan bumbu kacang khas.",
      harga: 30000,
      image: Pudding,
    },
    {
      id: 4,
      namaMakanan: "Es Teh Manis",
      deskripsi: "Minuman segar untuk menemani makan.",
      harga: 5000,
      image: Coklat,
    },
  ];

  return (
    <div
      className="container py-14 relative"
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
        Produk Kami
      </h1>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${selectedProduct ? 'blur-sm' : ''}`}>
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow-lg bg-gray-700 text-white"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.namaMakanan}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <h3 className="text-xl font-semibold mt-4">{product.namaMakanan}</h3>
            <p className="text-sm text-gray-400 mt-2">{product.deskripsi}</p>
            <p className="text-lg font-bold mt-3">
              Rp {product.harga.toLocaleString()}
            </p>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark w-full"
              >
                Lihat Produk
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
                Beli
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3">
            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.namaMakanan}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <h2 className="text-2xl font-bold mt-4">{selectedProduct.namaMakanan}</h2>
            <p className="text-gray-500 mt-2">{selectedProduct.deskripsi}</p>
            <p className="text-lg font-bold text-primary mt-4">
              Rp {selectedProduct.harga.toLocaleString()}
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
