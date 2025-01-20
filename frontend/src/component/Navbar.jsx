import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import ikon FaBars dan FaTimes
import { useNavigate } from "react-router-dom";

// Data Links
const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Produk", link: "/banner" },
];

// Navbar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk toggle menu
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State untuk menyembunyikan navbar
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin log out?");
    if (isConfirmed) {
      navigate("/Register"); // Redirect to the login page
    }
  };

  if (!isNavbarVisible) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsNavbarVisible(true)}
          className="p-3 bg-secondary rounded-full shadow-lg hover:bg-secondary-dark text-white"
        >
          <FaBars size={24} />
        </button>
      </div>
    );
  }

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-black dark:text-white">
          <a href="/">MyWebsite</a>
        </div>

        {/* Navigation Links */}
        <ul
          className={`sm:flex items-center space-x-8 ${
            isMobileMenuOpen
              ? "block absolute bg-white dark:bg-gray-800 shadow-md top-full left-0 w-full p-4 sm:p-0 sm:relative sm:flex"
              : "hidden sm:flex"
          }`}
        >
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="text-lg font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary-light"
              >
                {name}
              </a>
            </li>
          ))}

          {/* Admin Account Button */}
          <li>
            <AccountAdminButton />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden text-2xl text-black dark:text-white"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Hide Navbar Button */}
        <button
          onClick={() => setIsNavbarVisible(false)}
          className="hidden sm:flex items-center justify-center p-2 bg-red-500 text-white rounded-full hover:bg-red-600 ml-4"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

// Account Admin Button
const AccountAdminButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AkunLogin"); // Navigate to the AdminAccount page
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-secondary text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-secondary-dark"
    >
      Login Admin
    </button>
  );
};

export default Navbar;
