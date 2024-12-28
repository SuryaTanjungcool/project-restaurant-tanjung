import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk toggle mobile menu
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    localStorage.removeItem('adminData'); // Clear admin data from localStorage
    navigate('/register'); // Redirect to register page using navigate
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
  };

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/register" className="text-2xl font-extrabold tracking-wide hover:text-gray-200 transition duration-300">
          Admin Toko Kue
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            className="bg-teal-700 px-5 py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center gap-2"
            title="Akun Admin"
          >
            <i className="fas fa-user-circle text-xl"></i> <span className="hidden md:block">Akun Admin</span>
          </button>
          <button
            onClick={handleLogout} // Handle logout with navigate
            className="bg-red-600 px-5 py-2 rounded-md hover:bg-red-500 transition duration-300"
          >
            Logout
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i> {/* Change icon based on menu state */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-teal-500 p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-start gap-4">
          <Link
            to="/register"
            className="text-white text-xl font-medium hover:text-gray-200 transition duration-300"
          >
            Admin Toko Kue
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-5 py-2 rounded-md hover:bg-red-500 transition duration-300 w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
